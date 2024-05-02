function Button({ name, bg }) {
  return (
    <button className={`x-4 py-2 rounded-md text-white border-none ${bg}`}>
      {name}
    </button>
  );
}

export default Button;
