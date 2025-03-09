export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  //TODO add adress and mb inner prop or obj?
}

export async function getAllUsers(): Promise<User[]> {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Response status: " + response.status);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }

  return [];
}

// getAllUsers()
//   .then((users) => users.map((user) => console.log(user.name)))
//   .catch((error) => console.error(error));

//export default getAllUsers;
