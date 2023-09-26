import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

import './App.css'

export default function App() {
  return (
    <>
      <Header></Header>
      <main className="relative container mx-auto max-w-5xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
        <br />
        <Profile></Profile>
        <br />
        <Projects></Projects>
        <br />
        <Technologies></Technologies>
      </main>
    </>
  );
}
