import { useState } from 'react';
import Products from '../../Data';
import Card1 from '../../UI/Card1/Card1';

const Filter = ({products}) => {
    const [query, setQuery] = useState("");
    console.log(products);
    return (
        <>
        <div className='filter'>
        <input
          className="search-box"
          placeholder="Search your favourite food"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className="card-group">
        {
        // eslint-disable-next-line array-callback-return
        Products.length && Products.filter((p) => {
          if (query === "") {
            //if query is empty
            return null;
          } else if (p.name.toLowerCase().includes(query.toLowerCase())) {
            //returns filtered array
            return p;
          }
        }).map((p) => (
          <Card1 data={p}/>
        ))}
      </div>
        </>
    )
}
export default Filter;