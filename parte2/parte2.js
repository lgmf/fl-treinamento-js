let baseUrl = 'http://localhost:3000/v1';
let contacts = [];

function handleEvent(event) {
    console.log(`text: ${$(this).text()}`)
    console.log(`val: ${$(this).val()}`)
    console.log(`html: ${$(this).html()}`)
}

let handleGetContacts = (data) => {
    contacts = data;

    if (!contacts) return false;

    contacts.forEach((contact) => {
        let html = `
                    <li class="data-list-item">
                        <span class="title">${contact.firstName}</span>                        
                    </li>                
                `
        // $('.data-list[data-list=contacts]').append(html)
        $('#luiz').prepend(html)
    })

    setTimeout(function(){$('.circular-spinner').hide()},500)    
}

let handleError = (err) => {
    console.log(`Erro ao buscar contatos --> status: ${err.status}`)
    $('.circular-spinner').hide()
}

$(document).ready(() => {


    $('div[data-change-color="true"]')
        .on({
            mouseenter: function () {
                $(this).css('background-color', 'blue')
            },
            mouseleave: function () {
                $(this).css('background-color', 'lightcyan')
            },
            click: function () {
                $(this).css('background-color', 'green')
            }
        });
    
    // $(".paragraphs p").css({ backgroundColor: "yellow", fontSize: "200%" });

    $(".paragraphs p").click(function (event) {
        debugger
        $(this).hide()
    });

    $(".paragraphs-arrow p").click((event) => {
        debugger
        $(this).hide()
    });

    $('button').click(handleEvent);
    $('button').attr('title','botão simples')
    $('input[type="text"]').keypress(handleEvent);

    $("span").parents();
    $("span").parents("ul");
    $("span").parentsUntil("div");

    $.ajax({
        method: 'GET',
        url: `${baseUrl}/contacts`,
        success: handleGetContacts,
        error: handleError
    })
});


document.getElementsByClassName