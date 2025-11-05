import "./App.css";
import { useState, useEffect } from "react";

import Button from "./components/Button";
import SearchInput from "./components/SearchInput";

function App() {
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState(1);
  const [searchUser, setSearchUser] = useState("");

  const urlApi = `https://randomuser.me/api/?page=${count}&results=16&seed=abc&nat=${searchUser}`;

  const getData = async (urlApi) => {
    const url = await fetch(urlApi);
    const data = await url.json();
    setPeople(data.results);
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const nextPage = () => {
    setCount(count + 1);
    backToTop();
  };

  const previewPage = () => {
    if (count === 1) return;
    setCount(count - 1);
    backToTop();
  };

  useEffect(() => {
    getData(urlApi);
  }, [count, searchUser]);

  return (
    <div className="container">
      <h1>Lista de Usuários</h1>
      <SearchInput
        placeholder={"EX: AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IN, IR, MX, NL, NO, NZ, RS, TR, UA, US"}
        action={(e) => setSearchUser(e.target.value)}
        type="text"
      />

      <div className="container-users">
        <ul>
          {people.map((item) => (
            <li key={item.login.uuid}>
              <img src={item.picture.large} alt="" />
              <h4>
                Name: {item.name.first} {item.name.last}
              </h4>
              <p>Gender: {item.gender}</p>
              <p>Cell: {item.cell}</p>
              <p>Country: {item.location.country}</p>
              <p>City: {item.location.state}</p>
            </li>
          ))}
        </ul>

        <div>
          <Button action={previewPage} name={"Preview Page"} />
          <Button action={nextPage} name={"Next Page"} />
        </div>
      </div>
    </div>
  );
}

export default App;
