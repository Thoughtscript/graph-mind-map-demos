module.exports = {
	server: {
		port: process.env.PORT || 8888
	},
	papers: {
		cv: 'https://s3-us-west-2.amazonaws.com/adamgerard/pdf/philosophy/C.V..pdf',
		tgl: 'https://s3-us-west-2.amazonaws.com/adamgerard/pdf/philosophy/TG-L-V3.pdf',
		rb: {
			ws: 'https://s3-us-west-2.amazonaws.com/adamgerard/pdf/philosophy/Writing-Sample-Adam-InTae-Gerard.pdf',
			eosr: 'https://s3-us-west-2.amazonaws.com/adamgerard/pdf/philosophy/RB-EOSR-V8.pdf',
			ug: 'http://www.bsu.edu/libraries/beneficencepress/stance/2009_spring/11gerard.pdf'
		},
		resumes: {
			dr: 'https://s3-us-west-2.amazonaws.com/adamgerard/pdf/resumes/DeveloperResume.pdf',
			ls: 'https://s3-us-west-2.amazonaws.com/adamgerard/pdf/resumes/LessSimple.pdf'
		}
	},
    cluster: {
        cpus: 6
    }
};
