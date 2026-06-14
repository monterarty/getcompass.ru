const mainScreenshotRef = document.querySelector(".hero__screenshot-main");
const callScreenshotRef = document.querySelector(".hero__screenshot-call");
const playScreenshotRefs = document.querySelectorAll(".hero__screenshot-play");

if (mainScreenshotRef && callScreenshotRef && playScreenshotRefs.length > 0) {
  const refs = [mainScreenshotRef, callScreenshotRef, ...playScreenshotRefs];

  const setHovered = () => {
    refs.forEach((ref) => ref.classList.add("is--hovered"));
  };

  const clearHovered = (event) => {
    // relatedTarget — элемент, на который ушёл курсор.
    // Если он внутри одного из скриншотов — значит ушли не с обоих, класс не трогаем.
    const movedTo = event.relatedTarget;
    const stillInside = refs.some(
      (ref) => ref === movedTo || ref.contains(movedTo)
    );

    if (!stillInside) {
      refs.forEach((ref) => ref.classList.remove("is--hovered"));
    }
  };

  refs.forEach((ref) => {
    ref.addEventListener("mouseenter", setHovered);
    ref.addEventListener("mouseleave", clearHovered);
  });
}
