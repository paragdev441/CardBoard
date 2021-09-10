const filterKanban = (columns, filterOptions) => {
  const { field, operator, fieldValue } = filterOptions;
  const filterArray = (items) => {
    switch (field) {
      case 'assignedTo':
        switch (operator) {
          case 'contains':
            return items.filter((item) => {
              return item.title
                .toLowerCase()
                .includes(fieldValue.toLowerCase());
            });
          case 'does not contain':
            return items.filter((item) => {
              return !item.title
                .toLowerCase()
                .includes(fieldValue.toLowerCase());
            });
          case 'is':
            return items.filter((item) => {
              return item.title.toLowerCase() === fieldValue.toLowerCase();
            });
          case 'is not':
            return items.filter((item) => {
              return item.title.toLowerCase() !== fieldValue.toLowerCase();
            });
          case 'starts with':
            return items.filter((item) => {
              return item.title
                .toLowerCase()
                .startsWith(fieldValue.toLowerCase());
            });
          case 'ends with':
            return items.filter((item) => {
              return item.title
                .toLowerCase()
                .endsWith(fieldValue.toLowerCase());
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
              return item.status.includes(fieldValue);
            });
          case 'is not':
            return items.filter((item) => {
              return !item.status.includes(fieldValue);
            });
          case 'is empty':
            return items.filter((item) => {
              return item.status === undefined;
            });
          case 'is not empty':
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
                .includes(fieldValue.toLowerCase());
            });
          case 'does not contain':
            return items.filter((item) => {
              return !item.description
                .toLowerCase()
                .includes(fieldValue.toLowerCase());
            });
          case 'is':
            return items.filter((item) => {
              return (
                item.description.toLowerCase() === fieldValue.toLowerCase()
              );
            });
          case 'is not':
            return items.filter((item) => {
              return (
                item.description.toLowerCase() !== fieldValue.toLowerCase()
              );
            });
          case 'starts with':
            return items.filter((item) => {
              return item.description
                .toLowerCase()
                .startsWith(fieldValue.toLowerCase());
            });
          case 'ends with':
            return items.filter((item) => {
              return item.description
                .toLowerCase()
                .endsWith(fieldValue.toLowerCase());
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
              return item.tags.includes(fieldValue);
            });
          case 'is not':
            return items.filter((item) => {
              return !item.tags.includes(fieldValue);
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

  if (field !== '') {
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
