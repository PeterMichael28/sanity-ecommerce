export default {
    name: 'products',
    type: 'document',
      title: 'Products',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
        },
        {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [ { type: "image" } ],
        options: {
            hotspot: true
        }
        },
        {
        name: 'slug',
        title: "Slug",
        type: "slug",
        options: {
            source: 'name',
            maxLength: 90,
        }
        }, 
        {
        name: 'price',
        title: "Price",
        type: "number",
        },
        {
        name: 'details',
        title: 'Details',
        type: 'string'
        },
        {
        name: 'brand',
        title: 'Brand',
        type: 'string'
        }
    ]
}