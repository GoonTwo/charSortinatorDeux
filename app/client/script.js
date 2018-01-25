$(document).ready(() => {

  $('form').on('submit', (event) => {
    event.preventDefault();

    const string = $('input[type=text]').val();
    $('input[type=text]').val('');

    postString(string)
      .then((res) => res.json())
      .then((strings) => {
        renderStrings(strings)
      })
      .catch((err) => {
        console.log(err);
      })
  });
});
