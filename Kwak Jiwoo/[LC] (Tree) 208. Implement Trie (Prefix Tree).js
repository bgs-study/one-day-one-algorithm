// 트라이를 구현하시오.

class TrieNode {
    constructor() {
        this.children = {}; // 다음 글자들, TrieNode로 들어가 있음
        this.endWord = false; // 여기까지가 단어의 끝인지 여부
    }
}

// ex) ap, ab => {children: { a: {children: {p: {children: {}, endWord: true}, b: {children: ...}}, endword: true}}
var Trie = function() {
    this.root = new TrieNode();
};

Trie.prototype.insert = function(word) {
    let cur = this.root;
    for(let cha of word) {
        if(!cur.children[cha]) cur.children[cha] = new TrieNode();
        cur = cur.children[cha];
    }
    cur.endWord = true;
};

Trie.prototype.search = function(word) {
    let cur = this.root;

    for(let cha of word) {
        if(!cur.children[cha]) return false;
        cur = cur.children[cha];
    }

    return cur.endWord ? true : false; // word로 단어가 끝나면 true
};

Trie.prototype.startsWith = function(prefix) {
    let cur = this.root;

    for(let cha of prefix) {
        if(!cur.children[cha]) return false;
        cur = cur.children[cha];
    }

    return true;
};
