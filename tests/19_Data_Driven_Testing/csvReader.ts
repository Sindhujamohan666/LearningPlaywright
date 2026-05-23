import fs from 'fs';  //where fs is file system in node js 
import path from 'path'; //fs and path shows error s it will not be used .

export interface TestDataRow{
    [key:string]:string;
}

export function readCSV(filePath:string):TestDataRow[]{
   let fullpath=path.resolve(filePath);
   let content=fs.readFileSync(fullpath,'utf-8');
   let lines=content.trim().split('\n');

   //First line is header
   let headers=lines[0].split(","); //csv is separated by comma

   //Remaining lines are test data
   let data:TestDataRow[] =[];            //empty data created
   for(let i=1;i<lines.length;i++){
      let values=lines[i].split(',');
      let row :TestDataRow={};
      for(let j=0;j<headers.length;j++){
         //puts data to row's headers
        row[headers[j]]=values[j]?.trim() ||""; //?means optional ,||"" if it is empty/null then it takes""
      }
      data.push(row);
   }
   return data;
}