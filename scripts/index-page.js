let commentsList = [
  {
    name: 'Victor Pintodddddddddddddddddddddd',

    comment:
      'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',

    date: '11/02/2023',
  },

  {
    name: 'Christina Cabrera',

    comment:
      'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',

    date: '10/28/2023',
  },

  {
    name: 'Isaac Tadesse',

    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",

    date: '10/20/2023',
  },
];

// seperate js files

const API_KEY = 'c4116707-d196-43e4-9344-a05ce7449b8e';

const attachAPI_KEY = `?api_key=${API_KEY}`;

const bandsiteApi = new BandSiteApi(API_KEY);

const responseItem = async () => {
  const response = await bandsiteApi.getComments();
  console.log(response.data);

  return response.data;
};

// const comments2List = responseItem();

// comments2List.forEach((ele) => {
//   const eleObj = {
//     name: ele.name,
//     comment: ele.comment,
//     date: ele.date,
//   };
//   commentsList.push(eleObj);
// });
// console.log('here1');

// console.log(commentsList);
// console.log('here');

// console.log(bandsiteApi.postComment());

// console.log(bandsiteApi.getShows());

let commentListEl = document.querySelector('.comment-list');

function displayComment() {
  for (let i = 0; i < commentsList.length; i++) {
    let commentListElContainer = document.createElement('div');

    commentListEl.appendChild(commentListElContainer);

    let commentListElLeft = document.createElement('div');
    let commentListElRight = document.createElement('div');

    let commentListElLeftDiv = document.createElement('div');
    commentListElLeftDiv.classList.add('comment-list__image');

    commentListElLeft.appendChild(commentListElLeftDiv);

    commentListElContainer.appendChild(commentListElLeft);
    commentListElContainer.appendChild(commentListElRight);

    let commentListElTitleDate = document.createElement('div');
    let commentListElTextProvided = document.createElement('div');

    commentListElRight.appendChild(commentListElTitleDate);
    commentListElRight.appendChild(commentListElTextProvided);

    commentListElContainer.classList.add('comment-list__container');
    commentListElLeft.classList.add('comment-list__left');
    commentListElRight.classList.add('comment-list__right');
    commentListElTitleDate.classList.add('comment-list__title-and-date');
    commentListElTextProvided.classList.add('comment-list__textProvided');

    let commentNameEl = document.createElement('p');
    let commentDateEl = document.createElement('p');
    let commentTextEl = document.createElement('p');

    commentNameEl.innerHTML = commentsList[i].name;
    commentDateEl.innerHTML = commentsList[i].date;
    commentTextEl.innerHTML = commentsList[i].comment;

    commentNameEl.classList.add('comment-list__name');
    commentDateEl.classList.add('comment-list__date');
    commentTextEl.classList.add('comment-list__text');

    commentListElTitleDate.appendChild(commentNameEl);
    commentListElTitleDate.appendChild(commentDateEl);
    commentListElTextProvided.appendChild(commentTextEl);
  }
}

const submitHandler = (event) => {
  event.preventDefault();

  commentListEl.innerHTML = '';

  let timestampVal = event.timeStamp;
  let dateVal = new Date(timestampVal);
  let formatteddateVal = `${String(dateVal.getDate()).padStart(
    2,
    '0'
  )}/${String(dateVal.getMonth() + 1).padStart(
    2,
    '0'
  )}/${dateVal.getFullYear()}`;

  let newComment = {
    name: event.target.name.value,
    date: formatteddateVal,
    comment: event.target.comment.value,
  };

  commentsList.unshift(newComment);
  console.log(commentsList);

  displayComment();
};

let form = document.querySelector('.comments__form');
form.addEventListener('submit', (element) => submitHandler(element));

displayComment();
