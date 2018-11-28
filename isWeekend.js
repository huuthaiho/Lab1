function isWeekend()
{
    const todayDate  = new Date();
    const day= todayDate.getDay();

    return isWeekend.labels[day] || isWeekend.labels['default'];
}

isWeekend.labels = { 
    0: 'weekend', 
    6: 'weekend', 
    default: 'weekday' 
  };

  console.log(isWeekend());