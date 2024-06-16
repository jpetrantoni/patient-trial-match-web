import axios from 'axios';

export async function searchStudies(condition: string, fmt: string = "json", overallStatus: string[] = ["RECRUITING"], pageSize: number = 5, pageToken: string | null = null) {
  /**
   * Perform a search query on the studies with a specified expression.
   * @param {string} condition - The condition to search for.
   * @param {string} fmt - The format of the response.
   * @param {Array<string>} overallStatus - The overall status of the studies.
   * @param {number} pageSize - The number of results per page.
   * @param {string|null} pageToken - The token for the next page of results.
   * @returns {Promise<Object>} - The search results in JSON format.
   */
  let url = `https://clinicaltrials.gov/api/v2/studies?format=${fmt}&query.cond=${condition}&pageSize=${pageSize}`;
  if (pageToken) {
    url += `&pageToken=${pageToken}`;
  }
  if (overallStatus && overallStatus.length > 0) {
    url += `&filter.overallStatus=${overallStatus.join(',')}`;
  }

  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data.studies;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to fetch studies:", error);
    throw error;
  }
}


