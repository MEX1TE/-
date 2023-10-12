// Управление кнопками загрузки файлов
let input__file = document.getElementById('input__file');

if (input__file) {
    input__file.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
            countFiles = this.files.length;
        let text_file_button = document.querySelector('.input__file-button');
        if (countFiles) {
            text_file_button.innerHTML = '	&#10004; Фото загружено';
            text_file_button.style.backgroundColor = '#59DEA9';
        }
        else {
            text_file_button.innerHTML = 'Загрузить фото';
        }
    });
}

// Напоминаем свечением о забытой загрузке фото
function allRight() {
    checkind_lable = document.getElementById('input__file-lable');
    if (!input__file.value) {
        checkind_lable.classList.add('im_here_animation');
    }
}

// Отображение полей для дополнительных данных
if (input__file) {
    const dop_inputs = document.getElementById('dop_inputs');
    const scenario_id = document.getElementById('scenario_id');
    const input_study_status = document.getElementById('study_status');
    const input_study = document.getElementById('study');

    dop_inputs.style.display = "none";

    scenario_id.addEventListener('input', () => {
        if (scenario_id.value == 4 || scenario_id.value == 5 || scenario_id.value == 7) {
            dop_inputs.style.display = "block";
        } else {
            dop_inputs.style.display = "none";
        }
    });

    input_study_status.addEventListener('input', () => {
        if (input_study_status.value == 4) {
            input_study.style.display = "none";
            input_study.value = "";
        } else {
            input_study.style.display = "inline-block";
        }
    });


}


// Контроль пола в статье (удаляем лишнее)
const female_to_disable = document.getElementById("female_to_disable").value;
const male_spans_to_disable = document.getElementsByClassName(female_to_disable);

while (male_spans_to_disable.length > 0) {
    male_spans_to_disable[0].remove();
}

// Контроль учебного статуса (показываем нужное)
const study_status_to_visibale_NUMBER = document.getElementById("study_status_to_visibale").value;

let study_status_to_visibale = "unemployed";

switch (study_status_to_visibale_NUMBER) {
    case "1":
        study_status_to_visibale = "schoolman";
        break;
    case "2":
        study_status_to_visibale = "student";
        break;
    case "3":
        study_status_to_visibale = "employee";
        break;
}

const study_status_spans_to_visibale = document.getElementsByClassName(study_status_to_visibale);

for (let i = 0; i < study_status_spans_to_visibale.length; i++) {
    study_status_spans_to_visibale[i].style.display = "inline";
}

// Проставляем корректные ссылки в статьях-пранках
if (window.location.href.includes("news")) {
    let correctly_title = cutTegs(document.querySelector('h2').innerHTML).replace(/\s+/g, ' ').trim();

    if (document.getElementById("fb_link")) {
        document.getElementById("fb_link").href = "http://www.facebook.com/sharer.php?s=100&p[url]={url}&p[title]=" + correctly_title;
        document.getElementById("vk_link").href = "https://vk.com/share.php?url={url}&title=" + correctly_title;
        document.getElementById("ok_link").href = "https://connect.ok.ru/offer?url={url}";
        document.getElementById("tv_link").href = "http://twitter.com/share?text=" + correctly_title + "&url={url}";
    }
}

// Увеличение числа посмотревших статью
let viue_count = document.getElementById("viue_count");
if (viue_count) {
    setInterval(function () {
        viue_count.innerHTML = Number(viue_count.innerHTML) + Math.floor((Math.random() * 10) + 1);
    }, 10000);
    setInterval(function () {
        viue_count.innerHTML = Number(viue_count.innerHTML) + Math.floor((Math.random() * 15) + 1);
    }, 4000);
}

// Работа кнопок с реакциями
const reaction_buttons = document.getElementsByClassName("reaction");

for (let i = 0; i < reaction_buttons.length; i++) {
    reaction_buttons[i].onclick = function () {
        let id = i;
        reaction_buttons[id].querySelector('span').innerHTML++;
    };
}

// Появление и исчезновение меню при скроллинге
const sticky_header = document.getElementsByClassName("sticky_header");

window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop >= 80) {
        sticky_header[0].classList.add("sticky_header_yes");
    } else {
        sticky_header[0].classList.remove("sticky_header_yes");
    }
});



function cutTegs(str) {
    var regex = /( |<([^>]+)>)/ig,
        result = str.replace(/<\/?[^>]+(>|$)/gi, "").replace(/&nbsp;/gi, ' ')

    return result;
}


