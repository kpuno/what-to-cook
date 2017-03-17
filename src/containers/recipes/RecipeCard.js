import React, { PropTypes } from 'react';
import {Panel} from 'react-bootstrap';
import {Link} from 'react-router';

const cardStyle = {
    width: '35rem'
};

const imgStyle = {
    width: '318px',
    height: '180px'
};

const RecipeCard = ({id, likes, title, image}) => {
    return (
        <Panel header={<div className="textTitle">{title}</div>} bsStyle="primary" style={cardStyle}>
            <img style={imgStyle} src={image ? image : ""} alt="Card image cap"/>
            <div>
                <p>
                    Likes: {likes}
                    &nbsp;
                    id: {id}
                    <Link to={'/recipe/' + id} className="btn btn-primary">Details</Link>
                </p>
            </div>
        </Panel>
    );
};

RecipeCard.propTypes = {
    id : PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default RecipeCard;