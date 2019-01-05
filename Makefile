#!/bin/bash

.PHONY : run
run:
	yarn start

.PHONY : test
test:
	yarn test

.PHONY : lint
lint-all:
	yarn eslint 'src/**/*'
