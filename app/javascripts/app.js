$(document).ready(function () {
  var langStats = document.getElementById("language-bar");
  if(typeof(langStats) != 'undefined' && langStats != null){
    var colors = {
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'SCSS': '#c6538c',      
      'Ruby': "#701516",
      'Python': "#3572A5",
      'JavaScript': "#f1e05a",
      'PHP': "#4F5D95",
      'Blade': '#f7523f',
      'Vue': '#2c3e50',
      'Java': "#b07219",
      'C++': "#f34b7d",
      'C': "#555555",
      'C#': "#178600",
      'Scala': "#c22d40",
      'Objective-C': "#438eff",
      'Shell': "#89e051",
      'Perl': "#0298c3",
      'CoffeeScript': "#244776",
      'Haskell': "#5e5086",
      'Erlang': "#B83998",
      'Emacs Lisp': "#c065db",
      'Clojure': "#db5855",
      'Lua': "#000080",
      'Go': "#00ADD8",
      'Groovy': "#e69f56",
      'Puppet': "#302B6D",
      'TypeScript': "#2b7489",
      'OCaml': "#3be133",
      'Objective-C++': "#6866fb",
      'Common Lisp': "#3fb68b",
      'DM': "#447265",
      'Julia': "#a270ba",
      'Smalltalk': "#596706",
      'PowerShell': "#012456",
      'R': "#198CE7",
      'F#': "#b845fc",
      'Dart': "#00B4AB",
      'Haxe': "#df7900",
      'Rust': "#dea584",
      'Vala': "#fbe5cd",
      'Elixir': "#6e4a7e",
      'Swift': "#ffac45",
      'Kotlin': "#F18E33",
      'Elm': "#60B5CC",
      'SystemVerilog': "#DAE1C2",
      'Coq': "#7cb5ec",
      'ABAP': "#E8274B",
      'Vim script': "#199f4b",
      'Fortran': "#4d41b1",
      'Roff': "#ecdebe",
      'WebAssembly': "#04133b",
      'Jsonnet': "#0064bd",
      'MATLAB': "#e16737",
      'TSQL': "#434348",
      'Visual Basic .NET': "#a791b4",
    }

    for (const [lang, color] of Object.entries(colors)) {
      var barItem = $(".bar-item." + string_parameterize(lang));
      var octicons = $(".octicon." + string_parameterize(lang));
      console.log(barItem);
      if(typeof(barItem) != 'undefined' && barItem != null){
        // barItem.style.backgroundColor = color;
        $(barItem).css("background-color", color);
      }
      if(typeof(octicons) != 'undefined' && octicons != null){
        // octicons.style.color = color;
        $(octicons).css("color", color);
      }
    }
  }
});