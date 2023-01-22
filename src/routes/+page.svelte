<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;400;700&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet">
</svelte:head>

<section class="container mx-auto">
    <div class="h-72 bg-amber-300 flex items-end justify-end mb-4">
        <h1 class="text-6xl font-bold text-white mx-4 mb-4">Trivia Night</h1>
    </div>
    <div class="grid gap-4 mx-4">
        <div class=" p-3 bg-orange-50 rounded-lg shadow-md">
            <h1 class="text-3xl">Rules</h1>
            <p class="sans">Put the rules in here</p>
        </div>
        <div class="p-3 bg-orange-50 rounded-lg shadow-md">
            <h1 class="text-3xl">Answer of the Night</h1>
            <p class="sans">For each Trivia Night event, there will be an "answer of the night" hidden somewhere. The first person to answer <em>any</em> question with the answer of the night will win their team 1000 points and a chance for anyone on their team to answer current question for full points. Tonight's answer of the night is found by solving the riddle: <em>I am an odd number. Take away a letter and I become even. What number am I?</em> </p>
        </div>
    </div>
</section>

<style>
    section {
        font-family: 'Roboto Slab', serif;
    }
    .sans {
        font-family: 'Roboto', sans-serif;
    }
</style>