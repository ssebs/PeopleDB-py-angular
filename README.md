# PeopleDB-py-angular

Person Database using python, flask, sqlite3, and Angular.

## Installing
- Install deps from pkg mamager
    - Ubuntu:
        - `$ sudo apt install python3 python3-pip sqlite3 nodejs npm`
    - Arch:
        - `$ sudo pacman -S python3 python3-pip sqlite3 nodehs npm`
- Install pip deps
    - `$ sudo pip3 install flask flask-cors pysqlite3`
- Install Angular cli
    - `$ sudo npm install -g @angular/cli`
- Clone this repo
    - `$ git clone https://github.com/ssebs/PeopleDB-py-angular`
- cd to the new folder
    - `$ cd PeopleDB-py-angular/`
- Clone the [flask-ppl-api](https://github.com/ssebs/flask-ppl-api) repo.
    - `$ git clone https://github.com/ssebs/flask-ppl-api`
- cd to the new folder & run the init script.
    - `$ cd flask-ppl-api/`
    - `$ ./init_db.sh`
- Go back and install npm deps
    - `$ cd ../peopledb/`
    - `$ npm install`

## Running Dev
> You'll need two terminals open
- `$ make api`
    - ^ Will run python flask server (:5000)
- `$ make frontend`
    - ^ Will run angular live dev server (:4200)

## Building
- Frontend:
    - tbd~~`$ make build`~~
- Backend: (TEMP)
    - `$ nohup /usr/bin/python3 /var/www/PeopleDB-py-react/flask-ppl-api-main.py &`
    - TODO: `nohup gunicorn main:app -b 0.0.0.0:5000 &`

## Screenshots
tbd
