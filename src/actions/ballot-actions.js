/**
 * Defines all ballot related actions and REST API calls.
 */
const createRefreshRequestAction = () => ({
    type: 'BALLOT_REFRESH_REQUEST',
});

const createRefreshDoneAction = ballots => ({
    type: 'BALLOT_REFRESH_DONE',
    ballots,
});

const createInsertRequestAction = () => ({
    type: 'BALLOT_INSERT_REQUEST',
});


export const insertBallot =  ballot => {

    return dispatch => {
        dispatch(createInsertRequestAction(ballot))

        return fetch('http://localhost:4000/ballots', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(ballot)
            })
            .then(() => refreshBallot()(dispatch));
    };
}

export const refreshBallot = () => {
    return dispatch => {
        dispatch(createRefreshRequestAction());
        
        return fetch('http://localhost:4000/ballots')
            .then(res => res.json())
            .then(ballots => dispatch(createRefreshDoneAction(ballots)));
    };
}
