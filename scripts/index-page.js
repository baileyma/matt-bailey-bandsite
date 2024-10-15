const commentsList = [
  {
    name: 'Victor Pinto',

    Comment:
      'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',

    Date: '11/02/2023',
  },

  {
    name: 'Christina Cabrera',

    Comment:
      'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',

    Date: '10/28/2023',
  },

  {
    name: 'Isaac Tadesse',

    Comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",

    Date: '10/20/2023',
  },
];

let commentsSectionEl = document.querySelector('.comments__list');

for (let i = 0; i < commentsList.length; i++) {
  let commentNameEl = document.createElement('p');
  let commentDateEl = document.createElement('p');
  let commentTextEl = document.createElement('p');

  commentNameEl.innerHTML = commentsList[i].name;
  commentDateEl.innerHTML = commentsList[i].Date;
  commentTextEl.innerHTML = commentsList[i].Comment;

  commentNameEl.classList.add('comments__name');
  commentDateEl.classList.add('comments__date');
  commentTextEl.classList.add('comments__text');

  commentsSectionEl.appendChild(commentNameEl);
  commentsSectionEl.appendChild(commentDateEl);
  commentsSectionEl.appendChild(commentTextEl);
}
