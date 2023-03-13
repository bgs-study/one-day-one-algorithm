var WordDictionary = function() {
    this.children = {};
};

WordDictionary.prototype.addWord = function(word) {
    let cur = this.children;

    for(let cha of word) {
        if(!cur[cha]) cur[cha] = {};
        cur = cur[cha];
    }

    cur.isEnd = true; // 문장의 끝인지 표시
};

WordDictionary.prototype.search = function(word) {
    return this.dfs(word, 0, this.children);
};

WordDictionary.prototype.dfs = function(word, idx, node) {
    if(idx === word.length) return node.isEnd === true;

    if(word[idx] === '.') {
        for(let child in node) {
            // 만약 해당 검색이 true면 true 반환, 아니면 순회 진행
            if(this.dfs(word, idx + 1, node[child])) return true;
        }
    }
    else if(node[word[idx]]){
        return this.dfs(word, idx + 1, node[word[idx]]);
    }

    return false;
};
