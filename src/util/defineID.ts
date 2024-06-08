export const defineID = (id: string | undefined) => {
  return id ? id.replace(":", "") : console.log("can't define url");
};

export const generateRandomId = () => {
  const randomId = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .slice(0, 9);
  return randomId;
};
