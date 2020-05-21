Integer[] someInts = new Integer[100]; int sum = 0;
for ( Integer i : someInts )
{

       sum += i;

}

System.out.println( sum / someInts.length );