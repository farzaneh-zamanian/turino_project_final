import Link from 'next/link';
import Figure from '../atoms/Figure';

const LinkItem = ({ href, figure, className, onClick }) => {
  return (
    <Link href={href} className={className} onClick={onClick}
    >
      <Figure
        icon={figure.icon}
        caption={figure.caption}
        className={figure.className}
      />
    </Link>


  );
};

export default LinkItem;