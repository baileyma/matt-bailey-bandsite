// const showsList = [
//   {
//     date: 'Mon Sept 09 2024',

//     venue: 'Ronald Lane',

//     location: 'San Francisco, CA',
//   },

//   {
//     date: 'Tue Sept 17 2024',

//     venue: 'Pier 3 East',

//     location: 'San Francisco, CA',
//   },

//   {
//     date: 'Sat Oct 12 2024',

//     venue: 'View Lounge',

//     location: 'San Francisco, CA',
//   },

//   {
//     date: 'Sat Nov 16 2024',

//     venue: 'Hyatt Agency',

//     location: 'San Francisco, CA',
//   },
//   {
//     date: 'Fri Nov 29 2024',

//     venue: 'Moscow Center',

//     location: 'San Francisco, CA',
//   },
//   {
//     date: 'Wed Dec 18 2024',

//     venue: 'Press Club',

//     location: 'San Francisco, CA',
//   },
// ];

const showsListEl = document.querySelector('.shows__list');

const API_KEY = 'c4116707-d196-43e4-9344-a05ce7449b8e';

const attachAPI_KEY = `?api_key=${API_KEY}`;

const bandsiteApi = new BandSiteApi(API_KEY);

const responseShows = async () => {
  const response = await bandsiteApi.getShows();
  console.log(response);

  displayShows(response.data);
};

function displayShows(shows) {
  showsListEl.innerHTML = '';

  shows.forEach((ele) => {
    const itemWrapperEl = document.createElement('div');

    const dateTitleEl = document.createElement('h3');
    dateTitleEl.innerHTML = 'DATE';

    const dateEl = document.createElement('p');

    dateEl.innerHTML = new Date(ele.date).toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const venueTitleEl = document.createElement('h3');
    venueTitleEl.innerHTML = 'VENUE';

    const venueEl = document.createElement('p');
    venueEl.innerHTML = ele.place;

    const locationTitleEl = document.createElement('h3');
    locationTitleEl.innerHTML = 'LOCATION';

    const locationEl = document.createElement('p');
    locationEl.innerHTML = ele.location;

    itemWrapperEl.classList.add('shows__item-wrapper');

    dateTitleEl.classList.add('shows__title');
    dateEl.classList.add('shows__date');
    venueTitleEl.classList.add('shows__title');
    venueEl.classList.add('shows__venue');
    locationTitleEl.classList.add('shows__title');
    locationEl.classList.add('shows__location');

    const buttonEl = document.createElement('div');
    buttonEl.innerHTML = "<button class='shows__button'>BUY TICKETS</button>";
    buttonEl.classList.add('shows__button-container');

    itemWrapperEl.appendChild(dateTitleEl);
    itemWrapperEl.appendChild(dateEl);
    itemWrapperEl.appendChild(venueTitleEl);
    itemWrapperEl.appendChild(venueEl);
    itemWrapperEl.appendChild(locationTitleEl);
    itemWrapperEl.appendChild(locationEl);
    itemWrapperEl.appendChild(buttonEl);
    showsListEl.appendChild(itemWrapperEl);
  });
}

responseShows();
