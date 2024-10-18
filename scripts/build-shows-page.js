const showsList = [
  {
    date: 'Mon Sept 09 2024',

    venue: 'Ronald Lane',

    location: 'San Francisco, CA',
  },

  {
    date: 'Tue Sept 17 2024',

    venue: 'Pier 3 East',

    location: 'San Francisco, CA',
  },

  {
    date: 'Sat Oct 12 2024',

    venue: 'View Lounge',

    location: 'San Francisco, CA',
  },

  {
    date: 'Sat Nov 16 2024',

    venue: 'Hyatt Agency',

    location: 'San Francisco, CA',
  },
  {
    date: 'Fri Nov 29 2024',

    venue: 'Moscow Center',

    location: 'San Francisco, CA',
  },
  {
    date: 'Wed Dec 18 2024',

    venue: 'Press Club',

    location: 'San Francisco, CA',
  },
];

const showsListEl = document.querySelector('.shows__list');

function displayShows() {
  showsListEl.innerHTML = '';

  for (let i = 0; i < showsList.length; i++) {
    const dateTitleEl = document.createElement('h3');
    dateTitleEl.innerHTML = 'DATE';

    const dateEl = document.createElement('p');
    dateEl.innerHTML = showsList[i].date;

    const venueTitleEl = document.createElement('h3');
    venueTitleEl.innerHTML = 'VENUE';

    const venueEl = document.createElement('p');
    venueEl.innerHTML = showsList[i].venue;

    const locationTitleEl = document.createElement('h3');
    locationTitleEl.innerHTML = 'LOCATION';

    const locationEl = document.createElement('p');
    locationEl.innerHTML = showsList[i].location;

    dateTitleEl.classList.add('shows__title');
    dateEl.classList.add('shows__date');
    venueTitleEl.classList.add('shows__title');
    venueEl.classList.add('shows__venue');
    locationTitleEl.classList.add('shows__title');
    locationEl.classList.add('shows__location');

    const buttonEl = document.createElement('div');
    buttonEl.innerHTML = "<button class='shows__button'>BUY TICKETS</button>";
    buttonEl.classList.add('shows__button-container');

    showsListEl.appendChild(dateTitleEl);
    showsListEl.appendChild(dateEl);
    showsListEl.appendChild(venueTitleEl);
    showsListEl.appendChild(venueEl);
    showsListEl.appendChild(locationTitleEl);
    showsListEl.appendChild(locationEl);
    showsListEl.appendChild(buttonEl);
  }
}

displayShows();
