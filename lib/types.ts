interface Page {
  name: string;
  slug: {
    _type: "slug";
    current: string;
  };
  // content: Array<>;
}

export type { Page };
