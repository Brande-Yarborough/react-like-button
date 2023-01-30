import { useState } from "react";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);
  const addLike = () => {
    setLikes(likes + 1);
  };
  const changeLike = () => {
    if (likes === 1) {
      return `${likes} like`;
    }else {
      return `${likes} likes`;
    }
  };
  
  

return (
<div className="App">
  <button onClick={addLike}>{changeLike()}</button>
</div>
);
}

export default App;
