const renderStrings = (strings) => {
  $('table').find("tr:gt(0)").remove();
  for (let i = 0; i < strings.ordered.length; i++) {
    const $row = $(`
      <tr>
        <td>${strings.unordered[i]}</td>
        <td>${strings.ordered[i]}</td>
      </tr>
      `)

      $('table').append($row);
  }
};

const postString = (string) => {
  return fetch('/strings', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({string}),
  })
};
