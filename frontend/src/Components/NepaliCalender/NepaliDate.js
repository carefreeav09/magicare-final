/* Length of Gregroian months in a non-leap year */
const GregorianMonths = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

const NepaliMonthData = {
	/*
	 In the following table we map the dates:
	 The year is the nepali year
	 The entries in the array are the nepali Day for the Gregorian 1st of the month
	 So first entry is 1st May  i.e. the day in baisakh which is the first of May.
	 second entry is 1st June
	 third entry is 1st July
	 fourth entry is 1st August
	 fifth entry is 1st September
	 sixth entry is 1st October
	 seventh entry is 1st November
	 eighth entry is 1st December
	 ninth entry is 1st January
	 tenth entry is 1st February
	 eleventh entry is 1st March
	 twelfth entry is 1st April
	 */

	// this data are based on http://www.ashesh.com.np
	1970: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	1971: [19, 19, 18, 17, 17, 15, 16, 16, 18, 19, 18, 19],
	1972: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 19, 19],
	1973: [19, 20, 18, 18, 17, 16, 17, 17, 18, 20, 18, 20],
	1974: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	1975: [19, 19, 18, 17, 16, 16, 16, 16, 18, 19, 18, 19],
	1976: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 19, 20],
	1977: [19, 20, 18, 18, 17, 16, 16, 17, 18, 20, 18, 20],
	1978: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	1979: [19, 19, 18, 17, 16, 15, 16, 16, 18, 19, 18, 19],
	1980: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 19, 20],
	1981: [19, 19, 18, 18, 17, 16, 16, 17, 18, 19, 18, 19],
	1982: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	1983: [19, 19, 18, 17, 16, 15, 16, 16, 18, 19, 18, 19],
	1984: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 19, 20],
	1985: [19, 19, 18, 18, 17, 16, 16, 17, 18, 19, 18, 19],
	1986: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	1987: [19, 19, 17, 17, 16, 15, 16, 16, 18, 19, 18, 19],
	1988: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 19, 20],
	1989: [19, 19, 18, 18, 17, 16, 16, 16, 18, 19, 18, 19],
	1990: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	1991: [19, 19, 17, 17, 16, 15, 16, 16, 18, 19, 18, 19],

	// this data based on http://nepalicalendar.rat32.com/index.php
	1992: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 20],
	1993: [19, 19, 18, 18, 17, 16, 16, 16, 18, 19, 18, 19],
	1994: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	1995: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	1996: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 20],
	1997: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	1998: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	1999: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2000: [18, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 20],
	2001: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	2002: [19, 19, 18, 17, 16, 15, 16, 16, 18, 19, 18, 19],
	2003: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2004: [18, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 20],
	2005: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	2006: [19, 19, 18, 17, 16, 15, 16, 16, 18, 19, 18, 19],
	2007: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2008: [18, 18, 17, 17, 16, 15, 15, 16, 17, 18, 18, 20],
	2009: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	2010: [19, 19, 18, 17, 16, 15, 16, 16, 18, 19, 18, 19],
	2011: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2012: [18, 18, 17, 17, 16, 15, 15, 16, 17, 18, 18, 19],
	2013: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	2014: [19, 19, 18, 17, 16, 15, 16, 16, 18, 19, 18, 19],
	2015: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2016: [18, 18, 17, 17, 16, 15, 15, 16, 17, 18, 18, 19],
	2017: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	2018: [19, 19, 17, 17, 16, 15, 16, 16, 18, 19, 18, 19],
	2019: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 19],
	2020: [18, 18, 17, 17, 16, 15, 15, 15, 17, 18, 18, 19],
	2021: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	2022: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2023: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 19],
	2024: [18, 18, 17, 17, 16, 15, 15, 15, 17, 18, 18, 19],
	2025: [19, 19, 18, 17, 17, 16, 16, 16, 18, 19, 18, 19],
	2026: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2027: [18, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 19],
	2028: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 18, 19],
	2029: [19, 19, 18, 17, 17, 15, 16, 16, 18, 19, 18, 19],
	2030: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2031: [18, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 19],
	2032: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 18, 19],
	2033: [19, 19, 18, 17, 16, 15, 16, 16, 18, 19, 18, 19],
	2034: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2035: [18, 19, 17, 17, 16, 15, 15, 16, 17, 18, 17, 19],
	2036: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 18, 19],
	2037: [19, 19, 18, 17, 16, 15, 16, 16, 18, 19, 18, 19],
	2038: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2039: [18, 18, 17, 17, 16, 15, 15, 16, 17, 18, 17, 18],
	2040: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 18, 19],
	2041: [19, 19, 18, 17, 16, 15, 16, 16, 18, 19, 18, 19],
	2042: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2043: [18, 18, 17, 17, 16, 15, 15, 16, 17, 18, 17, 18],
	2044: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 18, 19],
	2045: [19, 19, 17, 17, 16, 15, 16, 16, 18, 19, 18, 19],
	2046: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2047: [18, 18, 17, 17, 16, 15, 15, 15, 17, 18, 17, 18],
	2048: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 18, 19],
	2049: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2050: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 19],
	2051: [18, 18, 17, 17, 16, 15, 15, 15, 17, 18, 17, 18],
	2052: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 18, 19],
	2053: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2054: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 19],
	2055: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 17, 18],
	2056: [18, 18, 17, 16, 16, 14, 15, 15, 17, 18, 18, 19],
	2057: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2058: [18, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 19],
	2059: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 17, 18],
	2060: [18, 18, 17, 16, 15, 14, 15, 15, 17, 18, 18, 19],
	2061: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2062: [18, 18, 17, 17, 16, 15, 15, 16, 17, 19, 17, 19],
	2063: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 17, 18],
	2064: [18, 18, 17, 16, 15, 14, 15, 15, 17, 18, 18, 19],
	2065: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2066: [18, 18, 17, 17, 16, 15, 15, 16, 17, 18, 17, 19],
	2067: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 17, 18],
	2068: [18, 18, 17, 16, 15, 14, 15, 15, 17, 18, 18, 19],
	2069: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2070: [18, 18, 17, 17, 16, 15, 15, 16, 17, 18, 17, 18],
	2071: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 17, 18],
	2072: [18, 18, 16, 16, 15, 14, 15, 15, 17, 18, 18, 19],
	2073: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 18, 19],
	2074: [18, 18, 17, 17, 16, 15, 15, 15, 17, 18, 17, 18],
	2075: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 17, 18],
	2076: [18, 18, 16, 16, 15, 14, 15, 15, 16, 18, 18, 19],
	2077: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 19],
	2078: [18, 18, 17, 17, 16, 15, 15, 15, 17, 18, 17, 18],
	2079: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 17, 18],
	2080: [18, 18, 16, 16, 15, 14, 15, 15, 16, 18, 18, 19],
	2081: [19, 19, 18, 17, 16, 15, 16, 16, 17, 19, 17, 18],
	2082: [18, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 18],
	2083: [18, 18, 17, 16, 16, 15, 16, 16, 17, 19, 17, 18],
	2084: [18, 18, 17, 16, 16, 15, 16, 16, 17, 19, 18, 19],
	2085: [19, 19, 17, 17, 16, 16, 16, 16, 17, 19, 17, 18],
	2086: [18, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 18],
	2087: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 16, 17],
	2088: [17, 18, 17, 16, 15, 15, 15, 15, 16, 18, 17, 18],
	2089: [18, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 18],
	2090: [18, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 18],
	2091: [18, 18, 17, 16, 16, 15, 15, 15, 16, 18, 16, 17],
	2092: [17, 18, 17, 16, 15, 14, 15, 15, 16, 18, 17, 18],
	2093: [18, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 18],
	2094: [18, 18, 17, 16, 16, 15, 16, 16, 17, 19, 17, 18],
	2095: [18, 18, 17, 16, 16, 15, 15, 15, 17, 18, 16, 17],
	2096: [17, 18, 17, 16, 15, 14, 15, 15, 17, 18, 18, 19],
	2097: [19, 19, 17, 17, 16, 15, 16, 16, 17, 19, 17, 18],
	2098: [18, 18, 17, 16, 16, 15, 15, 16, 17, 19, 17, 19],
	2099: [18, 18, 17, 16, 16, 15, 15, 15, 17, 19, 17, 18],
	2100: [18, 18, 16, 16, 15, 15, 15, 15, 17, 18, 18, 19],
}


class NepaliDate {
	constructor(year, month, day) {

		this.nepaliYear = year
		this.nepaliMonth = month
		this.nepaliDay = day
	}

	/* Create a NepaliDate object from a JS Date object. */
	static fromgregorian(date) {
		if (!date) {
			return undefined;
		}
		let year = date.getFullYear();
		let month = date.getMonth();
		let day = date.getDate()

		let nepaliYear = year + 56;
		let nepaliMonth = month + 8;
		if (nepaliMonth >= 12) {
			nepaliMonth -= 12;
			nepaliYear += 1;
		}
		let nepaliDay = day + NepaliMonthData[nepaliYear][nepaliMonth] - 1;
		let otherDay = day - GregorianMonths[month];
		let otherMonth = nepaliMonth + 1;
		let otherYear = nepaliYear;
		if (otherMonth >= 12) {
			otherMonth -= 12;
			otherYear += 1;
		}
		if (month === 2 && ((year % 4) === 0) && (((year % 100) !== 0) || ((year % 400) === 0))) {
			otherDay += 1;
		}
		otherDay = otherDay + NepaliMonthData[otherYear][otherMonth] - 1;
		if (otherDay > 0) {
			nepaliYear = otherYear;
			nepaliMonth = otherMonth;
			nepaliDay = otherDay;
		}
		return new NepaliDate(nepaliYear, nepaliMonth + 1, nepaliDay)
	}

	/* Create a NepaliDate object for the current date */
	static today() {
		return NepaliDate.fromgregorian(new Date());
	}

	/* Return a String representing the nepali date */
	toDateString() {
		return this.nepaliYear.toString() + "/" + this.nepaliMonth + "/" + this.nepaliDay;
	}

	/* Return a JS Date object for the NepaliDate date. */
	gregorian() {
		let y = this.nepaliYear;
		let m = this.nepaliMonth - 1;
		let d = this.nepaliDay;
		d -= NepaliMonthData[y][m] - 1;
		m -= 8;
		y -= 56;
		return new Date(y, m, d);
	}

	/* Create a NepaliDate object from a string in the form YYYY/MM/DD
	 Also accepted YYYY/M/DD, YYYY/M/D, YYYY/MM/D
	 and forms with out a year.
	 The forms without a year are treated as being in the past year.
	 */
	static fromPartialString(v) {
		let match = /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/.exec(v);
		if (match) {
			return new NepaliDate(match[1], match[2], match[3]);
		}
		match = /^(\d{1,2})\/(\d{1,2})$/.exec(v);
		if (match) {
			let nd = NepaliDate.today();
			let y = nd.nepaliYear;
			let m = match[1];
			let d = match[2];
			if (m > nd.nepaliMonth || (m === nd.nepaliMonth && d > nd.nepaliDay)) {
				y -= 1;
			}
			return new NepaliDate(y, m, d);
		}
	}
}

export default NepaliDate;