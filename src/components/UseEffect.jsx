import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [resourceType, setresourceType] = useState("posts"); // depending of the resourse
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // sideEffects are been manage by useEffect -> life cycles

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //       .then((response) => response.json())
  //       .then((json) => setItems(json));
  //     // only if change if render happends will not run
  //   }, [resourceType]); // takes 2 parameter will be an array values when they changes effect will run again

  //   useEffect(() => {
  //                      // only if change if render happends will not run
  //   }, []); //this will run on mount

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // clean up effect last time / component unMounted 
    };
  }, []);

  return (
    // <>
    //   <div className="">
    //     <button onClick={() => setresourceType("posts")}>Posts</button>
    //     <button onClick={() => setresourceType("users")}>Users</button>
    //     <button onClick={() => setresourceType("comments")}>Comments</button>
    //   </div>
    //   <h1>{resourceType}</h1>
    //   {items.map((item) => (
    //     <pre>{JSON.stringify(item)}</pre>
    //   ))}
    // </>
    <div className="">{windowWidth}</div>
  );
};
