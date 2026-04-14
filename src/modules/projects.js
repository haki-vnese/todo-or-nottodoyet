import { state } from "./state.js";

const COLORS = randomColors();

function randomColors() {
    return [
        '#e57373', // Red
        '#f06292', // Pink
        '#ba68c8', // Purple
        '#9575cd', // Deep Purple
        '#7986cb', // Indigo            
        '#64b5f6', // Blue
        '#4dd0e1', // Cyan
        '#4db6ac', // Teal
        '#81c784', // Green
        '#aed581', // Light Green
        '#dce775', // Lime
        '#fff176', // Yellow
        '#ffd54f', // Amber
        '#ffb74d', // Orange
        '#ff8a65', // Deep Orange
        '#a1887f', // Brown
    ]   
}

export function getUnusedColor() {
    const usedColors = state.projects.map(p => p.color);

    const available = COLORS.filter(color => !usedColors.includes(color));

    if (available.length > 0) {
        return available[0]; // first unused color
    }

    return COLORS[Math.floor(Math.random() * COLORS.length)];
}
