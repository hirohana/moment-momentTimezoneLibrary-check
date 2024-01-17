import moment from "moment-timezone";

const dateStr = "2024-01-16";
const jstDateTime = moment.tz(dateStr, "Asia/Tokyo").format();

console.log(jstDateTime)

// JSTの日付文字列をUTCに変換してISO 8601形式で出力
const utcDateTime = moment(jstDateTime).utc().format();

console.log(utcDateTime);