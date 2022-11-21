using System;

class Functions{

    static double taxCalculator(string state, double value){
        if(state == "NY"){
            return value + (value * 4/100); 
        }
        else if(state == "NJ"){
            return value + (value * 6.625/100);
        }
        return 0; //must return something after using "if" or "else if", no need after "else"
    }

    static void Main(String[] args){


        Console.WriteLine(taxCalculator("NY", 100));
    }

}