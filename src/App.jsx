import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="bg-red-300 h-screen flex justify-center items-center">
      <div className="bg-slate-200 w-80 overflow-hidden rounded-2xl shadow-2xl">
        <Avatar />
        <Intro />
        <Skilllist />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className=" h-80 ">
      <img
        src="https://btlkloupdzmvewfbtvmr.supabase.co/storage/v1/object/public/avatars/czy234.jpg"
        alt=""
        className=" w-full h-full object-cover"
      />
    </div>
  );
}

function Intro() {
  return (
    <div className="  px-4">
      <h1 className="flex justify-center items-center p-4 text-3xl font-semibold">
        Kafka Cheng
      </h1>
      <p className="italic">
        Full-stack web developer and love programming. When not coding , I like
        to exercise at the gym and I enjoy reading books on psychology.
      </p>
    </div>
  );
}

function Skilllist() {
  return (
    <div className="px-4  pt-4 pb-8">
      <Skill skill="Typescript" emoji="😊" color="orange" />
      <Skill skill="React" emoji="😍" color="blue" />
      <Skill skill="Nextjs" emoji="👍" color="yellow" />
      <Skill skill="Tailwindcss" emoji="🍔" color="green" />
      <Skill skill="Supabase" emoji="🎄" color="purple" />
    </div>
  );
}
function Skill(props) {
  console.log(props);
  return (
    <div
      className="rounded-lg inline-flex justify-center items-center mx-1 px-3 py-1"
      style={{ backgroundColor: props.color }}
    >
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
export default App;
