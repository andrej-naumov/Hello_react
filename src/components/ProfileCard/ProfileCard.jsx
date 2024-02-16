import './styles.css';

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


function ProfileCard() {
    return (
        <div className="profile-card">
            <img src={profile.src} alt="Аватар" />
            <h2>{profile.firstName} {profile.lastName}</h2>
            <h2 className={(profile.age) > 50 ? "senior" : "junior"}>{normalizedName()}</h2>
            <p>Работа - {profile.job}</p>
            <p>Цвет волос: {profile.hairColor}, Рост: {profile.height}</p>
            <p>Хобби: {profile.hobby}</p>
        </div>
    );
}

export default ProfileCard;