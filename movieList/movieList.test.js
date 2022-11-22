const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/automation/movieList/index.html')
})

test('Add 5 movies, mark them as watched, then delete them all hahaha', async () => {
    let movies = ['Everything is illuminated', 'Bad Boys II', 'Easy A', 'Tenet', 'Mean Girls']
    
    let movieInput = await driver.findElement(By.xpath('/html/body/main/section/form/input'))
    
    let button = await driver.findElement(By.xpath('/html/body/main/section/form/button'))

    for(let i = 0; i<movies.length;i++){
        await movieInput.sendKeys(movies[i])
        await button.click()
        await driver.sleep(200)
    }
    
    for(let j=1;j<movies.length+1;j++){
        let movieToClick = await driver.findElement(By.xpath(`/html/body/main/ul/li[${j}]/span`))
        await movieToClick.click()
        await driver.sleep(500)
    }
    
    for(let k=0; k<movies.length;k++){
        let movieToDelete = await driver.findElement(By.xpath(`/html/body/main/ul/li[1]/button`))
        
        await movieToDelete.click()
        await driver.sleep(500)
    }
})
// 3 INDIVIDUAL FUNCTIONS FOR ADDING, MARKING AS WATCHED, AND DELETING. I MASHED ALL OF THEM TOGETHER IN A SINGLE TEST ABOVE

// afterAll(async () => {
//     await driver.quit()
// })

// test('Add a movie', async () => {
//     let movieInput = await driver.findElement(By.xpath('/html/body/main/section/form/input'))

//     let button = await driver.findElement(By.xpath('/html/body/main/section/form/button'))

//     await movieInput.sendKeys('Everything is Illuminated')
//     await button.click()

//     await driver.sleep(2000)
// })

// test('Mark Everything is Illuminated as Watched', async () => {
//     let movieTitle = await driver.findElement(By.xpath('/html/body/main/ul/li/span'))

//     await movieTitle.click()
//     await driver.sleep(2000)
// })

// test('Delete Everything is Illuminated', async () => {
//     let deleteButton = await driver.findElement(By.xpath('//*[@id="EverythingisIlluminated"]'))

//     await deleteButton.click()
// })
