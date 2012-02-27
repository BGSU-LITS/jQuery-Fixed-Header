#
# Rake build script for the jQuery fixedHeader plugin
#
# @author    Dave Widmer <dwidmer@bgsu.edu>
#

# The plug-in version
version = "0.0.1"

desc "Setup the development environment (only run once)"
task :setup do
	["build", "packages"].each do |d|
		if (File.directory?(d) != true)
			Dir.mkdir(d, 0755)
		end
	end
end

desc "Cleans up for a build"
task :clean do
	Dir.glob("build/*") do |f|
		File.delete(f)
	end
end

desc "Builds a package"
task :build => [:clean] do
	file = "source/fixedHeader.js"

	File.open(file, "r") do |f|
		source = ""

		while line = f.gets
			source << line
		end

		source.gsub!(/@@version@@/, version)

		# Save the normal file
		normal = "build/jquery.fixedHeader.js"
		File.open(normal, "w") do |file|
			file.write(source)
		end

		# And now the minified version
		min = "build/jquery.fixedHeader.min.js"
		compiled = `uglifyjs --unsafe #{normal}`
		File.open(min, "w") do |file|
			file.write(compiled)
		end
	end
end

desc "Packages the code for distribution"
task :package, [:version] do |t, args|
	v = args[:version] || version # Default to main version

	# Delete the file if is already exists
	file = "packages/#{v}.zip"
	if (File.exists?(file))
		File.delete(file)
	end

	# Create a tmp dir to zip
	Dir.mkdir("fixedHeader", 0755)
	files = ["build/jquery.fixedHeader.js", "build/jquery.fixedHeader.min.js"]
	files.each do |f|
		`cp #{f} fixedHeader`
	end

	# Build the zip file
	zip = `zip -rv packages/#{v}.zip fixedHeader`

	# And cleanup
	Dir.glob("fixedHeader/*") do |f|
		File.delete(f)
	end
	Dir.delete("fixedHeader")
end