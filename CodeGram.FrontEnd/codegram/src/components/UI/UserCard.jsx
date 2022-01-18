import classes from './UserCard.module.css';

const UserCard = (props) => {
  return (
    <div className="card card-user">
      <div className={classes.image}>
        <img src={props.bgImage} alt="..." />
      </div>
      <div className="content">
        <div className="author">
          <a href="#">
            <h4 className="title text-center m-1">
              {props.name}
              <br />
              <small>{props.userName}</small>
            </h4>
          </a>
        </div>
        <p className="description text-center">{props.description}</p>
      </div>
      <hr />
      <div className="text-center">{props.socials}</div>
    </div>
  );
};

export default UserCard;
