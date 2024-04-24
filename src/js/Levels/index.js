window.addEventListener("DOMContentLoaded", function () {
  const levelsData = [
    {
      name: "Прогулка над пропастью",
      description:
        "Испытайте на себе страх высоты. Пройдитесь по тонкой перекладине между двумя высотками. На этом уровне отслеживается направление взгляда и динамика прохождения.",
      tags: ["Страх", "Аналитика"],
      img: "fear",
    },
    {
      name: "Грязная пища",
      description:
        "Попробуйте пообедать в грязном подвале, наполненном ржавчиной, плесенью и мерзкими насекомыми",
      tags: ["Отвращение"],
      img: "disgaust",
    },
    {
      name: "Разрушаемая комната",
      description:
        "Разрушайте, бросайте и уничтожайте всё, что видите в комнате!",
      tags: ["Гнев"],
      img: "anger",
    },
    {
      name: "Великое искусство",
      description:
        "Познакомьтесь с величайшими произведениями искусства в виртуальном музее. Все работы в реальном размере",
      tags: ["Интерес"],
      img: "interest",
    },
    {
      name: "Счастливые воспоминания",
      description:
        "Послушайте вдохновляющие истории и приятные воспоминания, от которых на душе становиться тепло",
      tags: ["Удовольствие"],
      img: "pleasure",
    },
    {
      name: "Таинственная комната",
      description:
        "На первый взгляд, обычная комната, но в ней есть чему удивиться.",
      tags: ["Удивление"],
      img: "surpeise",
    },
  ];
  const levelsList = document.querySelector(".levels__select");
  const levelsDisplay = document.querySelector(".levels__display");
  let currentSelectedLevel;

  // Generated level array

  /* Methods */
  function renderTags(tagList) {
    return `<ul class="tag__list flex">${tagList.map((tag) => `<li class="tag font-family-accent">${tag}</li>`).join("")}</ul>`;
  }
  function addLevelHighlight(elem) {
    currentSelectedLevel = elem;
    elem.classList.add("selected");
  }
  function removeLevelHighlight(elem) {
    elem.classList.remove("selected");
  }
  function handleLevelSelect(element) {
    const [cardElement] = element.children;
    const newSelectedLevel = cardElement;

    /* Methods */
    function renderDynamicContent(levelIndex) {
      const level = levelsData[levelIndex];

      levelsDisplay.innerHTML = `<article class="levels__display__article"> 
      <div class="levels__display__graphics"><img class="border-radius-l" src='/src/assets/images/level-${level.img}.webp'/></div>
      <div class="levels__display__about">
        <div class="levels__display__headline"><span class="heading font-size-heading-primary font-weight-semibold">${level.name}</span></div>
        <p class="levels__display__description font-size-heading-primary text-color-secondary">${level.description}</p>
        ${renderTags(level.tags)}
      </div>
      </article>`;
    }

    /* Main function logic */
    if (!currentSelectedLevel) {
      addLevelHighlight(newSelectedLevel);
    } else if (newSelectedLevel !== currentSelectedLevel) {
      removeLevelHighlight(currentSelectedLevel);
      addLevelHighlight(newSelectedLevel);
    } else {
      return;
    }
    renderDynamicContent(currentSelectedLevel.dataset.index); // Render sidebar article with image, header and description
  }
  /* Inits */
  levelsList.innerHTML = levelsData
    .map(
      (level, index) =>
        `
    <li>
    <div class="card border-radius-l flex flex-column flex-between" data-index=${index}>
      <div class="font-size-heading-primary font-weight-medium">${level.name}</div>
      <div class="card__description">
        ${renderTags(level.tags)}
      </div>
      </div>
    </li>`
    )
    .join(""); // Generate levels cards

  const levelListItem = [...levelsList.childNodes].filter(
    (child) => child.nodeType !== 3
  );
  const initialSelectedLevel = levelListItem[0]; // Initial selected level
  handleLevelSelect(initialSelectedLevel); // Select level with index 0 by default
  levelListItem.map((child) =>
    child.addEventListener("click", () => handleLevelSelect(child))
  );
});
