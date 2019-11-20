import nepaliCalendarUtility from 'nepali-calendar-js';
import moment from "moment";

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

export const getExpiryDate = (date, days) => {
    //get the string as a date in Nepali calendar and split it
    let dateToSplit = date && date.split('/');

    // pass the date to AD
    let dateToAD = nepaliCalendarUtility.toGregorian(parseInt(dateToSplit[0], 10), parseInt(dateToSplit[1], 10), parseInt(dateToSplit[2], 10));

    //get moment date equivalent of the date
    let momentDate = moment(`${dateToAD.gy}/${dateToAD.gm}/${dateToAD.gd}`).format('L');

    //add days as needed using the add function
    let expiryDateInAd = moment(momentDate).add(days, 'days').format('YYYY/MM/DD');

    //split the date to parse into nepali date again
    let dateToBS = expiryDateInAd && expiryDateInAd.split('/');

    //convert the date to BS
    let nepaliExpiryDate = nepaliCalendarUtility.toNepali(parseInt(dateToBS[0], 10), parseInt(dateToBS[1], 10), parseInt(dateToBS[2], 10));

    //return the date
    return `${nepaliExpiryDate.ny}/${nepaliExpiryDate.nm}/${nepaliExpiryDate.nd}`;
}