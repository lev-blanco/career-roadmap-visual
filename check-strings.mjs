import fs from 'fs';
const lines = fs.readFileSync('client/src/lib/data.ts', 'utf-8').split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const doubleQuotes = (line.match(/"/g) || []).length;
  if (doubleQuotes % 2 !== 0) {
    console.log(`Line ${i+1}: ${line.trim()}`);
  }
}
