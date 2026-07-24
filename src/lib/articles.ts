export type Article = {
  slug: string;
  series: string;
  title: string;
  excerpt: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "wakuwaku-ikari",
    series: "マンガとアニメで学ぶ5分間心理学 第1回",
    title: "ワクワクは、怒りより強い?",
    excerpt:
      "『ドラゴンボール』の孫悟空とベジータから、リフレーミングと心の余白について考える。",
  },
];
