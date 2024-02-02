import './App.css';
import { useEffect, useState } from 'react';
import Tour from './tour.js';

function App() {
    const [empty,setEmpty] = useState(false)
    const [tours,setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = 'https://course-api.com/react-tours-project'
    const fetchInfo = () => { 
      return fetch(url) 
              .then((res) => res.json()) 
              .then((d) => setTours(d))
              .then(setLoading(false))
    }
      
    useEffect(() => {
      fetchInfo();
    }, [])

    const getTour = (tour) => {
      return <Tour key={tour.id}
      image={tour.image}
      name={tour.name}
      price={tour.price}
      info={tour.info}
      id={tour.id}
      removeTour={removeTour}
      />
    }

    const removeTour = (id) => {
      if (tours.length == 1) {
        setEmpty(true)
        setTours([]);
    } else {
        setTours(tours.filter(tour => tour.id != id));
    }
    }

    const refresh = () => {
      setLoading(true);
      fetchInfo();
      setEmpty(false);
    }


    return(
        <div className='container'>
            {loading && <h1 className='loading'>Loading...</h1>}
            {!loading && !empty && <div className='boxy'>
              <header>Our Tours</header>
              <div className='line'></div>
              <div className='tours'>{tours.map(tour=>getTour(tour))}</div>
            </div>}
            {!loading && empty && <div className='emptyTours'>
                <header className='headerNoTours'>No Tours Left</header>
                <button className='refresh' onClick={refresh}>Refresh</button>
                </div>}
        </div>
    )
}

export default App;