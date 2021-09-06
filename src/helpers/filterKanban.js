const filterKanban = (columns, filterOptions) => {
  const { type, value } = filterOptions;
  const filterArray = (items) => {
    switch (type) {
      case 'assignedTo':
        return items.filter((item) => {
          return item.title.toLowerCase().includes(value.toLowerCase());
        });
      case 'status':
        return items.filter((item) => item.status.includes(value));
      case 'description':
        return items.filter((item) => {
          return item.description.toLowerCase().includes(value.toLowerCase());
        });
      case 'tags':
        return items.filter((item) => {
          console.log('tags', item.tags, value, item.tags.includes(value));
          return item.tags.includes(value);
        });
      default:
        return items;
    }
  };

  if (type !== '') {
    let tempModifiedColumns = columns;
    tempModifiedColumns = Object.entries(tempModifiedColumns).map(
      ([id, column]) => {
        let tempColumn = { ...column }; // {name, items}
        tempColumn.items = filterArray(tempColumn.items);
        return [id, tempColumn];
      }
    );

    return Object.fromEntries(tempModifiedColumns);
  }
  return columns;
};

export default filterKanban;
