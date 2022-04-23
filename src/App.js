import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddFilm from './Components/AddFilm';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Details from './Components/Details';





function App() {
  const Api = "https://apimovies.fr/api/movies";
  const [movies,setMovies]= useState([]);
  const descreption=["Mrs. Van Houten has shown signs of losing touch with reality, and her husband discusses possible treatment with Dr. Caligari, who says Mrs. Van Houten has a disease of the libido. The staff want Dr. Caligari removed from their facility due to her controversial experiments with electroshock and hypothalamus injections",
  "After the deadly events in their home, the Abbot family must face danger from the outside world. To survive, they must fight in silence. Forced to venture into uncharted territory, they realize that creatures that attack at the slightest sound aren't the only threat lurking in their path.",
  "After the deadly events in their home, the Abbot family must face danger from the outside world. To survive, they must fight in silence. Forced to venture into uncharted territory, they realize that creatures that attack at the slightest sound aren't the only threat lurking in their path.",
"A magnificent sunset in Entre Ríos, Argentina, telescopes the clamor of Shanghai, the Chinese megalopolis drowned in fog. What is the shortest route between these two places? Quite simply a straight line which passes through the center of the Earth, because they are antipodes, diametrically opposed points on the earth's surface. By going to film eight antipodes - China and Argentina, Spain and New Zealand, Chile and Russia, Botswana and Hawaii - Russian filmmaker Victor Kossakovsky has captured images and sounds that turn our gaze on the world upside down. Vivan las Antipodas! is a film-poem, a crazy gamble where people, fauna and flora from the four corners of the earth mingle and collide.",
"A young woman, released from prison and come to join her souer in a small town in the Eure, binds for a time with Benît, who has chosen to live in the countryside",
"Belfast, 1971.As the conflict escalates into civil war, Gary, a young English recruit, is sent to the front.The city is in a confused situation, divided between Protestants and Catholics.While patrolling a neighborhood in resistance, his unit is ambushed. Gary finds himself alone, trapped in enemy territory.He will have to fight to the end to try to come back safe and sound to his base.","RAAM and JAANU reunite 20 years after attending the same school. The memories come to the surface ... Their child's heart still beats in this adult world ... Do we absolutely have to make up for lost time or let it slip away?","A program including 'Le Voyage dans la lune', in color, by Georges Méliès (1902) and a documentary on this classic film, entitled 'Le Voyage extraordinaire' by Serge Bromberg (2011)",
"In 1941, the Romanian army massacred 20,000 Jews in Odessa. Nowadays, a young director wants to transcribe this painful episode, through a military re-enactment, as part of a public event. Will the staging be possible",
"Tom still believes in a love that transfigures, a love with cosmic destiny, a unique love at first sight. Which is not the case with Summer at all. However, this does not prevent Tom from setting out to conquer him, armed with all his strength and all his courage, like a Don Quixote of modern times. Lightning strikes the first day, when Tom meets his boss's new secretary, Summer, a beautiful, playful girl.On the 31st day, things are progressing, slowly. On day 32, Tom is hopelessly won over, caught in the dizzying whirlwind of a life with Summer. 185 days after their meeting, the situation is increasingly uncertain - but not without hope. While the story goes back and forth within Tom and Summer's sometimes happy, but often tumultuous relationship, the tale covers the entire spectrum of the romantic relationship, from first crush to dates, from sex to separation, recrimination and redemption and describes all the reasons that push us to fight so hard to find meaning in love ... and hopefully make it a reality.",
"A comedy about loss, grief, and the redemptive power of love. Dean is a NY illustrator who falls hard for an LA woman while trying to prevent his father from selling the family home in the wake of his mother's death.",
"A Jewish refugee marries a soldier to escape deportation to Germany. Meanwhile a wealthy art student loses her first husband to a stray Resistance bullet; at the Liberation she meets an actor, gets pregnant, and marries him.",
"In Maine, Duffy prepares for the arrival of Lulu and Fred, two New Yorkers she's never met but impulsively invited for a weekend visit. All three find love and friendship.",
"Ally sees her life turned upside down when she learns from a newspaper article that women who have had more than 20 sexual partners are more likely to remain single their entire lives. After listing all of her exes, Ally begins to lose hope of ever getting married ...She takes an oath not to exceed her number (19), and asks her neighbor for help to find the ex of her life ..."
,"Angéla is a journalist for a local television. Accompanied by her cameraman, she relates the daily life of those who work at night.Tonight she's in a fire station. The night is calm, no urgency. Until the phone call from an old lady asking for help. The tandem follows the firefighters and discovers when they arrive there very worried neighbors. Horrible cries were heard in the apartment of the old lady. Angela perceives the tension of the inhabitants, her report should finally get out of the routine ... She cannot imagine how much!"]

  useEffect(() => {
    axios
      .get(Api)
      .then((response) => {
        setMovies(
          response.data.data.map((movie,i) => {
            return { ...movie, rate: Math.floor(Math.random() * 10),descreption: descreption+''+i };
          })
        );
      /*  setMovies(
          response.data.data.map((movie) => {
            return { ...movie, descreption: { ...descreption}};
          })
        );*/
       
        
      })
      .catch((err) => console.error(err));
  }, []);
  //component={SingleMovie}
  //setMovies([...movies,new Set(movies)])
   const onAdd=(newMovie)=>setMovies([...movies,newMovie])
   const onSearch =(caracter)=>{
    if (isNaN(caracter) === true) {
      setMovies(
        movies.filter((movie) =>
          movie.title.toLowerCase().includes(caracter.toLowerCase())
        )
      );
    }
    else {
      
        setMovies(movies.filter((movie) => movie.rate == caracter));
      
    }
   }
  return (
    <Router>
      <Navbar onSearch={onSearch}></Navbar>
      <Switch>
     <Route path="/"  exact render={(props)=><Home  {...props} movies={movies}></Home>}     ></Route>
     <Route path="/AddFilm"  exact render={(props)=><AddFilm  {...props} onAdd={onAdd}/>}></Route>
     <Route path="/:id" exact render={(props)=><Details {...props} movies={movies}   />}></Route>
     
     </Switch>
    </Router>
  );
}

export default App;
