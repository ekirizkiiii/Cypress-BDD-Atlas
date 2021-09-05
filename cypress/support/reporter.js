const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: 'cypress/reports/cucumber-json/',
    reportPath: 'cypress/reports/',
    reportName:'BDD Atlas',
    metadata:{
        browser: {
            name: 'chrome',
            version: '93'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    displayDuration: true,
    openReportInBrowser: true,
    saveCollectedJSON: true
});