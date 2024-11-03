export function formatRelativeTime(date) {
    const now = new Date();
    const sameDay = now.toDateString() === date.toDateString();

    if (sameDay) {
        return date.toLocaleTimeString();
    }

    const dayOfWeek = date.getDay();
    const dayOfWeekNow = now.getDay();
    const diffInDays = Math.abs(dayOfWeekNow - dayOfWeek);

    if (diffInDays <= 7 && now - date < 7 * 24 * 60 * 60 * 1000) {
        return `${date.toLocaleDateString(undefined, { weekday: 'long' })}, ${date.toLocaleTimeString()}`;
    }

    return date.toLocaleString();
}