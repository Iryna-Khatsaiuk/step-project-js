"use strict";

const DATA = [
	{	id:1,
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "swimming pool",
		category: "master",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		id: 2,
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "gym",
		category: "specialist",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		id: 3,
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "kids club",
		category: "instructor",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		id: 4,
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "fight club",
		category: "master",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		id: 5,
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "gym",
		category: "instructor",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		id: 6,
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "swimming pool",
		category: "specialist",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		id: 7,
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "fight club",
		category: "instructor",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		id: 8,
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "kids club",
		category: "specialist",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		id: 9,
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "gym",
		category: "master",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		id: 10,
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "swimming pool",
		category: "specialist",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		id: 11,
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "fight club",
		category: "master",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		id: 12,
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "kids club",
		category: "instructor",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		id: 13,
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "gym",
		category: "specialist",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		id: 14,
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "swimming pool",
		category: "instructor",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		id: 15,
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "fight club",
		category: "specialist",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		id: 16,
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "kids club",
		category: "master",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		id: 17,
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "swimming pool",
		category: "master",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		id: 18,
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "gym",
		category: "specialist",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		id: 19,
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "kids club",
		category: "instructor",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		id: 20,
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "fight club",
		category: "master",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		id: 21,
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "gym",
		category: "instructor",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		id: 22,
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "swimming pool",
		category: "specialist",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		id: 23,
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "kids club",
		category: "master",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		id: 24,
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "fight club",
		category: "specialist",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];


let scrollPosition;

const disableScroll = () => {
	const body = document.body;
	scrollPosition = window.scrollY;

	body.style.overflow = 'hidden';
	body.style.position = 'fixed';
	body.style.width = '100%';
	body.style.top = `-${scrollPosition}px`;

}

const enableScroll = () => {
	const body = document.body;

	body.style.overflow = '';
	body.style.position = '';
	body.style.width = 'auto';
	body.style.top = '';

	window.scrollTo(0, scrollPosition);
}







// Render card-----------------------
const templateTrainers = document.querySelector("#trainer-card").content;
const trainersContainer = document.querySelector(".trainers-cards__container");
const trainerModalTemplate = document.querySelector("#modal-template").content;
console.log(trainerModalTemplate);

const renderCard = function (data) {
	
	trainersContainer.innerText = "";
	data.forEach(trainer => {
		const trainerCard = templateTrainers.cloneNode(true);
		

		trainerCard.querySelector(".trainer__img").src = trainer.photo;
		trainerCard.querySelector(".trainer__img").alt = `${trainer["first name"]} ${trainer["last name"]}`;
		trainerCard.querySelector(".trainer__name").innerText = `${trainer["first name"]} ${trainer["last name"]}`;
		trainerCard.querySelector(".trainer").setAttribute("data-id", trainer.id )
		trainersContainer.append(trainerCard);
	})
	const sorting = document.querySelector(".sorting")
	console.log(sorting)
	const sidebar = document.querySelector(".sidebar")
	console.log(sidebar.hidden);
	sorting.hidden = false;
	sidebar.hidden = false;
	
	
}


document.body.onload = function () {
	setTimeout(function () {
		const preloader = document.querySelector("#preloader").style.display = "none";
		renderCard(DATA);
	}, 2000);
}



const sortingBtn = document.querySelectorAll(".sorting__btn"); 
const sortingElement = document.querySelector(".sorting")





sortingElement.addEventListener("click", (event) => {
	const sortingArr = [...DATA];
	const target = event.target;
	if (target.tagName !== 'BUTTON') {
		return;
	}
	const sortingBtnActive = document.querySelector(".sorting__btn--active")
	
	if (sortingBtnActive) {
		sortingBtnActive.classList.remove("sorting__btn--active");
	}
	
		target.classList.add("sorting__btn--active");
		
	
	if (target.innerText === "ЗА ПРІЗВИЩЕМ") {
		sortingArr.sort((a, b) => a['last name'].localeCompare(b['last name']));
		renderCard(sortingArr);
		renderCard(filteredArr);
	}
	if (target.innerText === "ЗА ДОСВІДОМ") {
		sortingArr.sort((a, b) => parseInt(b['experience']) - parseInt(a['experience']));
		
		renderCard(sortingArr);
		renderCard(filteredArr);

	}
	if (target.innerText === "ЗА ЗАМОВЧУВАННЯМ") {
		
		renderCard(DATA);
		renderCard(filteredArr);

	}

	
})
// Filter------------------------------------
const filterForm = document.querySelector(".sidebar__filters");

filterForm.addEventListener('submit', function (e) {
	e.preventDefault();

	let direction = document.querySelector('input[name="direction"]:checked').value;
	let category = document.querySelector('input[name="category"]:checked').value;

	let filteredArr = DATA.filter((item) => {
		return (direction === "all" || item.specialization === direction) && (category === "all" || item.category === category);
	});

	renderCard(filteredArr);
});


// modal window------------------


trainersContainer.addEventListener("click", (event) => {
	const target = event.target;

	if (target === event.currentTarget) {
		return;
	}

	const modalWindow = trainerModalTemplate.cloneNode(true);
	
	
	 const activeCard = target.closest(".trainer");
	
	console.log(activeCard);
										
	const trainer = DATA.find(el => el.id === +activeCard.dataset.id);


	modalWindow.querySelector(".modal__name").innerText = `${trainer["first name"]} ${trainer["last name"]}`;
	modalWindow.querySelector(".modal__point--category").innerText = trainer.category;
	modalWindow.querySelector(".modal__img").src = trainer.photo;
	modalWindow.querySelector(".modal__point--experience").innerText = trainer.experience;
	modalWindow.querySelector(".modal__point--specialization").innerText = trainer.specialization;
	modalWindow.querySelector(".modal__text").innerText = trainer.description;
	
	modalWindow.querySelector(".modal__close")
		.addEventListener("click", () => {
			document.querySelector(".modal").remove();
	})
	modalWindow.querySelector(".modal__body")
		.addEventListener("click", () => {
			document.querySelector(".modal").remove();
			enableScroll();
		})
	document.body.append(modalWindow);
	disableScroll();
});


// Sort--------------


