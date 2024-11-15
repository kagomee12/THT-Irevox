type AddTodoProps = {
  action: () => void;
  textButton: string;
  children: React.ReactNode;
};

export const AddTodo: React.FC<AddTodoProps> = ({
  action,
  textButton,
  children,
}) => {
  return (
    <div className="w-[100%]">
      <form
        className="flex gap-2 justify-between"
        onSubmit={action}
      >
        {children}
        <button className="bg-secondary">{textButton}</button>
      </form>
    </div>
  );
};
