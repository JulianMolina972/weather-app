export const getCurrentDay = (day, add = 0) => {
  if(day + add > 6) {
    day = (day + add) - 7;
  }

  switch (day) {
    case 1:
      return "Mon"
      break;
    case 2:
      return "Tue"
      break;
    case 3:
      return "Wed"
      break;
    case 4:
      return "Thur"
      break;
    case 5:
      return "Fri"
      break;
    case 6:
      return "Sat"
      break;
    case 7:
      return "Sun"
      break;
  
    default:
      break;
  }
}