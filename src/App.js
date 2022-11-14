import React from "react";
import ImageContainer from "./components/image-container/ImageContainer";
import Banner from "./components/banner/Banner";
import axios from "axios";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";

function App() {
  const [string, setString] = React.useState("");
  const [data, setData] = React.useState({
    results: []
  });
  const [randomImage, setRandomImage] = React.useState([
    {
      urls: {
        regular: ""
      }
    }
  ]);

  const handleChange = (event) => {
    setString(event.target.value);
  };
  async function sendString() {
    const formData = new FormData();
    formData.append("search", string);

    try {
      await axios
        .get(`/.netlify/functions/api/search?search=${string}`)
        .then((response) => setData(response.data));
      await axios
        .get(`/.netlify/functions/api/random?search=${string}&count=2`)
        .then((response) => setRandomImage(response.data));
    } catch (err) {
      console.log(`err: ${err}`);
    }
  }

  return (
    <div className="app">
      <Banner
        string={string}
        handleChange={handleChange}
        sendSearch={sendString}
        res={randomImage}
      />
      <ParallaxProvider>
        <ImageContainer string={string} res={data} />
      </ParallaxProvider>
    </div>
  );
}

export default App;
