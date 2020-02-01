
  var now = new Date();
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var ho = now.getHours()%12;
  var sec_deg = sec*6;
  var min_deg = (min+sec/60)*6;
  var ho_deg = (ho+min/60)*30;
  function onload(){
      init();
      setInterval("change()",1000);
  }

  //初始化指针位置
  function init(){
      $("#second").rotate({
          center: ["50%","73%"],//center要用百分比
          angle: sec_deg,
      });
      $("#minute").rotate({
          angle:min_deg,
          center:["53.33%","96.25%"]
      });
      $("#hour").rotate({
          angle: ho_deg,
          center:["50%","96.25%"]
      });
  }

  //指针每秒的变化
  function change(){
      sec_deg += 6;
      min_deg += 0.1;
      ho_deg += 360/(12*3600);
      $("#second").rotate(sec_deg);
      $("#minute").rotate(min_deg);
      $("#hour").rotate(ho_deg);
  }