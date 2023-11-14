
const proyectos = [
    "ImpactaLatam",
    "Servicios Públicos",
    "LabMunicipal",
    "LabElectoral",
    "Auditoria Social",
    "Monitor Legislativo",
    "Alianza por la Democracia",
    "Partidos Públicos",
    "Semaforo Electoral",
    "CandiDatos",
    "Nuestra Elección",
    "Guatemala Leaks",
    "Mochila Electoral",
    "MancoVerapaz",
    "Índice de Datos Abiertos Justicia 2021",
    "Índice de Datos Abiertos 2021"
];


module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk,html,md");
    eleventyConfig.addPassthroughCopy('src');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('admin');
}

