import React, { useState, useEffect } from "react";
import "./style.css";
import { shuffle } from "./randomNum";

export default function MemoryCard(props) {
  const [memory, setMemory] = useState([
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG161.png",
      title: "Vaporeon",
      isClicked: false,
      key: 1,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG150.png",
      title: "Lapras",
      isClicked: false,
      key: 2,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG157.png",
      title: "Squirtle",
      isClicked: false,
      key: 3,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG160.png",
      title: "Sandshrew",
      isClicked: false,
      key: 4,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG158.png",
      title: "Vulpix",
      isClicked: false,
      key: 5,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG153.png",
      title: "Caterpie",
      isClicked: false,
      key: 6,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG149.png",
      title: "Bulbasaur",
      isClicked: false,
      key: 7,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG147.png",
      title: "Charizard",
      isClicked: false,
      key: 8,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG148.png",
      title: "Pikachu",
      isClicked: false,
      key: 9,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG138.png",
      title: "Ivysaur",
      isClicked: false,
      key: 10,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG114.png",
      title: "Articuno",
      isClicked: false,
      key: 11,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG110.png",
      title: "Psyduck",
      isClicked: false,
      key: 12,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG105.png",
      title: "Marill",
      isClicked: false,
      key: 13,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG91.png",
      title: "Eevee",
      isClicked: false,
      key: 14,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG82.png",
      title: "Turtwig",
      isClicked: false,
      key: 15,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG67.png",
      title: "Mudkip",
      isClicked: false,
      key: 16,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG65.png",
      title: "Torchic",
      isClicked: false,
      key: 17,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG45.png",
      title: "Chikorita",
      isClicked: false,
      key: 18,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG106.png",
      title: "Totodile",
      isClicked: false,
      key: 19,
    },
    {
      url: "https://pngimg.com/uploads/pokemon/pokemon_PNG22.png",
      title: "Charmander",
      isClicked: false,
      key: 20,
    },
  ]);

  useEffect(() => {
    shuffle(memory);
  }, [memory]);

  const [highScore, setHighScore] = useState(0);

  const [score, setScore] = useState(0);
  const incrementScore = (e) => {
    memory.map((memoryz) => {
      if (
        memoryz.key == e.target.parentElement.id &&
        memoryz.isClicked === false
      ) {
        setMemory(
          memory.map((memoryz) => {
            return memoryz.key == e.target.parentElement.id
              ? { ...memoryz, isClicked: true }
              : memoryz;
          })
        );

        setScore(score + 1);
        shuffle(memory);
      } else if (
        memoryz.key == e.target.parentElement.id &&
        memoryz.isClicked === true
      ) {
        if (score > highScore) {
          setHighScore(score);
        }
        setScore(0);

        shuffle(memory);
        setMemory(
          memory.map((memoryz) => {
            return { ...memoryz, isClicked: false };
          })
        );
      }
    });
  };

  return (
    <div className="container">
      <div className="header">
        <img src="./13a6eabd7d9ec41fc143e225ea5926da.png"></img>
      </div>
      <div className="stripe">
        <div className="circle">
          <div className="smallCircle"></div>
        </div>
      </div>
      <div className="memoryContainer">
        <div className="score">Current score: {score}</div>

        <div className="memory">
          <div id={memory[0].key} className="memoryDiv">
            <div
              className="pokeImage"
              onClick={incrementScore}
              id={memory[0].key}>
              <img
                src={memory[0].url}
                onClick={incrementScore}
                alt="image1"></img>
            </div>
            <div className="pokeName" onClick={incrementScore}>
              {memory[0].title}
            </div>
          </div>

          <div id={memory[1].key} className="memoryDiv">
            <div
              className="pokeImage"
              onClick={incrementScore}
              id={memory[1].key}>
              <img
                src={memory[1].url}
                onClick={incrementScore}
                alt="image2"></img>
            </div>
            <div className="pokeName" onClick={incrementScore}>
              {memory[1].title}
            </div>
          </div>

          <div id={memory[2].key} className="memoryDiv">
            <div
              className="pokeImage"
              onClick={incrementScore}
              id={memory[2].key}>
              <img
                src={memory[2].url}
                onClick={incrementScore}
                alt="image3"></img>
            </div>
            <div className="pokeName" onClick={incrementScore}>
              {memory[2].title}
            </div>
          </div>
          <div id={memory[3].key} className="memoryDiv">
            <div
              className="pokeImage"
              onClick={incrementScore}
              id={memory[3].key}>
              <img
                src={memory[3].url}
                onClick={incrementScore}
                alt="image4"></img>
            </div>
            <div className="pokeName" onClick={incrementScore}>
              {memory[3].title}
            </div>
          </div>
          <div id={memory[4].key} className="memoryDiv">
            <div
              className="pokeImage"
              onClick={incrementScore}
              id={memory[4].key}>
              <img
                src={memory[4].url}
                onClick={incrementScore}
                alt="image5"></img>
            </div>
            <div className="pokeName" onClick={incrementScore}>
              {memory[4].title}
            </div>
          </div>
          <div id={memory[5].key} className="memoryDiv">
            <div
              className="pokeImage"
              onClick={incrementScore}
              id={memory[5].key}>
              <img
                src={memory[5].url}
                onClick={incrementScore}
                alt="image6"></img>
            </div>
            <div className="pokeName" onClick={incrementScore}>
              {memory[5].title}
            </div>
          </div>
          <div id={memory[6].key} className="memoryDiv">
            <div
              className="pokeImage"
              onClick={incrementScore}
              id={memory[6].key}>
              <img
                src={memory[6].url}
                onClick={incrementScore}
                alt="image7"></img>
            </div>
            <div className="pokeName" onClick={incrementScore}>
              {memory[6].title}
            </div>
          </div>
          <div id={memory[7].key} className="memoryDiv">
            <div
              className="pokeImage"
              onClick={incrementScore}
              id={memory[7].key}>
              <img
                src={memory[7].url}
                onClick={incrementScore}
                alt="image8"></img>
            </div>
            <div className="pokeName" onClick={incrementScore}>
              {memory[7].title}
            </div>
          </div>
          <div id={memory[8].key} className="memoryDiv">
            <div
              className="pokeImage"
              onClick={incrementScore}
              id={memory[8].key}>
              <img
                src={memory[8].url}
                onClick={incrementScore}
                alt="image9"></img>
            </div>
            <div className="pokeName" onClick={incrementScore}>
              {memory[8].title}
            </div>
          </div>
        </div>
        <div className="highScore">High score: {highScore}</div>
      </div>
    </div>
  );
}
