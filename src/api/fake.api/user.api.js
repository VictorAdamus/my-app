const professions = {
    doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Фрилансер" },
    waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
    physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Эскорт" },
    engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Безработный" },
    actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
    cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" }
}
const qualities = {
    tedious: { _id: "67rdca3eeb7f6fgeed471198", name: "Задрот", color: "primary" },
    strange: { _id: "67rdca3eeb7f6fgeed471100", name: "Странный", color: "secondary" },
    buller: { _id: "67rdca3eeb7f6fgeed4711012", name: "Троль", color: "success" },
    alcoholic: { _id: "67rdca3eeb7f6fgeed471101", name: "Алкоголик", color: "danger" },
    handsome: { _id: "67rdca3eeb7f6fgeed471102", name: "Красавчик", color: "info" },
    uncertain: { _id: "67rdca3eeb7f6fgeed471103", name: "Неуверенный", color: "dark" },

}

const users = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Антон Фалев",
        profession: professions.doctor,
        qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
        completedMeetings: 36,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Павел Пастушенко",
        profession: professions.doctor,
        qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
        completedMeetings: 15,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Дмитрий Вячеславович",
        profession: professions.doctor,
        qualities: [qualities.buller],
        completedMeetings: 247,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Сергей Глущенко",
        profession: professions.waiter,
        qualities: [qualities.uncertain],
        completedMeetings: 148,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Артур Статков",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 37,
        rate: 4.6,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Дмитрий Филь",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 147,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Виктор Адамус",
        profession: professions.engineer,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 72,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Антон Викторович",
        profession: professions.engineer,
        qualities: [qualities.handsome],
        completedMeetings: 72,
        rate: 5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Алексей Дмитриевич",
        profession: professions.cook,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Сергей Козленко",
        profession: professions.cook,
        qualities: [qualities.handsome, qualities.buller],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Дмитрий Евгеньевич",
        profession: professions.actor,
        qualities: [qualities.uncertain, qualities.strange],
        completedMeetings: 434,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Дмитрий Брит",
        profession: professions.actor,
        qualities: [qualities.handsome],
        completedMeetings: 434,
        rate: 5,
        bookmark: false
    },
]
export function fetchAll() {
    return users
}
