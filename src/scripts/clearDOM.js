const clear = (containerID) => {
  // console.log(containerID)
  const container = document.querySelector(containerID);
  // console.log(container)
  while (container.firstElementChild) {
    container.removeChild(container.firstElementChild)
  };
};

module.exports = clear