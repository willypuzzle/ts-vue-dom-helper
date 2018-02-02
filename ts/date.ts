import Holidays = require('date-holidays')
import * as moment from 'moment';

let findFirstWorkingDayAvailable = (beginDate : Date = new Date(), nation = 'IT') => {
    let hold = beginDate;
    let hd = new Holidays(nation);

    while(!checkDate(hold, hd)){
        hold = moment(hold).add(1, 'days').toDate();
    }

    return hold;
}

let checkDate = (date, hd) => {
    return moment(date).day() !== 6 && moment(date).day() !== 0 && !hd.isHoliday(date);
}

export {
    findFirstWorkingDayAvailable
}