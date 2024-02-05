import { css } from "../../styled-system/css";
import { center } from "../../styled-system/patterns";

import { FetchAllTodosDocument } from "../gql/graphql";
import { getClient } from "./layout";

export default function Home() {
  return (
    <div className={center({ w: "full", flexDirection: "column" })}>
      <div
        className={css({
          fontSize: "10rem",
          fontWeight: "bold",
          color: "red.100",
        })}
      >
        Hello 🐼!
      </div>
      {/* もはやsuspenseもいらない */}
      {/* <Suspense fallback={<p>loading</p>}> */}
      <TodoList />
      {/* </Suspense> */}
    </div>
  );
}

const TodoList = async () => {
  const client = getClient();
  const { data } = await client.query(FetchAllTodosDocument, {});

  return (
    <div>
      {data?.todos?.data?.map((todo) => (
        <p key={todo?.id}>{todo?.title}</p>
      ))}
    </div>
  );
};
