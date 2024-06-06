document.querySelectorAll('input[name="shape"]').forEach(radio => {
  radio.addEventListener('change', function() {
      updateLabels();
  });
});

function updateLabels() {
  const shape = document.querySelector('input[name="shape"]:checked').value;
  const firstLabel = document.getElementById('first-dimension-label');
  const secondLabel = document.getElementById('second-dimension-label');

  if (shape === 'rectangle') {
      firstLabel.innerText = 'Ширина:';
      secondLabel.innerText = 'Высота:';
  } else if (shape === 'circle') {
      firstLabel.innerText = 'Радиус:';
      secondLabel.style.display = 'none'; // Скрываем второй инпут для круга
      document.getElementById('second-dimension').style.display = 'none';
  }
}

updateLabels(); // Инициализация меток при загрузке страницы

function calculateArea() {
  const shape = document.querySelector('input[name="shape"]:checked').value;
  const radiusOrWidth = parseFloat(document.getElementById('first-dimension').value);

  let area;
  if (shape === 'rectangle') {
      const height = parseFloat(document.getElementById('second-dimension').value);
      area = radiusOrWidth * height;
  } else if (shape === 'circle') {
      area = Math.PI * Math.pow(radiusOrWidth, 2);
  }

  document.getElementById('result').innerText = `Площадь: ${area.toFixed(2)}`;
}
