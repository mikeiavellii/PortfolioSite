//ESL Block
const esl = document.getElementById('ESL');
const eslDiv = document.getElementById('ESL-div');
const eslIMG = document.getElementById('ESL-IMG')
eslDiv.style.display = 'none';


esl.addEventListener('mouseover', function handleMouseOver() {
  eslDiv.style.display = 'block';
  eslIMG.style.display = 'none';
});

esl.addEventListener('mouseout', function handleMouseOut() {
  eslDiv.style.display = 'none';
  eslIMG.style.display = 'block';
});


//Fantasy Fishing block
const ff = document.getElementById('FF');
const ffDiv = document.getElementById('FF-div');
const ffIMG = document.getElementById('FF-IMG')
ffDiv.style.display = 'none';

ff.addEventListener('mouseover', function handleMouseOver() {
  ffDiv.style.display = 'block';
  ffIMG.style.display = 'none';
});

ff.addEventListener('mouseout', function handleMouseOut() {
  ffDiv.style.display = 'none';
  ffIMG.style.display = 'block';
});


//Resume Explorer Block
const re = document.getElementById('RE');
const reDiv = document.getElementById('RE-div');
const reIMG = document.getElementById('RE-IMG')
reDiv.style.display = 'none';

re.addEventListener('mouseover', function handleMouseOver() {
  reDiv.style.display = 'block';
  reIMG.style.display = 'none';
});

re.addEventListener('mouseout', function handleMouseOut() {
  reDiv.style.display = 'none';
  reIMG.style.display = 'block';
});