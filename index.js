// Please read the README.md to understand what to do. Happy Coding !
const fetchUserData = async() => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await response.json();
        const modifiedUsers = usersData.map(user => ({
            Name: user.name,
            Username: user.username,
            Email: user.email,
            Address: user.address.street, 
            Phone: user.phone,
            Website: user.website,
            Company: user.company.name 
          }));
        console.log("Modified Users List:",modifiedUsers);
    
        const filterUsersWithBizEmail = modifiedUsers.filter(user => user.Email.endsWith('.biz'));
        console.log("Filtered Users List:",filterUsersWithBizEmail);
    
        modifiedUsers.sort((a, b) => a.Name.localeCompare(b.Name));
        console.log("Sorted Users List:",modifiedUsers);
    }
    catch(error)
    {
        return console.log("An error has occured")
    }
}

fetchUserData();
