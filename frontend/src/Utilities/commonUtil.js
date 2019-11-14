import calenderData from "../Constants/calenderData";
import {getBsMonthDays, getMonthDaysNumFormMinBsYear, } from './calenderFunctions';

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

export const convertADtoBS = (adYear, adMonth, adDate) => {

    let bsYear = adYear + 57;
    let bsMonth = (adMonth + 9) % 12;
    bsMonth = bsMonth === 0 ? 12 : bsMonth;
    let bsDate = 1;

    if (adMonth < 4) {
        bsYear -= 1;
    }

    const bsMonthFirstAdDate = convertBStoAD(bsYear, bsMonth, 1);
    if (adDate >= 1 && adDate < bsMonthFirstAdDate.getDate()) {
        if (adMonth === 4) {
            const bsYearFirstAdDate = convertBStoAD(bsYear, 1, 1);
            if (adDate < bsYearFirstAdDate.getDate()) {
                bsYear -= 1;
            }
        }
        bsMonth = (bsMonth !== 1) ? bsMonth - 1 : 12;
        const bsMonthDays = getBsMonthDays(bsYear, bsMonth);
        bsDate = bsMonthDays - (bsMonthFirstAdDate.getDate() - adDate) + 1;
    } else {
        bsDate = adDate - bsMonthFirstAdDate.getDate() + 1;
    }

    return { bsYear, bsMonth, bsDate };
}

export const convertBStoAD = (bsYear, bsMonth, bsDate) => {
    const daysNumFromMinBsYear = getTotalDaysNumFromMinBsYear(bsYear, bsMonth, bsDate);
    const adDate = new Date(calenderData.minAdDateEqBsDate.ad.year, calenderData.minAdDateEqBsDate.ad.month, calenderData.minAdDateEqBsDate.ad.date - 1);
    adDate.setDate(adDate.getDate() + daysNumFromMinBsYear);
    return adDate;
}

export const getTotalDaysNumFromMinBsYear = (bsYear, bsMonth, bsDate) => {
    if (bsYear < calenderData.minBsYear || bsYear > calenderData.maxBsYear) {
        return null;
    }

    let daysNumFromMinBsYear = 0;
    const diffYears = bsYear - calenderData.minBsYear;
    for (let month = 1; month <= 12; month++) {
        if (month < bsMonth) {
            daysNumFromMinBsYear += getMonthDaysNumFormMinBsYear(month, diffYears + 1);
        } else {
            daysNumFromMinBsYear += getMonthDaysNumFormMinBsYear(month, diffYears);
        }
    }

    if (bsYear > 2085 && bsYear < 2088) {
        daysNumFromMinBsYear += bsDate - 2;
    } else if (bsYear === 2085 && bsMonth > 5) {
        daysNumFromMinBsYear += bsDate - 2;
    } else if (bsYear > 2088) {
        daysNumFromMinBsYear += bsDate - 4;
    } else if (bsYear === 2088 && bsMonth > 5) {
        daysNumFromMinBsYear += bsDate - 4;
    } else {
        daysNumFromMinBsYear += bsDate;
    }

    return daysNumFromMinBsYear;
}