async function getRandomChinese(length){
    let i = 0;
    let result = [];
    while( i < length){
        const date = Date.now().toString().slice(-5);
        result.push(String.fromCharCode(date));
        await new Promise(resolve => setTimeout(resolve, length*50));
        i++
    }return result.join(' ');
 }
 getRandomChinese(4).then(res => console.log(res))
