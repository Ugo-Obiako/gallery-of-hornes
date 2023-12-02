import { useState } from 'react';
import beasts from "../data.json"




function SelectedBeasts(props) {

    
    const [filter, setFilter] = useState('');
  

    

    return (
        <div className="searchBar">
          <h1>Beast List</h1>
          <input
            type="text"
            placeholder="Filter by title"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <ul className='divL'>
            {beasts.map((beast) => (
              <li>{props.title}</li>
            ))}
          </ul>
        </div>
      );
    }

    


    export default SelectedBeasts;