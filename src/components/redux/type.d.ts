interface IMember {
    name: string,
    age: number,
    detail: string,
    club: string,
    img: any,
}

type MemberState = {
    members: IMember[]
}

type MemberAction = {
    type: string
    member: IMember
}

type DispatchType = (args: MemberAction) => MemberAction