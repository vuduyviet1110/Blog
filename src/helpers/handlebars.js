const Handlebars= require('handlebars');
module.exports ={
    sum: (a,b) => a+b,
    sortable: (field,sort) =>{

        const SortType= field=== sort.column? sort.type: 'default';

        const icons={
            asc:"fa-solid fa-arrow-down-short-wide",
            desc: "fa-solid fa-arrow-down-wide-short",
            default: "fa-solid fa-sort ",
        }

        const icon = icons[SortType]

        const types ={
            asc: 'desc',
            desc: 'asc',
            default: 'asc',
        }

        const type = types[SortType]

        const escapHtml= Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)
        var result= `<a href="${escapHtml}"><i class="${icon}"></i></a>`;
        return new Handlebars.SafeString(result);
    }
    
}