var gulp = require('gulp'),
	yargs = require('yargs');

var fs = require('fs'),
	util = require('./tools/util.js'),
	buildDocs = require('./tools/builddocs.js'),
	path = require('path'),
	process = require('child_process');

var config = {
	version : '5.0'
};

gulp.task('copyassets',function(){
	//拷贝src下的assets到build目录下
	util.exists('./src/assets','./build/assets',util.copy);
});

gulp.task('buildapi',function(){
	//生成api文档
	var yuidocPath = path.resolve('./node_modules/yuidocjs'),
		yuidocConfig = JSON.parse(fs.readFileSync(yuidocPath+'/package.json').toString()),
		yuidocCliPath = path.resolve(yuidocPath, yuidocConfig.bin.yuidoc),
		cliString = 'node ' + yuidocCliPath;
	process.exec(cliString);
});

gulp.task('buildguide',function(){
	var srcPath = path.resolve('./src');
	//生成教程文档
	buildDocs.buildGuide(srcPath,config);
	//生成demos
	buildDocs.buildDemos(srcPath,config);
	//生成其他目录的文档
	buildDocs.buildOthers(srcPath,config);
});

gulp.task('linkserver',function(){
	var args = yargs.argv,
		serverRootPath = args.path,
		serverLinkPath = path.normalize(serverRootPath+'/'+config.version);
		buildPath = path.resolve('./build');

	/**
	@method symlinkSync
	@param srcpath {String} 源目录的绝对路径
	@param dstpath {String} 目标目录的绝对路径
	@param [type] {String} 仅在Window下有效，可取值'file'/'dir'/'junction',表示文件类型；在Linux下该参数会被忽略
	@param callback {Function} 回调函数
	*/
	fs.symlinkSync(buildPath,serverLinkPath,'dir');
});


gulp.task('default',['copyassets', 'buildapi', 'buildguide']);