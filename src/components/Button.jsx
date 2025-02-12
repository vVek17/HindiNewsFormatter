function Button({ children, ...rest }) {
  return (
    <button
      className="bg-green-600 text-white text-xl px-4 py-2 rounded-xl 
      shadow-md  hover:bg-green-700
      transition transform active:scale-90"
      {...rest}
    >
      {children}
    </button>
  );
}
export default Button;
