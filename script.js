const users = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: '28 years old',
    info: 'A passionate wildlife enthusiast and photographer, often found exploring nature',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    age: '34 years old',
    info: 'An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Mike Brown',
    email: 'mikebrown@example.com',
    age: '45 years old',
    info: 'Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions',
    image: '',
  },
  {
    name: 'Sarah Johnson',
    email: 'sarahjohnson@example.com',
    age: '30 years old',
    info: 'A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    name: 'Alex Martinez',
    email: 'alexmartinez@example.com',
    age: '27 years old',
    info: '',
    image: '',
  },
];

const container = document.querySelector('.users-container');
const template = document.querySelector('#user-template');

const defaultAvatar = 'https://www.w3schools.com/w3images/avatar2.png';

function createUserCard(user) {
  const userCard = template.content.cloneNode(true);

  userCard.querySelector('.user-image').src = user.image || defaultAvatar;

  userCard.querySelector('.user-name').textContent = user.name;
  userCard.querySelector('.user-email').textContent = user.email;
  userCard.querySelector('.user-age').textContent = user.age;
  userCard.querySelector('.user-info').textContent = user.info;

  addCardEventListeners(userCard);

  return userCard;
}

function addCardEventListeners(userCard) {
  const closeButton = userCard.querySelector('.btn-close');
  closeButton.addEventListener('click', () =>
    handleRemoveUserCard(closeButton)
  );

  const cardContainer = userCard.querySelector('.user-container');
  cardContainer.addEventListener('mouseenter', () =>
    cardContainer.classList.add('tilt')
  );
  cardContainer.addEventListener('mouseleave', () =>
    cardContainer.classList.remove('tilt')
  );
}

function handleRemoveUserCard(closeButton) {
  const card = closeButton.closest('.user-container');
  card.classList.add('fade-out');
  setTimeout(() => {
    card.remove();
    checkIfEmpty();
  }, 400);
}

function showEmptyMessage() {
  const message = document.createElement('div');
  message.textContent = 'Everything has been removed';
  message.classList.add('empty-message');
  container.appendChild(message);
}

const checkIfEmpty = (() => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (container.children.length === 0) {
        showEmptyMessage();
      }
    }, 100);
  };
})();

function renderUserCards() {
  const fragment = document.createDocumentFragment();
  users.forEach((user) => {
    const userCard = createUserCard(user);
    fragment.appendChild(userCard);
  });
  container.appendChild(fragment);
}

renderUserCards();
