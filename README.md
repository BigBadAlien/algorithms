# algorithms

Just collection of algorithms.

[![Coverage Status](https://coveralls.io/repos/github/BigBadAlien/algorithms/badge.svg)](https://coveralls.io/github/BigBadAlien/algorithms)

##API
## Modules

<dl>
<dt><a href="#module_Image">Image</a></dt>
<dd></dd>
<dt><a href="#module_Math">Math</a></dt>
<dd></dd>
<dt><a href="#module_Probability">Probability</a></dt>
<dd></dd>
</dl>

<a name="module_Image"></a>

## Image
<a name="module_Image..getThumbnailCropSize"></a>

### Image~getThumbnailCropSize(thumbWidth, thumbHeight, imgWidth, imgHeight) ⇒ <code>Object</code>
Get required crop for further resize.
Example of results usage with GD:
imageSrc.gravity('Center')
.crop(cropWidth, cropHeight)
.resize(thumbWidth, thumbHeight)

**Kind**: inner method of <code>[Image](#module_Image)</code>  
**Throws**:

- <code>OnlyIntegerAvailableError</code> 
- <code>ThumbnailSizeMoreThanSourceImage</code> 


| Param | Type | Description |
| --- | --- | --- |
| thumbWidth | <code>number</code> | Desired width of thumbnail. |
| thumbHeight | <code>number</code> | Desired height of thumbnail. |
| imgWidth | <code>number</code> | Width of source image. |
| imgHeight | <code>number</code> | Height of source image. |

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

