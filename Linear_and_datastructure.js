// find the sum of all distinct elements from the set.
Algorithm sum
VAR
arr1 : ARRAY_OF INTEGER[2];
arr2 : ARRAY_OF INTEGER[2];
a : INTEGER:=0;
b : INTEGER:=0;
Sum : FLOAT := 0;
BEGIN
FOR a FROM 0 TO arr1.length STEP 1 DO
    FOR b FROM 0 TO arr2.length STEP 1 DO
        IF (b=arr2.length-1) THEN
            Sum:=Sum + arr1[a];
        END_IF
    END_FOR 
END_FOR

FOR a FROM 0 TO arr2.length STEP 1 DO
    FOR b FROM 0 TO arr1.length STEP 1 DO
        IF (b=arr1.length-1) THEN
            Sum:=Sum + arr2[a];
        END_IF
    END_FOR 
END_FOR

Return Sum;

END
//print the sum of overlapping elements in two sets.
Algorithm sum2
VAR
arr1 : ARRAY_OF INTEGER[2];
arr2 : ARRAY_OF INTEGER[2];
arr3 : ARRAY_OF INTEGER[2];
a : INTEGER:=0;
b : INTEGER:=0;
Sum : FLOAT := 0;
BEGIN
FOR a FROM 0 TO arr1.length STEP 1 DO
    FOR b FROM 0 TO arr2.length STEP 1 DO
        IF (arr1[a]=arr2[b]) THEN
            arr3[arr3.length]:=arr1[a];
        END_IF
    END_FOR 
END_FOR

FOR a FROM 0 TO arr2.length STEP 1 DO
    FOR b FROM 0 TO arr1.length STEP 1 DO
        IF (arr2[a]=arr1[b] And arr3.indexOf(arr2[a]) THEN
            arr3[arr3.length]:=arr2[a];
        END_IF
    END_FOR 
END_FOR

FOR a FROM 0 TO arr3.length STEP 1 DO
    Sum := Sum + arr3[a];
END_FOR
Return Sum;
END
