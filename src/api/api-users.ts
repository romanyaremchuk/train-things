export interface Users {
  users: User[];
}

export interface Hair {
  color: string;
  type: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  birthDate: Date;
  email: string;
  hair?: Hair;
}

export async function getAllUsers(): Promise<User[]> {
  const url = "https://dummyjson.com/users";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Response status: " + response.status);
    }

    const json: Users = await response.json();
    return json.users;
  } catch (error) {
    console.error(error);
  }

  return [];
}
