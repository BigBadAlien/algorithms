# algorithms

Just collection of algorithms.

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
<a name="module_Math..getFactorial"></a>

### Math~getFactorial(value, loops) ⇒ <code>number</code>
Get factorial of number

**Kind**: inner method of <code>[Math](#module_Math)</code>  
**Throws**:

- <code>OnlyIntegerAvailableError</code> 
- <code>NegativeValueImpossibleError</code> 
- <code>СontradictoryParamsError</code> 


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> |  |
| loops | <code>number</code> | Needs for partial fractal calculation. |

<a name="module_Probability"></a>

## Probability

* [Probability](#module_Probability)
    * [~getProbability(sampleSpace, choice, sample)](#module_Probability..getProbability) ⇒ <code>number</code>
    * [~getCombinationsCount(sampleSpace, sample)](#module_Probability..getCombinationsCount) ⇒ <code>number</code>

<a name="module_Probability..getProbability"></a>

### Probability~getProbability(sampleSpace, choice, sample) ⇒ <code>number</code>
Get probability by terms.

**Kind**: inner method of <code>[Probability](#module_Probability)</code>  
**Throws**:

- <code>OnlyIntegerAvailableError</code> 
- <code>NegativeParamError</code> 
- <code>СontradictoryParamsError</code> 


| Param | Type |
| --- | --- |
| sampleSpace | <code>number</code> | 
| choice | <code>number</code> | 
| sample | <code>number</code> | 

<a name="module_Probability..getCombinationsCount"></a>

### Probability~getCombinationsCount(sampleSpace, sample) ⇒ <code>number</code>
Get combination count by sample space and sample size.

**Kind**: inner method of <code>[Probability](#module_Probability)</code>  
**Throws**:

- <code>OnlyIntegerAvailableError</code> 
- <code>NegativeParamError</code> 
- <code>СontradictoryParamsError</code> 


| Param | Type |
| --- | --- |
| sampleSpace | <code>number</code> | 
| sample | <code>number</code> | 

<a name="module_Types"></a>

## Types
<a name="module_Types..isInteger"></a>

### Types~isInteger(value) ⇒ <code>boolean</code>
**Kind**: inner method of <code>[Types](#module_Types)</code>  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

