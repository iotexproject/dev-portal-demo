export type Post = {
    id?: string;
    type?: "academy" | "blog";
    title?: string;
    description?: string;
    videoUrl?: string;
    permalink?: string;
    slug?: string;
    createdAt?: any;
    publishedAt?: any;
    updatedAt?: any;
    author?: User;
    status?: "published" | "draft";
    headerImg?: {
      id: string;
      extension: string;
    };
    content?: any;
    isFeatured?: boolean;
    isProposed?: boolean;
    topics?: Array<Topic>;
    bookmarks?: Array<Bookmark>;
    difficulty?: "beginner" | "intermediate" | "advanced";
  };
  
  export type Topic = {
    key: string;
    name: string;
    posts?: Array<Post>;
  };
  
  export type User = {
    id?: string;
    name: string;
    githubHandle?: string;
    wallets?: Array<UserWallet>;
    role?: "admin" | "editor" | "contributor" | "user";
    email?: string;
    posts?: Array<Post>;
    avatar?: {
      url: string;
    };
    githubAvatar?: string;
    lastTestTokenClaim?: any;
    bio?: string;
    profileHeader?: {
      id: string;
      extension: string;
    };
    isAvailableToHire?: boolean;
  };
  
  export type UserWallet = {
    id?: string;
    address: string;
    isTestnet: boolean;
    isTipReceiver: boolean;
  };
  
  export type Follow = {
    id?: string;
    following: User;
    follower: User;
  }
  
  export type DifficultyLevel = {
    key: "beginner" | "intermediate" | "advanced";
    label: string;
    color: string;
  };
  
  export type Bookmark = {
    id: string;
    postId: string;
  };
  
  export type Like = {
    id: string;
    postId: string;
  };
  
  export type GithubRepo = {
    repoName: string;
    repoUrl: string;
    starsCount: number;
    commitsCount: number;
    issuesCount: number;
    commits: Array<GithubCommit>;
  };
  
  export type GithubCommit = {
    commitName: string;
    commitUrl: string;
    author: string;
    timestamp: string;
  };
  
  export type ChainStats = {
    label: string;
    value: string | number;
  };
  
  export type ChainMeta = {
    height: string;
    tps: string | number;
    epoch: string;
  };
  
  export type Tweet = {
    id: string;
    text: string;
    created_at: string;
  };
  
  export type TipParams = {
    receiver: string;
    userId: string;
    postUri: string;
    postId: string;
    tippingAmount?: string;
  };
  
  export type Tip = {
    id?: string;
    amount?: string;
  };
  
  export type PageMetaType = {
    property: string;
    content: string;
    key: string;
  };
  