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
            <ul class="sans list-disc pl-4">
            <li>We will divide randomly into 3 teams</li>
            <li>Each team will have one representative at the front of the room answering questions at any time
            </li>
            <li>
                Every 3 questions, all 3 team representatives swap out with someone else from their team
            </li>
            <li>
                The representative from whichever team answered the last question correctly gets to select the next question.
            </li>
            <li>
                Team representatives answer in the order that the buzzers were pressed until someone gets it right. If nobody gets it right, the general team gets a chance to answer in buzzer order for half points.
            </li>
            <li>
                Please don’t answer any questions if it’s not your turn to do so! 
            </li>
            <li>Be kind - some of the questions are hard and it’s hard to be put on the spot. The point is to have fun</li>
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