import TodoObj from "../store";

export const exportCSV = async (userData, header) => {
  console.log(userData, header);
  const userArray = TodoObj.Todo.map((user) => Object.values(user));
  userArray.unshift(header);
  console.log(userArray);

  var objs = userArray.map((x) => ({
    firstName: x[0],
    lastName: x[1],
    age: x[3],
    email: x[4],
  }));

  console.log(objs);

  const csvContent = "data:text/csv;charset=utf-8," + userArray;
  //.map((row) => row.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  let temp_link = document.createElement("a");
  temp_link.setAttribute("href", encodedUri);
  temp_link.setAttribute("download", `users.csv`);
  document.body.appendChild(temp_link);
  document.body.removeChild(temp_link);
  temp_link.click();
};
