const useDateFormatter = (dateString) => {
  const newDate = dateString.split(' ')[0].split('-');

  var monthNames = [
    'Jan',
    'Febr',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dateObj = {
    date: newDate[2],
    month: monthNames[parseInt(newDate[1]) - 1],
    year: newDate[0],
  };

  return dateObj;
};

export default useDateFormatter;
