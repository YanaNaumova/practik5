import { useState, useEffect } from "react";

function ColorChangeComponent() {
  const [lengthWort, setLengthWort] = useState(0);
  const [inputColor, setInputColor] = useState("");

  const input_styles = {
    backgroundColor: inputColor,
  };

  useEffect(() => {
    if (lengthWort === 0) {
      setInputColor("white");
    } else if (lengthWort > 0 && lengthWort <= 10) {
      setInputColor("green");
    } else if (lengthWort > 10) {
      setInputColor("pink");
    }
  }, [lengthWort]);

  function changeLangWort(newWort) {
    setLengthWort(newWort.length);
  }

  return (
    <div>
      <input
        style={input_styles}
        type="text"
        onChange={(e) => changeLangWort(e.target.value)}
      />
    </div>
  );
}

export default ColorChangeComponent;
