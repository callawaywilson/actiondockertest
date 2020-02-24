#!/bin/sh -l

echo "Running with target param: '$1'"
echo "Running with ENV_KEY from ENV: '$ENV_KEY'"
echo "Running with ENV_LOGIN from ENV: '$ENV_LOGIN'"

npm install

node ./build/build.js