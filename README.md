[![Coverage Status](https://coveralls.io/repos/github/MDxWARRIORxOP/memes-package/badge.svg?branch=main)](https://coveralls.io/github/MDxWARRIORxOP/memes-package?branch=main)

[![Github Builds](https://img.shields.io/github/actions/workflow/status/MDxWARRIORxOP/memes-package/main.yml)](https://github.com/MDxWARRIORxOP/memes-package/actions/workflows/main.yml)

![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/memes-api)

![Downloads](https://img.shields.io/npm/dw/memes-api)

[![Open Issues](https://img.shields.io/github/issues/MDxWARRIORxOP/memes-package)](https://github.com/MDxWARRIORxOP/memes-package/issues)

[![License](https://img.shields.io/github/license/MDxWARRIORxOP/memes-package)](https://github.com/MDxWARRIORxOP/memes-package/blob/main/LICENSE)

# Memes-Api

Get random memes from reddit for free without any tokens or keys.

## Installation

```bash
npm install memes-package
# or using yarn
yarn install memes-package
```

## Usage/Examples:

```js
const { getMeme } = require("memes-api");
// OR using ES modules
import { getMeme } from "memes-api";

// here sfw means 'Save for work' which means no sexual content.
// if sfw == true, then there is not going to be any sexual content.
// if sfw == false, then there could be some sexual content.
const meme = await getMeme({ sfw: true });
```

## Contributing

Contributions are always welcome!

Open a (pull request)[https://github.com/MDxWARRIORxOP/memes-package/pulls] if you have a feature request or an idea.
Open an (issue)[https://github.com/MDxWARRIORxOP/memes-package/issues] if you encounter any bugs.

Thanks!

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
