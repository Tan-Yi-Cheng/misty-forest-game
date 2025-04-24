import { StoryData } from '../src/script';

export const story_zh: StoryData[string] = {
  start: {
    text: "你醒来时，四周是浓雾，森林寂静得可怕。你手中有一个破旧的指南针。",
    choices: [
      { text: "跟着指南针走", next: "compassPath" },
      { text: "随意乱走", next: "randomPath" }
    ]
  },
  compassPath: {
    text: "你跟着指南针，小心避开倒下的树干，远处有微弱的光亮。",
    choices: [
      { text: "向光亮走", next: "safePath" },
      { text: "躲进树洞", next: "foxEncounter" }
    ]
  },
  foxEncounter: {
    text: "你遇到一只狐狸，它居然开口说话：‘别往那边走，那是猎人的陷阱。’",
    choices: [
      { text: "相信它", next: "foxEscape" },
      { text: "无视它", next: "hunterTrap" }
    ]
  },
  randomPath: {
    text: "你越走越远，雾越来越浓，四周变得模糊。",
    choices: [
      { text: "试图爬树观察", next: "treeView" },
      { text: "坐下来等待", next: "lostPath" }
    ]
  },
  safePath: {
    text: "你走向光亮，穿出森林的边界。你逃出了迷雾森林！（好结局）",
    choices: []
  },
  foxEscape: {
    text: "狐狸带你绕过陷阱，一路引导你走出了森林。你得救了！（神秘结局）",
    choices: []
  },
  hunterTrap: {
    text: "你掉进了猎人的陷阱……这是你的结局。（死亡结局）",
    choices: []
  },
  treeView: {
    text: "你看到了远处的火光，或许是出口……但你没力气走过去了。你迷失了。",
    choices: [
      { text: "集中意志坚持前行", next: "torchPath" },
      { text: "回到地面，另找出路", next: "shadowWhispers" }
    ]
  },
  lostPath: {
    text: "你等待着……直到意识消失在黑暗中。",
    choices: [
      { text: "突然听见低语声", next: "shadowWhispers" },
      { text: "试图入睡恢复体力", next: "dreamWorld" }
    ]
  },
  torchPath: {
    text: "你咬牙坚持，走向火光。越靠近，你越能感受到一股温暖，但也伴随着低语声。",
    choices: [
      { text: "继续前进", next: "fireCamp" },
      { text: "躲起来观察", next: "strangerReveal" }
    ]
  },
  shadowWhispers: {
    text: "黑暗中传来呢喃，你分不清是幻觉还是有人在召唤你。",
    choices: [
      { text: "回应声音", next: "shadowRealm" },
      { text: "沉默不语，悄悄离开", next: "lostShrine" }
    ]
  },
  dreamWorld: {
    text: "你在梦中看见一个巨大的神殿，神殿中有一块发光的石板。",
    choices: [
      { text: "触碰石板", next: "ancientMemory" },
      { text: "忽略梦境，强迫自己醒来", next: "returnFog" }
    ]
  },
  fireCamp: {
    text: "你来到营火旁，一个披着斗篷的老人坐在那里，仿佛早已知道你会来。",
    choices: [
      { text: "坐下与他交谈", next: "forestTruth" },
      { text: "保持警惕，远离他", next: "ambushTrap" }
    ]
  },
  strangerReveal: {
    text: "你躲在树后，看到老人把一块光石扔进火里，火焰突然变色。",
    choices: [
      { text: "冲出去质问他", next: "forestTruth" },
      { text: "等待更多线索", next: "hiddenPast" }
    ]
  },
  shadowRealm: {
    text: "你被黑雾包围，眼前出现一个巨大的影子生物，它要求你回答一个谜题才能放你走。",
    choices: [
      { text: "尝试解谜", next: "riddleChallenge" },
      { text: "逃跑", next: "curseEnd" }
    ]
  },
  lostShrine: {
    text: "你发现了一个被藤蔓覆盖的古老祭坛，似乎蕴藏着某种力量。",
    choices: [
      { text: "献上你手中的指南针", next: "shrineBlessing" },
      { text: "转身离开", next: "forestLoop" }
    ]
  },
  ancientMemory: {
    text: "你触碰石板，记忆涌入脑海——你曾是这座森林的守护者之一。",
    choices: [
      { text: "接受使命", next: "guardianAwakening" },
      { text: "拒绝命运", next: "memoryCollapse" }
    ]
  },
  returnFog: {
    text: "你强行醒来，却发现森林变得更诡异，时间和空间似乎已经扭曲。",
    choices: [
      { text: "呼喊求救", next: "echoTrap" },
      { text: "继续前行", next: "timeLoop" }
    ]
  },

  // 结尾节点
  forestTruth: { text: "老人缓缓开口：‘森林选择了你……’（待续）", choices: [] },
  ambushTrap: { text: "一群影子突然扑来，你无法逃脱。（死亡结局）", choices: [] },
  hiddenPast: { text: "你听见他低声说着你曾经的名字……（神秘结局）", choices: [] },
  riddleChallenge: { text: "你聪明地回答了谜题，影子放你离开了。（好结局）", choices: [] },
  curseEnd: { text: "你逃跑失败，被诅咒缠绕，永远迷失。（诅咒结局）", choices: [] },
  shrineBlessing: { text: "指南针化为光芒，照亮出路，你获得祝福走出森林。（祝福结局）", choices: [] },
  forestLoop: { text: "你又回到了最初的起点，仿佛一切从未开始……（时间循环）", choices: [] },
  guardianAwakening: { text: "你成为新的守护者，森林不再让你离开……但你拥有力量。（守护者结局）", choices: [] },
  memoryCollapse: { text: "你拒绝使命，记忆崩塌，迷失于自我中……（失落结局）", choices: [] },
  echoTrap: { text: "你的呼喊吸引了它们……你再也无法逃离。（回音陷阱）", choices: [] },
  timeLoop: { text: "你陷入一个时间循环，每次醒来都回到森林深处……（循环结局）", choices: [] }
};