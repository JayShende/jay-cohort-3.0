interface Users{
    firstname:string,
    lastname:string,
    age:number
}

function legal(u:Users[])
{
    for(var i=0;i<u.length;i++)
    {
        if(u[i].age>=18)
        {
            console.log(u[i].firstname);
        }
    }
}


const lis:Users[]=[
    {
        "firstname":"Jay",
        "lastname":"Shende",
        "age":22
    },

    {
        "firstname":"Jay2",
        "lastname":"Shende",
        "age":2
    },

    {
        "firstname":"Jay3",
        "lastname":"Shende",
        "age":18
    },
    {
        "firstname":"Jay4",
        "lastname":"Shende",
        "age":22
    },
    {
        "firstname":"Jay5",
        "lastname":"Shende",
        "age":22
    }
]

legal(lis);