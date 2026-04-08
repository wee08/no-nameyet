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
