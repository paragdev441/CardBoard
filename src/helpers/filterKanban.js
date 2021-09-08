const filterKanban = (columns, filterOptions) => {
  const { type, value, operator } = filterOptions;
  console.log('is not empty');
  const filterArray = (items) => {
    switch (type) {
      case 'assignedTo':
        switch (operator) {
          case 'contains':
            return items.filter((item) => {
              return item.title.toLowerCase().includes(value.toLowerCase());
            });
          case 'does not contain':
            return items.filter((item) => {
              return !item.title.toLowerCase().includes(value.toLowerCase());
            });
          case 'is':
            return items.filter((item) => {
              return item.title.toLowerCase() === value.toLowerCase();
            });
          case 'is not':
            return items.filter((item) => {
              return item.title.toLowerCase() !== value.toLowerCase();
            });
          case 'starts with':
            return items.filter((item) => {
              return item.title.toLowerCase().startsWith(value.toLowerCase());
            });
          case 'ends with':
            return items.filter((item) => {
              return item.title.toLowerCase().endsWith(value.toLowerCase());
            });
          case 'is empty':
            return items.filter((item) => {
              return item.title === undefined;
            });
          case 'is not empty':
            return items.filter((item) => {
              return item.title !== undefined;
            });
          default:
            return;
        }
      case 'status':
        switch (operator) {
          case 'is':
            return items.filter((item) => {
              return item.status.includes(value);
            });
          case 'is not':
            return items.filter((item) => {
              return !item.status.includes(value);
            });
          case 'is empty':
            return items.filter((item) => {
              return item.status === undefined;
            });
          case 'is not empty':
            console.log('is not empty');
            return items.filter((item) => {
              return item.status !== undefined;
            });
          default:
            return;
        }
      case 'description':
        switch (operator) {
          case 'contains':
            return items.filter((item) => {
              return item.description
                .toLowerCase()
                .includes(value.toLowerCase());
            });
          case 'does not contain':
            return items.filter((item) => {
              return !item.description
                .toLowerCase()
                .includes(value.toLowerCase());
            });
          case 'is':
            return items.filter((item) => {
              return item.description.toLowerCase() === value.toLowerCase();
            });
          case 'is not':
            return items.filter((item) => {
              return item.description.toLowerCase() !== value.toLowerCase();
            });
          case 'starts with':
            return items.filter((item) => {
              return item.description
                .toLowerCase()
                .startsWith(value.toLowerCase());
            });
          case 'ends with':
            return items.filter((item) => {
              return item.description
                .toLowerCase()
                .endsWith(value.toLowerCase());
            });
          case 'is empty':
            return items.filter((item) => {
              return item.description === undefined;
            });
          case 'is not empty':
            return items.filter((item) => {
              return item.description !== undefined;
            });
          default:
            return;
        }
      case 'tags':
        switch (operator) {
          case 'is':
            return items.filter((item) => {
              return item.tags.includes(value);
            });
          case 'is not':
            return items.filter((item) => {
              return !item.tags.includes(value);
            });
          case 'is empty':
            return items.filter((item) => {
              return item.tags === undefined;
            });
          case 'is not empty':
            return items.filter((item) => {
              return item.tags !== undefined;
            });
          default:
            return;
        }
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
