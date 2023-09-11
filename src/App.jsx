import Header from "./components/Header";
import Profile from "./components/Profile";
import './App.css'

export default function App() {
  return (
    <>
      <Header></Header>
      <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
        <br />
        <Profile></Profile>
        <br />
      </main>
    </>
  );
}