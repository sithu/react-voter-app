/**
 * Defines all election related actions and REST API calls.
 */
const createRefreshRequestAction = () => ({
    type: 'ELECTION_REFRESH_REQUEST',
});

const createRefreshDoneAction = elections => ({
    type: 'ELECTION_REFRESH_DONE',
    elections,
});

const createDeleteRequestAction = () => ({
    type: 'ELECTION_DELETE_REQUEST',
});

const createInsertRequestAction = () => ({
    type: 'ELECTION_INSERT_REQUEST',
});

const createInsertDoneAction = election => ({
    type: 'ELECTION_INSERT_DONE',
    election,
});

export const insertElection =  election => {

    return dispatch => {
        dispatch(createInsertRequestAction(election))

        return fetch('http://localhost:4000/elections', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(election)
            })
            .then(() => refreshElection()(dispatch));
    };
}

export const updateElection =  election => {

    return dispatch => {
        dispatch(createInsertRequestAction(election))

        return fetch('http://localhost:4000/ elections/' + encodeURIComponent( election.id), {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(election)
            })
            .then(() => refreshElection()(dispatch));
    };
}

export const deleteElection = ( election) => {
    return dispatch => {
        dispatch(createDeleteRequestAction());
        return fetch('http://localhost:4000/elections/' + encodeURIComponent( election.id), {
            method: 'DELETE' })
            .then(() => refreshElection()(dispatch));
    }
}

export const refreshElection = () => {
    return dispatch => {
        dispatch(createRefreshRequestAction());
        
        return fetch('http://localhost:4000/elections')
            .then(res => res.json())
            .then(elections => dispatch(createRefreshDoneAction(elections)));
    };
}