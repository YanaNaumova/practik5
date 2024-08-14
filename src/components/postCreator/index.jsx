import axios from "axios";
import React from "react";

function PostCreator() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  function createPost() {
    axios
      .post(url, { title: "новый пост", body: "текст нового поста", userId: 1 })
      .then((response) => console.log(response.data.id))
      .catch((error) => console.error(error.response))
      .finally(() => console.log("Запрос завершен"));
  }
  return (
    <div>
      <button onClick={createPost}>Создать пост</button>
    </div>
  );
}

export default PostCreator;
