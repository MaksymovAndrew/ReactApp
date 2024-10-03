export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
//* onClick is default atribute, onSelect is our custom prop that is
//? () => handleSelect("jsx")
//* in the end.
