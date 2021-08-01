class Security {

    constructor(){
  
        // Add code to create the input and button elements

        this.input = createInput("").attribute("placeholder", "Answer");
        this.input1 = createInput("").attribute("placeholder", "Answer");
        this.input2 = createInput("").attribute("placeholder", "Answer");


        this.button = createButton('CHECK');
        this.button1 = createButton('CHECK');
        this.button2 = createButton('CHECK');


    }

    display(){

        // Add code to make the buttons function as expected

        this.input.position(100 , 90);
        this.input1.position(700 , 190);
        this.input2.position(100,290);

    this.button.position(200,130);
    this.button1.position(800,230);
    this.button2.position(200,330);


    this.button.mousePressed(() => {
        if(system.authenticate(accessCode1,this.input.value())){
            this.button.hide();
            this.input.hide();
            score++;
       }
    });


    this.button1.mousePressed(() => {
        if(system.authenticate(accessCode2,this.input1.value())){
            this.button1.hide();
            this.input1.hide();
            score++;
        }
    });

    this.button2.mousePressed(() => {
        if(system.authenticate(accessCode3,this.input2.value())){
            this.button2.hide();
            this.input2.hide();
            score++;
        }
    });


    }
}