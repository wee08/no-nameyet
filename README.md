    <div
    key={idx}
    className={`w-full my-5 text-center flex justify-center items-center text-xl col-start-${AddStartDay}
        ${currentDay === day ? "bg-10per/50 rounded-full" : ""}`}
    >
    {day}
    </div>

    works fine for columns less than 6, but if startDay is 6 or greater, the day starts from the first column, breaking the layout.

    Instead, you can use the style prop to handle dynamic positioning correctly:

    <div
    key={idx}
    style={idx === 0 ? { gridColumnStart: startDay + 1 } : {}}
    className={`w-full my-5 text-center flex justify-center items-center text-xl
        ${currentDay === day ? "bg-10per/50 rounded-full" : ""}`}
    >
    {day}
    </div>

implement the previous day of the month in the calendar table and makes it dynamic base on each month

implement the next day of month by calculate how many grid are remained and use those to get the start days of the next month and after use all of the data to fills in the remianing grid

implement dynamic calendar to see the next coming date in the calendar's cells

fixed day of next month

- it should fill in the remain grid not render the day of next month to the grid (if we do that it will increase the column)
  ?? we still have the same bug but it happens less after fixed the bug above ?
  -- so i spot this issue it will hanpen when the start day is 0. once it is equal to zero the .splice() method will contain the zero value mean that we will take all of the previous month's day in the array.
- for prediction i think we will have the same issue in the DisplayNextDate conponent.
  fixing it
- right now i let it fill the whole data in the calendar's cell
- solution is you need to make a conditio for the lastIdx variable if startDayProp is 0 we will return empty array instead of entire data
  const lastIdx = startDayProp === 0 ? [] : dayOfPreM.slice(getLastIdx);

* display a proper month and year on the header
  display month and keep the chevron icon stable
  for the year when month is greater then 11 we will reset back to 0
  and if it less then 0 we will reset it to 11

- another bug the start day gone wrong when the year reverses ?
  when the year below 2026 I can consume that when the year is below current year the previous day will render wrong, as i spot i can see that on December 2025 the previous day has only 1 but the calendar i have built is added 2 previous day
- this problem occours because the month which we increase or decrease it still in the same current year which mean even we try to increase or decrease it, it will change only month within the same year
- the year is changed only number not an exact year.

* to solve it we need to implement these two line of code

  const curD = dayjs().date();
  let current = dayjs(`${yearCount}-${curM + 1}-${curD}`);

  curD to get current day for using in current varibale
  current variable we need to implement a dynamic year month and day if we don't implement the day so the current day will be constant.

* after debugging this project the code is really messy even i understand it so before I build another feature and render more UI I will make the code more cleaner and easier to read to be able to make it scaleable
