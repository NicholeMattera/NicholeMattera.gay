#!/bin/bash

SCRIPT_DIR=$(cd $(dirname "${BASH_SOURCE[0]}") && pwd)
GREEN=`tput setaf 2`
RESET=`tput sgr0`

rm -rf ${SCRIPT_DIR}/../build
mkdir ${SCRIPT_DIR}/../build

echo "${GREEN}- Building Server...${RESET}"
cd ${SCRIPT_DIR}/.. && go build -o ./build/nicholemattera.com

echo "${GREEN}- Copying Static Files...${RESET}"
cp -R ${SCRIPT_DIR}/../web/static ${SCRIPT_DIR}/../build/static
cp -R ${SCRIPT_DIR}/../web/templates ${SCRIPT_DIR}/../build/templates

echo "${GREEN}- Building Web Components...${RESET}"
cd ${SCRIPT_DIR}/.. && npx webpack --mode=production

echo "${GREEN}Build Complete!${RESET}"
