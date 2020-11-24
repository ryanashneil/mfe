import React, { useRef, useEffect } from "react";

export default (props) => {
  const ref = useRef(null);
  useEffect(() => props.mount(ref.current));
  return <div ref={ref} />;
};
