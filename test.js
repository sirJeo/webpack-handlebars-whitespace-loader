import loader from './index';

const testSource = `
<div>
    <ul     id="list" >
        <li     class="list-element"      > element 1 </li>
        <li     class="list-element"      > 
            element       2 
        </li>
        <li     class="list-element"      > Element 5 </li>
    </ul>
    <img          src="http://img"                />
</div>
        `;
const testResult = '<div><ul id="list" ><li class="list-element" >element 1</li><li class="list-element" >element' +
    ' 2</li><li class="list-element" >Element 5</li></ul><img src="http://img" /></div>';

if (loader(testSource) === testResult) {
    console.log("\x1b[32mOK\n");
} else {
    console.error('\x1b[31mWRONG\n');

    console.error(`\x1b[32m +Expected: "${testResult}"\n`);
    console.error(`\x1b[31m -Result: "${loader(testSource)}"\n`);

}