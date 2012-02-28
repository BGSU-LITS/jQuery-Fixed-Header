# FixedHeader jQuery Plugin

The fixedHeader jQuery plugin allows you as a developer to make sure that the
header for a table stays at the top of the page even when scrolled out of view.

## [Demo](http://ul2.bgsu.edu/labs/fixed-header/)

## Example

``` html
<table id="long-table">
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>The cool name</td>
			<td>The cool description</td>
		</th>
		... Many rows here ....
	</tbody>
</table>
```

With the given table above, to get the fixedHeader plugin to work (after adding
jQuery and the plugin to the page of course) is run the following code.

``` javascript
$("#long-table").fixedHeader();
```

## Hacking

To help develop the plugin, fork this repo. You can use `make setup` to build
the proper development environment.

You can also use `make build` to build the normal and minified version of the code
and `make package` to save the code into a zip file.

_Code minification is done with [UglifyJS](https://github.com/mishoo/UglifyJS/)._

--------

Developed by [BGSU LITS](http://ul2.bgsu.edu/labs).
