import * as React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

type Props = {
    member: IMember
    removeMember: (member: IMember) => void
}

export const Member: React.FC<Props> = ({ member, removeMember }) => {
    const dispatch: Dispatch<any> = useDispatch();

    const deleteMember = React.useCallback(
        (member: IMember) => dispatch(removeMember(member)),
        [dispatch, removeMember]
    )

    return(
        <div className="member">
            <div>
                <h1>{member.name}</h1>
                <p>{member.detail}</p>
            </div>
            <button onClick={() => deleteMember(member)}>Delete</button>
        </div>
    )
}