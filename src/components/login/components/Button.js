const Button = ({ type = "button", children, ...props }) => {
  return (
    <>
      <button
        type={type}
        {...props}
        className="p-4 px-2.5 h-[30px] bg-brand w-full flex items-center justify-center gap-x-2 rounded font-medium text-white text-sm disabled:opacity-50"
      >
        {children}
      </button>
    </>
  );
};
export default Button;
