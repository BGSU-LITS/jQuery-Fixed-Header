# Make build script for the jQuery fixedHeader plugin
# @author    Dave Widmer <dwidmer@bgsu.edu>

# The plug-in version
VERSION = $(shell cat version.txt)

# Temp folder for packaging
TMP_FOLDER = "fixedHeader-${VERSION}"

build : clean
	cat "source/fixedHeader.js" | sed "s/@@version@@/${VERSION}/" > "build/jquery.fixedHeader.js"
	uglifyjs --unsafe "build/jquery.fixedHeader.js" > "build/jquery.fixedHeader.min.js"

setup :
	mkdir build packages

clean :
	rm -rf build/*

package :
	# Create a tmp directory to zip
	rm -rf ${TMP_FOLDER}
	mkdir ${TMP_FOLDER}
	chmod 755 ${TMP_FOLDER}
	cp build/jquery.fixedHeader.js ${TMP_FOLDER}/
	cp build/jquery.fixedHeader.min.js ${TMP_FOLDER}/

	# Build the zip file
	zip -rv packages/${VERSION}.zip ${TMP_FOLDER}

	# And cleanup
	rm -R ${TMP_FOLDER}