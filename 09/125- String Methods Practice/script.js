const flights=
'_Delayed_Departure;fao93766109;tx12333758840;11:25 +_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis232639855;12:30';
console.log(flights.split('+'));
const getCode = str => str.slice(0,3).toUpperCase();
for(const flight of flights.split('+')){
  const[type, form, to, time]= flight.split(';');

  const output=`${type.startsWith('_Delayed') ? '🔴' :' ' }${type.replaceAll('_',' ')} ${form.slice(0,3).toUpperCase()} ${to} ${time.replace(':','h')})`.padStart(36);
  console.log(output);
}