type User={
    name:string,
    lastname:string,
    phoneNum:Number
}

type Admin={
    name:string,
    lastname:string,
    dept:string
}

function role(a:User | Admin)
{
    console.log("Welcome " +a.name);
}

const u1:User={
    "name":"Jay",
    "lastname":"Shende",
    "phoneNum":7894456123
}

const a1:Admin={
    "name":"Jay-1",
    "lastname":"Shende-1",
    "dept":"Tech"
}

role(a1);
role(u1);