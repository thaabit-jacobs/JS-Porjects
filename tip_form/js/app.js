

//Set up a service array
const services = [{
  value: 1,
  title: "great - 20%"
}, {
  value: 2,
  title: "good - 10%"
}, {
  value: 3,
  title: "bad - 2%"
}]

services.forEach(function (service) {
  //create the option element
  const option = document.createElement('option');
  option.textContent = service.title;
  option.value = service.value;
  //select the select element from the DOM
  const select = document.querySelector('#input-service');
  select.appendChild(option);
})
