public class Speedometer {
    
            public void getAccelerate(integer speed){
        try{
            if(speed>120){
                throw new SpeedometerException();
            }else{
                System.debug('You are maintaining good Speed');
            }
        }catch(SpeedometerException be){
            speed=40;
            System.debug('Engine Decelerated to the speed :'+speed);
        }
    }
}