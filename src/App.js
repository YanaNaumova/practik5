import "./App.css";
import Component from "./components/component";
import ColorChangeComponent from "./components/colorChangeComponent";
import { useState } from "react";
import PageTitle from "./components/pageTitle";
import PostCreator from "./components/postCreator";

function App() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <Component />
      <ColorChangeComponent />
      <hr></hr>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <PageTitle title={title} />
      <PostCreator />
    </div>
  );
}

export default App;
