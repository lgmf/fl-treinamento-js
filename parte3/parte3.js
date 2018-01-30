const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const contacts = [
    {
        firstName: "Alessandra",
        lastName: "Saraiva",
        email: "Alessandro.Silva86@live.com",
        gender: "f",
        info: {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/chaabane_wail/128.jpg",
            company: "Carvalho, Melo and Santos",
            address: "959 Franco Rodovia",
            phone: "+55 (29) 1896-3838",
            comments: "Ad voluptates qui eius. Quisquam dolorum nemo fuga consectetur omnis delectus. Quo qui ut rem sunt molestiae deleniti in voluptatem ut."
        },
        isFavorite: false,
        _id: "nd0tF2iAaU3nOgTO"
    },
    {
        firstName: "Alessandra",
        lastName: "Macedo",
        email: "Mrcia98@hotmail.com",
        gender: "m",
        info: {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/timpetricola/128.jpg",
            company: "Batista - Santos",
            address: "41734 Oliveira Avenida",
            phone: "(09) 3346-6995",
            comments: "Sed molestiae fugit tempora aut. Vel autem molestiae est tempore placeat. Qui itaque corrupti velit nam consequuntur ea porro laborum."
        },
        isFavorite: false,
        _id: "TKRihs47LNNvFnq0"
    },
    {
        firstName: "Alessandra",
        lastName: "Braga",
        email: "Csar_Martins@hotmail.com",
        gender: "f",
        info: {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mdsisto/128.jpg",
            company: "Oliveira e Associados",
            address: "285 Pedro Avenida",
            phone: "(12) 40180-1226",
            comments: "Autem et magnam consectetur qui corrupti. Numquam expedita quo quo aut eos et sunt quo dolor. Eveniet pariatur ut."
        },
        isFavorite: true,
        _id: "MjaNOPhgESNId4PX"
    },
    {
        firstName: "Alessandra",
        lastName: "Carvalho",
        email: "Jlia.Moraes22@bol.com.br",
        gender: "m",
        info: {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bartoszdawydzik/128.jpg",
            company: "Silva - Macedo",
            address: "744 Natália Rua",
            phone: "(90) 66977-3739",
            comments: "Excepturi architecto occaecati sapiente minima sit labore quo rerum molestias. Voluptates veniam molestias. Dolore iure magnam facilis reiciendis atque facilis quo molestias. Expedita qui sed quo ipsa cupiditate. Voluptatem voluptatem et repellendus consequuntur sequi. Assumenda aliquam sequi aut et aliquid asperiores voluptatem voluptatem."
        },
        isFavorite: false,
        _id: "873rYvoqSACz0syh"
    },
    {
        firstName: "Alessandro",
        lastName: "Albuquerque",
        email: "Janana_Santos52@live.com",
        gender: "m",
        info: {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/xadhix/128.jpg",
            company: "Carvalho LTDA",
            address: "14716 Carvalho Rodovia",
            phone: "+55 (61) 0128-5874",
            comments: "Doloribus quisquam aut sunt voluptates blanditiis ea. Et fugiat nostrum itaque. Consequatur facere vitae ea eos. Quis in dolorum fugit ut quasi voluptas harum eveniet rem."
        },
        isFavorite: true,
        _id: "aw1aASCmTjHQbn0Q"
    },
    {
        firstName: "Alessandro",
        lastName: "Oliveira",
        email: "Roberta.Moraes91@gmail.com",
        gender: "f",
        info: {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/the_winslet/128.jpg",
            company: "Santos - Moreira",
            address: "616 Antônio Ponte",
            phone: "(70) 84586-4676",
            comments: "Rerum optio consequatur. Quisquam necessitatibus et perferendis aspernatur sed iure. Magnam aperiam quo ea a exercitationem dicta reiciendis. Omnis aperiam eligendi sed qui nesciunt ea aut a pariatur. Iste odio aut nulla dolorem voluptatem minus sint. Et quia ab quibusdam et perferendis quis sequi."
        },
        isFavorite: false,
        _id: "whj1bZfrOKSq7dBi"
    },
    {
        firstName: "Alessandro",
        lastName: "Martins",
        email: "Joana43@bol.com.br",
        gender: "m",
        info: {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brandclay/128.jpg",
            company: "Martins, Barros and Franco",
            address: "6734 Albuquerque Rodovia",
            phone: "(27) 1056-2149",
            comments: "Eligendi amet soluta et vero quibusdam. Quaerat excepturi voluptates suscipit totam similique molestiae eos."
        },
        isFavorite: false,
        _id: "Xb9JvH6ZUX7qmDBa"
    },
    {
        firstName: "Alessandro",
        lastName: "Carvalho",
        email: "Jlio.Moreira47@live.com",
        gender: "m",
        info: {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/terpimost/128.jpg",
            company: "Silva - Franco",
            address: "4974 Pedro Travessa",
            phone: "(23) 9147-2363",
            comments: "Nesciunt blanditiis hic consequatur. Consequatur velit magnam non libero. Ab culpa in deleniti aut. Tenetur consectetur consequatur consequatur totam."
        },
        isFavorite: true,
        _id: "vNypw3EKd9cuKHu7"
    },
    {
        firstName: "Alessandro",
        lastName: "Pereira",
        email: "Dalila.Moraes@live.com",
        gender: "m",
        info: {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/davecraige/128.jpg",
            company: "Souza - Xavier",
            address: "7944 Fábio Avenida",
            phone: "+55 (36) 3274-6653",
            comments: "Ea impedit aut commodi optio et magni qui sed quae. Quos voluptatum tempore autem ut. Error ea est. Qui et iure sequi voluptas laboriosam."
        },
        isFavorite: true,
        _id: "pZR6LVNKIhp5itCl"
    },
    {
        firstName: "Alessandro",
        lastName: "Silva",
        email: "Guilherme_Moreira@gmail.com",
        gender: "f",
        info: {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kylefoundry/128.jpg",
            company: "Barros, Franco and Santos",
            address: "109 Washington Alameda",
            phone: "+55 (40) 1281-6921",
            comments: "Enim nihil maxime. Nulla est sit quae aliquam expedita qui. Dolorem veritatis ut veritatis id quod enim totam."
        },
        isFavorite: true,
        _id: "02Ew4nnyS5eNg5yb"
    }
]

$(document).ready(() => {

    //Lodash forEach
    // _.forEach(arr, (item) => {
    //     $('.numbers').append(`<li>${item}</li>`);
    // });

    //Lodash filter

    // const onlyEvens = _.filter(arr, (item) => item%2===0)
    // _.forEach(onlyEvens, (item) => {
    //     $('.numbers').append(`<li>${item}</li>`);
    // });

    //Lodash every
    console.log(_.every(arr, (item) => typeof (item) === 'number'))

    //Lodash find
    console.log(_.find(contacts, (contact) => contact._id === 'nd0tF2iAaU3nOgTO'))

    //Lodash map
    console.log(_.map(contacts, (contact) => {
        return { id: contact._id, name: `${contact.firstName} ${contact.lastName}` }
    }))

    //Lodash countBy
    console.log(_.countBy(contacts, (contact) => contact.isFavorite))

    //Lodash groupBy
    console.log(_.groupBy(contacts, (contact) => contact.isFavorite))

    //Lodash orderBy
    console.log(_.orderBy(contacts, ['email'], ['desc']));

    //Lodash orderBy
    console.log(_.orderBy(contacts, ['email'], ['asc']));

    const name = 'Luíz'
    console.log(_.deburr('Luíz'))

    $('input[type="text"]').on('keypress', _.debounce((event) => {
        console.log(event.target)
    }, 1000))

    //debounce vanilla js --> https://stackoverflow.com/questions/24004791/can-someone-explain-the-debounce-function-in-javascript
});

