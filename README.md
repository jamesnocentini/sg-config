# sg-config

Convert YAML spec to JSON.

```bash
nodemon --ignore 'src/output.json' --watch 'config.yaml' convert.js
```

Start React Native app.

```bash
npm start
```

## Publishing to gh-pages

```bash
git checkout -b gh-pages
npm run build
git add build -f
git commit -m "publish to gh pages"
git push origin `git subtree split --prefix build`:refs/heads/gh-pages --force
```
