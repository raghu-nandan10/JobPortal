import "./App.css";
import Header from "./components/Header";
import JobOpenings from "./components/JobOpenings";
import UpCommingEvents from "./components/UpCommingEvents";
import BlogsAndNews from "./components/BlogsAndNews";
import PodcastCard from "./components/subcomponents/PodcastCard";
import Podcasts from "./components/Podcasts";
import VideoSection from "./components/VideoSection";
import Publicaitons from "./components/Publicaitons";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-[100%] flex flex-col ">
      <Header />
      <JobOpenings />
      <UpCommingEvents />
      <BlogsAndNews />
      <Podcasts />
      <VideoSection />
      <Publicaitons />
      <Footer />
    </div>
  );
}

export default App;
