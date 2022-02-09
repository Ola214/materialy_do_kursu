new Vue({
  el: "#app",
  data:{
   result: 0,
   answer: '',
   dictionary: [],
   words: [],
   currentWordId: 0,
   currentWord: ''
  },
  methods: {
    randWord: function() {
      this.currentWordId = Math.floor(Math.random() * this.dictionary.length);
      this.currentWord = this.dictionary[this.currentWordId][1];
    },
    initialState: function() {
      this.dictionary = [
        ['eagle', 'orzeł'],
        ['hawk', 'jastrząb'],
        ['haddock', 'łupacz']
      ];
      this.words = [];
      this.result = 0;
      this.randWord();
    },
    checkAnswer: function() {
      if(this.answer.trim().toLowerCase() == this.dictionary[this.currentWordId][0]){
        this.result += 1;
        this.words.push(this.dictionary.splice(this.currentWordId, 1));
        // [[a, b]]
        this.randWord();
      } else {
        this.result -= 0.5;
      }
      this.answer = '';
    }
  },
  created: function(){
    this.initialState();
  }
});