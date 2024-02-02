export const exportCSV = async (userData, header) => {
  const userArray = userData.map((user) => Object.values(user));
  userArray.unshift(header);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    userArray.map((row) => row.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  let temp_link = document.createElement("a");
  temp_link.setAttribute("href", encodedUri);
  temp_link.setAttribute("download", `users_1.csv`);
  document.body.appendChild(temp_link);
  document.body.removeChild(temp_link);
  temp_link.click();
};
