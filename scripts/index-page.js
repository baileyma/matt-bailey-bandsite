const API_KEY = 'c4116707-d196-43e4-9344-a05ce7449b8e';

const attachAPI_KEY = `?api_key=${API_KEY}`;

const bandsiteApi = new BandSiteApi(API_KEY);

let commentListEl = document.querySelector('.comment-list');

const responseItem = async () => {
  const response = await bandsiteApi.getComments();
  renderComments(response.data);
};

const renderComments = (comments) => {
  comments.forEach((ele) => {
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

    commentNameEl.innerHTML = ele.name;
    commentDateEl.innerHTML = ele.timestamp;
    commentTextEl.innerHTML = ele.comment;

    commentNameEl.classList.add('comment-list__name');
    commentDateEl.classList.add('comment-list__date');
    commentTextEl.classList.add('comment-list__text');

    commentListElTitleDate.appendChild(commentNameEl);
    commentListElTitleDate.appendChild(commentDateEl);
    commentListElTextProvided.appendChild(commentTextEl);
  });
};

responseItem();

// console.log(commentsList);

// console.log(bandsiteApi.postComment());

// console.log(bandsiteApi.getShows());

// function displayComment() {
//   for (let i = 0; i < commentsList.length; i++) {

// }

const submitHandler = async (event) => {
  event.preventDefault();

  commentListEl.innerHTML = '';

  let newComment = {
    name: event.target.name.value,
    date: event.timestamp,
    comment: event.target.comment.value,
  };

  await bandsiteApi.postComment(newComment);

  // let timestampVal = event.timeStamp;
  // let dateVal = new Date(timestampVal);
  // let formatteddateVal = `${String(dateVal.getDate()).padStart(
  //   2,
  //   '0'
  // )}/${String(dateVal.getMonth() + 1).padStart(
  //   2,
  //   '0'
  // )}/${dateVal.getFullYear()}`;

  responseItem();
};

let form = document.querySelector('.comments__form');
form.addEventListener('submit', (element) => submitHandler(element));
