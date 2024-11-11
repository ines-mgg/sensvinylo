const getDate = (date: any) => {
  const parts = date.split(".");
  const newDate = new Date(parts[2], parts[1] - 1, parts[0]);
  return newDate.toISOString();
};

export default getDate;