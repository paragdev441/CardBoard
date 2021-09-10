const hideKanbanBlocks = (columns, blockOptions) => {
  //   console.log('assignedTo-hit');
  //   const { checked: isChecked } = blockNames.find(
  //     (blockName) => blockName.checked === true
  //   );

  const result = blockOptions.find(
    (blockOption) => blockOption.checked === false
  );

  // console.log('resultbb', result, blockOptions, columns);

  if (result) {
    let tempModifiedColumns = columns;
    tempModifiedColumns = Object.entries(tempModifiedColumns).filter(
      ([id, column], index) => {
        // console.log('blockOptions', blockOptions[index]);
        return blockOptions[index].checked === true;
      }
    );

    return Object.fromEntries(tempModifiedColumns);
  }
  return columns;
};

export default hideKanbanBlocks;
