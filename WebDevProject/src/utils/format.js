const subjects = [
    "Arts",
    "Biology",
    "Science",
    "PE",
    "Physics",
    "Geography",
    "History",
    "Math",
    "English",
    "Chemistry",
]

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

function getSubject(subjectNumber) {
    return subjects[subjectNumber - 1]
}

function convertHoursToMinutes(time) {
    const [hours, minutes] = time.split(":")
    return Number((hours * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}