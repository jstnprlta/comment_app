import React from "react";
import ReactDom from "react-dom";
import { faker } from "@faker-js/faker";
// import { faker } from '@faker-js/faker/locale/de';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

export const USERS: User[] = [];

export function createRandomUser(): User {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail
        author="Luis"
        timeAgo="Today at 1pm"
        comment="is everyone going to Texas De Brazil?"
        avatar={faker.image.avatar()}
      />
      <ApprovalCard/>
      <CommentDetail
        author="Bibi"
        timeAgo="Today at 1:25pm"
        comment="I am for sure!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jose"
        timeAgo="Today at 1:27pm"
        comment="Not going to miss out on that good Food Homie!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Erika"
        timeAgo="Today at 1:40pm"
        comment="can't wait!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Justin"
        timeAgo="Today at 1:42pm"
        comment=" Its going to be Fire!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="May"
        timeAgo="Today at 1:50pm"
        comment="Excited to go Friends!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
