"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const TodoInput = ({ user }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "uncomplete",
    user_email: user?.email,
  });
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({ ...formData, [name]: value });
  };

  const handlePost = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/v1/todo", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const postTodo = await response.json();
      if (postTodo.isCreated) {
        setIsCreated(true);
        setFormData({
          title: "",
          description: "",
          status: "uncomplete",
          user_email: user?.email,
        });
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    }
    return;
  };
  return (
    <>
      <label htmlFor="my_modal_6" className="btn">
        Add Task
      </label>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <form action="">
            <div className="mb-3">
              <label className="font-bold text-md mb-1">Title</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-full"
                name="title"
                value={formData?.title}
                onChange={(event) => handleInput(event)}
              />
            </div>
            <div className="mb-3 flex-col flex">
              <label className="font-bold text-md mb-1">Description</label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Description here"
                onChange={(event) => handleInput(event)}
                name="description"
                value={formData?.description}
              ></textarea>
            </div>
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn">
                Close!
              </label>
              <label onClick={handlePost} className="btn">
                Enter
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoInput;
