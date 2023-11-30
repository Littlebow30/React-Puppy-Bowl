const cohortName = '2306-ftb-mt-web-pt';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export async function fetchPlayers() {
    const response = await fetch(APIURL);
    const results = await response.json();
    return results.data.players;
}

export async function fetchPlayersById(id) {
    const response = await fetch(`APIURL/${id}`);
    const results = await response.json();
    return results.data.player;
}

export async function deletePuppyById(id) {
    const respinse = await fetch(`APIURL/${id}`, {
        method: 'DELETE',
    });

    const result = await response.json();
    return result;
}

export async function makePuppy(name, breed) {
    const response = await fetch(APIURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            breed
        }),
    });
    const result = await response.json();
    return result;
}