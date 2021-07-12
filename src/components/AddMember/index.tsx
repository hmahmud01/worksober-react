import * as React from 'react'

type Props = {
    saveMember: (member: IMember | any) => void
}

export const AddMember: React.FC<Props> = ({ saveMember }) => {
    const [member, setMember] = React.useState<IMember | {}>()

    const handleMemberData = (e: React.FormEvent<HTMLInputElement>) => {
        setMember({
            ...member,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const addNewMember = (e: React.FormEvent) => {
        e.preventDefault();
        saveMember(member);
    }

    return(
        <form onSubmit={addNewMember} className="add-member">
            <input
                type="text"
                id="name"
                placeholder="Name"
                onChange={handleMemberData}
            >
            </input>
            <input
                type="number"
                id="age"
                placeholder="Age"
                onChange={handleMemberData}
            >   
            </input>
            <input
                type="text"
                id="detail"
                placeholder="Detail"
                onChange={handleMemberData}
            >
            </input>
            <input
                type="text"
                id="club"
                placeholder="Club"
                onChange={handleMemberData}
            >
            </input>
            <input
                type="text"
                id="img"
                placeholder="Image"
                onChange={handleMemberData}
            >
            </input>
            <button disabled={member == undefined? true: false}>
                Add Member
            </button>
        </form>
    )
}