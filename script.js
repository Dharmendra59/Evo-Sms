let phoneNumber = document.querySelector('.phoneNumber'),
      message = document.querySelector('.message'),
      btnSend = document.querySelector('.btnSend'),
      showMessage = document.querySelector('.showMessage');

btnSend.addEventListener('click', () => {
      
      const phoneNumbers = phoneNumber.value.split(",").map(number => number.trim());
      const destinations = phoneNumbers.map(number => ({ to: number }));
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer 8d4a8d8e-8d8e-8d8e-8d8e-8d8e8d8e8d8e");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");

      const newJSON = JSON.stringify({
            "message": [{
                  "destination": destinations,
                  "from": "Evo-Sms",
                  "text": message.value
            }]
      });

      const requestTypes = {
            method: 'POST',
            headers: myHeaders,
            body: newJSON,
            redirect: 'follow'
      };

      // showMessage.innerHTML = " sent Sms";
      // phoneNumber.value = "";
      // message.value = "";

      fetch("https://api.evo.sms/api/v1/submit", requestTypes)
            .then(response =>{
                  if(response.ok){
                        showMessage.innerHTML = " sent Sms";
                        
                  }
                  else{
                        showMessage.innerHTML = "Error";
                  }
                  phoneNumber.value = "";
                  message.value = "";

            })
            .catch((error) => {console.log(error);
            showMessage.innerHTML = "Error sending sms";
            });


})