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

const AgeStatistics = ({ users }: Props) => {
  const ageStatistics = {
    minAge: Math.min(...users.map((u) => u.age)),
    maxAge: Math.max(...users.map((u) => u.age)),
    ageSum: users.reduce((total, current) => {
      return total + current.age;
    }, 0),
  };
  const averageAge = Number((ageStatistics.ageSum / users.length).toFixed(2));
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
      <h2>Statistics:</h2>
      <h3> Min age: {ageStatistics.minAge}</h3> <br />
      <h3> Max age: {ageStatistics.maxAge}</h3> <br />
      <h3> Age sum: {ageStatistics.ageSum}</h3> <br />
      <h3> Average age: {averageAge}</h3> <br />
      <h2> Age groups</h2>
      {groupedByAge["less 18"] !== undefined &&
        groupedByAge["less 18"].length > 0 && <h3>Less 18: </h3>}
      {groupedByAge["less 18"] !== undefined &&
        groupedByAge["less 18"]?.length + " People"}
      <h3>18 - 30</h3>
      {groupedByAge["18 - 30"]?.length + " People"}
      <h3>30+</h3>{" "}
      {groupedByAge["30+"] !== undefined &&
        groupedByAge["30+"].length + " People"}
    </div>
  );
  // printing out the users
  //   {groupedByAge["less 18"] === undefined ||
  //     (groupedByAge["less 18"].length > 0 && <h3>Less 18</h3>)}{" "}
  //   <br />
  //   {groupedByAge["less 18"]?.map((item) => {
  //     return <p>{item.firstName}</p>;
  //   })}
  //   <h3>18 - 30</h3> <br />
  //   {groupedByAge["18 - 30"]?.map((item) => {
  //     return <p>{item.firstName}</p>;
  //   })}
  //   <h3>30+</h3> <br />
  //   {groupedByAge["30+"]?.map((item) => {
  //     return <p>{item.firstName}</p>;
  //   })}
};

export default AgeStatistics;
