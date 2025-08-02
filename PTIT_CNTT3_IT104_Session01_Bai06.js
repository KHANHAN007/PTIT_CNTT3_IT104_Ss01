const creatUser = (name, age = 18, role = "user") => {
    return {
        name,
        age,
        role
    };
}
console.log(creatUser("Dev"));
console.log(creatUser("Nguyen Van A", 20, "admin"));