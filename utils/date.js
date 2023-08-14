export const calculateAge = (stringDate) => {
    const dateOfBirth = Date.parse(stringDate);
    const dateDiff = Date.now() - dateOfBirth;
    return new Date(dateDiff).getUTCFullYear() - 1970;
};