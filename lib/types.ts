interface AboutBlock {
  _type: "block.banner";
  aboutDescription: string;
  icon: string;
}

interface Page {
  name: string;
  slug: {
    _type: "slug";
    current: string;
  };
  content: Array<AboutBlock>;
}

export type { AboutBlock, Page };
