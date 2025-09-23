const enBtn = document.getElementById('en-btn');
const frBtn = document.getElementById('fr-btn');
const description = document.getElementById('description');

const texts = {
  en: "Welcome to my website! I'm a passionate robotics student focused on building intelligent systems that integrate mechanical design and smart control. Explore my work and learn more about my journey!",
  fr: "Bienvenue sur mon site web ! Je suis une étudiante en robotique passionnée, spécialisée dans la conception de systèmes intelligents intégrant la mécanique et le contrôle intelligent. Découvrez mes projets et mon parcours !"
};

enBtn.addEventListener('click', () => {
  enBtn.classList.add('active');
  frBtn.classList.remove('active');
  description.textContent = texts.en;
});

frBtn.addEventListener('click', () => {
  frBtn.classList.add('active');
  enBtn.classList.remove('active');
  description.textContent = texts.fr;
});
