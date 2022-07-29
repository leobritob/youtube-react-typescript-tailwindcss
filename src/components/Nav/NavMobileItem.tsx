import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import { useNavMobileContext } from 'contexts';

type Props = {
  to: string;
  variant?: 'default' | 'primary';
  children: React.ReactNode;
};

export function NavMobileItem({ to, variant = 'default', children }: Props) {
  const navigate = useNavigate();
  const { setIsVisible } = useNavMobileContext();

  let bgColor =
    'bg-white hover:bg-gray-100 active:bg-gray-200 transition-all text-black';
  if (variant === 'primary') {
    bgColor =
      'bg-primary hover:bg-primaryLight active:bg-primaryDark transition-all text-white';
  }

  function handleButtonClick() {
    setIsVisible(false);
    navigate(to);
  }

  return (
    <button
      onClick={handleButtonClick}
      className={classNames('w-full p-4 border-b border-gray-100 flex items-start', bgColor)}
    >
      {children}
    </button>
  );
}
