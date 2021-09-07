import _ from 'lodash';

const sortKanbann = (columns, sortOptions) => {
  console.log('assignedTo-hit');
  const { type, value } = sortOptions;
  const sortArray = (items) => {
    switch (type) {
      case 'assignedTo':
        // console.log('assignedTo-hit');
        return _.orderBy(items, (obj) => obj.title, value);
      // return items.filter((item) => {
      //   return item.title.toLowerCase().includes(value.toLowerCase());
      // });
      case 'status':
        return _.orderBy(items, (obj) => obj.status, value);
      // return items.filter((item) => item.status.includes(value));
      case 'description':
        return _.orderBy(items, (obj) => obj.description, value);
      // return items.filter((item) => {
      //   return item.description.toLowerCase().includes(value.toLowerCase());
      // });
      case 'tags':
        return _.orderBy(items, (obj) => obj.tags, value);
      // return items.filter((item) => {
      //   console.log('tags', item.tags, value, item.tags.includes(value));
      //   return item.tags.includes(value);
      // });
      default:
        return items;
    }
  };

  if (type !== '') {
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
