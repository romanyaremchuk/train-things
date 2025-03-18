import React from "react";
import { User } from "../api/api-users";

interface Props {
  users: User[];
}
type AgeGroup = {
  min: number;
  max: number;
  label: string;
};

const Statistics = ({ users }: Props) => {
  // age
  const minAge = Math.min(...users.map((u) => u.age));
  const maxAge = Math.max(...users.map((u) => u.age));
  const ageSum = users.reduce((total, current) => {
    return total + current.age;
  }, 0);
  const averageAge = Number((ageSum / users.length).toFixed(2));

  const groupedAge: AgeGroup[] = [
    {
      min: 0,
      max: 18,
      label: "less 18",
    },
    {
      min: 18,
      max: 30,
      label: "18 - 30",
    },
    {
      min: 30,
      max: Number.MAX_VALUE,
      label: "30+",
    },
  ];

  const groupedByAge: Record<string, User[]> = users.reduce(
    (total, currentUser) => {
      const group = groupedAge.find(
        (g) => g.min <= currentUser.age && currentUser.age <= g.max
        //g.min > currentUser.age && g.max <= currentUser.age
      );

      if (group != null) {
        if (total[group.label] == null) {
          total[group.label] = [];
        }

        total[group.label].push(currentUser);
      }
      return total;
    },
    {} as Record<string, User[]>
  );

  return (
    <div>
      <h3> Min age: {minAge}</h3> <br />
      <h3> Max age: {maxAge}</h3> <br />
      <h3> Age sum: {ageSum}</h3> <br />
      <h3> Average age: {averageAge}</h3> <br />
      <h2> Age groups</h2>
      {groupedByAge["less 18"] === undefined ||
        (groupedByAge["less 18"].length > 0 && <h3>Less 18</h3>)}{" "}
      <br />
      {groupedByAge["less 18"]?.map((item) => {
        return <p>{item.firstName}</p>;
      })}
      <h3>18 - 30</h3> <br />
      {groupedByAge["18 - 30"]?.map((item) => {
        return <p>{item.firstName}</p>;
      })}
      <h3>30+</h3> <br />
      {groupedByAge["30+"]?.map((item) => {
        return <p>{item.firstName}</p>;
      })}
    </div>
  );
};

export default Statistics;
