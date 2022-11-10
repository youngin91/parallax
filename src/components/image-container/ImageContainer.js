import React, { Suspense } from "react";

import "./image-container.css";

function ImageContainer({ res }) {
  let clown = false;
  res !== [] ? (clown = true) : (clown = false);
  const Card = React.lazy(() => import("./card/Card"));
  return (
    <div className="image-container">
      {clown &&
        res.results.map((item, index) => {
          return (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Card
                src={item.urls.regular}
                link={item.links.download}
                key={index}
              />
            </Suspense>
          );
        })}
    </div>
  );
}

export default ImageContainer;
