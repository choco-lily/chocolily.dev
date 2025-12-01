// 헤비 관련 콘텐츠 데이터
export type HebiSub = { title: string; html: string };
export type HebiSection = { title: string; html?: string; items?: HebiSub[]; open?: boolean };

export const contents: HebiSection[] = [];
