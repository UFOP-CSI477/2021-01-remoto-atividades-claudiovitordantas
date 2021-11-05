const loadData = (data) => {
    let characters = document.getElementById("characters");
    for (let key in data) {
      const name = data[key].name;
      const height = data[key].height;
      const gender = data[key].gender;
      const birth_year = data[key].birth_year;

      let opt = document.createElement("option");
      opt.value = name;
      opt.innerHTML = `Nome: ${name}, Altura: ${height}, Gênero: ${gender}, Nascimento: ${birth_year}`;

      characters.appendChild(opt);
    }
  };

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/");
      const data = await response.json();
      loadData(data.results);
    } catch (error) {
        console.log(error)
    }
  };