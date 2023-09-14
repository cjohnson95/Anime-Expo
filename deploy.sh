echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m " DEPLOY"

git push -f git@github.com:cjohnson95/Anime-Expo.git main:gh-pages

cd -