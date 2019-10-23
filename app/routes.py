from datetime import datetime


from flask import render_template, send_from_directory

from app import app
from app.templates.database import get_users


@app.route("/blah")
def route_blah():
    return "Salut tout le monde !"

#@lru_cache


@app.route("/")
@app.route("/index")
def route_index():
    date = datetime.now()
    users = get_users()
    return render_template(
        "index.html",
        date_to_print=date,
        users=users
    )


'''
@app.route("user/<id>")
def route_user(id):
    table = [i for i in range(10) if i % 3 != 0]
    ids = [u["id"] for u in get_users()]
    user = [user for user in get_users() if user["id"] == id]
    return "Utilisateur d'ID {} s'appel {}".format(id, user[0]["name"])
'''

@app.route("/user/<int:id>")
def route_user(id):
    user = [user for user in get_users() if user["id"] == id]
    if len(user) > 0:
        return f"Utilisateur d'ID {id} s'appel { user[0]['name']}"
    else:
        return "L'utilisateur n'existe pas!"
