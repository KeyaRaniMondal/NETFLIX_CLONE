import CardList from "../Componenets/CardList";
import Hero from "../Componenets/Hero";

const Homepage = () => {
    return (
        <div>
            <Hero />
            <CardList title="Now Playing" category="now_playing"/>
            <CardList title="Top Rated" category="top_rated"/>
            <CardList title="Popular" category="popular"/>
            <CardList title="Upcoming" category="upcoming"/>
        </div>
    )
}
export default Homepage;