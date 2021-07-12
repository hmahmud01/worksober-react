import * as actionTypes from './actionTypes';

const initialState: MemberState = {
    members: [
        {
            name: "member",
            age: 21,
            detail: "detail",
            club: "club",
            img: "img.txt"
        },
        {
            name: "member2",
            age: 24,
            detail: "detail",
            club: "club",
            img: "img.txt"
        }
    ]
}

const reducer = (
    state: MemberState = initialState,
    action: MemberAction
) : MemberState => {
    switch (action.type) {
        case actionTypes.ADD_MEMBER:
            const newMember: IMember = {
                name: action.member.name,
                age: action.member.age,
                detail: action.member.detail,
                club: action.member.club,
                img: action.member.img
            }
            return {
                ...state, 
                members: state.members.concat(newMember)
            }
        case actionTypes.REMOVE_MEMBER:
            const updatedMembers: IMember[] = state.members.filter(
                member => member.name !== action.member.name
            )
            return {
                ...state,
                members: updatedMembers
            }
        default:
            break;
    }
    return state
}

export default reducer