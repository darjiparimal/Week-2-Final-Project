export function filterBySearch(list, query) {
  if (!query) return list;

  return list.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
}
