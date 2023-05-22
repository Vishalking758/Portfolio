import React from 'react';

export default function Calculator() {

  function clr() {
    var x = document.getElementsByName("result")[0];
    x.value = x.value.substring(0, x.value.length - 1);
  }

  return (
    <>
      <form className="h-screen flex flex-col justify-center items-center">
  <div className="result">
    <input name="result" type="text" className="h-28 w-64 shadow-lg bg-transparent text-cyan-700 dark:text-cyan-500  shadow-cyan-500/50 border-sky-700 border m-1 rounded" />
  </div>
  <div className="grid grid-cols-4">
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="clear" onClick={() => {document.getElementsByName("result")[0].value = '';}}>AC</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="%" onClick={() => {document.getElementsByName("result")[0].value += '%';}}>%</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="c" onClick={clr}>C</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="/" onClick={() => {document.getElementsByName("result")[0].value += '/';}}>/</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="7" onClick={() => {document.getElementsByName("result")[0].value += '7';}}>7</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="8" onClick={() => {document.getElementsByName("result")[0].value += '8';}}>8</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="9" onClick={() => {document.getElementsByName("result")[0].value += '9';}}>9</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="*" onClick={() => {document.getElementsByName("result")[0].value += '*';}}>X</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="4" onClick={() => {document.getElementsByName("result")[0].value += '4';}}>4</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="5" onClick={() => {document.getElementsByName("result")[0].value += '5';}}>5</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="6" onClick={() => {document.getElementsByName("result")[0].value += '6';}}>6</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="-" onClick={() => {document.getElementsByName("result")[0].value += '-';}}>-</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="1" onClick={() => {document.getElementsByName("result")[0].value += '1';}}>1</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="2" onClick={() => {document.getElementsByName("result")[0].value += '2';}}>2</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="3" onClick={() => {document.getElementsByName("result")[0].value += '3';}}>3</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="+" onClick={() => {document.getElementsByName("result")[0].value += '+';}}>+</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="00" onClick={() => {document.getElementsByName("result")[0].value += '00';}}>00</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="0" onClick={() => {document.getElementsByName("result")[0].value += '0';}}>0</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="." onClick={() => {document.getElementsByName("result")[0].value += '.';}}>.</button>
    <button type="button" className='h-8 w-14  shadow-lg shadow-cyan-500/50 border-sky-700 border m-1 rounded' value="=" onClick={() => {document.getElementsByName("result")[0].value = eval(document.getElementsByName("result")[0].value);}}>=</button>
  </div>
</form>

    </>
  );
}