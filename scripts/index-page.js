const commentsList = [
  {
    name: 'Victor Pinto',

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

let commentList = document.querySelector('.comment-list');

// Make the comments form div a variable

// fn that takes event object's name, title, and comment
// and puts it at the top of the commentsList

// This puts commentsList into p tags within div
// creates p element, gives innerhtml from commentsList, adds class, then appends to div
function displayComment() {
  for (let i = 0; i < commentsList.length; i++) {
    // Setup container and append to the section
    let commentListContainer = document.createElement('div');

    commentList.appendChild(commentListContainer);

    // Setup left and right parts, add the img to left part, then append them to the container
    let commentListLeft = document.createElement('div');
    let commentListRight = document.createElement('div');

    commentListLeft.innerHTML =
      '<img src="./assets/images/Mohan-muruge.jpg" alt="Headshot of Mohan Muruge" class="comments__image"/>';

    commentListContainer.appendChild(commentListLeft);
    commentListContainer.appendChild(commentListRight);

    // Setup title&date and text and append them to the right part

    let commentListTitleDate = document.createElement('div');
    let commentListTextProvided = document.createElement('div');

    commentListRight.appendChild(commentListTitleDate);
    commentListRight.appendChild(commentListTextProvided);

    // Add class names for all five div elements

    commentListContainer.classList.add('comment-list__container');
    commentListLeft.classList.add('comment-list__left');
    commentListRight.classList.add('comment-list__right');
    commentListTitleDate.classList.add('comment-list__title-and-date');
    commentListTextProvided.classList.add('comment-list__textProvided');

    let commentNameEl = document.createElement('p');
    let commentDateEl = document.createElement('p');
    let commentTextEl = document.createElement('p');

    commentNameEl.innerHTML = commentsList[i].name;
    commentDateEl.innerHTML = commentsList[i].date;
    commentTextEl.innerHTML = commentsList[i].comment;

    commentNameEl.classList.add('comment-list__name');
    commentDateEl.classList.add('comment-list__date');
    commentTextEl.classList.add('comment-list__text');

    commentListTitleDate.appendChild(commentNameEl);
    commentListTitleDate.appendChild(commentDateEl);
    commentListTextProvided.appendChild(commentTextEl);
  }
}

const submitHandler = (event) => {
  event.preventDefault();

  commentList.innerHTML = '';

  let newComment = {
    name: event.target.name.value,
    date: event.timeStamp,
    comment: event.target.comment.value,
  };

  commentsList.unshift(newComment);

  displayComment();
};

// This grabs the form div, and then chucks its info into the top of the commentsList

let form = document.querySelector('.comments__form');
form.addEventListener('submit', (element) => submitHandler(element));

displayComment();