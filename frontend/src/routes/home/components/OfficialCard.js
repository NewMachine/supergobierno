import PropTypes from 'prop-types'
import Link from 'next/link'

// To do: Change Router.push inside tags for handler()
const OfficialCard = ({ official }) => (
  <div className="official-card-wrapper">
    <Link href={`/funcionarios/${official.name}`}>
      <img
        src={official.picture.url}
        alt={official.name}
        width="216px"
        height="160px"
      />
    </Link>
    <Link href={`/funcionarios/${official.name}`}>
      <p className="official-name">{official.name}</p>
    </Link>
    <p className="official-position">{official.position}</p>
    <style jsx>
      {`
        .official-card-wrapper {
          background-color: #fff;
          color: #484848;
          height: 240px;
          border-radius: 3px;
          text-align: center;
          box-shadow: 0px 0px 6px 0px rgba(72, 72, 72, 0.2);
        }
        img {
          border-radius: 4px 4px 0 0;
          background-size: cover;
          object-fit: cover;
          cursor: pointer;
          width: 100%;
        }
        .official-name {
          font-size: 19px;
          margin-top: 16px;
          cursor: pointer;
        }
        p {
          margin: 10px 0;
        }
      `}
    </style>
  </div>
)

OfficialCard.propTypes = {
  official: PropTypes.object.isRequired
}

export default OfficialCard
