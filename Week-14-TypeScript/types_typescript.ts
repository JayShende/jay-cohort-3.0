type employee={
    name:string,
    job:string
}

type manager={
    name:string,
    dept:string
}

type teamlead=employee & manager;

const teamLeadData:teamlead={
    name:"Jay Shende",
    job:"SDE-1",
    dept:"SWE"
}

console.log(teamLeadData.name);
console.log(teamLeadData.job);
console.log(teamLeadData.dept);