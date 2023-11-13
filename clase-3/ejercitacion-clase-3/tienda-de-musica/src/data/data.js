export default function data() {
    return new Promise((res) => {
      fetch(
        "https://raw.githubusercontent.com/JuanFPaz/Json/main/JSON-ejercicios/rock-nacional.json"
      ).then((response) => {
        res(response.json());
      });
    });
  }