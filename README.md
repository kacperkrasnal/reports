<h1 align="center">Export report Angular</h1>


<p>Small angular project. Its showing a list of data(reports) and including a open/close modal to create a new report schedule.
Project include API with endpoints created in Django Rest Framework. Angular - django communication.</p>

<h2 align="center">Installation</h2>

<h3>The software you need</h3>
<ul>
<li>Install python 3.9 or newer from <a href="https://www.python.org/">Python.org</a></li>
<li>Install nodejs from <a href="https://nodejs.org/en/">nodejs.org</a></li>
<li>If u don't have code editor install <a href="https://www.jetbrains.com/pycharm/">PyCharm</a> or <a href="https://code.visualstudio.com">Visual Studio Code</a></li>
</ul>

<h3>Backend installation</h3>

<ul>
<li>
Navigate to .\server_api\

```ps
cd .\server_api\
```
</li>
<li>
Install pip tool.

```ps
python -m pip install -U pip  
```
</li>
<li>
Install virtualenv package.

```ps
pip install vitualenv
```
</li>

<li>
Create new enviroment.

```ps
virtualenv env
```
</li>

<li>
Activate enviroment.

```ps
.\env\Scripts\activate
```
</li>

<li>
Install packages.

```ps
pip install -r .\requirements.txt

```
</li>

<li>
Navigate to server_api\api

```ps
cd .\api\   
```
</li>

<li>
Migrate.

```ps
python manage.py migrate
```
</li>

<li>
Load fixtures. (This step can be skipped)

```ps
python manage.py loaddata fixtures.json
```
</li>

<li>
Run server

```ps
python manage.py runserver
```
</li>
</ul>
<p>Keep server on. Open new terminal to turn on angular client.</p>

<h3>Frontend installation</h3>
<ul>
<li>
Navigate to \reports\client\

```ps
cd .\reports\client\
```
</li>
<li>
Install node packages.

```ps
npm install
```
</li>
<li>
Run server.

```ps
ng serve
```

Click the link in console to open website in your browser
</li>
</ul>
