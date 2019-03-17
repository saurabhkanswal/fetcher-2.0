const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");


const client_id = "Iv1.25d7cf3332efe394";

const client_secret= "9ff3a31d9d6fec4b4d1760d7b829d78b33c0a7de";

const fetchuser = async(user) => {
     const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

     const data = await api_call.json();
     return {data} 
};

const showData = () => {
    fetchuser(inputValue.value).then((res)=> {
        
       
        nameContainer.innerHTML =`Name: <span class="main__profile-value">${res.data.name}</span>`;
        unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`;
        reposContainer.innerHTML =`Repository: <span class="main__profile-value">${res.data.public_repos}</span>`;
        urlContainer.innerHTML =`URL: <span class="main__profile-value">${res.data.html_url}</span>`;
    })
};

searchButton.addEventListener("click",()=>{
    showData();
})