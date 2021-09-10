import _ from 'lodash';

const sortKanbann = (columns, sortOptions) => {
  // console.log('assignedTo-hit');
  const { field, operator } = sortOptions;
  const sortArray = (items) => {
    switch (field) {
      case 'assignedTo':
        // console.log('assignedTo-hit');
        return _.orderBy(items, (obj) => obj.title, operator);
      // return items.filter((item) => {
      //   return item.title.toLowerCase().includes(operator.toLowerCase());
      // });
      case 'status':
        return _.orderBy(items, (obj) => obj.status, operator);
      // return items.filter((item) => item.status.includes(operator));
      case 'description':
        return _.orderBy(items, (obj) => obj.description, operator);
      // return items.filter((item) => {
      //   return item.description.toLowerCase().includes(operator.toLowerCase());
      // });
      case 'tags':
        return _.orderBy(items, (obj) => obj.tags, operator);
      // return items.filter((item) => {
      //   console.log('tags', item.tags, operator, item.tags.includes(operator));
      //   return item.tags.includes(operator);
      // });
      default:
        return items;
    }
  };

  // console.log('sortKanbann', columns, field);

  if (field !== '') {
    let tempModifiedColumns = columns;
    tempModifiedColumns = Object.entries(tempModifiedColumns).map(
      ([id, column]) => {
        let tempColumn = { ...column }; // {name, items}
        tempColumn.items = sortArray(tempColumn.items);
        return [id, tempColumn];
      }
    );

    return Object.fromEntries(tempModifiedColumns);
  }
  return columns;
};

export default sortKanbann;
