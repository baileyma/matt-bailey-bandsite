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
    const dateEl = document.createElement('p');
    const venueEl = document.createElement('p');
    const locationEl = document.createElement('p');

    dateEl.innerHTML = showsList[i].date;
    venueEl.innerHTML = showsList[i].venue;
    locationEl.innerHTML = showsList[i].location;

    dateEl.classList.add('shows__date');
    venueEl.classList.add('shows__venue');
    locationEl.classList.add('shows__location');

    showsListEl.appendChild(dateEl);
    showsListEl.appendChild(venueEl);
    showsListEl.appendChild(locationEl);
  }
}

displayShows();
