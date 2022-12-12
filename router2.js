

const router = (path) => {


    let url_segments = path.split('/') // ['', 'items', '2', 'edit']
        
        let model = url_segments[1]
        let id = url_segments[2]
        let action = url_segments[3]

        if (model ==  'products' && id == undefined) {
            return "el usuarios quiere ver los productos"
        }

        if (id != undefined) {
            return "el usuario quiere ver el product cpn ID "+ id
        }

    
    }



module.exports = router