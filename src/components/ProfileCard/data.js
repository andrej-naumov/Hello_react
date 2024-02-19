const profile = {
    src: "media/img/avatar – Google Поиск.png",
    firstName: "Имя",
    lastName: "Фамилия",
    job: "art of job",
    hairColor: "hair color",
    height: "180cm",
    hobby: "art of hobby",
    age: 31 // if > 50 - another color at name
}

const normalizedName = () => { return `${profile.firstName} ${profile.lastName}` };


export {profile, normalizedName}