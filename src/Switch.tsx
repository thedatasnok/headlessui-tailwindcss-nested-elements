import { Switch as HeadlessSwitch, SwitchProps } from '@headlessui/react';

const Switch: React.FC<SwitchProps<'div'>> = ({ checked, onChange }) => {
  return (
    <HeadlessSwitch
      checked={checked}
      onChange={onChange}
      className='relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75  ui-checked:bg-teal-900 ui-not-checked:bg-teal-700'
    >
      <span className='sr-only'>Use setting</span>
      <span
        aria-hidden='true'
        className='pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ui-open:bg-purple-500 ui-checked:translate-x-9 ui-not-checked:translate-x-0'
      />
    </HeadlessSwitch>
  );
};

export default Switch;
