export type BooleanLike = boolean | (() => boolean);

export interface Options {
  sfw: BooleanLike;
}

export interface Meme {
  image: string;
  title: string;
  url: string;
  subreddit: string;
  author: string;
  upvotes: number;
  downvotes: number;
  upvoteRatio: number;
  nsfw: boolean;
  createdUTC: number;
  thumbnail: string;
  pinned: boolean;
  archived: boolean;
  awards: Array<string>;
  commentAmount: Number;
}

/**
 * @param {Options} options
 * @returns {Promise<Meme>}
 * @example import { getMeme } from "reddit-memes-api";
 *  const meme = getMeme({ sfw: true });
 *  console.log(meme);
 * @author Kingerious
 * @async
 * @constant
 * @see https://king-meme-api.mohammedsiddiqui2009.workers.dev/meme
 */
export async function getMeme(options: Options): Promise<Meme> {
  const SWF = typeof options.sfw == "function" ? options.sfw() : options.sfw;
  const res =
    SWF == false
      ? await fetch(
          "https://king-meme-api.mohammedsiddiqui2009.workers.dev/meme?sfw=false"
        )
      : await fetch(
          "https://king-meme-api.mohammedsiddiqui2009.workers.dev/meme?sfw=true"
        );

  const result = await res.json();

  const returnObject: Meme = {
    archived: result.archived,
    author: result.author,
    awards: result.awards,
    commentAmount: result.commentAmount,
    createdUTC: result.createdUTC,
    downvotes: result.downvotes,
    image: result.image,
    nsfw: result.nsfw,
    pinned: result.pinned,
    subreddit: result.subreddit,
    thumbnail: result.thumbnail,
    title: result.title,
    upvoteRatio: result.upvoteRatio,
    upvotes: result.upvotes,
    url: result.url,
  };

  return returnObject;
}
