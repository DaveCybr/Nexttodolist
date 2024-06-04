import prisma from "@/libs/prisma";

export async function POST(request) {
  const { title, description, user_email, status } = await request.json();
  const data = { title, description, user_email, status };

  const createTodo = await prisma.todo.create({ data });

  if (!createTodo) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}

export async function DELETE(request) {
  const { id } = await request.json();
  const deleteTodo = await prisma.todo.delete({ where: { id: Number(id) } });

  if (!deleteTodo) return Response.json({ status: 500, isDeleted: false });
  else return Response.json({ status: 200, isDeleted: true });
}

export async function PUT(request) {
  const { id } = await request.json();
  const updateTodo = await prisma.todo.update({
    where: { id: Number(id) },
    data: { status: "complete" },
  });

  if (!updateTodo) return Response.json({ status: 500, isUpdated: false });
  else return Response.json({ status: 200, isUpdated: true });
}
