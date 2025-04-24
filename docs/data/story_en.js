export const story_en = {
    start: {
        text: "You wake up surrounded by thick mist. The forest is eerily silent. You hold a worn-out compass.",
        choices: [
            { text: "Follow the compass", next: "compassPath" },
            { text: "Wander randomly", next: "randomPath" }
        ]
    },
    compassPath: {
        text: "You follow the compass, carefully stepping over fallen logs. There's a faint light in the distance.",
        choices: [
            { text: "Head toward the light", next: "safePath" },
            { text: "Hide in a tree hole", next: "foxEncounter" }
        ]
    },
    foxEncounter: {
        text: "You encounter a fox that suddenly speaks: 'Don't go that way. It's a hunter's trap.'",
        choices: [
            { text: "Trust the fox", next: "foxEscape" },
            { text: "Ignore it", next: "hunterTrap" }
        ]
    },
    randomPath: {
        text: "You wander deeper. The fog grows thicker. The world fades around you.",
        choices: [
            { text: "Climb a tree to see better", next: "treeView" },
            { text: "Sit and wait", next: "lostPath" }
        ]
    },
    safePath: {
        text: "You follow the light and reach the forest's edge. You're safe! (Good Ending)",
        choices: []
    },
    foxEscape: {
        text: "The fox guides you away from traps and leads you out of the forest. You're saved! (Mystery Ending)",
        choices: []
    },
    hunterTrap: {
        text: "You fall into the hunter's trap... This is your end. (Death Ending)",
        choices: []
    },
    treeView: {
        text: "You see a fire far away. Maybe an exit... but you're too weak to reach it. You're lost.",
        choices: [
            { text: "Gather your strength and press on", next: "torchPath" },
            { text: "Return to the ground and find another way", next: "shadowWhispers" }
        ]
    },
    lostPath: {
        text: "You wait... until the darkness takes your mind.",
        choices: [
            { text: "Suddenly hear whispers", next: "shadowWhispers" },
            { text: "Try to sleep and recover", next: "dreamWorld" }
        ]
    },
    torchPath: {
        text: "You grit your teeth and head toward the fire. The closer you get, the warmer it feels, but whispers echo around you.",
        choices: [
            { text: "Keep going", next: "fireCamp" },
            { text: "Hide and observe", next: "strangerReveal" }
        ]
    },
    shadowWhispers: {
        text: "Murmurs rise from the darkness. You can't tell if they're hallucinations or someone calling you.",
        choices: [
            { text: "Answer the whispers", next: "shadowRealm" },
            { text: "Stay silent and slip away", next: "lostShrine" }
        ]
    },
    dreamWorld: {
        text: "In a dream, you see a vast temple. A glowing stone tablet stands at its center.",
        choices: [
            { text: "Touch the tablet", next: "ancientMemory" },
            { text: "Ignore the dream and force yourself awake", next: "returnFog" }
        ]
    },
    fireCamp: {
        text: "You reach a campfire. An old man in a cloak sits there, as if he knew you were coming.",
        choices: [
            { text: "Sit and talk with him", next: "forestTruth" },
            { text: "Stay cautious and keep your distance", next: "ambushTrap" }
        ]
    },
    strangerReveal: {
        text: "From behind a tree, you see the old man toss a glowing stone into the fire, turning the flames a strange color.",
        choices: [
            { text: "Rush out and confront him", next: "forestTruth" },
            { text: "Wait for more clues", next: "hiddenPast" }
        ]
    },
    shadowRealm: {
        text: "Black mist surrounds you. A massive shadow creature appears, demanding you solve a riddle to pass.",
        choices: [
            { text: "Try to solve the riddle", next: "riddleChallenge" },
            { text: "Run away", next: "curseEnd" }
        ]
    },
    lostShrine: {
        text: "You find an ancient shrine covered in vines, radiating a strange power.",
        choices: [
            { text: "Offer your compass to the shrine", next: "shrineBlessing" },
            { text: "Turn and leave", next: "forestLoop" }
        ]
    },
    ancientMemory: {
        text: "You touch the tablet, and memories flood your mind—you were once a guardian of this forest.",
        choices: [
            { text: "Embrace your destiny", next: "guardianAwakening" },
            { text: "Reject your fate", next: "memoryCollapse" }
        ]
    },
    returnFog: {
        text: "You force yourself awake, but the forest feels stranger, as if time and space are warped.",
        choices: [
            { text: "Call out for help", next: "echoTrap" },
            { text: "Keep moving forward", next: "timeLoop" }
        ]
    },
    forestTruth: {
        text: "The old man speaks slowly: 'The forest chose you...' (To Be Continued)",
        choices: []
    },
    ambushTrap: {
        text: "Shadows lunge at you from the darkness. You can't escape. (Death Ending)",
        choices: []
    },
    hiddenPast: {
        text: "You hear him whisper your name from a forgotten past... (Mystery Ending)",
        choices: []
    },
    riddleChallenge: {
        text: "You cleverly solve the riddle, and the shadow lets you go. (Good Ending)",
        choices: []
    },
    curseEnd: {
        text: "You fail to escape and are bound by a curse, lost forever. (Curse Ending)",
        choices: []
    },
    shrineBlessing: {
        text: "Your compass turns to light, illuminating a path. You escape with a blessing. (Blessed Ending)",
        choices: []
    },
    forestLoop: {
        text: "You find yourself back at the start, as if nothing ever happened... (Time Loop)",
        choices: []
    },
    guardianAwakening: {
        text: "You become the forest's new guardian, never to leave, but wielding its power. (Guardian Ending)",
        choices: []
    },
    memoryCollapse: {
        text: "You reject your destiny, and your memories crumble. You lose yourself forever. (Fallen Ending)",
        choices: []
    },
    echoTrap: {
        text: "Your cries draw them in... You can never escape. (Echo Trap Ending)",
        choices: []
    },
    timeLoop: {
        text: "You're caught in a time loop, waking each time deep in the forest... (Loop Ending)",
        choices: []
    }
};
