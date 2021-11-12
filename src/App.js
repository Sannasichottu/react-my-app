import './App.css';
import {useState} from 'react';
function App() {

  //Movie details
  const movies = [
   {
     name:"Master",
     poster:"https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_FMjpg_UX1000_.jpg",
     rating:"7.8",
     summary:"JD, an alcoholic professor, is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
   },
   {
    name:"Ratatouille",
    poster:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2b18044415b238c004e702aaf1dc693daf886d9dadf4b78e1b1bcc0b9df10f8c._RI_V_TTW_.jpg",
    rating:"8",
    summary:"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  },
  {
    name:"Pokkiri",
    poster:"https://qqcdnpictest.mxplay.com/pic/4e008988567d93c8edd379a374ec461f/en/2x3/320x480/test_pic1635764386337.webp",
    rating:"7.5",
    summary:"Tamizh, a hardened criminal who does dirty jobs for money, falls in love with Shruthi, a charming girl, who hates his violent nature. His true purpose and identity are revealed after a turn of events.",
  },
  {
    name:"Jai Bhim",
    poster:"https://moviegalleri.net/wp-content/uploads/2021/07/Actor-Suriya-Jai-Bhim-Movie-First-Look-Poster-HD.jpg",
    rating:"9.6",
    summary:"A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
  },
  {
    name:"The Conjuring",
    poster:"https://m.media-amazon.com/images/M/MV5BOWRkOTYzZTQtMzQwNi00NDYwLTk4NjUtN2FjYTI4Y2UzM2RjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    rating:"7.5",
    summary:"The Perron family moves into a farmhouse where they experience paranormal phenomena. They consult demonologists, Ed and Lorraine Warren, to help them get rid of the evil entity haunting them.",
  },
  {
    name:"Doctor",
    poster:"https://images.cinemaexpress.com/uploads/user/imagelibrary/2021/3/11/original/Doctor.PNG",
    rating:"7.9",
    summary:"An army surgeon assembles a team to help him track down his fiancee's kidnapped niece.",
  },
  {
    name:"Ratsasan",
    poster:"https://www.nettv4u.com/uploads/10-05-2018/raatchasan-movie-poster-.jpg",
    rating:"8.4",
    summary:"Arun gives up on his dream of becoming a filmmaker and takes up the job of a police officer after his father's death. He then attempts to track down a psychotic killer who targets schoolgirls.",
  },
  {
    name:"Money Heist",
    poster:"https://flxt.tmsimg.com/assets/p14100007_b_v9_au.jpg",
    rating:"8.2",
    summary:"A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police.",
  },
  ]
 
 
  return (
    <div className="App">
    <MovieList movies={movies} />
    <MovieList movies={movies} />
    <MovieList movies={movies} />
    
  </div>
  );}

  //likes & dislikes
 function Counter() {
   const[like,setLike]=useState(0);
   const[dislike,setDislike]= useState(0);
   return(
     <div className="counter-countainer">
       <button className="likes-dislikes" onClick={()=>{setLike(like+1);}}>👍 {like} </button>
       <button className="likes-dislikes" onClick={()=>{setDislike(dislike+1);}}>👎 {dislike} </button>
      
     </div>
   )
 }

//MOvie-list
  function MovieList({movies}) {
    return(
      <section className="movie-list">
      {movies.map((mv)=>(
      <Movie 
      name={mv.name}
      rating={mv.rating}
      summary={mv.summary}
      poster={mv.poster}
      />
      ))}
    </section>)
    
  }


//Movie view details

function Movie({name,rating,summary,poster}) {

  const [show, setShow] = useState(true)
  
  //Rateing color
  const styles = {
    color: rating < 8 ? "crimson" : "green"};
  //description Hide &  Show
  /*const summaryStyles = {
    display: show ? "block" : "none" ,
  };*/  

  return (
  <div className="movie-container">
    <img 
    src={poster} 
    alt="Master"
    className="movie-poster" 
    />

    <div className="movie-specs">
    <h3 className="movie-name">{name}</h3>
    <p className="movie-rating" style ={styles} >⭐ {rating} </p>
    </div>

    <button onClick={()=>setShow(!show)} className="movie-show-button">
    {show ? "Hide" : "Show"} description</button>
    {show ? <p className="movie-summary">{summary}</p> : ""}
    {/*<p style={summaryStyles} className="movie-summary"> {summary} </p> */} 
    <Counter />
  </div>
  );
}

export default App;


//jsx - Javascript xml