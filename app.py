import secret
from flask import Flask, render_template, jsonify, request, redirect, url_for
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/start')
def show_total():
    total = secret.db.users.count()
    return jsonify({'total': total})

@app.route('/test')
def test_html():
    return render_template('test.html')

@app.route('/test')
def get_test():
    question = list(secret.db.questions.find({}, {'_id': False}))
    return jsonify({'quest': question})

@app.route('/result')
def show_result():
    return render_template('result.html')

@app.route('/result', methods=['GET', 'POST'])
def result():
    # if
    number_receive = request.form['number_give']
    type_receive = request.form['type_give']
    doc = {
        "number": number_receive,
        "type": type_receive
    }
    secret.db.users.insert_one(doc)
    type = list(secret.db.types.find_one({}, {'_id': False}))
    return jsonify({'result': type})

@app.errorhandler(404)
def page_not_found(error):
    return "페이지가 없습니다. URL를 확인 하세요", 404

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)

