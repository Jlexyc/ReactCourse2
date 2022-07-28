const baseUrl = 'https://covid-19-statistics.p.rapidapi.com/';
const commonHeaders = {
  'X-RapidAPI-Key': 'XXXX',
  'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
}

const performRequest = async ({ method, path}) => {
  const response = await fetch(baseUrl + path, { headers: commonHeaders, method })
  console.log('request: ', baseUrl + path)
  console.log('response: ', response)
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return await response.json();
}

export const getTotalReports = async (date) => {
  return await performRequest(
    { 
      method: 'GET', 
      path:'reports/total?date=' + date,
    }
  );
}
