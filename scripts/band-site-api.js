class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
  }
  async postComment(commentObj) {
    try {
      await axios.post(
        `${this.baseUrl}/comments?api_key=${this.apiKey}`,
        commentObj
      );
    } catch (error) {
      console.log(`Error description: ${error}`);
    }
  }

  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/comments?api_key=${this.apiKey}`
      );
      return response;

      // sort an array of objects by the value of each object's timestamp value

      // need to sort them in order!
    } catch (error) {
      console.log(`Error description: ${error}`);
    }
  }

  async getShows() {
    try {
      const showsArr = await axios.get(
        `${this.baseUrl}/showdates?api_key=${this.apiKey}`
      );
      return showsArr;
    } catch (error) {
      console.log(`Error description: ${error}`);
    }
  }
}
