function findPossibility(width, height) {
    let poss2 = 0.203;
    let full = (width - 2) * (height - 2)
    let corner = 4
    let side = width * height - full - corner
    return 50 / (poss2 * (full * 8 + corner * 3 + side * 5 - width * height) / (width * height))
}


export default function getRandomCells(width, height) {
    const update = Array(40 * 40).fill('box');
    for (let i = 0; i < width * height; i++) {
        const possibility = Math.floor(Math.random() * (findPossibility(width, height)));
        if (possibility === 0) {
            update[i] = 'box live';
            for (let row = -1; row <= 1; row++) {
                for (let col = -1; col <= 1; col++) {

                    if (row === 0 && col === 0) {
                        continue;
                    }
                    
                    const newRow = Math.floor(i / width) + row;
                    const newCol = (i % width) + col;

                    if (newRow >= 0 && newRow < height && newCol >= 0 && newCol < width) {
                        const neighborIndex = newRow * width + newCol;

                        if (Math.random() < 0.203) {
                            update[neighborIndex] = 'box live';
                        }
                    }
                }
            }
        }      
    }
    return update;
}