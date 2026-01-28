import { useEffect, useState } from "react";
import { useParams } from "react-router";

const MoviePage = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState(null);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTQ0NGFhNGJjZjI4ZjVlZTA2MTM0M2E3ZTVkNzM3OSIsIm5iZiI6MTc2OTQ2MDQxMy42OTkwMDAxLCJzdWIiOiI2OTc3ZDJiZGY5NzZlNDNmYmRhYmEzNWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cIpj8Qk8IIIxaEuFePPykJ1507B4CbeAzzMQUOJakbM'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                setMovieData(res);
            })
            .catch(err => console.error(err));
    }, [id])
    if (!movieData) {
        return <div className="text-red-500 justify-center">Loading...</div>
    }
    return (
        <div className="min-h-screen bg-[#181818] text-white">
            <div className="relative h-[60vh] flex item-end"
                style={
                    {
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }
                }>
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>

                <div className="relative z-10 flex items-end p-8 gap-8">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
                        className="rounded-lg shadow-lg w-48 hidden md:block"
                    />
                    <div>
                        <h1 className="text-4xl font-bold">{movieData.title}</h1>
                        <div className="flex items-center gap-4 mb-2">
                            <span>⭐ {movieData.vote_average?.toFixed(1)}</span>
                            <span>{movieData.release_date}</span>
                            <span>{movieData.runtime} min</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {movieData.genres.map((genre) => (
                                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                        <p className="max-w-2xl text-gray-200">{movieData.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MoviePage;