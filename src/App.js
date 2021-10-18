
import { useState } from 'react';
import './App.css';

const App = () => {

  const [search, setSearch] = useState([])

  const handleChange = (e) => {

    const { value } = e.target
    fetch(`https://demo.dataverse.org/api/search?g=${value}`)
      .then(res => res.json())
      .then(json => setSearch(json.data.items))
  }
  return (
    <div className="App">
      <input type="text" name="search" placeholder="Enter something...." className="search" onChange={handleChange} />
      {search?.length > 0 &&
        <div className="autocomplete">
          {search.map((el, i) =>
            <div key={i} className="autocompleteItems">
              <span>{el.name}</span>
            </div>
          )
          }
        </div>}
    </div>
  );
}

export default App;
