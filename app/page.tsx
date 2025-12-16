import Hero from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";


export default function Home() {
return (
<main>
<Navbar />
<About />
<Projects />
<Skills />
<Experience />
<Contact />
</main>
);
}
