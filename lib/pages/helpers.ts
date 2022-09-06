interface Path {
  params: {
    slug: string;
  };
}

export const buildPaths = (slugs: string[]): Path[] => {
  return slugs.map((slug): Path => {
    return {
      params: {
        slug,
      },
    };
  });
};
