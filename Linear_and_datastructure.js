Algorithm Read_sentence

VAR
charactere : STRING[];
nbrCharactere : FLOAT := 0;
nbrMots : FLOAT := 0;
nbrVowels : FLOAT := 0;
BEGIN
WHILE (charactere <> ".") DO
    charactere := read("Entrer un charactere : ");
    if (charactere <> "" And charactere.length = 1) THEN 
        nbrCharactere:=nbrCharactere+1;
    END_IF
    if (charactere = " ") THEN
        nbrMots:=nbrMots+1;
    END_IF
    if (charactere = "a" or charactere = "e" or charactere = "i" or charactere = "o" or charactere = "u") THEN
    nbrVowels:= nbrVowels + 1;
    END_IF
END_WHILE
Write("Le nombre de charactere est :" + nbrCharactere + ", et le nombre de mots est "+nbrMots+1 + ", et le nombre de voyelles est "+nbrVowels);
END
