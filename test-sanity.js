import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'kw9ii1w1',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-15',
});

const query = `*[_type == "tool"] {
  _id, name, logoUrl, pricing
} | order(rating desc, createdAt desc)`;

client.fetch(query)
  .then(tools => console.log('Success! Fetched', tools.length, 'tools.'))
  .catch(err => console.error('Fetch error:', err));
