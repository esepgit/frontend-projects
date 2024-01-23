const header = document.getElementsByClassName('panel-header')

for (let i = 0; i < header.length; i++) {
  header[i].addEventListener('click', function() {
    document.getElementById(`minus-${i + 1}`).classList.toggle('hidden');
    document.getElementById(`plus-${i + 1}`).classList.toggle("hidden");
    document.getElementById(`parr-${i + 1}`).classList.toggle('hidden');
  })
}