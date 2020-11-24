import React from "react";
import Template from "./components/Template";

import { mount as Marketing } from "marketing/App";

export default () => {
  return (
    <div>
      <h1>Hi there</h1>
      <hr />
      <Template mount={Marketing} />
    </div>
  );
};
