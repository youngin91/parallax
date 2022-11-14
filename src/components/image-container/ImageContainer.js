import React, { Suspense } from "react";
import { RotatingSquare } from "react-loader-spinner";
import { Parallax } from "react-scroll-parallax";
import "./image-container.css";

function ImageContainer({ res }) {
  let clown = false;
  res !== [] ? (clown = true) : (clown = false);
  const Card = React.lazy(() => import("./card/Card"));
  return (
    <div className="image-container">
      {clown &&
        res.results.map((item, index) => {
          const negativeNumber = Math.floor(Math.random(-10) * 0);
          const positiveNumber = Math.floor(Math.random(0) * 10);

          const slow = Math.floor(Math.random(-15) * 0);
          const fast = Math.floor(Math.random() * 5);
          const computerChoose = Math.floor(Math.random(-100) * 100);
          let speed = 0;
          if (computerChoose > 0) {
            speed = fast;
          } else {
            speed = slow;
          }
          //handle mobile window sizes
          let imageSize;
          if (window.innerWidth > 1000) {
            imageSize = item.urls.full;
          } else {
            imageSize = item.urls.regular;
          }
          return (
            <Suspense fallback={<RotatingSquare key={item.id} />}>
              <Parallax
                speed={speed}
                translateX={[`${-360}px`, `${360}px`]}
                translateY={[`${negativeNumber}px`, `${positiveNumber}px`]}
                rotateY={[-360, 360]}
                key={item.id}
              >
                <Card
                  src={imageSize}
                  link={item.links.download}
                  key={item.id}
                  id={item.id}
                  profile={item.user.links.html}
                  person={item.user.name}
                  portfolio={item.user.portfolio_url}
                />
              </Parallax>
            </Suspense>
          );
        })}
    </div>
  );
}

export default ImageContainer;
