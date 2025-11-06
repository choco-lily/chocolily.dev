export type MapleSub = { title: string; html: string };
export type MapleSection = { title: string; html?: string; items?: MapleSub[]; open?: boolean };

export const contents: MapleSection[] = [
  {
    title: "컨텐츠",
    open: false,
    items: [
      {
        title: "직업",
        html: "<a href=\"/job/hero\">히어로</a> · <a href=\"/job/darkknight\">다크나이트</a> · <a href=\"/job/il\">썬콜</a> · <a href=\"/job/fp\">불독</a> · <a href=\"/job/marksman\">신궁</a> · <a href=\"/job/bowmaster\">보우마스터</a> · <a href=\"/job/shadower\">섀도어</a> · <a href=\"/job/nightlord\">나이트로드</a>",
      },
    ],
  },
];


