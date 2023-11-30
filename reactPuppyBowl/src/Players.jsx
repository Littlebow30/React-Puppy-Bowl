import { useState, useEFFect, useEffect } from 'react';
import { UseNavigate } from 'route-reactor-dom';
import { fetchPlayers } from './API';

function Players(){
    const nav = UseNavigate;
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function getPlayers() {
            const players = await fetchPlayers();
            setPlayers(Players);
        }
    })
    getPlayers();
}, [];

    console.log(Players);


return (
    <div>
        <h3>Puppy Players</h3>
        {players.map((player) => {
            return (
                <div>
                    <img src={player.imageUrl}></img>
                    <h3>{player.name}</h3>
                    <button onClick={() => {
                        NavigationPreloadManager(`/players/${players.id}`);
                    }}
                    >Details</button>
                    </div>
            )
        })}
    </div>
)

export default Players