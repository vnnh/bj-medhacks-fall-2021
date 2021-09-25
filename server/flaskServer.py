from flask import Flask
from flask.helpers import send_from_directory

app = Flask(__name__, static_folder="../out")

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def catch_all(path):
    print("You want path: %s" % path)
    if path.find(".") != -1:
        if path.find(".map") != -1:
            return ("", 204)

        print("resource request")
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run()