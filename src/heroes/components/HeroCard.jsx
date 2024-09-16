import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterByHero = ({alter_ego, characters}) => {
    if(alter_ego == characters) return (<></>);
    return <p>{characters}</p>
}

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters
}) => {

  const heroImgeUrl = `./assets/heroes/${id}.jpg`;

  return (
    <div className='col'>
      <div className='card'>
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImgeUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <CharacterByHero characters={ characters } alter_ego={ alter_ego }/>
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${ id }`}>
                More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired
}
CharacterByHero.propTypes = {
    alter_ego: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired,
};