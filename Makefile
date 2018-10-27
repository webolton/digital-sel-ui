#!/bin/bash

.PHONY : lint

lint:
	yarn eslint 'src/**/*'
