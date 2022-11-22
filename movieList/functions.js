const {By} = require('selenium-webdriver')
let movies = ['Everything is illuminated', 'Bad Boys II', 'Easy A', 'Tenet', 'Mean Girls']


   const addMovies = async (driver) => {
    let movieInput = await driver.findElement(By.xpath('/html/body/main/section/form/input'))
    let button = await driver.findElement(By.xpath('/html/body/main/section/form/button'))
    
    for(let i = 0; i<movies.length;i++){
        await movieInput.sendKeys(movies[i])
        await button.click()
        await driver.sleep(200)
    }
    
}
const markAsWatched = async (driver) => {

for(let j=1;j<movies.length+1;j++){
    let movieToClick = await driver.findElement(By.xpath(`/html/body/main/ul/li[${j}]/span`))
    await movieToClick.click()
    await driver.sleep(500)
}
}

const deleteMovies = async (driver) => {

    for(let k=0; k<movies.length;k++){
        let movieToDelete = await driver.findElement(By.xpath(`/html/body/main/ul/li[1]/button`))
        
        await movieToDelete.click()
        await driver.sleep(500)
    }

}


module.exports = {
    addMovies,
    markAsWatched,
    deleteMovies
}