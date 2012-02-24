#
# Rake build script for the jQuery fixedHeader plugin
#
# @author    Dave Widmer <dwidmer@bgsu.edu>
#

version = "0.0.1"
path = File.expand_path('..', __FILE__)
build_dir = [path,"build",version].join(File::SEPARATOR) << File::SEPARATOR
source_dir = [path,"source"].join(File::SEPARATOR) << File::SEPARATOR

desc "Prepares for a build"
task :pre_build do
	if (File.directory?(build_dir) != true)
		Dir.mkdir(build_dir, 0755)
	end

	# Clean all the files out of there
	glob = build_dir << "*"
	Dir.glob(glob) do |f|
		File.delete(f)
	end
end

desc "Builds a package"
task :build => [:pre_build] do
	file = source_dir << "fixedHeader.js"
	puts file
	return

	File.open(file, "r") do |f|
		source = ""

		while line = f.gets
			source << line
		end

		source.gsub!(/@@version@@/, version)

		# Save the normal file
		normal = build_dir << "jquery.fixedHeader.js"
		File.open(normal, "w") do |file|
			file.write(source)
		end
	end
end