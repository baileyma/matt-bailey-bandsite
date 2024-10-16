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

let commentsSectionEl = document.querySelector('.comments__title-and-date');

// Make the comments form div a variable

// fn that takes event object's name, title, and comment
// and puts it at the top of the commentsList

// This puts commentsList into p tags within div
// creates p element, gives innerhtml from commentsList, adds class, then appends to div
function displayComment() {
  commentsSectionEl.innerHTML = '';

  for (let i = 0; i < commentsList.length; i++) {
    let commentNameEl = document.createElement('p');
    let commentDateEl = document.createElement('p');
    let commentTextEl = document.createElement('p');

    commentNameEl.innerHTML = commentsList[i].name;
    commentDateEl.innerHTML = commentsList[i].date;
    commentTextEl.innerHTML = commentsList[i].comment;

    commentNameEl.classList.add('comments__name');
    commentDateEl.classList.add('comments__date');
    commentTextEl.classList.add('comments__text');

    commentsSectionEl.appendChild(commentNameEl);
    commentsSectionEl.appendChild(commentDateEl);
    commentsSectionEl.appendChild(commentTextEl);
  }
}

const submitHandler = (event) => {
  event.preventDefault();
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
