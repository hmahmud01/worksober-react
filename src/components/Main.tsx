import * as React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import './styles.css';

import { Member } from './Member';
import { AddMember } from './AddMember';
import { addMember, removeMember } from './redux/store/actionCreators';
import { Dispatch } from 'redux';


const Main: React.FC = () => {

    const members: readonly IMember[] = useSelector(
        (state: MemberState) => state.members,
        shallowEqual
    )

    const dispatch: Dispatch<any> = useDispatch();

    const saveMember = React.useCallback(
        (member: IMember) => dispatch(addMember(member)),
        [dispatch]
    )

    return(
        <main>
            <h1>Club members</h1>
            <AddMember saveMember={saveMember} />
            {members.map((member: IMember) => (
                <Member
                    key={member.name}
                    member= {member}
                    removeMember = {removeMember}
                >
                </Member>
            ))}
        </main>
    )
}

export default Main;