
const Separator = ({label = 'OR', ...props}) => {
  return (
    <div className="flex items-center mt-[10px] mb-[18px]" {...props}>
      <div className="h-px bg-gray-200 flex-1" />
      <span className="px-4 text-[13px] font-medium text-gray-500">{label}</span>
      <div className="h-px bg-gray-200 flex-1" />
    </div>
  );
};
export default Separator;
