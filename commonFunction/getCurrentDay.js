function getCurrentDay(){
  let newEDayMonth  = (new Date().getMonth()+1)<10?'0'+(new Date().getMonth()+1):(new Date().getMonth()+1)
  let newEDayDay  = (new Date().getDate())<10?'0'+(new Date().getDate()):(new Date().getDate())
  let currentDay = new Date().getFullYear() + '-' + newEDayMonth + '-' + newEDayDay
  return currentDay
}