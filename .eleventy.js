module.exports = function (eleventyConfig) {
    eleventyConfig.setFreezeReservedData(false);
    eleventyConfig.addFilter('jsonHtml', function(html){
        return html.replaceAll('"', "'");
    });
};