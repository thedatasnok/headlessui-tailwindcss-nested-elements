import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Switch from './Switch';
import RegularSwitch from './RegularSwtich';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className='fixed inset-0 flex flex-col items-center justify-center gap-2'>
        <div className='-mt-64 mb-4 grid grid-cols-2 place-items-center gap-2'>
          <h1 className='text-lg font-semibold text-zinc-100'>
            Tailwind plugin
          </h1>
          <h1 className='text-lg font-semibold text-zinc-100'>Regular</h1>
          <Switch checked={enabled} onChange={setEnabled} />
          <RegularSwitch checked={enabled} onChange={setEnabled} />
        </div>

        <button
          type='button'
          onClick={openModal}
          className='rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-800 p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='grid grid-cols-2 place-items-center gap-2'>
                    <h1 className='text-lg font-semibold text-zinc-100'>
                      Tailwind plugin
                    </h1>
                    <h1 className='text-lg font-semibold text-zinc-100'>
                      Regular
                    </h1>
                    <Switch checked={enabled} onChange={setEnabled} />
                    <RegularSwitch checked={enabled} onChange={setEnabled} />

                    <button
                      type='button'
                      className='col-span-2 mt-4 w-full justify-center rounded-md border border-transparent bg-blue-800 px-4 py-2 text-sm font-medium text-blue-200 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Ok
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default App;
