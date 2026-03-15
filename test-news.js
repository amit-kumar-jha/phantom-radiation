const apiKey = '725e04bdd8324c9cb64c78f45f7300c0';
const url = `https://newsapi.org/v2/everything?q=AI&language=en&sortBy=publishedAt&pageSize=2&apiKey=${apiKey}`;

fetch(url, { headers: { 'User-Agent': 'Test-Script' } })
  .then(res => res.json())
  .then(data => console.log('DATA:', data.status))
  .catch(err => console.error('ERROR:', err.message));
