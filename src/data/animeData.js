// src/data/animeData.js

import narutoImg from "../assets/anime/naruto.jpg";
import onepiece from "../assets/anime/onepiece.jpg";
import bleach from "../assets/anime/bleach.jpg";
import aot from "../assets/anime/aot.jpg";
import demonslayer from "../assets/anime/demonslayer.jpg";
import deathnote from "../assets/anime/deathnote.jpg";
import jjk from "../assets/anime/jjk.jpg";
import tokyoghoul from "../assets/anime/tokyoghoul.jpg";
import dragonball from "../assets/anime/dragonball.jpg";
import blackclover from "../assets/anime/blackclover.jpg";
import mha from "../assets/anime/mha.jpg";
import vinlandsaga from "../assets/anime/vinlandsaga.jpg";
import chainsawman from "../assets/anime/chainsawman.jpg";
import spyxfamily from "../assets/anime/spyxfamily.webp";
import sololeveling from "../assets/anime/sololeveling.jpg";

export const animeList = [
  {
    id: "naruto",
    type: "anime",
    title: "Naruto",
    image: narutoImg,
    description: "A young ninja who dreams of becoming Hokage.",
    rating: 8.4,
    episodes: [
      { ep: 1, title: "Enter Naruto Uzumaki!", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { ep: 2, title: "My Name is Konohamaru!", video: "https://www.w3schools.com/html/movie.mp4" }
    ]
  },

  {
    id: "onepiece",
    type: "anime",
    title: "One Piece",
    image: onepiece,
    description: "Luffy sets sail to become the Pirate King.",
    rating: 9.0,
    episodes: [
      { ep: 1, title: "I’m Luffy!", video: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  },

  {
    id: "bleach",
    type: "anime",
    title: "Bleach",
    image: bleach,
    description: "A teenager becomes a Soul Reaper.",
    rating: 8.2,
    episodes: [
      { ep: 1, title: "The Day I Became a Shinigami", video: "https://www.w3schools.com/html/movie.mp4" }
    ]
  },

  {
    id: "aot",
    type: "anime",
    title: "Attack on Titan",
    image: aot,
    description: "Humanity fights gigantic Titans.",
    rating: 9.1,
    episodes: [
      { ep: 1, title: "To You, in 2000 Years", video: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  },

  {
    id: "demonslayer",
    type: "anime",
    title: "Demon Slayer",
    image: demonslayer,
    description: "A boy fights demons to save his sister.",
    rating: 8.7,
    episodes: [
      { ep: 1, title: "Cruelty", video: "https://www.w3schools.com/html/movie.mp4" }
    ]
  },

  {
    id: "deathnote",
    type: "anime",
    title: "Death Note",
    image: deathnote,
    description: "A notebook that kills anyone whose name is written in it.",
    rating: 9.0,
    episodes: [
      { ep: 1, title: "Rebirth", video: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  },

  {
    id: "jjk",
    type: "anime",
    title: "Jujutsu Kaisen",
    image: jjk,
    description: "Sorcerers fight cursed spirits.",
    rating: 8.6,
    episodes: [
      { ep: 1, title: "Ryomen Sukuna", video: "https://www.w3schools.com/html/movie.mp4" }
    ]
  },

  {
    id: "tokyoghoul",
    type: "anime",
    title: "Tokyo Ghoul",
    image: tokyoghoul,
    description: "A college student becomes half-ghoul.",
    rating: 7.9,
    episodes: [
      { ep: 1, title: "Tragedy", video: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  },

  {
    id: "dragonball",
    type: "anime",
    title: "Dragon Ball Z",
    image: dragonball,
    description: "Goku defends Earth from powerful foes.",
    rating: 8.5,
    episodes: [
      { ep: 1, title: "The Arrival of Raditz", video: "https://www.w3schools.com/html/movie.mp4" }
    ]
  },

  {
    id: "blackclover",
    type: "anime",
    title: "Black Clover",
    image: blackclover,
    description: "A magicless boy aims to become Wizard King.",
    rating: 8.1,
    episodes: [
      { ep: 1, title: "Asta and Yuno", video: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  },

  {
    id: "mha",
    type: "anime",
    title: "My Hero Academia",
    image: mha,
    description: "A world where everyone has superpowers.",
    rating: 8.3,
    episodes: [
      { ep: 1, title: "Izuku Midoriya: Origin", video: "https://www.w3schools.com/html/movie.mp4" }
    ]
  },

  {
    id: "vinlandsaga",
    type: "anime",
    title: "Vinland Saga",
    image: vinlandsaga,
    description: "A Viking’s quest for revenge.",
    rating: 8.8,
    episodes: [
      { ep: 1, title: "Somewhere Not Here", video: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  },

  {
    id: "chainsawman",
    type: "anime",
    title: "Chainsaw Man",
    image: chainsawman,
    description: "A devil hunter with chainsaw powers.",
    rating: 8.4,
    episodes: [
      { ep: 1, title: "Dog & Chainsaw", video: "https://www.w3schools.com/html/movie.mp4" }
    ]
  },

  {
    id: "spyxfamily",
    type: "anime",
    title: "Spy x Family",
    image: spyxfamily,
    description: "A spy forms a fake family for a mission.",
    rating: 8.6,
    episodes: [
      { ep: 1, title: "Operation Strix", video: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ]
  },

  {
    id: "sololeveling",
    type: "anime",
    title: "Solo Leveling",
    image: sololeveling,
    description: "The weakest hunter becomes the strongest.",
    rating: 9.0,
    episodes: [
      { ep: 1, title: "I'm Used to It", video: "https://www.w3schools.com/html/movie.mp4" }
    ]
  }
];
