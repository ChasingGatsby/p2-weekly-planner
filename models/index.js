User has many weeks

weeks belong to users

Weeks have many Days

Days belong to weeks

Users have many days

Users have futureToDo

futureToDo belongs to User

weekday belongs to day




Day.init(
    id,
    toDoText,
    date,
    priority,
    day_id foreignkey to weekday id
    user_id
)

weekday {
    id:
    dayname:
}

Week.init(
    id
    date,
    days
)

futureToDo.init(
    id,
    user_id,
    content
)