<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning Vue</title>
    <script src="https://unpkg.com/vue@3.0.2"></script>
    <style>
        .box {
            padding: 100px 0;
            width: 400px;
            text-align: center;
            background: #ddd;
            margin: 20px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <h1>Hell Vue :)</h1>
    <div id="app">
        <div v-if="showJoke">
        <p>{{ commedian }} - {{ special }} - {{ joke }}</p>
        <p>{{ Likes }}</p>
        <button v-on:click="Likes++">Like this joke</button>
        </div>

        <button @click="toggleShowJokes">
            <span v-if="showJoke">Hide Joke</span>
            <span v-else>Show Joke</span>
        </button>

        <!-- Mouse events -->
        <div class="box" @mouseover="eventAction">mouseover</div>
        <div class="box" @mouseleave="eventAction">mouseleave</div>
        <div class="box" @dblclick="eventAction">doubleclick</div>
        <div class="box"></div>
    </div>
    <script src="app.js"></script>
</body>
</html>
