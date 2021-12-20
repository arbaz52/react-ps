import { FC } from "react";
import { IGreetProps } from "./types";

const Greet: FC<IGreetProps> = ({ name }) => <h1>Hello, {name}</h1>;

export default Greet;
