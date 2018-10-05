function cargar()
{
  if (na == 1)
  {
    papel.drawImage(fondo, 0 , 0);
  }
  else if(na == 2)
  {
    papel.drawImage(p2, 0 , 0);
  }
  else if(na == 3)
  {
    papel.drawImage(p1, 0 , 0);
  }
}



function r1()
{
  if (na == 1)
  {
    rs.innerHTML = "CORRECTO!";
  }
  else
  {
    rs.innerHTML = "INCORRECTO! <br>" + defIo;
  }
}

function r2()
{
  if (na == 2)
  {
    rs.innerHTML = "CORRECTO!";
  }
  else
  {
    rs.innerHTML = "INCORRECTO! <br>" + defCo;
  }
}

function r3()
{
  if (na == 3)
  {
    rs.innerHTML = "CORRECTO!";
  }
  else
  {
    rs.innerHTML = "INCORRECTO! <br>" + defMe;
  }
}

function mathRandom(min,max)
{
  var r;
  r = Math.floor(Math.random()* (max - min + 1)) + min;
  return r;
}

var na = mathRandom(1,3);

console.log(na);

function rc()
{
  location.reload()
}
