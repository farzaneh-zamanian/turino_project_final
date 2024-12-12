import Image from 'next/image';

const Icon = ({ src, width, height }) => {
  return (
    <Image src={src} width={width} height={height} />
  );
};

export default Icon;