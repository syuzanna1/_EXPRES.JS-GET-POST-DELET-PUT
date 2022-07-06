console.log("frontend");

const saveContactBtn = document.getElementById('saveInfo');
saveContactBtn.addEventListener('click', async ()=>{
    const nameValue = document.getElementById('nameInput').value;
    const urlValue = document.getElementById('UrlInput').value;
    const requestBody = {
        title: nameValue,
        imageUrl: urlValue
    };
    console.log('requestBody', requestBody);
    try {
        const respons = await fetch('http://localhost:5000/contacts',{
            method:'POST',
            body: JSON.stringify(requestBody),
            headers:{
                'Content-Type':'appliction/json',
            }
        });
        console.log('ALL SAVED', await respons.json());
    } catch (error){
        console.log('error',error);
    }
    
})
