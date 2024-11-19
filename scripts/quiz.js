const quizData = [
    {
        question: '한국의 대표적인 전통 음식은 무엇일까요?',
        options: ['피자', '김치', '초밥', '타코'],
        correct: 1
    },
    {
        question: '다음 중 해산물로 만든 음식은 무엇일까요?',
        options: ['불고기', '삼겹살', '초밥', '비빔밥'],
        correct: 2
    },
    {
        question: '김밥에 들어가지 않는 재료는 무엇일까요?',
        options: ['당근', '단무지', '김', '우유'],
        correct: 3
    }
];

let currentQuiz = 0;

function startQuiz() {
    currentQuiz = 0;
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('result').innerText = '';
    loadQuiz();
}

function loadQuiz() {
    const currentData = quizData[currentQuiz];
    document.getElementById('question').innerText = currentData.question;
    const options = document.getElementById('options').children;
    for (let i = 0; i < options.length; i++) {
        options[i].innerText = currentData.options[i];
    }
}

function checkAnswer(selected) {
    const currentData = quizData[currentQuiz];
    if (selected === currentData.correct) {
        document.getElementById('result').innerText = '정답입니다!';
    } else {
        document.getElementById('result').innerText = '틀렸습니다. 정답은 ' + currentData.options[currentData.correct] + ' 입니다.';
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        setTimeout(loadQuiz, 2000);
    } else {
        document.getElementById('play-again').style.display = 'block';
    }
}

startQuiz();
