
function currentDate() {
monthName=new Array()
monthName[0]="januari"
monthName[1]="februari"
monthName[2]="mars"
monthName[3]="april"
monthName[4]="maj"
monthName[5]="juni"
monthName[6]="juli"
monthName[7]="augusti"
monthName[8]="september"
monthName[9]="oktober"
monthName[10]="november"
monthName[11]="december"

datum = new Date()

dag= datum.getDate()
month=datum.getmonthName()
year=datum.getYear()
if(year<1000){year=year+1900}
 

document.writeln(dag +" "+ monthName[month] +" "+ year)

}
