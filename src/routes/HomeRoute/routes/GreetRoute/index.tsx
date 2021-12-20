import React, { FC } from "react";
import { useParams } from "react-router-dom";

import Greet from "./component";

import { IGreetRouteParams } from "./types";

const GreetRoute: FC = () => {
  const { name } = useParams() as IGreetRouteParams;

  return <Greet name={name} />;
};

export default GreetRoute;
