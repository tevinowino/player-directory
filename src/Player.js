import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img 
                variant="top" 
                src={imageUrl} 
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Team: {team}<br />
                    Nationality: {nationality}<br />
                    Jersey Number: {jerseyNumber}<br />
                    Age: {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

// Default props
Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 0,
    imageUrl: "https://example.com/default.jpg"
};

export default Player;
