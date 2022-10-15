function drawImages(layout){
                
                var waterImg = new Image();
                waterImg.src = "./src/models/sunny_water.png";
                document.body.appendChild(waterImg)
                waterImg.setAttribute("id", "water-img");
                waterImg.classList.add("hidden");
  
                var foodImg = new Image();
                foodImg.src = "./src/models/sunny_food.png";
                document.body.appendChild(foodImg);
                foodImg.setAttribute("id", "food-img");  
                foodImg.classList.add("hidden");

                var thirstImg = new Image();
                thirstImg.src = "./src/models/sunny_thirst1.png";
                document.body.appendChild(thirstImg);
                thirstImg.setAttribute("id", "thirst-img");
                thirstImg.classList.add("hidden");

                var hungerImg = new Image();
                hungerImg.src = "./src/models/sunny_hunger1.png";
                document.body.appendChild(hungerImg);
                hungerImg.setAttribute("id","hunger-img")
                hungerImg.classList.add("hidden");

                var hygieneImg = new Image();
                hygieneImg.src = "./src/models/sunny_hygeine.png";
                document.body.appendChild(hygieneImg);
                hygieneImg.setAttribute("id","hygiene-img");
                hygieneImg.classList.add("hidden")

                var shampooImg = new Image();
                shampooImg.src = "./src/models/sunny_soap.png";
                document.body.appendChild(shampooImg);
                shampooImg.setAttribute("id","shampoo-img")
                shampooImg.classList.add("hidden");


                //putting one health bar behind the other
                var sunnyHealthBarImg1 = new Image();
                sunnyHealthBarImg1.src = "./src/models/healthbar1.png"
                document.body.appendChild(sunnyHealthBarImg1);
                sunnyHealthBarImg1.setAttribute("id","healthbar1-img");
                sunnyHealthBarImg1.classList.add("hidden");

                    var sunnyHealthBarImg2 = new Image();
                    sunnyHealthBarImg2.src = "./src/models/healthbar2.png"
                    document.body.appendChild(sunnyHealthBarImg2);
                    sunnyHealthBarImg2.setAttribute("id","healthbar2-img");
                    sunnyHealthBarImg2.classList.add("hidden");

                        var sunnyHealthBarImg3 = new Image();
                        sunnyHealthBarImg3.src = "./src/models/healthbar3.png"
                        document.body.appendChild(sunnyHealthBarImg3);
                        sunnyHealthBarImg3.setAttribute("id","healthbar3-img");
                        sunnyHealthBarImg3.classList.add("hidden");

                            var sunnyHealthBarImg4 = new Image();
                            sunnyHealthBarImg4.src = "./src/models/healthbar4.png"
                            document.body.appendChild(sunnyHealthBarImg4);
                            sunnyHealthBarImg4.setAttribute("id","healthbar4-img");
                            sunnyHealthBarImg4.classList.add("hidden");

                                var sunnyHealthBarImg5 = new Image();
                                sunnyHealthBarImg5.src = "./src/models/healthbar5.png";
                                document.body.appendChild(sunnyHealthBarImg5);
                                sunnyHealthBarImg5.setAttribute("id","healthbar5-img");
                                sunnyHealthBarImg5.classList.add("hidden");

                var sunnyHealthBar2Img1 = new Image();
                sunnyHealthBar2Img1.src = "./src/models/healthbar1.png"
                document.body.appendChild(sunnyHealthBar2Img1);
                sunnyHealthBar2Img1.setAttribute("id","healthbar2-1-img");
                sunnyHealthBar2Img1.classList.add("hidden");

                    var sunnyHealthBar2Img2 = new Image();
                    sunnyHealthBar2Img2.src = "./src/models/healthbar2.png"
                    document.body.appendChild(sunnyHealthBar2Img2);
                    sunnyHealthBar2Img2.setAttribute("id","healthbar2-2-img");
                    sunnyHealthBar2Img2.classList.add("hidden");

                        var sunnyHealthBar2Img3 = new Image();
                        sunnyHealthBar2Img3.src = "./src/models/healthbar3.png"
                        document.body.appendChild(sunnyHealthBar2Img3);
                        sunnyHealthBar2Img3.setAttribute("id","healthbar2-3-img");
                        sunnyHealthBar2Img3.classList.add("hidden");

                            var sunnyHealthBar2Img4 = new Image();
                            sunnyHealthBar2Img4.src = "./src/models/healthbar4.png"
                            document.body.appendChild(sunnyHealthBar2Img4);
                            sunnyHealthBar2Img4.setAttribute("id","healthbar2-4-img");
                            sunnyHealthBar2Img4.classList.add("hidden");

                                var sunnyHealthBar2Img5 = new Image();
                                    sunnyHealthBar2Img5.src = "./src/models/healthbar5.png";
                                    document.body.appendChild(sunnyHealthBar2Img5);
                                    sunnyHealthBar2Img5.setAttribute("id","healthbar2-5-img");
                                    sunnyHealthBar2Img5.classList.add("hidden");

                var sunnyHealthBar3Img1 = new Image();
                sunnyHealthBar3Img1.src = "./src/models/healthbar1.png"
                document.body.appendChild(sunnyHealthBar3Img1);
                sunnyHealthBar3Img1.setAttribute("id","healthbar3-1-img");
                sunnyHealthBar3Img1.classList.add("hidden");

                    var sunnyHealthBar3Img2 = new Image();
                    sunnyHealthBar3Img2.src = "./src/models/healthbar2.png"
                    document.body.appendChild(sunnyHealthBar3Img2);
                    sunnyHealthBar3Img2.setAttribute("id","healthbar3-2-img");
                    sunnyHealthBar3Img2.classList.add("hidden");

                        var sunnyHealthBar3Img3 = new Image();
                        sunnyHealthBar3Img3.src = "./src/models/healthbar3.png"
                        document.body.appendChild(sunnyHealthBar3Img3);
                        sunnyHealthBar3Img3.setAttribute("id","healthbar3-3-img");
                        sunnyHealthBar3Img3.classList.add("hidden");

                            var sunnyHealthBar3Img4 = new Image();
                            sunnyHealthBar3Img4.src = "./src/models/healthbar4.png"
                            document.body.appendChild(sunnyHealthBar3Img4);
                            sunnyHealthBar3Img4.setAttribute("id","healthbar3-4-img");
                            sunnyHealthBar3Img4.classList.add("hidden");

                                var sunnyHealthBar3Img5 = new Image();
                                sunnyHealthBar3Img5.src = "./src/models/healthbar5.png";
                                document.body.appendChild(sunnyHealthBar3Img5);
                                sunnyHealthBar3Img5.setAttribute("id","healthbar3-5-img");
                                sunnyHealthBar3Img5.classList.add("hidden");

                var sunnyHeart = new Image();
                sunnyHeart.src = "./src/models/sunnyheart_full.png";
                document.body.appendChild(sunnyHeart);
                sunnyHeart.setAttribute("id","heartOne");
                sunnyHeart.classList.add("hidden");

                var sunnyHeart2 = new Image();
                sunnyHeart2.src = "./src/models/sunnyheart_full.png";
                document.body.appendChild(sunnyHeart2);
                sunnyHeart2.setAttribute("id","heartTwo");
                sunnyHeart2.classList.add("hidden");

                var sunnyHeart3 = new Image();
                sunnyHeart3.src = "./src/models/sunnyheart_full.png";
                document.body.appendChild(sunnyHeart3);
                sunnyHeart3.setAttribute("id","heartThree");
                sunnyHeart3.classList.add("hidden");

                var sunnyHeart4 = new Image();
                sunnyHeart4.src = "./src/models/sunnyheart_full.png";
                document.body.appendChild(sunnyHeart4);
                sunnyHeart4.setAttribute("id","heartFour");
                sunnyHeart4.classList.add("hidden");


                var sunnyHeart5 = new Image();
                sunnyHeart5.src = "./src/models/sunnyheart_full.png";
                document.body.appendChild(sunnyHeart5);
                sunnyHeart5.setAttribute("id","heartFive");
                sunnyHeart5.classList.add("hidden");


                //sunny heart empty
                var sunnyHeartEmpty1 = new Image();
                sunnyHeartEmpty1.src = "./src/models/sunnyheart_empty.png";
                document.body.appendChild(sunnyHeartEmpty1);
                sunnyHeartEmpty1.setAttribute("id","emptyHeartOne");
                sunnyHeartEmpty1.classList.add("hidden");

                var sunnyHeartEmpty2 = new Image();
                sunnyHeartEmpty2.src = "./src/models/sunnyheart_empty.png";
                document.body.appendChild(sunnyHeartEmpty2);
                sunnyHeartEmpty2.setAttribute("id","emptyHeartTwo");
                sunnyHeartEmpty2.classList.add("hidden");

                var sunnyHeartEmpty3 = new Image();
                sunnyHeartEmpty3.src = "./src/models/sunnyheart_empty.png";
                document.body.appendChild(sunnyHeartEmpty3);
                sunnyHeartEmpty3.setAttribute("id","emptyHeartThree");
                sunnyHeartEmpty3.classList.add("hidden");

                var sunnyHeartEmpty4 = new Image();
                sunnyHeartEmpty4.src = "./src/models/sunnyheart_empty.png";
                document.body.appendChild(sunnyHeartEmpty4);
                sunnyHeartEmpty4.setAttribute("id","emptyHeartFour");
                sunnyHeartEmpty4.classList.add("hidden");

                var sunnyHeartEmpty5 = new Image();
                sunnyHeartEmpty5.src = "./src/models/sunnyheart_empty.png";
                document.body.appendChild(sunnyHeartEmpty5);
                sunnyHeartEmpty5.setAttribute("id","emptyHeartFive");
                sunnyHeartEmpty5.classList.add("hidden");

                var water = new Image();
                water.src = "./src/models/water.png";
                document.body.appendChild(water);
                water.classList.add("hidden");
                water.setAttribute("id","water");
                waterImg.addEventListener("click", function(){
                    water.classList.remove("hidden")
                    setTimeout(() => {
                        water.classList.add("hidden");
                      }, 300); 
                })

                var food = new Image();
                food.src = "./src/models/food.png";
                document.body.appendChild(food);
                food.classList.add("hidden");
                food.setAttribute("id","food");
                foodImg.addEventListener("click", function(){
                    food.classList.remove("hidden") 
                    setTimeout(() => {
                        food.classList.add("hidden");
                      }, 300); 
                })

                var soap = new Image();
                soap.src = "./src/models/soap.png";
                document.body.appendChild(soap);
                soap.classList.add("hidden");
                soap.setAttribute("id","soap");
                shampooImg.addEventListener("click", function(){
                    soap.classList.remove("hidden")
                    setTimeout(() => {
                        soap.classList.add("hidden");
                      }, 300); 
                })


}

export default drawImages;

