export function json(payload: any, status = 200) {
    return new Response(JSON.stringify(payload), { status, headers: { 'Content-Type': 'application/json' } });
}

export function normalizePdsUrl(url: string): string {
    if (!url) return url;
    const trimmed = url.trim();
    if (!trimmed) return trimmed;
    // If it already has a protocol, return as-is
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
        return trimmed;
    }
    // Otherwise, add https://
    return `https://${trimmed}`;
}