import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmint = (event) => {
    event.preventDefault();
    // if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr/>
          <form onSubmit={ onSearchSubmint }>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr/>
          {q === '' ? (
            <div className="alert alert-info">Search a hero</div>
          ) : heroes.length === 0 ? (
            <div className="alert alert-danger">
              No hero with <b>{q}</b>
            </div>
          ) : (
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          )}
        </div>
      </div>
    </>
  )
}
