import TodoInput from "./TodoInput";

const Header = ({ title, user }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-color-dark">{title}</h1>
      <TodoInput user={user} />
    </div>
  );
};
export default Header;
