function toHours (ms){
    var time = parseFloat(ms)/1000;
    var h = parseFloat(time/3600.0);
    if (h < 0.5) return 0.5
    else return h
}