const client = require('../config/squareClient.js');

async function listCategories(cursor = null, limit = 10) {
  try {

    const params = { types: 'CATEGORY', limit };
    if (cursor) params.cursor = cursor;
    
    const response = await client.catalog.list(params);
    
      for await (const item of response) {
      console.log(item.categoryData);
    }
    
  } catch (err) {
    console.error('[ERROR] Failed to fetch categories:', err);
    throw err;
  }
}

module.exports = {
  listCategories
};
