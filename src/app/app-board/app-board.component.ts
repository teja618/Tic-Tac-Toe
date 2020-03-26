import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.css']
})
export class AppBoardComponent implements OnInit {

  squares : String[];
  isNext :boolean;
  winner: String;
  count:number;
  tie:String

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    console.log("newGamwwwwww ")
    this.squares = Array(9).fill(null);
    this.winner =null;
    this.tie=null;
    this.isNext=true;
  }

  get player(){
    return this.isNext ? 'X' : 'O';
  }

  nextTurn(indx:number){
    if(!this.squares[indx]){
      this.squares.splice(indx,1,this.player);
      this.isNext=!this.isNext;
    }
    this.winner=this.findWinner();
    this.count=0;
    for(let i=0;i<this.squares.length;i++){
      if(this.squares[i]!=null){
        this.count++ ;
      }
    }
    console.log(this.count);
    if(this.count>=9 && this.winner==null){
      console.log("Game Over");
      this.tie="Game Tied!!!!"
    }


    }
  

  findWinner() {
    const Lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i=0;i<Lines.length;i++){
      const [a,b,c] =Lines[i];
      if(this.squares[a] && this.squares[a] == this.squares[b] && this.squares[c] == this.squares[b]){
        return this.squares[a];
      }
    }
    return null;
    throw new Error("Method not implemented.");
  }

  
}
