import {Row} from './Row'
import {requests} from './requests/request'

function App() {

  return (
    <div className="App"> 
      {/* NAVBAR */}
      {/* BANNER */}
      <h1>Test</h1>
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

