import json

import secret
from flask import Flask, render_template, jsonify, request, redirect, url_for
from bson import json_util
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/start', methods=['GET'])
def show_total():
    total = list(secret.db.users.aggregate([
        {'$group':
             {
                 '_id' : 'null',
                 'total' : {'$sum' : '$count'}
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


# 파라미터 구현 더 알아보고 고치기
@app.route('/result', methods=['GET', 'POST'])
def show_result():
    if(request.method == 'GET'):
        return render_template('result.html')
    elif(request.method == 'POST'):
        type_receive = request.form['type_give']
        secret.db.users.find({'type': type_receive}).update({
            '$int': {'count': 1}
        })
        keyword = request.args.get(type_receive)
        result_type = list(secret.db.types.find({'type': {'$regex': keyword}}, {'_id': False}))
        result_count = list(secret.db.users.find({'type': keyword}, {'_id': False}))
        return jsonify({'user': result_count, 'result': result_type})

@app.errorhandler(404)
def page_not_found(error):
    return "페이지가 없습니다. URL를 확인 하세요", 404

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)

