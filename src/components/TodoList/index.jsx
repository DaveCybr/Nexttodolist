"use client";
import { useRouter } from "next/navigation";
import { FileSearch } from "@phosphor-icons/react";

const AnimeList = ({ api }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/v1/todo`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`/api/v1/todo`, {
        method: "PUT",
        body: JSON.stringify({ id }),
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {api.length === 0 && (
        <div className="min-h-[60vh] max-w-xl mx-auto flex justify-center items-center">
          <div className="flex justify-center items-center gap-4 flex-col">
            <FileSearch size={80} className="text-neutral-content" />
            <label className="text-neutral-content text-4xl font-bold">
              NOT DATA FOUND
            </label>
          </div>
        </div>
      )}
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4 px-4">
        {api.map((data, index) => {
          const badge =
            data?.status == "uncomplete"
              ? "badge-warning"
              : "badge-success text-color-primary";
          return (
            <div
              key={index}
              className=" w-auto border-neutral-100 border rounded-lg  shadow p-4 flex flex-col justify-between"
            >
              <div className="card-">
                <div className="flex items-center justify-between w-full">
                  <h2 className="card- font-bold text-color-dark">
                    {data?.title}
                  </h2>
                  <div className={`badge badge-sm ${badge}`}>
                    {data?.status}
                  </div>
                </div>
                <p className="text-color-">{data?.description}</p>
              </div>
              <div className="card-actions flex justify-start mt-4">
                <button
                  onClick={() => handleDelete(data?.id)}
                  type="button"
                  className="btn btn-sm btn-outline btn-error text-neutral-50"
                >
                  Delete
                </button>
                {data?.status === "uncomplete" && (
                  <button
                    onClick={() => handleUpdate(data?.id)}
                    type="button"
                    className="btn btn-sm btn-outline btn-success text-neutral-50"
                  >
                    Complete
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnimeList;
