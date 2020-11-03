class User {
   constructor(name, score = 0){
     this.name = name;
     this.score = score;
   }

   incrementScore(points){
     this.score += points;
   }

   score(){
     return this.score;
   }
}

export { User }