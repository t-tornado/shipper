import React, { useEffect, useRef } from "react";
import { mount } from "profile/ProfileApp";

export default () => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref} />;
};
