import herobg from "../assets/hero.png"
const Hero=()=>{
    return(
        <div>
           <img src={herobg} alt="hero image" className="w-full rounded-2xl h-[480px] object-cover object-center"/>
        </div>
    )
}
export default Hero;