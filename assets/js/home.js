const apiUrl = 'https://api.waifu.pics/sfw/neko';
const imgElement = document.getElementById("waifupic");
const waifuButton = document.getElementById("waifubutton");
const formEl = document.querySelector('.form');
const lampo = document.getElementById("lampo")
const url = 'https://graphql.anilist.co'
const lampoUrl = "https://api.open-meteo.com/v1/forecast?latitude=65.0124&longitude=25.4682&current=temperature_2m&hourly=&timezone=auto&forecast_days=1";
const webhookUrl = "https://prod-208.westeurope.logic.azure.com:443/workflows/b0345be27b304b25a0bee3f04e61f75a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=em2PU-GgQ6o3WUY8VrKHivpbhOlC8wIkDJbfKF1YVog";

console.log(waifuButton);

function getWaifu() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      imgElement.src = data.url;
    })
    .catch((error) => {
      console.error('Error fetching weeb picture:', error);
    });
}

function getWeather() {
    return new Promise((resolve, reject) => {
        fetch(lampoUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                const temperature = data.current.temperature_2m;
                lampo.innerText = temperature;
                resolve(temperature); // Resolve the promise with the temperature
            })
            .catch((error) => {
                console.error('Error fetching temperature:', error);
                reject(error); // Reject the promise on error
            });
    });
}

formEl.addEventListener('submit', event => {
  event.preventDefault();

    const formData = new FormData(formEl);
    var blaa = Object.fromEntries(formData);
    console.log(blaa);

    var formatted_Card = {
        "type": "message",
        "attachments": [
            {
                "contentType": "application/vnd.microsoft.card.adaptive",
                "contentUrl": null,
                "content": {
                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                    "type": "AdaptiveCard",
                    "version": "1.2",
                    "body": [
                        {
                            "type": "TextBlock",
                            "text": JSON.stringify(blaa.message)
                        }
                    ]
                }
            }
        ]
    }  

    axios.post(webhookUrl, formatted_Card)
    .then((response) => {
        console.log(response);
        alert("Lähetit minulle teams viestiä!");
    })
    .catch((error) => {
        console.error('Error sending message:', error);
    });
});

var query = `
query Character ($id: Int){
    Character(id: $id) {
        image {
            large
        }
    }
}
`;

var variables = { id: 734 };

options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        query: query,
        variables: variables
    })
};

function AniListAPI() {
  fetch(url, options).then(handleResponse)
  .then(handleData)
  .catch(handleError);
}

function handleResponse(response) {
    return response.json().then((json) => {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    console.log(data);
    imgElement.src = data.data.Character.image.large;
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);

}

document.getElementById('hamburger').addEventListener('click', function() {
    var navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
});

waifuButton.addEventListener('click', AniListAPI);

document.addEventListener('DOMContentLoaded', function() { 
    getWaifu();
    getWeather();
});
