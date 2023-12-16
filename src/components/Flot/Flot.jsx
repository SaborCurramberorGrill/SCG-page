export function Flot({ src, href }) {
  return (
    <div className="flot">
      <a href={href}>
        <img
          src={src}
          alt="w"
        />
      </a>
    </div>
  );
}
