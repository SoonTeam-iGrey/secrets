from flask import Flask, render_template, request

app = Flask(__name__)
app.config['SECRET_KEY'] = 'soonteam i-grey'

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Process the form data (for now, just print the entered name)
        name = request.form.get('name')
        print(f'Hello, {name}!')

        # You can add more logic here to handle the form data as needed

    return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=True)