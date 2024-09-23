export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
//* onClick is default atribute, onSelect is our custom prop that is
//? () => handleSelect("jsx")
//* in the end. 
