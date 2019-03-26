all:
	@echo "please enter a subcommand"
api:
	@cd flask-ppl-api/ && python3 main.py
react: run
	@
frontend: run
	@
run:
	@cd peopledb/ && ng serve --open
build:
	@cd peopledb/ && ng build
