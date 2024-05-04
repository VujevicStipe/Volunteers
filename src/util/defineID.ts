export const defineID = (id: string | undefined) => {
    return id ? id.replace(":", "") : console.log("can't define url");
};