const hideKanbanBlocks = (columns, blockNames) => {
  //   console.log('assignedTo-hit');
  //   const { checked: isChecked } = blockNames.find(
  //     (blockName) => blockName.checked === true
  //   );

  const result = blockNames.find((blockName) => blockName.checked === false);

  console.log('resultbb', result);

  if (result) {
    let tempModifiedColumns = columns;
    tempModifiedColumns = Object.entries(tempModifiedColumns).filter(
      ([id, column], index) => {
        // console.log('blockNames', blockNames[index]);
        return blockNames[index].checked === true;
      }
    );

    return Object.fromEntries(tempModifiedColumns);
  }
  return columns;
};

export default hideKanbanBlocks;
