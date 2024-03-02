export default function getNextGrid(width, height, prevGrid) {
    const update = [...prevGrid];
    for (let i = 0; i < height * width; i++) {
        let liveCount = 0;
        if (Math.floor(i / width) > 0) {
            if (prevGrid[i - width] === "box live") {
                liveCount += 1;
            }
            if (i % width > 0) {
                if (prevGrid[i - width - 1] === "box live") {
                    liveCount += 1;
                }
            }
            
            if (i % width < width - 1) {
                if (prevGrid[i - width + 1] === "box live") {
                    liveCount += 1;
                }
            } 
        }

        if (Math.floor(i / width) < height - 1) {
            if (prevGrid[i + width] === "box live") {
                liveCount += 1
            }

            if (i % width > 0) {
                if (prevGrid[i + width - 1] === "box live") {
                    liveCount += 1;
                }
            }
            
            if (i % width < width - 1) {
                if (prevGrid[i + width + 1] === "box live") {
                    liveCount += 1;
                }
            } 
        }

        if (i % width > 0) {
            if (prevGrid[i - 1] === "box live") {
                liveCount += 1;
            }
        }
        
        if (i % width < width - 1) {
            if (prevGrid[i + 1] === "box live") {
                liveCount += 1;
            }
        }

        if (prevGrid[i] === "box" && liveCount === 3) {
            update[i] = "box live";
        } else if (prevGrid[i] === "box live") {
            if (liveCount < 2 || liveCount > 3) {
                update[i] = "box";
            }
        }
    }
    return update;
}