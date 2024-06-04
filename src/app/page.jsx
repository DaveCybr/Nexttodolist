import TodoList from "@/components/TodoList";
import Header from "@/components/TodoList/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import UserNotLogged from "@/components/UserNotLogged";

const Page = async () => {
 
  const user = await authUserSession();

  const todo = await prisma.todo.findMany({
    where: { user_email: user?.email },
  });

  return (
    <>
      {user ? (
        <section>
          <Header title="All Task" user={user} />
          <TodoList api={todo} />
        </section>
      ) : (
        <section>
          <UserNotLogged />
        </section>
      )}
    </>
  );
};

export default Page;
