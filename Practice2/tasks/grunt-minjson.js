module.exports = function (grunt) {
    grunt.registerMultiTask('minjson', 'JSON minification task', function() {
        const files = grunt.file.expand(this.data.files);
        const options = this.options({
          skipOnError: false,
          space: '',
          transform: function (data, options) {
            return JSON.stringify(JSON.parse(data), options.space);
          }
        });
    
        let totalInBytes = 0;
        let totalOutBytes = 0;
    
        function calcCompression(inBytes, outBytes) {
          const profitPercents = inBytes > 0 ? 100 - outBytes * 100 / inBytes : 0;
          return (Math.round((inBytes / 1024) * 1000) / 1000) + ' KiB - ' +
            ((Math.round(profitPercents * 10) / 10) + '%').green + ' = ' +
            (Math.round((outBytes / 1024) * 1000) / 1000) + ' KiB';
        }
    
        files.forEach(function(filepath) {
          const data = grunt.file.read(filepath);
          try {
            const compressed = options.transform(data, options);
            grunt.file.write(filepath, compressed);
            grunt.verbose.ok(calcCompression(data.length, compressed.length));
    
            totalInBytes += data.length;
            totalOutBytes += compressed.length;
          } catch (err) {
            grunt.verbose.error(`Error parsing file "${filepath}"`);
            grunt[options.skipOnError ? 'verbose' : 'fail'].error(err);
          }
        });
    
        grunt.log.writeln('\nTotal compressed: ' + files.length + ' files');
        grunt.log.ok(calcCompression(totalInBytes, totalOutBytes));
    });
};

