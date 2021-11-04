from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('10.178.0.2', 27017, username="bbr-test", password="bbr15951")
db = client.colections

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/test', methods=['GET'])
def get_test():
    sample_receive = request.args.get('sample_give')
    print(sample_receive)
    return jsonify({'msg': 'GET 성공'})

@app.route('/result', methods=['POST'])
def post_result():
    sample_recive = request.form['sample_give']
    print(sample_recive)
    return jsonify({'msg': 'POST 성공'})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)