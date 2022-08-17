function drawImages(layout){
                var sunnyImg1 = new Image();
                sunnyImg1.src = "./src/models/sunny_1.png";
                document.body.appendChild(sunnyImg1);
                sunnyImg1.setAttribute("id","sunnyImg1");

                var sunnyImg2 = new Image();
                sunnyImg2.src = "./src/models/sunny_2.png"
                document.body.appendChild(sunnyImg2);
                sunnyImg2.setAttribute("id","sunnyImg2")
                sunnyImg2.classList.add("hidden");
                let imgToDraw = "two";

                setInterval(() => {
                    if (imgToDraw === "one"){
                        sunnyImg2.classList.add("hidden")
                        sunnyImg1.classList.remove("hidden")
                    }else{
                        sunnyImg1.classList.add("hidden")
                        sunnyImg2.classList.remove("hidden")
                    }
                    imgToDraw = imgToDraw === "one" ? "two" : "one";
                }, 300);
                
                var waterImg = new Image();
                waterImg.src = "./src/models/sunny_water.png";
                document.body.appendChild(waterImg)
                waterImg.setAttribute("id", "water-img");  
                // waterImg.onload = function(){
                //     layout.drawImage(waterImg,215,310,100,100)
                // }
                waterImg.addEventListener("click",function(){
                    console.log("clicked")
                })
                var foodImg = new Image();
                foodImg.src = "./src/models/sunny_food.png";
                document.body.appendChild(foodImg);
                foodImg.setAttribute("id", "food-img");  

                // FoodImg.onload = function(){
                //     layout.drawImage(FoodImg,100,310,100,100)
                // }
                var thirstImg = new Image();
                thirstImg.src = "./src/models/sunny_thirst1.png";
                document.body.appendChild(thirstImg);
                thirstImg.setAttribute("id", "thirst-img");
                // thirstImg.onload = function(){
                //     layout.drawImage(thirstImg,15,100,100,100)
                // }

                var hungerImg = new Image();
                hungerImg.src = "./src/models/sunny_hunger1.png";
                document.body.appendChild(hungerImg);
                hungerImg.setAttribute("id","hunger-img")
                // hungerImg.onload = function(){
                //     layout.drawImage(hungerImg,15,50,100,100)
                // }

                var hygieneImg = new Image();
                hygieneImg.src = "./src/models/sunny_hygeine.png";
                document.body.appendChild(hygieneImg);
                hygieneImg.setAttribute("id","hygiene-img");
                // hygeineImg.onload = function(){
                //     layout.drawImage(hygeineImg,15,150,100,100)
                // }

                var shampooImg = new Image();
                shampooImg.src = "./src/models/sunny_soap.png";
                document.body.appendChild(shampooImg);
                shampooImg.setAttribute("id","shampoo-img")



                //putting one health bar behind the other
                var sunnyHealthBarImg1 = new Image();
                sunnyHealthBarImg1.src = "./src/models/healthbar1.png"
                document.body.appendChild(sunnyHealthBarImg1);
                sunnyHealthBarImg1.setAttribute("id","healthbar1-img");

                    var sunnyHealthBarImg2 = new Image();
                    sunnyHealthBarImg2.src = "./src/models/healthbar2.png"
                    document.body.appendChild(sunnyHealthBarImg2);
                    sunnyHealthBarImg2.setAttribute("id","healthbar2-img");

                        var sunnyHealthBarImg3 = new Image();
                        sunnyHealthBarImg3.src = "./src/models/healthbar3.png"
                        document.body.appendChild(sunnyHealthBarImg3);
                        sunnyHealthBarImg3.setAttribute("id","healthbar3-img");

                            var sunnyHealthBarImg4 = new Image();
                            sunnyHealthBarImg4.src = "./src/models/healthbar4.png"
                            document.body.appendChild(sunnyHealthBarImg4);
                            sunnyHealthBarImg4.setAttribute("id","healthbar4-img");

                                var sunnyHealthBarImg5 = new Image();
                                sunnyHealthBarImg5.src = "./src/models/healthbar5.png";
                                document.body.appendChild(sunnyHealthBarImg5);
                                sunnyHealthBarImg5.setAttribute("id","healthbar5-img");

                var sunnyHealthBar2Img1 = new Image();
                sunnyHealthBar2Img1.src = "./src/models/healthbar1.png"
                document.body.appendChild(sunnyHealthBar2Img1);
                sunnyHealthBar2Img1.setAttribute("id","healthbar2-1-img");

                    var sunnyHealthBar2Img2 = new Image();
                    sunnyHealthBar2Img2.src = "./src/models/healthbar2.png"
                    document.body.appendChild(sunnyHealthBar2Img2);
                    sunnyHealthBar2Img2.setAttribute("id","healthbar2-2-img");

                        var sunnyHealthBar2Img3 = new Image();
                        sunnyHealthBar2Img3.src = "./src/models/healthbar3.png"
                        document.body.appendChild(sunnyHealthBar2Img3);
                        sunnyHealthBar2Img3.setAttribute("id","healthbar2-3-img");

                            var sunnyHealthBar2Img4 = new Image();
                            sunnyHealthBar2Img4.src = "./src/models/healthbar4.png"
                            document.body.appendChild(sunnyHealthBar2Img4);
                            sunnyHealthBar2Img4.setAttribute("id","healthbar2-4-img");

                                var sunnyHealthBar2Img5 = new Image();
                                    sunnyHealthBar2Img5.src = "./src/models/healthbar5.png";
                                    document.body.appendChild(sunnyHealthBar2Img5);
                                    sunnyHealthBar2Img5.setAttribute("id","healthbar2-5-img");

                var sunnyHealthBar3Img1 = new Image();
                sunnyHealthBar3Img1.src = "./src/models/healthbar1.png"
                document.body.appendChild(sunnyHealthBar3Img1);
                sunnyHealthBar3Img1.setAttribute("id","healthbar3-1-img");

                    var sunnyHealthBar3Img2 = new Image();
                    sunnyHealthBar3Img2.src = "./src/models/healthbar2.png"
                    document.body.appendChild(sunnyHealthBar3Img2);
                    sunnyHealthBar3Img2.setAttribute("id","healthbar3-2-img");

                        var sunnyHealthBar3Img3 = new Image();
                        sunnyHealthBar3Img3.src = "./src/models/healthbar3.png"
                        document.body.appendChild(sunnyHealthBar3Img3);
                        sunnyHealthBar3Img3.setAttribute("id","healthbar3-3-img");

                            var sunnyHealthBar4Img4 = new Image();
                            sunnyHealthBar4Img4.src = "./src/models/healthbar4.png"
                            document.body.appendChild(sunnyHealthBar4Img4);
                            sunnyHealthBar4Img4.setAttribute("id","healthbar3-4-img");

                                var sunnyHealthBar4Img5 = new Image();
                                sunnyHealthBar4Img5.src = "./src/models/healthbar5.png";
                                document.body.appendChild(sunnyHealthBar4Img5);
                                sunnyHealthBar4Img5.setAttribute("id","healthbar3-5-img");


                //**because i created the image in js, how do i refer to it in css if i want to edit? */

                //need to figure out how to make heart empty
                // idea is to have heart empty hidden and when either
                //the thirst or hunger level is below a certain point,
                // one of the hidden heart appears and the full hearts disappears
                var sunnyHeart = new Image();
                sunnyHeart.src = "./src/models/sunnyheart_full.png";
                document.body.appendChild(sunnyHeart);
                sunnyHeart.setAttribute("id","heartOne");

                var sunnyHeart2 = new Image();
                sunnyHeart2.src = "./src/models/sunnyheart_full.png";
                document.body.appendChild(sunnyHeart2);
                sunnyHeart2.setAttribute("id","heartTwo");

                var sunnyHeart3 = new Image();
                sunnyHeart3.src = "./src/models/sunnyheart_full.png";
                document.body.appendChild(sunnyHeart3);
                sunnyHeart3.setAttribute("id","heartThree");

                var sunnyHeart4 = new Image();
                sunnyHeart4.src = "./src/models/sunnyheart_full.png";
                document.body.appendChild(sunnyHeart4);
                sunnyHeart4.setAttribute("id","heartFour");


                var sunnyHeart5 = new Image();
                sunnyHeart5.src = "./src/models/sunnyheart_full.png";
                document.body.appendChild(sunnyHeart4);
                sunnyHeart4.setAttribute("id","heartFive");


                //sunny heart empty
                var sunnyHeartEmpty1 = new Image();
                sunnyHeartEmpty1.src = "./src/models/sunnyheart_empty.png";
                document.body.appendChild(sunnyHeartEmpty1);
                sunnyHeartEmpty1.setAttribute("id","emptyHeartOne");

                var sunnyHeartEmpty2 = new Image();
                sunnyHeartEmpty2.src = "./src/models/sunnyheart_empty.png";
                document.body.appendChild(sunnyHeartEmpty1);
                sunnyHeartEmpty2.setAttribute("id","emptyHeartTwo");

                var sunnyHeartEmpty3 = new Image();
                sunnyHeartEmpty3.src = "./src/models/sunnyheart_empty.png";
                document.body.appendChild(sunnyHeartEmpty3);
                sunnyHeartEmpty3.setAttribute("id","emptyHeartThree");

                var sunnyHeartEmpty4 = new Image();
                sunnyHeartEmpty4.src = "./src/models/sunnyheart_empty.png";
                document.body.appendChild(sunnyHeartEmpty4);
                sunnyHeartEmpty4.setAttribute("id","emptyHeartFour");

                var sunnyHeartEmpty5 = new Image();
                sunnyHeartEmpty5.src = "./src/models/sunnyheart_empty.png";
                document.body.appendChild(sunnyHeartEmpty5);
                sunnyHeartEmpty5.setAttribute("id","emptyHeartFive");

                var water = new Image();
                water.src = "./src/models/water.png";
                document.body.appendChild(water);
                water.classList.add("hidden");
                water.setAttribute("id","water");
                waterImg.addEventListener("click", function(){
                    water.classList.remove("hidden") 
                })

                var food = new Image();
                food.src = "./src/models/food.png";
                document.body.appendChild(food);
                food.classList.add("hidden");
                food.setAttribute("id","food");
                foodImg.addEventListener("click", function(){
                    food.classList.remove("hidden") 
                })

                var soap = new Image();
                soap.src = "./src/models/soap.png";
                document.body.appendChild(soap);
                soap.classList.add("hidden");
                soap.setAttribute("id","soap");
                shampooImg.addEventListener("click", function(){
                    soap.classList.remove("hidden") 
                })




}

export default drawImages;

//how do i make my images moves according to screen size?
//how do i go about starting setting intervals for health bar