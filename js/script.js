// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(json => console.log(json))

// async await 

const row = document.querySelector('.row')




async function fetchData() {
    try {
        let response = await fetch('https://api.escuelajs.co/api/v1/products')
        let data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

fetchData()
    .then(data => {
        console.log(data)

        // for (let i = 0; i < data.length; i++) {
        //     console.log(data[i]);
            
        // }

        let sepet =[]

        data.forEach(ürün => {
            // console.log(ürün.image);

            const col =document.createElement('div')
            col.classList.add('col')
            col.style.width = '250px'
            // col.style.height = '400px'

            const card = document.createElement('div')
            card.style.width = '100%'
            card.style.height = '100%'
            card.style.border = '1px solid black'

            const imgDiv = document.createElement('div')
            
            imgDiv.style.width ='100%'
            imgDiv.style.height ='250px'

            const img = document.createElement('img')
            img.src = ürün.category.image

            img.style.width = '100%'
            img.style.height = '100%'

            const cardBody = document.createElement('div')
            cardBody.style.width = '100%'
            cardBody.style.height = '250px'

            const baslik = document.createElement('h5')
            baslik.textContent = ürün.title

            const aciklama = document.createElement('p')
            aciklama.textContent = `${ürün.description} - ${ürün.price}$`

            const btn = document.createElement('button')
            btn.classList.add('btn','btn-warning')
            btn.textContent = 'sepete ekle'


            btn.addEventListener('click',() => {
                console.log(ürün);
                sepet.push(ürün)

                console.log(sepet);
            })

            cardBody.append(baslik)
            cardBody.append(aciklama)
            cardBody.append(btn)
            imgDiv.append(img)

            card.append(imgDiv)
            card.append(cardBody)
            
            
            
            
            
            col.append(card)

            row.append(col)
        });
    })
