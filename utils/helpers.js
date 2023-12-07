module.exports = {
  format_date: (date) => {
    const options = { month: "2-digit", day: "2-digit" };
    const formattedDate = date.toLocaleDateString("en-us", options);
    return formattedDate;
  },
  user_eq: (a, b, options) => {
    if (a == b) {
      return options.fn(this);
    }
  },
};
