
export const isEmpty = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
};

export const convertToPascalCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
};