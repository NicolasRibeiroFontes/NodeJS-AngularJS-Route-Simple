var lista = [
    {nome:'Nicolas',url:'nicolas'},
    {nome:'Bete',url:'bete'},
    {nome:'Alexandre',url:'alexandre'}
];

exports.retornar = function(req,res){
    console.log('retornou');
    res.send(lista);
};

exports.retornarUm = function(req,res){
    var url = req.body.url;
    var obj;
    lista.forEach(function(item){
        if (item.url==url){
            obj = item;
        }
    })
    res.send(obj);
}