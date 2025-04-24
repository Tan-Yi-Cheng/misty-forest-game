// Define types for the story data
export interface Choice {
  text: string;
  next: string;
}

export interface Scene {
  text: string;
  choices: Choice[];
}

export interface StoryData {
  [language: string]: {
    [sceneKey: string]: Scene;
  };
}
  
  // Fallback story data in case imports fail
  const fallbackStoryData: StoryData = {
    zh: {
      start: {
        text: "你醒来时，四周是浓雾，森林寂静得可怕。你手中有一个破旧的指南针。",
        choices: [
          { text: "跟着指南针走", next: "compassPath" },
          { text: "随意乱走", next: "randomPath" },
        ],
      },
      compassPath: {
        text: "你跟着指南针，小心避开倒下的树干，远处有微弱的光亮。",
        choices: [
          { text: "向光亮走", next: "safePath" },
          { text: "躲进树洞", next: "foxEncounter" },
        ],
      },
      randomPath: {
        text: "你越走越远，雾越来越浓，四周变得模糊。",
        choices: [
          { text: "试图爬树观察", next: "treeView" },
          { text: "坐下来等待", next: "lostEnd" },
        ],
      },
      safePath: { text: "你走向光亮，穿出森林的边界。你逃出了迷雾森林！（好结局）", choices: [] },
      foxEncounter: { text: "你遇到一只狐狸，它开口说话：‘别往那边走，那是猎人的陷阱。’", choices: [] },
      treeView: { text: "你看到了远处的火光，或许是出口……但你没力气走过去了。（迷失结局）", choices: [] },
      lostEnd: { text: "你等待着……直到意识消失在黑暗中。你永远留在了这片森林里。（迷失结局）", choices: [] },
    },
    en: {
      start: {
        text: "You wake up surrounded by thick mist. The forest is eerily silent. You hold a worn-out compass.",
        choices: [
          { text: "Follow the compass", next: "compassPath" },
          { text: "Wander randomly", next: "randomPath" },
        ],
      },
      compassPath: {
        text: "You follow the compass, carefully stepping over fallen logs. There's a faint light in the distance.",
        choices: [
          { text: "Head toward the light", next: "safePath" },
          { text: "Hide in a tree hole", next: "foxEncounter" },
        ],
      },
      randomPath: {
        text: "You wander deeper. The fog grows thicker. The world fades around you.",
        choices: [
          { text: "Climb a tree to see better", next: "treeView" },
          { text: "Sit and wait", next: "lostEnd" },
        ],
      },
      safePath: { text: "You follow the light and reach the forest's edge. You're safe! (Good Ending)", choices: [] },
      foxEncounter: { text: "You encounter a fox that speaks: 'Don't go that way. It's a hunter's trap.'", choices: [] },
      treeView: { text: "You see a fire far away. Maybe an exit... but you're too weak to reach it. (Lost Ending)", choices: [] },
      lostEnd: { text: "You wait... until the darkness takes your mind. You never left the forest. (Lost Ending)", choices: [] },
    },
  };
  
  // Load story data with error handling
  let storyData: StoryData = fallbackStoryData;
  let importFailed: boolean = false;
  
  async function loadStoryData(): Promise<void> {
    try {
      const { story_zh } = await import('../data/story_zh');
      const { story_en } = await import('../data/story_en');
      storyData = { zh: story_zh, en: story_en };
      console.log('Story data loaded successfully');
    } catch (error) {
      console.error('Failed to load story data:', error);
      importFailed = true;
      console.warn('Using fallback story data. Please ensure you are running this on a server (e.g., npx serve).');
    }
  }
  
  // DOM elements
  const storyEl: HTMLElement = document.getElementById('story')!;
  const choicesEl: HTMLElement = document.getElementById('choices')!;
  const restartBtn: HTMLButtonElement = document.getElementById('restartBtn')! as HTMLButtonElement;
  const langBtn: HTMLButtonElement = document.getElementById('langBtn')! as HTMLButtonElement;
  const soundBtn: HTMLButtonElement = document.getElementById('soundBtn')! as HTMLButtonElement;
  const soundStatusEl: HTMLSpanElement = document.getElementById('soundStatus')! as HTMLSpanElement;
  
  // State
  let currentLang: string = localStorage.getItem('mistyForestLang') || 'zh';
  let isSoundOn: boolean = localStorage.getItem('mistyForestSound') !== 'off';
  let currentSceneKey = 'start';
  const clickSound: HTMLAudioElement = new Audio('../assets/click.mp3');
  clickSound.volume = 0.5;
  const ambientSound: HTMLAudioElement = new Audio('../assets/ambient.mp3');
  ambientSound.loop = true;
  ambientSound.volume = 0.3;
  
  // Preload image
  function preloadImage(url: string): Promise<void> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => resolve();
    });
  }

  // Preload audio
  function preloadAudio(audio: HTMLAudioElement): void {
    audio.load();
  }
  
  // Show a scene
  function showScene(sceneKey: string): void {
    currentSceneKey = sceneKey;
    const scene: Scene = storyData[currentLang][sceneKey];
    if (!scene) {
      storyEl.textContent = currentLang === 'zh' ? '错误：场景未找到' : 'Error: Scene not found';
      choicesEl.innerHTML = '';
      console.error(`Scene not found: ${sceneKey}`);
      return;
    }
    storyEl.textContent = scene.text;
    choicesEl.innerHTML = '';
  
    if (scene.choices.length === 0) {
      const endMsg: HTMLParagraphElement = document.createElement('p');
      endMsg.className = 'end-message';
      endMsg.textContent = currentLang === 'zh' ? '✨ 感谢你游玩这个故事！' : '✨ Thank you for playing!';
      choicesEl.appendChild(endMsg);
    } else {
      scene.choices.forEach((choice: Choice, index: number) => {
        const btn: HTMLButtonElement = document.createElement('button');
        btn.textContent = choice.text;
        btn.setAttribute('aria-label', choice.text);
        btn.tabIndex = index;
        btn.onclick = () => {
          if (isSoundOn) clickSound.play();
          showScene(choice.next);
        };
        choicesEl.appendChild(btn);
      });
    }
  }
  
  // Toggle language
  function toggleLanguage(): void {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('mistyForestLang', currentLang);
    if (isSoundOn) clickSound.play();
    showScene(currentSceneKey);
  }
  
  // Toggle sound
  function toggleSound(): void {
    isSoundOn = !isSoundOn;
    soundStatusEl.textContent = isSoundOn ? 'On' : 'Off';
    localStorage.setItem('mistyForestSound', isSoundOn ? 'on' : 'off');
    if (isSoundOn) {
      clickSound.play();
      ambientSound.play().catch(() => {
        console.log('Autoplay prevented; audio will play on next user interaction');
      });
    } else {
      ambientSound.pause();
    }
  }
  
  // Initialize the game
  async function init(): Promise<void> {
    await preloadImage('../assets/background.png');
    await loadStoryData();
    document.body.classList.remove('loading');
  
    if (importFailed) {
      const errorMsg: HTMLParagraphElement = document.createElement('p');
      errorMsg.className = 'error-message';
      errorMsg.textContent = currentLang === 'zh' ? '无法加载完整故事数据，使用备用模式（请使用本地服务器运行，例如 npx serve）' : 'Failed to load full story data, using fallback mode (please run with a local server, e.g., npx serve)';
      storyEl.appendChild(errorMsg);
    }
  
    showScene('start');
    soundStatusEl.textContent = isSoundOn ? 'On' : 'Off';
    if (isSoundOn) {
      ambientSound.play().catch(() => {
        console.log('Autoplay prevented; audio will play on next user interaction');
      });
    }
  }
  
  // Event listeners
  restartBtn.onclick = () => {
    if (isSoundOn) clickSound.play();
    showScene('start');
  };
  langBtn.onclick = toggleLanguage;
  soundBtn.onclick = toggleSound;
  
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const focused: HTMLElement = document.activeElement as HTMLElement;
      if (focused.tagName === 'BUTTON') focused.click();
    }
  });
  
  window.addEventListener('click', () => {
    if (isSoundOn && ambientSound.paused) {
      ambientSound.play().catch(() => {});
    }
  }, { once: true });
  
  // Start the game
  init();
  preloadAudio(clickSound);