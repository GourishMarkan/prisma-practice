import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string,
  done: boolean
) {
  const res = await prisma.todo.create({
    data: {
      userId,
      title,
      description,
      done,
    },
    select: {
      title:true,
      userId:true,
      description:true,
      id:true
    },
  });
  console.log(res);
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
interface UpdateParams{
  done:boolean
}
export async function updateTodo(userId: number,{done}:UpdateParams) {
  const res= await prisma.todo.update({
    where:{  id:userId },
    data:{done
    }
    select:{
          title:true
    }

  });
  console.log(res);
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {

}
