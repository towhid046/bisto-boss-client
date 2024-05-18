const scrollOnMount = () => {
  window.scrollTo({
    top: document.body.scrollTop,
    behavior: "smooth",
  });
};

export default scrollOnMount;
