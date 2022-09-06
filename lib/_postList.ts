import { Post } from "../types";

export const posts: Post[] = [
  {
    id: "1",
    title: "How to run a IoTeX Full Node on a Raspberry Pi Board",
    description:
      "While many people think that running a blockchain full-node is all about mining, there are actually other reasons why you may want to run a full-node. For example, it can be a very effective learning experience that allows you to see first-hand how blockchain works. But there is another important reason why you may want to run your own blockchain full-node, especially if you are trying to connect IoT devices to the blockchain: that's when you need a, a full-node whose only purpose is to provide clients access to the blockchain.",
    slug: "How-to-run-a-IoTeX-Full-Node-on-a-Raspberry-Pi-Board",
    permalink:
      "academy/how-to-run-a-iotex-full-node-on-a-raspberry-pi-board.md",
    createdAt: "2021-03-31T00:00:00.000Z",
    updatedAt: "2021-03-31T00:00:00.000Z",
    status: "published",
    author: {
      id: "1",
      name: "IoTeX",
      githubHandle: "iotexproject",
    },
    videoUrl: "RkVKk-sedts",
  },
];

export const slugs: string[] = posts.map((post) => post.slug ?? "");
