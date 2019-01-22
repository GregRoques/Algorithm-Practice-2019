testString = "UDDUDUU"
num = len(testString)
U = 1
D = -1


def countingValleys(s,n):
    sea_level=0
    splitString = list(testString)
    
    valley_count = 0
    for i in range(0,num):
        if splitString[i] == "U":
            sea_level += 1
            if sea_level ==0:
                valley_count +=1
        elif splitString[i] == "D":
            sea_level -=1
    print valley_count

countingValleys(testString,num)
