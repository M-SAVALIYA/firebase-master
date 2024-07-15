import { useEffect, useRef } from "react";
import LoginButton from "./component/LoginButton";
import LogoutButton from "./component/LogoutButton";
import Profile from "./component/Profile";
import { getAllData, saveItem } from "./firebase/function";

function App() {
  let productName = useRef();
  let price = useRef();


  let addItem = async () => {
    let product = {
      productName: productName.current.value,
      price: price.current.value,
    };

    let res = await saveItem(product);
    console.log(res);
  };

  useEffect(() => {
    getAllData();
  });
  return (
    <>
      {/* <LoginButton />
      <LogoutButton />
      <Profile /> */}

      <input type="text" ref={productName} />
      <input type="text" ref={price} />
      <button onClick={addItem}>Submit</button>

    </>
  );
}

export default App;
