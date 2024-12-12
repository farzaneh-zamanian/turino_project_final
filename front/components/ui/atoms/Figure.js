import Icon from "./Icon";
import IconDescription from "./IconDescription";


const Figure = ({ icon, caption, className }) => {
  return (
    <figure className={className}>
      <Icon src={icon.src} width={icon.width} height={icon.height} />
      <figcaption>
        <IconDescription className={caption.className}>{caption.children}</IconDescription>
      </figcaption>
    </figure>
  );
};

export default Figure;