const handleColumnsHiding = (blockTitles, isShow) => {
  return blockTitles.map((blockTitle) => {
    blockTitle.checked = isShow;
    return blockTitle;
  });
};

export default handleColumnsHiding;
