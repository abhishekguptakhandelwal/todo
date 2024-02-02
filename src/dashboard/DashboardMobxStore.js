import TodoObj from "../store";

export const userCreate = (formValue, setDataSource, setIsModalOpen) => {
  TodoObj.createTodo(formValue);
  setDataSource([...TodoObj.todos]);
  setIsModalOpen(false);
};

export const handleCancel = (setIsModalOpen, setIsEdit) => {
  setIsModalOpen(false);
  setIsEdit(false);
};
