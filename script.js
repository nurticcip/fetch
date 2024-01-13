// const users = document.querySelector('.users')
// const allPhotos = document.querySelector('.photos')


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(user => user.json())
//     .then(res => {
    //         console.log(res)
    //         res.map(el => {
        //             let name = document.createElement('h3')
        //             let div = document.createElement('div')
        //             let userImage = document.createElement('img')
        //             let span = document.createElement('span')
        //             userImage.src = 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7915728/user-icon-md.png'
        //             span.innerHTML = el.phone
        //             name.innerText = el.name
        //             div.append(userImage)
        //             div.append(name)
        //             users.append(div)
        //         })
        //     })
        
        
        // fetch('https://jsonplaceholder.typicode.com/photos')
        //     .then(phot => phot.json())
        //     .then(result => {
            //         console.log(result)
            //         result.slice(0, 50).map(elem => {
                //             let imgDiv = document.createElement('div')
                //             let img = document.createElement('img')
                //             imgDiv.append(img)
                //             allPhotos.append(imgDiv)
                //             img.src = elem.url
                //         })
                //     })
                
                
               
const kyrgyz = document.querySelector('.kyrgyz')

fetch('https://restcountries.com/v3.1/all')
    .then(flag => flag.json())
    .then(res => {
        console.log(res)
        res.map(el => {
            const divFlag = document.createElement('div')
            const imgFlag = document.createElement('img')
            imgFlag.src = el.flags.png
            kyrgyz.append(divFlag)
            divFlag.append(imgFlag)
        })
    })

function getSearch() {
    fetch(`https://restcountries.com/v3.1/name/${searchInput.value}`)
}