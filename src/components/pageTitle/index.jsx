import { useEffect } from "react";

function PageTitle({ title }) {
  console.log(title);
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <h1>{title}</h1>
      <p>Заголовок был обновлен</p>
    </div>
  );
}

export default PageTitle;
