from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/projects")
def projects():
    return render_template('projects.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/interests")
def interests():
    return render_template('interests.html')

@app.route("/external")
def contact():
    return render_template('contact.html')

# @app.route("/delivered_url")
# def deliver_url_page():
#     url = request.args.get('url')
#     if not url.startswith('http'):
#         url = "http://" + url
#     wikifier = Wikify(url)
#     wikifier.wikifier_main()
#     return wikifier.soup.prettify()

if __name__ == "__main__":
    app.run()