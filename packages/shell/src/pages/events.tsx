import React, { useEffect, useRef } from "react";
import { mount } from "discoverEvents/DiscoverEventsApp";
import { useLocation } from "react-router-dom";

export default () => {
  const ref = useRef<any>(null);
  const loc = useLocation();

  useEffect(() => {
    if (ref.current) {
      mount(ref.current, { initialRoute: loc.pathname });
    }
  }, []);

  return <div ref={ref} />;
};
