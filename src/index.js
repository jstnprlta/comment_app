import React from "react";
import ReactDom from "react-dom";
import { faker } from "@faker-js/faker";
// import { faker } from '@faker-js/faker/locale/de';
import CommentDetail from "./CommentDetail";

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
      <CommentDetail author="Luis"/>
      <CommentDetail author="Bibi"/>
      <CommentDetail author="Jose"/>
      <CommentDetail author="Erika"/>
      <CommentDetail author="Justin"/>
      <CommentDetail author="May"/>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
