# Memes-Api

Get random memes from reddit for free without any tokens or keys.

# Examples:

```js
import { getMeme } from "memes-api";

// here sfw means 'Save for work' which means no sexual content.
// if sfw == true, then there is not going to be any sexual content.
// if sfw == false, then could be sexual content.
const meme = getMeme({ sfw: true });

console.log(meme);

/* =>
{
    "image": "https://i.redd.it/3fu63af7acsa1.jpg",
    "title": "I look away annoyed everytime.",
    "url": "https://www.reddit.com/r/memes/comments/12dr5tj/i_look_away_annoyed_everytime/",
    "subreddit": "memes",
    "author": "thepositivepandemic",
    "upvotes": 31155,
    "downvotes": 0,
    "upvoteRatio": 0.92,
    "nsfw": false,
    "createdUTC": 1680801633,
    "thumbnail": "https://b.thumbs.redditmedia.com/pjRmcs0xEN1a1wlEC-nmsfOq5tS8Io0alVfdXEBUK1c.jpg",
    "pinned": false,
    "archived": false,
    "awards": [],
    "commentAmount": 1422,
}
*/
```

# License

MIT License

Copyright (c) 2023 kingerious

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
