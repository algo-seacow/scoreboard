import Vue from "vue"

const problemSets = [
  {
    title: "變數與運算子",
    problems: ["d483", "a001", "a002", "d489", "d827", "d060", "d485", "d051", "b004", "d039"]
  },
  {
    title: "變數與運算子-作業",
    problems: ["d861", "d226", "d053", "d277", "b681", "d127", "d461", "d096", "c776", "d549"]
  },
  {
    title: "條件判斷",
    problems: ["a012", "d058", "d065", "a053", "e283", "a006", "d984", "a004"]
  },
  {
    title: "條件判斷-作業",
    problems: ["d064", "d066", "d460", "a273", "b186", "a005", "d057", "d095", "c461", "d502"]
  },
  {
    title: "重複結構",
    problems: ["d490", "c039", "d074", "a824", "a215", "d356", "a147", "a024", "a149", "d660", "c418", "c419", "b003"]
  },
  {
    title: "重複結構-作業",
    problems: ["d498", "c022", "d010", "c299", "d186", "e622", "a038", "a536", "d189", "d122", "c420", "c013"]
  },
  {
    title: "陣列",
    problems: ["d212", "c067", "a693", "a020", "b139", "a104", "d452", "d153", "d478", "a694", "a015", "d596"]
  },
  {
    title: "陣列-作業",
    problems: ["b138", "b127", "a034", "d097", "d563", "a040", "d123", "d424", "c435", "d481", "a417", "b965", "a291", "e287"]
  },
  {
    title: "字元陣列、字串",
    problems: ["a149", "a009", "d124", "a054", "a782", "a011", "d614", "a022", "c290", "a130"]
  },
  {
    title: "字元陣列、字串-作業",
    problems: ["b428", "a065", "d235", "a224", "a865", "d275", "c459", "d103", "d086", "a275", "d267", "d671", "c462", "e294"]
  },
  {
    title: "函式",
    problems: ["d171", "c039", "c294", "a121", "b112", "a216", "a227", "d269"]
  },
  {
    title: "函式-作業",
    problems: ["d658", "d237", "d117", "a623", "c002", "d255", "d693", "c813", "c015", "a263"]
  },
  {
    title: "stringstream",
    problems: ["d392", "d574", "d098", "d018", "a158", "d430", "d672"]
  },
  {
    title: "基礎資料結構 (stack、queue、linked-list)",
    problems: ["a565", "e155", "b938"]
  },
  {
    title: "C++ STL sort",
    problems: ["a251", "a225", "a362", "b964", "b563", "a480"]
  },
  {
    title: "C++ STL 其他",
    problems: ["a524", "b582", "c044", "d829", "d913", "a870", "c012"]
  },
  {
    title: "C++ STL vector",
    problems: ["d323", "a915", "d186", "b051", "b844", "b005"]
  },
  {
    title: "C++ STL set / multiset",
    problems: ["b523", "d129", "c421", "c122", "d442", "a016", "d194", "c423", "e288"]
  },
  {
    title: "C++ STL map",
    problems: ["a743", "c054", "d244", "b162", "d517", "b265", "d492", "a821", "e289"]
  },
  {
    title: "C++ STL stack",
    problems: ["a132", "b304", "a017", "b838", "d016", "c123", "c907"]
  },
  {
    title: "C++ STL queue",
    problems: ["b151", "d371", "d900", "c835"]
  },
  {
    title: "窮舉法",
    problems: ["d809", "c074", "c460", "a583", "b122", "a364", "c049", "d914", "c093"]
  },
  {
    title: "排序",
    problems: ["d150", "c010", "e809", "b966", "a539", "d385", "d501", "c471", "d555"]
  },
  {
    title: "二分搜尋法",
    problems: ["d732", "b836", "c575", "c904"]
  },
  {
    title: "模擬",
    problems: ["c006", "c036", "d192", "c094", "c296", "b351", "c292", "c297"]
  },
  {
    title: "分治法",
    problems: ["d219", "d861", "d828", "a233", "b373", "d542"]
  },
  {
    title: "併查集 Disjoint set",
    problems: ["a445", "d813", "c131", "d831"]
  },
  {
    title: "圖論 Graph - DFS",
    problems: ["d626", "c129", "a290", "d324", "a229", "d115", "d653", "b110", "d536", "c463", "d365", "d165", "c291", "b967", "b108", "b343", "d768", "a470", "d762", "c812"]
  },
  {
    title: "圖論 Graph - BFS",
    problems: ["a982", "c117", "d663", "c077", "b059", "b701", "a634"]
  },
  {
    title: "圖論 Graph - Floyd-Warshall",
    problems: ["d908", "d282", "c128", "a874", "a674"]
  },
  {
    title: "圖論 Graph - Dijkstra",
    problems: ["d793"]
  },
  {
    title: "圖論 Graph - Bellman-Ford",
    problems: ["c125"]
  },
  {
    title: "圖論 Graph - 拓撲排序 Topological sort",
    problems: ["a552"]
  },
  {
    title: "圖論 Graph - 尤拉路徑 Eulerian Path",
    problems: ["b924"]
  },
  {
    title: "圖論 Graph - 最大流 Maximum Flow",
    problems: ["d667"]
  },
  {
    title: "圖論 Graph - 二分圖判斷",
    problems: ["c889"]
  },
  {
    title: "圖論 Graph - 割點、橋",
    problems: ["c111"]
  },
  {
    title: "圖論 Graph - SCC",
    problems: ["d197"]
  },
  {
    title: "Tree",
    problems: ["a584", "d526", "c126"]
  },
  {
    title: "Greedy",
    problems: ["d872", "b231", "d418", "a465", "d731", "c134", "a673"]
  },
  {
    title: "DP I",
    problems: ["d038", "d054", "a111", "d887", "b062", "d378", "d198", "c100"]
  },
  {
    title: "DP - 最大區間和",
    problems: ["a540", "d206", "d784", "b565"]
  },
  {
    title: "DP - 背包問題",
    problems: ["d637", "a587", "b184", "a522", "b131", "d890", "d390", "c147"]
  },
  {
    title: "DP - 換零錢",
    problems: ["d904", "d253", "d289", "b232"]
  },
  {
    title: "DP - LCS",
    problems: ["c001", "d231", "a133", "d674", "a252"]
  },
  {
    title: "DP - LIS",
    problems: ["d242", "d052"]
  },
  {
    title: "DP - Largest Empty Rectangle",
    problems: ["b123"]
  },
  {
    title: "DP - 區間",
    problems: ["c112", "d652", "d686"]
  },
  {
    title: "DP - 位元",
    problems: ["d879"]
  },
  {
    title: "數學 - 雜項",
    problems: ["d111", "d361", "a858", "a241", "b897"]
  },
  {
    title: "數學 - 大數",
    problems: ["c034", "c119", "a884"]
  },
  {
    title: "數學 - 數論",
    problems: ["d256", "a007", "b467", "a289", "d440", "e902", "b429", "d362"]
  },
  {
    title: "數學 - 機率",
    problems: ["e162"]
  },
  {
    title: "數學 - 矩陣",
    problems: ["a410", "a272", "d639", "e811"]
  },
  {
    title: "計算幾何",
    problems: ["d055", "d170"]
  },
  {
    title: "BIT",
    problems: ["d788", "d794", "d847"]
  },
  {
    title: "RMQ",
    problems: ["d539", "c424", "b687"]
  }
]

const ProblemSets = {
  install(Vue) {
    Vue.prototype.problemSets = problemSets
  }
}

Vue.use(ProblemSets)
