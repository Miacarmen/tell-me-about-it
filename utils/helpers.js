// helper for date formatting
module.exports = {
    format_time: (date) => {
      //formats date as MM/DD/YYYY
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`;
    },
  };