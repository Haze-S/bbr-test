import secret
from flask import Flask, render_template, jsonify, request, redirect, url_for
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/start', methods=['GET'])
def show_total():
    # pymongo 집계 함수? 찾아 적용
    # secret.db.users.aggregate([
    #         {'$group': {
    #             _id: '$type',
    #             total: {$sum: '$count'}
    #             }
    #         }
    #     ])
    total = secret.db.users.count()
    return jsonify({'total': total})

@app.route('/test', methods=['GET'])
def test_html():
    return render_template('test.html')

@app.route('/quest', methods=['GET'])
def get_test():
    question = list(secret.db.questions.find({}, {'_id': False}))
    return jsonify({'quest': question})

@app.route('/result', methods=['GET', 'POST'])
def show_result():
    if(request.method == 'GET'):
        return render_template('result.html')
    elif(request.method == 'POST'):
        type_receive = request.form['type_give']
        # pymongo type_receive와 일치하는 column 찾아서 count++

@app.route('/result/type')
def detail():
    keyword = request.args.get('type')
    result_type = list(secret.db.types.find({'type': {'$regex': keyword}}))
    return jsonify({'result': result_type})


@app.errorhandler(404)
def page_not_found(error):
    return "페이지가 없습니다. URL를 확인 하세요", 404

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)

