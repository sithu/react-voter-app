/**
 * Defines all voter registration related actions and REST API calls.
 */
const createRefreshRequestAction = () => ({
    type: 'VOTER_REFRESH_REQUEST',
});

const createRefreshDoneAction = voters => ({
    type: 'VOTER_REFRESH_DONE',
    voters,
});

const createDeleteRequestAction = () => ({
    type: 'VOTER_DELETE_REQUEST',
});

const createInsertRequestAction = () => ({
    type: 'VOTER_INSERT_REQUEST',
});

const createInsertDoneAction = voter => ({
    type: 'VOTER_INSERT_DONE',
    voter,
});

export const insertVoter = voter => {

    return dispatch => {
        dispatch(createInsertRequestAction(voter))

        return fetch('http://localhost:4000/voters', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(voter)
            })
            .then(() => refreshVoter()(dispatch));
    };
}

export const updateVoter = voter => {

    return dispatch => {
        dispatch(createInsertRequestAction(voter))

        return fetch('http://localhost:4000/voters/' + encodeURIComponent(voter.id), {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(voter)
            })
            .then(() => refreshVoter()(dispatch));
    };
}

export const deleteVoter = (voter) => {
    return dispatch => {
        dispatch(createDeleteRequestAction());
        return fetch('http://localhost:4000/voters/' + encodeURIComponent(voter.id), {
            method: 'DELETE' })
            .then(() => refreshVoter()(dispatch));
    }
}

export const refreshVoter = () => {
    return dispatch => {
        dispatch(createRefreshRequestAction());
        
        return fetch('http://localhost:4000/voters')
            .then(res => res.json())
            .then(voters => dispatch(createRefreshDoneAction(voters)));
    };
}