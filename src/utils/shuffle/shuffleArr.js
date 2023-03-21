 // shuffleArr function is based on Fisher-Yates algorithm
export const shuffleArr = (prompts) => {
  let currentIndex = prompts?.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [prompts[currentIndex], prompts[randomIndex]] = [
      prompts[randomIndex],
      prompts[currentIndex],
    ];
  }
  return prompts;
};