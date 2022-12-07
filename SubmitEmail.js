function submitEmail() {
  let name = document.getElementById("full_name").value;
  let phone = document.getElementById("phone").value;
  const apikey =
    "F53392B106F1C07DD0AA642D228CA4EA8A95BFFDF32FD9EE70C0F3E59D52D71F8ED66F8C9BD8675605588FD929C21118";
  const bodyText = `full name: ${name} phone: ${phone} wants to join yes`;
  fetch(
    `https://api.elasticemail.com/v2/email/send?apikey=${apikey}&from=yes-hd.com&subject=new+register&to=trh4445@gmail.com&bodyText=${bodyText}&isTransactional=False`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
