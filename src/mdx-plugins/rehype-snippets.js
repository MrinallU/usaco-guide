'use strict';

const visit = require('unist-util-visit');
const nodeToString = require('hast-util-to-string');

const replacements = {
  'Benq Template': `//BeginCodeSnip{Benq Template}
#include <bits/stdc++.h>
using namespace std;

using ll = long long;
using db = long double; // or double, if TL is tight
using str = string; // yay python!

using pi = pair<int,int>;
using pl = pair<ll,ll>;
using pd = pair<db,db>;

using vi = vector<int>;
using vb = vector<bool>;
using vl = vector<ll>;
using vd = vector<db>;
using vs = vector<str>;
using vpi = vector<pi>;
using vpl = vector<pl>;
using vpd = vector<pd>;

#define tcT template<class T
#define tcTU tcT, class U
// ^ lol this makes everything look weird but I'll try it
tcT> using V = vector<T>;
tcT, size_t SZ> using AR = array<T,SZ>;
tcT> using PR = pair<T,T>;

// pairs
#define mp make_pair
#define f first
#define s second

// vectors
// oops size(x), rbegin(x), rend(x) need C++17
#define sz(x) int((x).size())
#define bg(x) begin(x)
#define all(x) bg(x), end(x)
#define rall(x) x.rbegin(), x.rend()
#define sor(x) sort(all(x))
#define rsz resize
#define ins insert
#define ft front()
#define bk back()
#define pb push_back
#define eb emplace_back
#define pf push_front
#define rtn return

#define lb lower_bound
#define ub upper_bound
tcT> int lwb(V<T>& a, const T& b) { return int(lb(all(a),b)-bg(a)); }

// loops
#define FOR(i,a,b) for (int i = (a); i < (b); ++i)
#define F0R(i,a) FOR(i,0,a)
#define ROF(i,a,b) for (int i = (b)-1; i >= (a); --i)
#define R0F(i,a) ROF(i,0,a)
#define rep(a) F0R(_,a)
#define each(a,x) for (auto& a: x)

const int MOD = 1e9+7;
const int MX = 2e5+5;
const ll INF = 1e18; // not too close to LLONG_MAX
const db PI = acos((db)-1);
const int dx[4] = {1,0,-1,0}, dy[4] = {0,1,0,-1}; // for every grid problem!!
mt19937 rng((uint32_t)chrono::steady_clock::now().time_since_epoch().count());
template<class T> using pqg = priority_queue<T,vector<T>,greater<T>>;

// bitwise ops
// also see https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html
constexpr int pct(int x) { return __builtin_popcount(x); } // # of bits set
constexpr int bits(int x) { // assert(x >= 0); // make C++11 compatible until USACO updates ...
\treturn x == 0 ? 0 : 31-__builtin_clz(x); } // floor(log2(x))
constexpr int p2(int x) { return 1<<x; }
constexpr int msk2(int x) { return p2(x)-1; }

ll cdiv(ll a, ll b) { return a/b+((a^b)>0&&a%b); } // divide a by b rounded up
ll fdiv(ll a, ll b) { return a/b-((a^b)<0&&a%b); } // divide a by b rounded down

tcT> bool ckmin(T& a, const T& b) {
\treturn b < a ? a = b, 1 : 0; } // set a = min(a,b)
tcT> bool ckmax(T& a, const T& b) {
\treturn a < b ? a = b, 1 : 0; }

tcTU> T fstTrue(T lo, T hi, U f) {
\thi ++; assert(lo <= hi); // assuming f is increasing
\twhile (lo < hi) { // find first index such that f is true
\t\tT mid = lo+(hi-lo)/2;
\t\tf(mid) ? hi = mid : lo = mid+1;
\t}
\treturn lo;
}
tcTU> T lstTrue(T lo, T hi, U f) {
\tlo --; assert(lo <= hi); // assuming f is decreasing
\twhile (lo < hi) { // find first index such that f is true
\t\tT mid = lo+(hi-lo+1)/2;
\t\tf(mid) ? lo = mid : hi = mid-1;
\t}
\treturn lo;
}
tcT> void remDup(vector<T>& v) { // sort and remove duplicates
\tsort(all(v)); v.erase(unique(all(v)),end(v)); }
tcTU> void erase(T& t, const U& u) { // don't erase
\tauto it = t.find(u); assert(it != end(t));
\tt.erase(it); } // element that doesn't exist from (multi)set


void DBG() { cerr << "]" << endl; }
template<class H, class... T> void DBG(H h, T... t) {
\tcerr << h; if (sizeof...(t)) cerr << ", ";
\tDBG(t...); }
#ifdef LOCAL // compile with -DLOCAL
#define dbg(...) cerr << "LINE(" << __LINE__ << ") -> [" << #__VA_ARGS__ << "]: [", DBG(__VA_ARGS__)
#else
#define dbg(...) 0
#endif
//EndCodeSnip`,
  Kattio: `//BeginCodeSnip{Kattio}
static class Kattio extends PrintWriter {
\tprivate BufferedReader r;
\tprivate StringTokenizer st;

\t// standard input
\tpublic Kattio() { this(System.in,System.out); }
\tpublic Kattio(InputStream i, OutputStream o) {
\t\tsuper(o);
\t\tr = new BufferedReader(new InputStreamReader(i));
\t}
\t// USACO-style file input
\tpublic Kattio(String problemName) throws IOException {
\t\tsuper(new FileWriter(problemName+".out"));
\t\tr = new BufferedReader(new FileReader(problemName+".in"));
\t}

\t// returns null if no more input
\tpublic String next() {
\t\ttry {
\t\t\twhile (st == null || !st.hasMoreTokens())
\t\t\t\tst = new StringTokenizer(r.readLine());
\t\t\treturn st.nextToken();
\t\t} catch (Exception e) {}
\t\treturn null;
\t}

\tpublic int nextInt() { return Integer.parseInt(next()); }
\tpublic double nextDouble() { return Double.parseDouble(next()); }
\tpublic long nextLong() { return Long.parseLong(next()); }
}
//EndCodeSnip`,
  TemplateShort: `//BeginCodeSnip{C++ Short Template}
#include <bits/stdc++.h> // see /general/running-code-locally
using namespace std;

using ll = long long;

using vi = vector<int>;
#define pb push_back
#define all(x) begin(x), end(x)
#define sz(x) (int)(x).size()

using pi = pair<int,int>;
#define f first
#define s second
#define mp make_pair

void setIO(string name = "") {
\tcin.tie(0)->sync_with_stdio(0); // see /general/fast-io
\tif (sz(name)) {
\t\tfreopen((name+".in").c_str(), "r", stdin); // see /general/io
\t\tfreopen((name+".out").c_str(), "w", stdout);
\t}
}
//EndCodeSnip`,
};

module.exports = options => {
  options = options || {};

  return tree => {
    visit(tree, 'element', visitor);
  };

  function visitor(node, index, parent) {
    if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
      return;
    }
    if (node.children.length !== 1) {
      throw 'Expected only one child for a code block';
    }
    let newValue = [];
    for (let line of node.children[0].value.split('\n')) {
      let found = false;
      for (let key of Object.keys(replacements)) {
        let results = line.match(new RegExp(`^.*?(CodeSnip\\{${key}\\})`));
        if (results) {
          let prefix = results[0].match(/^\s+/);
          if (!prefix) prefix = '';
          for (let snippetLine of replacements[key].split('\n')) {
            newValue.push(`${prefix}${snippetLine}`);
          }
          found = true;
          break;
        }
      }
      if (!found) newValue.push(line);
    }
    node.children[0].value = newValue.join('\n');
  }
};
