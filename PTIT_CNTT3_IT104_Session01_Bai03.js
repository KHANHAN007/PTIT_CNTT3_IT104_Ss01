const students = [
    { id: 1, name: "Nguyen Van A" },
    { id: 2, name: "Tran Thi B" },
    { id: 3, name: "Le Van C" }];

students.forEach(student => {
    console.log(`Xin chao ${student.name}. Ma so: ${student.id}`);
});