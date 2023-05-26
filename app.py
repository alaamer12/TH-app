from flask import Flask, jsonify

app = Flask(__name__)
counter = 0

@app.route('/')
def hello():
    global counter
    return jsonify(message='Hello, from Flask!', counter=counter)

@app.route('/increment', methods=['POST'])
def increment():
    global counter
    counter += 1
    return jsonify(counter=counter)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
