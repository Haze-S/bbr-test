import secret

from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/start', methods=['GET'])
def show_total():
    total = list(secret.db.users.aggregate([
        {'$group':
            {
                '_id': 'null',
                'total': {'$sum': '$count'}
            }}
    ]))
    for count in total:
        return jsonify({'total': count})


@app.route('/test', methods=['GET'])
def test_html():
    return render_template('test.html')


@app.route('/quest', methods=['GET'])
def get_test():
    question = list(secret.db.questions.find({}, {'_id': False}))
    return jsonify({'quest': question})


@app.route('/result/<mbti>', methods=['GET'])
def get_param(mbti):
    data = secret.db.types.find_one({'type': mbti}, {'_id': False})
    # secret.db.users.update_one({'type': mbti}, {'$inc': {'count': 1}})  패치........ㅎ......
    return jsonify({"data": data})

@app.errorhandler(404)
def page_not_found(error):
    return "페이지가 없습니다. URL를 확인 하세요", 404


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
