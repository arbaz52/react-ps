import { ChangeEvent, FC, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

const Home: FC = () => {
  const [name, setName] = useState("");
  const { url } = useRouteMatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  return (
    <div>
      <nav>
        <Link to={`${url}/about`}>About</Link>{" "}
        <Link to={`${url}/contact`}>Contact</Link>
      </nav>
      <div>
        <label htmlFor="inputName">Enter your name: </label>{" "}
        <input
          type="text"
          id="inputName"
          value={name}
          onChange={handleChange}
        />
        <Link to={`${url}/greet/${name}`}>Greet me!</Link>
      </div>
    </div>
  );
};

export default Home;
