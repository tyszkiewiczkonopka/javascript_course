import { readFileSync, writeFileSync, appendFileSync } from 'fs'

let data = 'Hello jaktestowac.pl!!!'
const filePath = '/Users/magdalena/Code/Projects/js-testing/S03/file_data/ex3.txt'
writeFileSync(filePath, data);
const fileData = readFileSync(filePath, {encoding:'utf8'})
console.log(fileData)