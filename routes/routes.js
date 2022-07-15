const axios = require('axios');
const bathHTML = require('../pages/bath');
const indexHTNL = require('../pages/index')

const url = 'https://ruden-design.ru/json/www.json';


  
const cutStr = (str) => {
        
    const indexOfX = str.indexOf('1');

    return str.split("").map((ltr, index) => {
        if(indexOfX <= index) return
        return ltr 
    }).join('').trim()

};

const filterСlasses = (item) => {
    let accom = '';
    let material = '';
    let brand = '';
    

    if(item['Тип установки'].toLocaleLowerCase() == "встраиваемая | пристенная" || "встраиваемая" ||  "пристенная" ){
        accom = 'built-in';
    } 
    if(item['Тип установки'].toLocaleLowerCase() == "отдельностоящая") {
        accom = 'freestanding'
    }
    if(item['Угловая'].toLocaleLowerCase() == 'да') {
        accom = 'corner'
    }


    if(item['Категория'].toLocaleLowerCase() == "акриловые ванны") {
        material = 'acrylic'
    }

    brand = item['Бренд'].toLocaleLowerCase();

    return `${accom} ${material} ${brand}`
}

const sortData = (data) => {
    const structurData = [];
    const result = [];
    let a = []

    data.forEach((item, index, array) => {
        const title = cutStr(item['Название изделия']); 
        if(a.find(i => i === title)) return
        a.push(title)
    })


    a.forEach(name => {
        const arr = data.filter(obj => cutStr(obj['Название изделия']) === name);
        structurData.push(arr)

    })


    for (let i = 0; i < structurData.length; i++) {
        const arr = structurData[i]
        
        const imgDrawing = {};
        const dimensionsArr = [];
        const displacementArr = [];
        const sizeArr = [];
        const formatArr = [];   

        for (let j = 0; j < arr.length; j++) {
            const elem = arr[j];
            
            const w = Math.floor(Number(elem['Ширина нетто / изделия (мм)'])/10);
            const h = Math.floor(Number(elem['Глубина нетто / изделия (мм)'])/10)
            const l = Math.floor(Number(elem['Высота нетто / изделия (мм)'])/10)
            
            const size = w+'/'+h;
            
            imgDrawing[size] = elem['Чертеж'];
            dimensionsArr.push(`${w}x${h}x${l}`);
            displacementArr.push(elem['Объем']);
            sizeArr.push(`${w}w`)
            sizeArr.push(`${h}h`)

            // const panelsPrice = {};
            // if(item['Съемная фронтальная'].toLocaleLowerCase  != "нет, не предусмотрена") {
            //     panelsPrice.front =
            // }

            formatArr.push({
                size: size,
                price: Math.floor(Math.random() * 40000) + 20000,
            })
        }
    
        const res = {};
    
        res.vendorCode = arr[0]['Артикул'];
        res.title = cutStr(arr[0]['Название изделия']);
        res.specifications = {
            brand: `${arr[0]['Бренд']} (${arr[0]['Страна производства']})`,
            dimensions: {
                name: 'Габариты',
                array: dimensionsArr
            },
            displacement: {
                name: 'Литраж',
                array: displacementArr
            },
            material:{
                name: 'Материал',
                value:  arr[0]['Материал']
            },
            sheetThickness: {
                name: 'Толщина',
                value: [] 
            },
            guarantee: {
                name: 'Гарантия',
                value: arr[0]['Гарантия']
            } 
        };
        res['title-search'] = arr[0]['Название изделия'];
        
        res.image = {
            img1: arr[0]['Фото изделия'],
            img2: arr[0]['Фото в интерьере'],
            imgDrawing: imgDrawing
        }
        res.classes = filterСlasses(arr[0]);
        res.relatedGoods = 'collection1';
        res.size = sizeArr;
        res.format = formatArr;
        res.priceOld = ''
        res.url = `/cards/${res.vendorCode}`

        result.push(res)
    }
    return result

}
let products = [];
const fetchdata = async () => {
    const data = await axios.get(url).then(json => {
        return sortData(json.data)
    });
    products = data
}
fetchdata()

const router = (app) => {
    app.get('/', (req, res) => {
        res.send(indexHTNL());
    });

    app.get('/cards', (req, res) => {
        res.send(products)
    });

    
    app.get(`/cards/:vendorCode`, (req, res, next) => {
        bath = products.filter(item => item.vendorCode == req.params.vendorCode)[0];
        next()
    }, (req, res, next) => {
        res.send(bathHTML(bath))
    })
}



// Export the router
module.exports = router;