import * as d3 from "d3"; 

export function y_values_func(distribution, parameters, n){
    let y_values = []
    switch(distribution){
        case "Normal": y_values = Array.from({ length: n }, () => d3.randomNormal(parameters['mean'], parameters['sd'])()); break;
        case "Poisson": y_values = Array.from({ length: n }, () => d3.randomPoisson(parameters['mean'])()); break;
        case "Exponential": y_values = Array.from({ length: n }, () => d3.randomExponential(parameters['mean'])()); break;
        case "Bernuolli": y_values = [0]; break;
        default: break;
    }

    return y_values;
}

export function bins_func(distribution, n){
    let bins = 5;
    switch(distribution){
        case "Normal":  bins = Math.max(5, Math.floor(n / 10)); break;
        case "Poisson": bins = Math.max(5, Math.floor(n / 10)); break;
        case "Exponential": bins = Math.max(10, Math.floor(n / 10)); break;
        default: break;
    }

    return bins;
}