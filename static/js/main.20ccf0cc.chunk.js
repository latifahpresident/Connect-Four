(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,n){},21:function(e,a,n){e.exports=n(31)},26:function(e,a,n){},31:function(e,a,n){"use strict";n.r(a);for(var r=n(0),t=n.n(r),o=n(5),c=n.n(o),l=(n(26),n(6)),i=n(7),s=n(9),p=n(8),u=n(10),m=n(2),g=(n(17),function(e){function a(){var e,n;Object(l.a)(this,a);for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(t)))).checkWin=function(){},n.win=function(e){n.props.drop(n.props.columns)},n.handleClick=function(){n.props.start_game?n.win(n.props.game_board):alert("Please Start Game")},n}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.game_board,a=this.props.columns,n=this.props.rows,r="board";return void 0!==e[a][n]&&(1===e[a][n]?r+=" player_2":r+=" player_1"),t.a.createElement("div",{className:r,onClick:this.handleClick})}}]),a}(r.Component)),d=Object(m.b)(function(e){return{current_ply:e.current_player,winner:e.winner,start_game:e.active_game,game_board:e.gameBoard}},function(e){return{drop:function(a){return e(function(e){return console.log("in actions"),{type:"DROP_TOKEN",payload:e}}(a))},startGame:function(){return e(function(e){e({type:"GAME_START",payload:!0})})}}})(g),h=[],f=5;f>=0;f--){for(var y=[],v=0;v<7;v++)y.push(t.a.createElement(d,{key:v,columns:v,rows:f})),console.log("colmun length",y);h.push(t.a.createElement("div",{className:"row",key:f},y))}console.log("row length",h);var b=function(e){function a(){var e,n;Object(l.a)(this,a);for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(t)))).start=function(e){console.log("starting game, ",n.props.Gameboard),e.preventDefault(),n.props.begin(),n.checkWin(n.props.Gameboard)},n.checkWin=function(e){for(var a=1;a<=2;a++){console.log(n.props.game_board,"check win");for(var r=0;r<=3;r++){console.log(a,"player");for(var t=0;r<=5;t++)if(e[t][r]===a&&e[t][r+1]&&e[t][r+2]&&e[t][r+3])return console.log(a),!0}}},n}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return console.log("is game active",this.props.start_game),t.a.createElement("div",{className:"App"},t.a.createElement("header",{className:"App-header"},t.a.createElement("button",{onClick:this.props.begin}," Start Game "),t.a.createElement("p",null,"Game Active: ",this.props.start_game?"True":"False"),t.a.createElement("p",null," The Current Player is: Player ",this.props.current_ply)),h)}}]),a}(r.Component),_=Object(m.b)(function(e){return console.log(e,"app state"),{current_ply:e.current_player,winner:e.winner,start_game:e.active_game,game_board:e.gameBoard}},function(e){return{begin:function(){return e(function(e){e({type:"GAME_START",payload:!0})})}}})(b),w=n(3),O=n(19),j=n(20),k=n.n(j),E=n(15),A={active_game:!1,current_player:1,winner:"",gameBoard:[[],[],[],[],[],[],[]]};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=Object(w.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GAME_START":return console.log(" game active:",a.payload),Object(E.a)({},e,{active_game:a.payload});case"DROP_TOKEN":console.log(" column:",a.payload);var n=e.current_player,r=e.gameBoard[a.payload].concat(n),t=e.gameBoard.slice();return t[a.payload]=r,Object(E.a)({},e,{current_player:1===e.current_player?2:1,gameBoard:t});default:return e}},Object(w.a)(O.a,k.a));c.a.render(t.a.createElement(m.a,{store:T},t.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.20ccf0cc.chunk.js.map