#!/bin/bash

git pull

cd ../sticky-add-to-cart
git pull
cd ../docs
rm -rf docs/sticky-add-to-cart
mkdir -p docs/sticky-add-to-cart
cp -r ../sticky-add-to-cart/docs/user-guide/* docs/sticky-add-to-cart

npm run build

pm2 restart ecosystem.config.cjs
