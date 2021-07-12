import * as actionTypes from './actionTypes';

export function addMember(member: IMember) {
    const action: MemberAction = {
        type: actionTypes.ADD_MEMBER,
        member
    }
    return simulateHttpRequest(action);
}

export function removeMember(member: IMember) {
    const action: MemberAction = {
        type: actionTypes.REMOVE_MEMBER,
        member
    }
    return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: MemberAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}