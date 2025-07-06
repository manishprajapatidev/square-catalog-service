const client = require('../config/squareClient.js');

async function listItems(categoryId = null) {
  try {
    const response = await client.catalog.list({ types: "ITEM" });
    let items = response.data || [];
    if (categoryId) {
      items = items.filter(item =>
        item.itemData && item.itemData.categoryId === categoryId
      );
    }
    return items;
  } catch (err) {
    console.error('[ERROR] Failed to fetch items:', err);
    throw err;
  }
}

module.exports = {
  listItems
};
