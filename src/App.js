import {Row} from './Row'
import {requests} from './requests/request'
import { Banner } from './Banner';
import {Navbar} from './Navbar'
import './App.css'

function App() {

  return (
    <div className="App"> 
      <Navbar/>
      <Banner />

      <Row title="NETFLIX ORIGINALS" url={requests.fetchNetflixOriginals} isLarge={true}/>
      <Row title="TRENDING NOW" url={requests.fetchTrending}/>
      <Row title="TOP RATED" url={requests.fetchTopRated}/>
      <Row title="ACTION MOVIES" url={requests.fetchActionMovies}/>
      <Row title="COMEDY" url={requests.fetchComedyMovies}/>
      <Row title="HORROR" url={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE" url={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES" url={requests.fetchDocumantaries}/>
    </div>
  );
}

export default App;

