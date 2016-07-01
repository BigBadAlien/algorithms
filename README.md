# algorithms

Just collection of algorithms.

[![Coverage Status](https://coveralls.io/repos/github/BigBadAlien/algorithms/badge.svg)](https://coveralls.io/github/BigBadAlien/algorithms)

##API
## Modules

<dl>
<dt><a href="#module_Math">Math</a></dt>
<dd></dd>
<dt><a href="#module_Probability">Probability</a></dt>
<dd></dd>
<dt><a href="#module_Types">Types</a></dt>
<dd></dd>
</dl>

<a name="module_Math"></a>

## Math

* [Math](#module_Math)
    * [~getFactorial(value, loops)](#module_Math..getFactorial) ⇒ <code>number</code>
    * [~isPrime(pow)](#module_Math..isPrime) ⇒ <code>boolean</code>

<a name="module_Math..getFactorial"></a>

### Math~getFactorial(value, loops) ⇒ <code>number</code>
Get factorial of value.

**Kind**: inner method of <code>[Math](#module_Math)</code>  
**Throws**:

- <code>OnlyIntegerAvailableError</code> 
- <code>NegativeValueImpossibleError</code> 
- <code>СontradictoryParamsError</code> 


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> |  |
| loops | <code>number</code> | Needs for partial factorial calculation. |

<a name="module_Math..isPrime"></a>

### Math~isPrime(pow) ⇒ <code>boolean</code>
Determines whether the Mersenne number with passed power is an prime.

**Kind**: inner method of <code>[Math](#module_Math)</code>  

| Param | Type | Description |
| --- | --- | --- |
| pow | <code>number</code> | Power of Mersenne number. |

<a name="module_Probability"></a>

## Probability

* [Probability](#module_Probability)
    * [~getProbability(allElementsQuantity, outcomeElementsQuantity, sampleElementsQuantity)](#module_Probability..getProbability) ⇒ <code>number</code>
    * [~getCombinationsQuantity(allElementsQuantity, outcomeElementsQuantity)](#module_Probability..getCombinationsQuantity) ⇒ <code>number</code>

<a name="module_Probability..getProbability"></a>

### Probability~getProbability(allElementsQuantity, outcomeElementsQuantity, sampleElementsQuantity) ⇒ <code>number</code>
Get probability of outcome by terms.
For example probability of outcome with 2 elements out of 36 with sample size 5 is 0.35714285714285715.

**Kind**: inner method of <code>[Probability](#module_Probability)</code>  
**Throws**:

- <code>OnlyIntegerAvailableError</code> 
- <code>NegativeParamError</code> 
- <code>СontradictoryParamsError</code> 


| Param | Type |
| --- | --- |
| allElementsQuantity | <code>number</code> | 
| outcomeElementsQuantity | <code>number</code> | 
| sampleElementsQuantity | <code>number</code> | 

<a name="module_Probability..getCombinationsQuantity"></a>

### Probability~getCombinationsQuantity(allElementsQuantity, outcomeElementsQuantity) ⇒ <code>number</code>
Get combinations quantity by all elements quantity and outcome elements quantity.

**Kind**: inner method of <code>[Probability](#module_Probability)</code>  
**Throws**:

- <code>OnlyIntegerAvailableError</code> 
- <code>NegativeParamError</code> 
- <code>СontradictoryParamsError</code> 


| Param | Type |
| --- | --- |
| allElementsQuantity | <code>number</code> | 
| outcomeElementsQuantity | <code>number</code> | 

<a name="module_Types"></a>

## Types
<a name="module_Types..isInteger"></a>

### Types~isInteger(value) ⇒ <code>boolean</code>
Determines whether the passed value is an integer.
Works like Number.isInteger.

**Kind**: inner method of <code>[Types](#module_Types)</code>  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

