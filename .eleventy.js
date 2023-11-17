const rmj = require('render-markdown-js');
const moment = require("moment");

module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk,html,md");
    eleventyConfig.addPassthroughCopy('src');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('admin');

    eleventyConfig.addNunjucksFilter("rmj", function (content) {
        return rmj(content);
    });

    eleventyConfig.addNunjucksFilter("limit", function (array, limit) {
        return array.slice(0, limit);
    });

    eleventyConfig.addNunjucksFilter("limitPart", function (array, limit1, limit2) {
        return array.slice(limit1, limit2);
    });

    eleventyConfig.addNunjucksFilter("limitSinPrimero", function (array, limit) {
        return array.slice(1, limit);
    });

    eleventyConfig.addFilter("dateFormat", function (date, format) {
        return moment(date).format(format);
    });

    eleventyConfig.addFilter('log', value => {
        console.log(value)
    });
}

