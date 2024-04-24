window.addEventListener("DOMContentLoaded", function () {
  const analysisSlider = document.querySelector(".analysis__slider");
  let pos = { top: 0, left: 0, x: 0, y: 0 };
  let element;

  const mouseMoveHandler = function (e) {
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    element.scrollTop = pos.top - dy;
    element.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = () => {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);

    element.style.cursor = "grab";
  };
  const mouseDownHandler = function (e) {
    element = e.target.closest(".analysis__slider");
    element.style.cursor = "grabbing";
    pos = {
      // The current scroll
      left: element.scrollLeft,
      top: element.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  analysisSlider.addEventListener("mousedown", mouseDownHandler);
});
