"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Holidays = require("date-holidays");
var moment = require("moment");
var findFirstWorkingDayAvailable = function (beginDate, nation) {
    if (beginDate === void 0) { beginDate = new Date(); }
    if (nation === void 0) { nation = 'IT'; }
    var hold = beginDate;
    var hd = new Holidays(nation);
    while (!checkDate(hold, hd)) {
        hold = moment(hold).add(1, 'days').toDate();
    }
    return hold;
};
exports.findFirstWorkingDayAvailable = findFirstWorkingDayAvailable;
var checkDate = function (date, hd) {
    return moment(date).day() !== 6 && moment(date).day() !== 0 && !hd.isHoliday(date);
};
