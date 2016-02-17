# Easy Rename

Prettifier for filenames.


## Module

### Usage

```
$ npm i easy-rename
```

```js
const easyRename = require('easy-rename');

easyRename('BaD FileName (1) (1) (1).clj');
// => 'bad_filename_1_1_1.clj'
```

## CLI

### Usage

```
$ npm i -g easy-rename
```

```bash
$ easy-rename BaD\ FileName\ \(1\)\ \(1\)\ \(1\).clj
# => bad_filename_1_1_1.clj

$ easy-rename "BaD FileName (1) (1) (1).clj"
# => bad_filename_1_1_1.clj
```
