'use strict'

const cell_size = 50;

function chessBoard(cell_size){
    const mainWindow = document.querySelector('.chess_board');
    const board = document.createElement('div');
    const boardWidth = cell_size*9 + 'px';
    const boardHeight = cell_size*9 + 'px';
    board.style.cssText = `padding: 20px 20px 20px 20px; width: ${boardWidth}; height: ${boardHeight}; display: flex; flex-wrap: wrap;`;
    console.log(mainWindow);
    mainWindow.appendChild(board);

    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let i=0; i<81; i++){
        const cell = document.createElement('div');
        cell.style.width = cell_size + 'px';
        cell.style.height = cell_size + 'px';
        cell.style.textAlign = 'center';
        if(i>0 && i<9){
            cell.style.backgroundColor = 'beige';
            cell.textContent = letters[i-1];
        }
        else if(i>0 && i%9 ===0){
            cell.style.backgroundColor = 'beige';
            cell.textContent = i / 9;
        }
        else if (i>0 && i%2===0){
            cell.style.backgroundColor = 'white';
        }
        else if(i>0 && !(i%2===0)){
            cell.style.backgroundColor = 'black';
        }

        board.appendChild(cell);
    }

}

chessBoard(cell_size);