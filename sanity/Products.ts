// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'products',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'productname',
            type: 'string',
            title: 'Product name'
        },
        {
            name: 'producttype',
            type: 'string',
            title: 'Product Type'
        },
        {
            title: 'slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'productname',
                maxLength: 200,    //will be ignored if slugify is set
                slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
            }
        },
        {
            name: 'description',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: 'image',
            type: 'array',
            title: "Image",
            of: [
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            type: 'text',
                            title: 'Alternaive Text'
                        }
                    ]
                }
            ]
        },
        {
            name: 'price',
            type: 'string',
            title: 'Price'
        },
        {
            name: 'quantity',
            type: 'array',
            title: 'Quantity',
            of:[{type:'string'}]
        },
        {
            name: 'weight',
            type:'string',
            title:'Weight'
        },
    ]
}