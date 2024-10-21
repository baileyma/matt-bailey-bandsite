class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
  }
  async postComment(commentObj) {
    await axios.post(`${this.baseUrl}/comments?api_key=${apiKey}`, commentObj);
  }

  async getComments() {
    const response = await axios.get(
      `${this.baseUrl}/comments?api_key=${this.apiKey}`
    );
    return response;
    // need to sort!
  }

  async getShows() {
    const showsArr = await axios.get(
      `${this.baseUrl}/showdates?api_key=${apiKey}`
    );
    return showsArr;
  }
}
