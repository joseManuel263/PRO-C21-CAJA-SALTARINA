function areTounchinge(objeto,objeto1){
    if (objeto.x - objeto1.x < objeto1.width/2 + objeto.width/2
      && objeto1.x - objeto.x < objeto1.width/2 + objeto.width/2
      && objeto.y - objeto1.y < objeto1.height/2 + objeto.height/2
      && objeto1.y - objeto.y < objeto1.height/2 + objeto.height/2) {
        return true;
  }
  else {
    return false;
  }
  }
  function bounceOffenese(objeto3,objeto4){

  if (objeto3.y - objeto4.y < objeto4.height/2 + objeto3.height/2
    && objeto4.y - objeto3.y < objeto4.height/2 + objeto3.height/2){
        objeto3.velocityY=objeto3.velocityY*(-1);
        objeto4.velocityY=objeto4.velocityY*(-1);
  }
  if (objeto3.x - objeto4.x < objeto4.width/2 + objeto3.width/2
    && objeto4.x - objeto3.x < objeto4.width/2 + objeto3.width/2) {
      objeto3.velocityX=objeto3.velocityX*(-1);
      objeto4.velocityX=objeto4.velocityX*(-1);
}
}