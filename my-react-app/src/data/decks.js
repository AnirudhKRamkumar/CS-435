const decks = [
  {
    "file": "10-Greedy 1.pptx",
    "type": "pptx",
    "slides": [
      {
        "index": 1,
        "text": "Greedy Algorithms Marzieh Eskandari NJIT 1/48"
      },
      {
        "index": 2,
        "text": "Greedy Approach Main Idea: Take the best choice now, hope it leads to the global best. Make a choice that looks best right now. Check if the problem is solved. Repeat until the solution is complete. 2/48"
      },
      {
        "index": 3,
        "text": "Introduction 3/48 50 5 1 20 5 20"
      },
      {
        "index": 4,
        "text": "Introduction 4/48 50 12 20 1 1 1 6"
      },
      {
        "index": 5,
        "text": "Introduction 5/48 4 50 10 5 20"
      },
      {
        "index": 6,
        "text": "Greedy Approach 6/48 Sort C in decreasing order S = \u2205 while C is not empty: if C.top <= V: S.add(C.top) V = V - C.top if V == 0: Print S return C.delete()"
      },
      {
        "index": 7,
        "text": "Knapsack problem 7/48 W=20 lbs"
      },
      {
        "index": 8,
        "text": "0,1-Knapsack 8/48 W=20 lbs 2 3 4 1 benefit"
      },
      {
        "index": 9,
        "text": "0,1-Knapsack 9/48 W=-- lbs Benefit=400"
      },
      {
        "index": 10,
        "text": "0,1-Knapsack 10/48 W=20 lbs 2 3 4 1 weight"
      },
      {
        "index": 11,
        "text": "0,1-Knapsack 11/48 W=2 lbs Benefit=540"
      },
      {
        "index": 12,
        "text": "0,1-Knapsack 12/48 W=-- lbs Benefit=580 Dynamic Programming?????"
      },
      {
        "index": 13,
        "text": "Fractional Knapsack 13/48 W=30 lbs"
      },
      {
        "index": 14,
        "text": "Algorithm 14/48"
      },
      {
        "index": 15,
        "text": "Text Compression and Huffman Coding Another application of the greedy method is text compression. In this problem, we are given a string X defined over some alphabet and we want to efficiently encode X into a small binary string Y (using only the characters 0 and 1). 15/48"
      },
      {
        "index": 16,
        "text": "Text Compression and Huffman Coding Standard encoding schemes, such as the ASCII and Unicode systems, use fixed length binary strings to encode characters (with 7 bits in the ASCII system and 16 in the Unicode system). For example: E: 69=1000101 Z: 90=1011010 For example, an English document whose length is 100 million characters would require at least 7 megabits to represent in ASCII and 16 megabits to represent in Unicode. 16/48"
      },
      {
        "index": 17,
        "text": "Text Compression and Huffman Coding Fixed-length code: Standard encoding schemes, such as the ASCII and Unicode systems, use fixed length binary strings to encode characters 17/48 10001010100011000101110111111000011111110110111011000110011011001001010001101100111111100011001011010000010110001101011100010100"
      },
      {
        "index": 18,
        "text": "Text Compression and Huffman Coding Fixed-length code: Standard encoding schemes, such as the ASCII and Unicode systems, use fixed length binary strings to encode characters 18/48 10001010100011000101110111111000011111110110111011000110011011001001010001101100111111100011001011010000010110001101011100010100"
      },
      {
        "index": 19,
        "text": "Text Compression and Huffman Coding This is a waste of bits, however, since there are some characters that are hardly ever used and others, like the letter \u201ce\u201d, that is used so often that it is shame to be using the same number of bits for it as the seldomly used characters. Variable-length code: In this scheme, the codes for various characters are allowed to have different lengths. Ideally, we would like the most-frequently used characters to use the fewest number of bits, and the least-frequently used characters to use the most. 19/48"
      },
      {
        "index": 20,
        "text": "Text Compression and Huffman Coding We insist that no code word in our scheme is a prefix of any other code word in our scheme. Such an encoding is a prefix code. The advantage of using such a prefix code is that decoding can be accomplished by using the greedy strategy of processing the bits of Y in order, repeatedly matching bits to the first code word they represent. 20/48"
      },
      {
        "index": 21,
        "text": "Huffman Coding 21/48"
      },
      {
        "index": 22,
        "text": "Example 22/48"
      },
      {
        "index": 23,
        "text": "Example 23/48"
      },
      {
        "index": 24,
        "text": "Example 24/48 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
      },
      {
        "index": 25,
        "text": "Example 25/48 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
      },
      {
        "index": 26,
        "text": "Example t=\u201ca fast runner need never be afraid of the dark\u201d e=010001100010111011111100001111111011011101100 01100110110010010100011011001111111000110010110 10000010110001101011100010100011101011000011110 10111100001010010011111001 |t|=736 bits |e|=174 bits 26/48"
      },
      {
        "index": 27,
        "text": "Questions! 27/48 How to decode? Why Huffman coding is a prefix code? Why Huffman coding is a variable-length? How to make the tree from table of codewords?"
      },
      {
        "index": 28,
        "text": "Example 28/48"
      },
      {
        "index": 29,
        "text": "Example 29/48 r o 1 1 2"
      },
      {
        "index": 30,
        "text": "Example 30/48 r o 1 1 2 s m 2 2 4"
      },
      {
        "index": 31,
        "text": "Example 31/48 r o 1 1 2 s m 2 2 4 a 3"
      },
      {
        "index": 32,
        "text": "Example 32/48 r o 1 1 2 s m 2 2 4 a 3 5"
      },
      {
        "index": 33,
        "text": "Example 33/48 r o 1 1 2 s m 2 2 4 a 3 5 h 8 4"
      },
      {
        "index": 34,
        "text": "Example 34/48 r o 1 1 2 s m 2 2 4 a 3 5 h 8 4 13"
      },
      {
        "index": 35,
        "text": "Construct a Huffman tree Input: A set, C, of d characters, each with a given frequency, f(c) Output: a Huffman tree 35/48"
      },
      {
        "index": 36,
        "text": "Construct a Huffman tree 36/48"
      },
      {
        "index": 37,
        "text": "Construct a Huffman tree 37/48"
      },
      {
        "index": 38,
        "text": "Construct a Huffman tree 38/48"
      },
      {
        "index": 39,
        "text": "Construct a Huffman tree 39/48"
      },
      {
        "index": 40,
        "text": "Construct a Huffman tree 40/48"
      },
      {
        "index": 41,
        "text": "Construct a Huffman tree 41/48"
      },
      {
        "index": 42,
        "text": "Construct a Huffman tree 42/48 v u 2"
      },
      {
        "index": 43,
        "text": "Construct a Huffman tree 43/48"
      },
      {
        "index": 44,
        "text": "Construct a Huffman tree 44/48 v u 2"
      },
      {
        "index": 45,
        "text": "Construct a Huffman tree 45/48 v u 2 s o 2 k i 2 h b 2"
      },
      {
        "index": 46,
        "text": "Construct a Huffman tree 46/48 v u 2 s o 2 k i 2 h b 2 t 4"
      },
      {
        "index": 47,
        "text": "Example 47/48"
      },
      {
        "index": 48,
        "text": "Any Question?? Have a nice day! 48/48"
      }
    ]
  },
  {
    "file": "10-Greedy 2.pptx",
    "type": "pptx",
    "slides": [
      {
        "index": 1,
        "text": "Greedy Algorithms: Kruskal, Prim, Dijekstra Marzieh Eskandari NJIT 1/182"
      },
      {
        "index": 2,
        "text": "Spanning tree 2/182 A B C D E"
      },
      {
        "index": 3,
        "text": "Spanning tree 3/182 A B C D E A B C D A B C D E E"
      },
      {
        "index": 4,
        "text": "Spanning tree 4/182 A B C D E A B C D A B C D E E"
      },
      {
        "index": 5,
        "text": "Weight of a Spanning Tree 5/182 A B C D 4 6 8 10 14 5 11 A B C D E 4 6 8 10 14 5 11 G=(V,E) Weight=5+14+4+6=29 E"
      },
      {
        "index": 6,
        "text": "Minimum Spanning tree 6/182"
      },
      {
        "index": 7,
        "text": "Minimum Spanning tree 7/182"
      },
      {
        "index": 8,
        "text": "Minimum Spanning Tree 8/182 MST(E) E.sort F=\u00d8 WHILE F!=MST DO e=min_length_edge IF F+{e} has no cycle THEN F.add(e) E.del(e) RETURN F"
      },
      {
        "index": 9,
        "text": "Minimum Spanning Tree 9/182 A B C D E 4 6 8 10 5 11 AC BE CE AE AB BD DE E F 14 Input Output"
      },
      {
        "index": 10,
        "text": "Minimum Spanning Tree 10/182 A B C D E 4 6 8 10 5 11 AC BE CE AE AB BD DE E F AC 14"
      },
      {
        "index": 11,
        "text": "Minimum Spanning Tree 11/182 A B C D E 4 6 8 10 5 11 AC BE CE AE AB BD DE E F AC BE 14"
      },
      {
        "index": 12,
        "text": "Minimum Spanning Tree 12/182 A B C D E 4 6 8 10 5 11 AC BE CE AE AB BD DE E F AC BE CE 14"
      },
      {
        "index": 13,
        "text": "Minimum Spanning Tree 13/182 A B C D E 4 6 8 10 5 11 AC BE CE AE AB BD DE E F AC BE CE 14"
      },
      {
        "index": 14,
        "text": "Minimum Spanning Tree 14/182 A B C D E 4 6 8 10 5 11 AC BE CE AE AB BD DE E F AC BE CE 14"
      },
      {
        "index": 15,
        "text": "Minimum Spanning Tree 15/182 A B C D E 4 6 8 10 5 11 AC BE CE AE AB BD DE E F AC BE CE 14"
      },
      {
        "index": 16,
        "text": "Minimum Spanning Tree 16/182 A B C D E 4 6 8 10 5 11 AC BE CE AE AB BD DE E F AC BE CE 14"
      },
      {
        "index": 17,
        "text": "Minimum Spanning Tree 17/182 A B C D E 4 6 8 10 5 11 AC BE CE AE AB BD DE E F AC BE CE BD 14"
      },
      {
        "index": 18,
        "text": "Minimum Spanning Tree 18/182 A B C D E 4 6 8 10 5 11 AC BE CE AE AB BD DE E F AC BE CE BD 14"
      },
      {
        "index": 19,
        "text": "Minimum Spanning Tree 19/182 A B C D E 4 6 8 10 14 5 11 AC BE CE AE AB BD DE E F AC BE CE BD"
      },
      {
        "index": 20,
        "text": "Kruskal\u2019s Algorithm 20/182 MST(E) E.sort F=\u00d8 WHILE F!=MST DO e=min_length_edge IF F+{e} has no cycle THEN F.add(e) E.del(e) RETURN F"
      },
      {
        "index": 21,
        "text": "Kruskal\u2019s Algorithm 21/182 MST(E) E.sort F=\u00d8 WHILE F!=MST DO e=min_length_edge IF F+{e} has no cycle THEN F.add(e) E.del(e) RETURN F"
      },
      {
        "index": 22,
        "text": "Kruskal\u2019s Algorithm 22/182 MST(E) E.sort F=\u00d8 WHILE len(F)!=n-1 DO e=min_length_edge IF F+{e} has no cycle THEN F.add(e) E.del(e) RETURN F"
      },
      {
        "index": 23,
        "text": "Kruskal\u2019s Algorithm 23/182 MST(E) E.sort F=\u00d8 WHILE len(F)!=n-1 DO e=min_length_edge IF F+{e} has no cycle THEN F.add(e) E.del(e) RETURN F Time Complexity?"
      },
      {
        "index": 24,
        "text": "Kruskal\u2019s Algorithm 24/182 MST(E) E.sort F=\u00d8 WHILE len(F)!=n-1 DO e=min_length_edge IF F+{e} has no cycle THEN F.add(e) E.del(e) RETURN F"
      },
      {
        "index": 25,
        "text": "Kruskal\u2019s Algorithm: Detect a cycle 25/182"
      },
      {
        "index": 26,
        "text": "MST: Kruskal 26/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST."
      },
      {
        "index": 27,
        "text": "MST: Kruskal 26/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST."
      },
      {
        "index": 28,
        "text": "MST: Kruskal 27/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST. If e connects nodes in the same set, skip it; otherwise, accept it and merge the sets."
      },
      {
        "index": 29,
        "text": "MST: Kruskal 28/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST. If e connects nodes in the same set, skip it; otherwise, accept it and merge the sets."
      },
      {
        "index": 30,
        "text": "MST: Kruskal 29/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST. If e connects nodes in the same set, skip it; otherwise, accept it and merge the sets."
      },
      {
        "index": 31,
        "text": "MST: Kruskal 30/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST. If e connects nodes in the same set, skip it; otherwise, accept it and merge the sets."
      },
      {
        "index": 32,
        "text": "MST: Kruskal 31/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST. If e connects nodes in the same set, skip it; otherwise, accept it and merge the sets."
      },
      {
        "index": 33,
        "text": "MST: Kruskal 32/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST. If e connects nodes in the same set, skip it; otherwise, accept it and merge the sets."
      },
      {
        "index": 34,
        "text": "MST: Kruskal 33/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST. If e connects nodes in the same set, skip it; otherwise, accept it and merge the sets."
      },
      {
        "index": 35,
        "text": "MST: Kruskal 34/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST. If e connects nodes in the same set, skip it; otherwise, accept it and merge the sets."
      },
      {
        "index": 36,
        "text": "MST: Kruskal 35/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST. If e connects nodes in the same set, skip it; otherwise, accept it and merge the sets."
      },
      {
        "index": 37,
        "text": "MST: Kruskal 36/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST. If e connects nodes in the same set, skip it; otherwise, accept it and merge the sets."
      },
      {
        "index": 38,
        "text": "MST: Kruskal 37/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST. If e connects nodes in the same set, skip it; otherwise, accept it and merge the sets."
      },
      {
        "index": 39,
        "text": "MST: Kruskal 38/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST. If e connects nodes in the same set, skip it; otherwise, accept it and merge the sets."
      },
      {
        "index": 40,
        "text": "MST: Kruskal 39/182 4 6 8 10 5 11 14 we partition the nodes into disjoint sets based on their connectivity in MST. If e connects nodes in the same set, skip it; otherwise, accept it and merge the sets."
      },
      {
        "index": 41,
        "text": "Kruskal\u2019s Algorithm: Union-Find 40/182 MST(E) E.sort F=\u00d8 Initialize n sets, each contains one vertex of G WHILE len(F)!=n-1 DO e=min_length_edge IF e connects nodes in disjoint sets THEN F.add(e) merge two sets E.del(e) RETURN F"
      },
      {
        "index": 42,
        "text": "MST: Kruskal 41/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 43,
        "text": "MST: Kruskal 42/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 44,
        "text": "MST: Kruskal 43/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 45,
        "text": "MST: Kruskal 44/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 46,
        "text": "MST: Kruskal 45/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 47,
        "text": "MST: Kruskal 46/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 48,
        "text": "MST: Kruskal 47/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 49,
        "text": "MST: Kruskal 48/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 50,
        "text": "MST: Kruskal 49/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 51,
        "text": "MST: Kruskal 50/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 52,
        "text": "MST: Kruskal 51/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 53,
        "text": "MST: Kruskal 52/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 54,
        "text": "MST: Kruskal 53/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 55,
        "text": "MST: Kruskal 54/182 4 6 8 10 5 11 14 S"
      },
      {
        "index": 56,
        "text": "Kruskal\u2019s Algorithm: Union-Find 55/182 MST(E) E.sort F=\u00d8 FOR k=1 to n DO S[k]=k WHILE len(F)!=n-1 DO e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min=min(S[i],S[j]) Max=max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min E.del(e) RETURN F"
      },
      {
        "index": 57,
        "text": "MST: Prim 56/182 Z F 4 6 8 10 5 11 14"
      },
      {
        "index": 58,
        "text": "MST: Prim 56/182 Z F v1 4 6 8 10 5 11 14"
      },
      {
        "index": 59,
        "text": "MST: Prim 57/182 Z F v1 4 6 8 10 5 11 14"
      },
      {
        "index": 60,
        "text": "MST: Prim 58/182 Z F v1 v1v3 4 6 8 10 5 11 14"
      },
      {
        "index": 61,
        "text": "MST: Prim 59/182 Z F v1 , v3 v1v3 4 6 8 10 5 11 14"
      },
      {
        "index": 62,
        "text": "MST: Prim 60/182 Z F v1 , v3 v1v3 4 6 8 10 5 11 14"
      },
      {
        "index": 63,
        "text": "MST: Prim 61/182 Z F v1 , v3 v1v3 ,v3v5 4 6 8 10 5 11 14"
      },
      {
        "index": 64,
        "text": "MST: Prim 62/182 Z F v1 , v3 , v5 v1v3 ,v3v5 4 6 8 10 5 11 14"
      },
      {
        "index": 65,
        "text": "MST: Prim 63/182 Z F v1 , v3 , v5 v1v3 ,v3v5 4 6 8 10 5 11 14"
      },
      {
        "index": 66,
        "text": "MST: Prim 64/182 Z F v1 , v3 , v5 v1v3 ,v3v5 ,v2v5 4 6 8 10 5 11 14"
      },
      {
        "index": 67,
        "text": "MST: Prim 65/182 Z F v1 , v3 , v5 , v2 v1v3 ,v3v5 ,v2v5 4 6 8 10 5 11 14"
      },
      {
        "index": 68,
        "text": "MST: Prim 66/182 Z F v1 , v3 , v5 , v2 v1v3 ,v3v5 ,v2v5 4 6 8 10 5 11 14"
      },
      {
        "index": 69,
        "text": "MST: Prim 67/182 Z F v1 , v3 , v5 , v2 v1v3 ,v3v5 ,v2v5 ,v2v4 4 6 8 10 5 11 14"
      },
      {
        "index": 70,
        "text": "MST: Prim 68/182 Z F v1 , v3 , v5 , v2 , v4 v1v3 ,v3v5 ,v2v5 ,v2v4 4 6 8 10 5 11 14"
      },
      {
        "index": 71,
        "text": "Minimum Spanning Tree 69/182 Prim() F=\u00d8 Z={v1} WHILE Z!=V DO find edge(a,b) of minimum length: a in Z and b in V-Z F.add((a,b)) Z.add(b) RETURN F"
      },
      {
        "index": 72,
        "text": "Minimum Spanning Tree 70/182 Prim() F=\u00d8 Z={v1} WHILE Z!=V DO find edge(a,b) of minimum length: a in Z and b in V-Z F.add((a,b)) Z.add(b) RETURN F Time Complexity?"
      },
      {
        "index": 73,
        "text": "Minimum Spanning Tree 71/182 Prim() F=\u00d8 Z={v1} WHILE Z!=V DO find edge(a,b) of minimum length: a in Z and b in V-Z F.add((a,b)) Z.add(b) RETURN F"
      },
      {
        "index": 74,
        "text": "Prim: Notations 72/182 Adjacency Matrix: W 4 6 8 10 5 11 14"
      },
      {
        "index": 75,
        "text": "MST: Prim 62/182 Z v1 , v3 , v5 4 6 8 10 5 11 14"
      },
      {
        "index": 76,
        "text": "MST: Prim 63/182 Z v1 , v3 , v5 4 6 8 10 5 11 14"
      },
      {
        "index": 77,
        "text": "MST: Prim 75/182 Z V-Z 4 6 8 10 5 11 14"
      },
      {
        "index": 78,
        "text": "MST: Prim 75/182 Z V-Z 4 6 8 10 5 11 14"
      },
      {
        "index": 79,
        "text": "MST: Prim 75/182 Z V-Z 4 6 8 10 5 11 14 Min {v1v2 ,v5v2 ,v5v4 } Min {Min {v2v1 ,v2v5 },v4v5 }"
      },
      {
        "index": 80,
        "text": "Prim: Notations 78/182 Z v1 v3 v7 V-Z v4 v2 v5 v6 2 8 4 5 3 9 7 6"
      },
      {
        "index": 81,
        "text": "Prim: Notations 79/182 Min{v2v1 ,v2v7}=v2v1 Min{v4v1 ,v4v3 ,v4v7}= v4v7 Min{v5v1 ,v5v3}= v5v3 Min{v6v7}=v6v7 v4v7 Z V-Z v4 v2 v5 v6 2 8 4 5 3 9 7 6 v1 v3 v7"
      },
      {
        "index": 82,
        "text": "Prim: Notations 80/182 nearest[i]= the other endpoint of the shortest edge in group vi distance[i]= length of the shortest edge in group vi Min{v2v1 ,v2v7}=v2v1 Min{v4v1 ,v4v3 ,v4v7}= v4v7 Min{v5v1 ,v5v3}= v5v3 Min{v6v7}=v6v7 Z V-Z v4 v2 v5 v6 v4v7 2 8 4 5 3 9 7 6 v1 v3 v7"
      },
      {
        "index": 83,
        "text": "Prim: Notations 81/182 nearest[i]= the other endpoint of the shortest edge in group vi distance[i]= length of the shortest edge in group vi Z V-Z v4 v2 v5 v6 v1 v7 v3 v7 2 8 4 5 3 9 7 6 v1 v3 v7"
      },
      {
        "index": 84,
        "text": "Prim: Notations 82/182 nearest[i]= the other endpoint of the shortest edge in group vi distance[i]= length of the shortest edge in group vi Z V-Z v4 v2 v5 v6 2 8 4 5 3 9 7 6 v1 v3 v7"
      },
      {
        "index": 85,
        "text": "Prim: Notations 83/182 nearest[i]= index of the nearest node in Z to vi distance[i]= W[nearest[i]][vi] Z V-Z v4 v2 v5 v6 2 Min (4,7)=v4v7 2 8 4 5 3 9 7 6 v1 v3 v7"
      },
      {
        "index": 86,
        "text": "Prim: How to Use Nearest and Distance 84/182 Adjacency Matrix: W 4 6 8 10 5 11 14"
      },
      {
        "index": 87,
        "text": "MST: Prim 85/182 nearest[i]= index of the nearest node in Z to vi distance[i]= W[nearest[i]][vi] Z F 4 6 8 10 5 11 14"
      },
      {
        "index": 88,
        "text": "MST: Prim 86/182 Z F 4 6 8 10 5 11 14 v1 nearest[i]= index of the nearest node in Z to vi distance[i]= W[nearest[i]][vi]"
      },
      {
        "index": 89,
        "text": "MST: Prim 87/182 nearest[i]= index of the nearest node in Z to vi distance[i]= W[nearest[i]][vi] Z F v1 4 6 8 10 5 11 14"
      },
      {
        "index": 90,
        "text": "MST: Prim 88/182 Z F v1 nearest[i]= index of the nearest node in Z to vi distance[i]= W[nearest[i]][vi] 4 6 8 10 5 11 14"
      },
      {
        "index": 91,
        "text": "MST: Prim 89/182 Z F v1 nearest[i]= index of the nearest node in Z to vi distance[i]= W[nearest[i]][vi] b=3 a=1 4 6 8 10 5 11 14"
      },
      {
        "index": 92,
        "text": "MST: Prim 90/182 Z F v1 , v3 nearest[i]= index of the nearest node in Z to vi distance[i]= W[nearest[i]][vi] b=3 a=1 (1,3) 4 6 8 10 5 11 14"
      },
      {
        "index": 93,
        "text": "MST: Prim 91/182 Z F v1 , v3 nearest[i]= index of the nearest node in Z to vi distance[i]= W[nearest[i]][vi] (1,3) UPDATE! 4 6 8 10 5 11 14"
      },
      {
        "index": 94,
        "text": "Prim: updating nearest[] 92/182 v1 v3 v7 v4 v2 v5 v6 2 8 4 5 3 9 7 6"
      },
      {
        "index": 95,
        "text": "Prim: updating nearest[] 93/182 v2 v5 v6 5 v4 v1 v3 v7 3 9 7 6"
      },
      {
        "index": 96,
        "text": "Prim: updating nearest[] 94/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6"
      },
      {
        "index": 97,
        "text": "Prim: updating nearest[] 95/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6"
      },
      {
        "index": 98,
        "text": "Prim: updating nearest[] 96/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6"
      },
      {
        "index": 99,
        "text": "Prim: updating nearest[] 97/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6 \u221e"
      },
      {
        "index": 100,
        "text": "Prim: updating nearest[] 98/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6 \u221e"
      },
      {
        "index": 101,
        "text": "Prim: updating nearest[] 99/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6"
      },
      {
        "index": 102,
        "text": "Prim: updating nearest[] 100/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6 6 Min{distance[5],W[5][4]}"
      },
      {
        "index": 103,
        "text": "Prim: updating nearest[] 101/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6"
      },
      {
        "index": 104,
        "text": "Prim: updating nearest[] 102/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6"
      },
      {
        "index": 105,
        "text": "Prim: updating nearest[] 103/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6 2 Min{distance[6],W[6][4]}"
      },
      {
        "index": 106,
        "text": "Prim: updating nearest[] 104/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6"
      },
      {
        "index": 107,
        "text": "Prim: updating nearest[] 105/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6 nearest[6]=4"
      },
      {
        "index": 108,
        "text": "Prim: updating nearest[] 106/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6 UPDATE: distance[i]=Min{distance[i],W[i][b]}"
      },
      {
        "index": 109,
        "text": "Prim: updating nearest[] 107/182 v2 3 9 5 7 6 v1 v3 v7 2 8 v4 v5 v6 UPDATE: IF W[i][b]< distance[i] THEN distance[i]=W[i][b]"
      },
      {
        "index": 110,
        "text": "Prim\u2019s Algorithm 108/182 Prim(W) F=\u00d8 FOR i=2 TO n DO // v1 is in Z nearest[i]=1 // Z has only one element (v1) distance[i]=W[1][i] FOR j=1 TO n-1 DO b=index of minimum element in distance a=nearest[b] F.add((a,b)) distance.delete(b) nearest.delete(b) FOR EACH i in distance DO IF W[i][b]<distance[i] THEN distance[i]=W[i][b] nearest[i]=b RETURN F"
      },
      {
        "index": 111,
        "text": "Prim\u2019s Algorithm: Wrap up 123/182"
      },
      {
        "index": 112,
        "text": "Dijkstra\u2019s Algorithm 124/182 G=(V,E) v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5"
      },
      {
        "index": 113,
        "text": "Dijkstra\u2019s Algorithm 125/182 G=(V,E) v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5"
      },
      {
        "index": 114,
        "text": "Dijkstra\u2019s Algorithm 126/182 G=(V,E) v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 Output"
      },
      {
        "index": 115,
        "text": "Dijkstra\u2019s Algorithm 127/182 G=(V,E) v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 Output"
      },
      {
        "index": 116,
        "text": "Graph: Representation 128/182 G W D v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5"
      },
      {
        "index": 117,
        "text": "Notation 129/182 SPS(v1,vi)= shortest path from v1 to vi which passes through some vertices in S. S={v4 , v5} SPS(v1, v2) SPS(v1,v2)=? v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5"
      },
      {
        "index": 118,
        "text": "Notation 130/182 SPS(v1,vi)= shortest path from v1 to vi which passes through some vertices in S. S={v4 , v5} SPS(v1, v2) SPS(v1,v2)=? v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 SP(v1, v2)"
      },
      {
        "index": 119,
        "text": "Idea 131/182 SP{ }(v1,v2) SP(v1,v2)=? SP{v }(v1,v2) SP{ v,u}(v1,v2) SP{u,v,z}(v1,v2) =SP(v1,v2) SP{v2,v3 ,v4,v5 }(v1,v2) v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5"
      },
      {
        "index": 120,
        "text": "Idea 132/182 v4 v3 v2 50 100 10 30 5 20 50 10 S={ } SP(v1,v2)=? S={v5} v1 v5 v4 v3 v2 50 100 10 30 5 20 50 10 v1 v5 v4 v3 v2 50 100 10 30 5 20 50 10 v1 v5"
      },
      {
        "index": 121,
        "text": "Idea 133/182 v4 v3 v2 50 100 10 30 5 20 50 10 S={v5,v4} SP(v1,v2)=? S={v5,v4,v3} v1 v5 v4 v3 v2 50 100 10 30 5 20 50 10 v1 v5 v4 v3 v2 50 100 10 30 5 20 50 10 v1 v5"
      },
      {
        "index": 122,
        "text": "Idea 134/182 SP(v1,v2)=? S={v5,v4,v3 ,v2} v4 v3 v2 50 100 10 30 5 20 50 10 v1 v5 v4 v3 v2 50 100 10 30 5 20 50 10 v1 v5"
      },
      {
        "index": 123,
        "text": "Strategy! 135/182"
      },
      {
        "index": 124,
        "text": "Dijkstra: Example 136/182 S={ } v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5"
      },
      {
        "index": 125,
        "text": "Dijkstra: Example 137/182 S={ } |SPS (v1 , v2)|=50 |SPS (v1 , v3)|=30 |SPS (v1 , v4)|=100 |SPS (v1 , v5)|=10 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 |SP(v1 , v5 )|=10 This path cannot become shorter!!"
      },
      {
        "index": 126,
        "text": "Dijkstra: Example 138/182 S={v5} |SPS (v1 , v2)|=50 |SPS (v1 , v3)|=30 |SPS (v1 , v4)|=100 |SPS (v1 , v5)|=10 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 S={v5}"
      },
      {
        "index": 127,
        "text": "Dijkstra: Example 139/182 S={v5} |SPS (v1 , v2)|=50 |SPS (v1 , v3)|=30 |SPS (v1 , v4)|=20 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 |SP(v1 , v4 )|=20 This path cannot become shorter!!"
      },
      {
        "index": 128,
        "text": "Dijkstra: Example 140/182 S={v5 ,v4} |SPS (v1 , v2)|=50 |SPS (v1 , v3)|=30 |SPS (v1 , v4)|=20 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 S={v5,v4}"
      },
      {
        "index": 129,
        "text": "Dijkstra: Example 141/182 S={v5 ,v4} |SPS (v1 , v2)|=40 |SPS (v1 , v3)|=30 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 |SP(v1 , v3 )|=30 This path cannot become shorter!!"
      },
      {
        "index": 130,
        "text": "Dijkstra: Example 142/182 S={v5 ,v4 ,v3} |SPS (v1 , v2)|=40 |SPS (v1 , v3)|=30 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 S={v5,v4 ,v3}"
      },
      {
        "index": 131,
        "text": "Dijkstra: Example 143/182 S={v5 ,v4 ,v3} |SPS (v1 , v2)|=35 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 |SP(v1 , v2 )|=35 This path cannot become shorter!!"
      },
      {
        "index": 132,
        "text": "Dijkstra: Example 144/182 S={v5 ,v4 ,v3 ,v2} |SPS (v1 , v2)|=35 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 S={v5,v4 ,v3 ,v2}"
      },
      {
        "index": 133,
        "text": "Dijkstra: Implementation 145/182 S={ } |SPS (v1 , v2)|=50 |SPS (v1 , v3)|=30 |SPS (v1 , v4)|=100 |SPS (v1 , v5)|=10 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 X"
      },
      {
        "index": 134,
        "text": "Dijkstra: Implementation 146/182 S={v5} |SPS (v1 , v2)|=? |SPS (v1 , v3)|=? |SPS (v1 , v4)|=? v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 UPDATE!"
      },
      {
        "index": 135,
        "text": "Calculating D[ ] 147/182"
      },
      {
        "index": 136,
        "text": "Calculating D[ ] 148/182"
      },
      {
        "index": 137,
        "text": "Calculating D[ ] 149/182"
      },
      {
        "index": 138,
        "text": "Calculating D[ ] 150/182"
      },
      {
        "index": 139,
        "text": "Dijkstra: Updating D 151/182 S={v5} D[2]=? D[3]=? D[4]=? v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 UPDATE!"
      },
      {
        "index": 140,
        "text": "Dijkstra: Updating D 152/182 m=5 D[2]=min{D[2],D[5]+W[5][2]}=50 D[3]=min{D[3],D[5]+W[5][3]}=30 D[4]=min{D[4],D[5]+W[5][4]}=20 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5"
      },
      {
        "index": 141,
        "text": "Dijkstra: Updating D 153/182 m=5 D[2]=min{D[2],D[5]+W[5][2]}=50 D[3]=min{D[3],D[5]+W[5][3]}=30 D[4]=min{D[4],D[5]+W[5][4]}=20 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 X"
      },
      {
        "index": 142,
        "text": "Dijkstra: Updating D 154/182 m=4 D[2]=? D[3]=? v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5"
      },
      {
        "index": 143,
        "text": "Dijkstra: Updating D 155/182 m=4 D[2]=min{D[2],D[4]+W[4][2]}=40 D[3]=min{D[3],D[4]+W[4][3]}=30 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 X"
      },
      {
        "index": 144,
        "text": "Dijkstra: Updating D 156/182 m=3 D[2]=min{D[2],D[3]+W[3][2]}=35 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5 X"
      },
      {
        "index": 145,
        "text": "Dijkstra: Updating D 157/182 m=2 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5"
      },
      {
        "index": 146,
        "text": "Dijkstra\u2019s Algorithm 158/182 Dijkstra(W) FOR i=2 TO n DO D[i]=W[1][i] FOR i=1 TO n-1 DO m=index of minimum in D FOR EACH j in D: D[j]=min(D[m]+W[m][j],D[j]) PRINT D[m] D.delete(m)"
      },
      {
        "index": 147,
        "text": "Dijkstra\u2019s Algorithm 159/182 Dijkstra(W) FOR i=2 TO n DO D[i]=W[1][i] FOR i=1 TO n-1 DO m=index of minimum in D FOR EACH j in D: D[j]=min(D[m]+W[m][j],D[j]) PRINT D[m] D.delete(m)"
      },
      {
        "index": 148,
        "text": "Dijkstra\u2019s Algorithm 160/182 Dijkstra(W) FOR i=2 TO n DO D[i]=W[1][i] FOR i=1 TO n-1 DO m=index of minimum in D FOR EACH j in D: D[j]=min(D[m]+W[m][j],D[j]) PRINT D[m] D.delete(m)"
      },
      {
        "index": 149,
        "text": "Dijkstra\u2019s Algorithm 161/182 Dijkstra(W) FOR i=2 TO n DO D[i]=W[1][i] FOR i=1 TO n-1 DO m=index of minimum in D FOR EACH j in D: D[j]=min(D[m]+W[m][j],D[j]) PRINT D[m] D.delete(m)"
      },
      {
        "index": 150,
        "text": "Dijkstra\u2019s Algorithm 162/182 Dijkstra(W) FOR i=2 TO n DO D[i]=W[1][i] FOR i=1 TO n-1 DO m=index of minimum in D FOR EACH j in D: D[j]=min(D[m]+W[m][j],D[j]) PRINT D[m] D.delete(m)"
      },
      {
        "index": 151,
        "text": "Dijkstra\u2019s Algorithm 163/182 Dijkstra(W) FOR i=2 TO n DO D[i]=W[1][i] FOR i=1 TO n-1 DO m=index of minimum in D FOR EACH j in D: D[j]=min(D[m]+W[m][j],D[j]) PRINT D[m] D.delete(m)"
      },
      {
        "index": 152,
        "text": "Dijkstra\u2019s Algorithm 164/182 Dijkstra(W) FOR i=2 TO n DO D[i]=W[1][i] FOR i=1 TO n-1 DO m=index of minimum in D FOR EACH j in D: D[j]=min(D[m]+W[m][j],D[j]) PRINT D[m] D.delete(m)"
      },
      {
        "index": 153,
        "text": "Dijkstra\u2019s Algorithm 165/182 Dijkstra(W) FOR i=2 TO n DO D[i]=W[1][i] FOR i=1 TO n-1 DO m=index of minimum in D FOR EACH j in D: IF D[m]+W[m][j]<D[j] THEN D[j]=D[m]+W[m][j] PRINT D[m] D.delete(m)"
      },
      {
        "index": 154,
        "text": "Dijkstra: Path Matrix 166/182 vi v1 For i=2,3,..,n: P[i]=index of the vertex right before i on the shortest path from 1 to i: P[i]=k: SP(v1,vi)=(1,\u2026.,k,i)"
      },
      {
        "index": 155,
        "text": "Dijkstra: Path Matrix 167/182 v1 For i=2,3,..,n: P[i]=index of the vertex right before i on the shortest path from 1 to i: P[i]=k: SP(v1,vi)=(1,\u2026.,k,i) vi vk"
      },
      {
        "index": 156,
        "text": "Dijkstra: Path Matrix 168/182 For i=2,3,..,n: P[i]=index of the vertex right before i on the shortest path from 1 to i: P[i]=k: SP(v1,vi)=(1,\u2026.,k,i) How to Calculate Path matrix, P? How to use P to find the best order?"
      },
      {
        "index": 157,
        "text": "Dijkstra: Path Matrix 169/182 SP (v1 , v2)=(1,\u2026,2) v2 v1 P"
      },
      {
        "index": 158,
        "text": "Dijkstra: Path Matrix 170/182 SP (v1 , v2)=(1,\u2026,2) v2 v1 P"
      },
      {
        "index": 159,
        "text": "Dijkstra: Path Matrix 171/182 SP (v1 , v2)=(1,\u2026,3,2) v1 P v2 v3"
      },
      {
        "index": 160,
        "text": "Dijkstra: Path Matrix 172/182 SP (v1 , v2)=(1,\u2026,3,2) v1 P v2 v3"
      },
      {
        "index": 161,
        "text": "Dijkstra: Path Matrix 173/182 SP (v1 , v2)=(1,\u2026,3,2) v1 P v2 v3"
      },
      {
        "index": 162,
        "text": "Dijkstra: Path Matrix 174/182 SP (v1 , v2)=(1,3,2) P v2 v3 v1"
      },
      {
        "index": 163,
        "text": "Dijkstra: Path Matrix 175/182 SP (v1 , v2)=(1,\u2026,3,2)=(1,3,2) SP (v1 , v3)=(1,3) SP (v1 , v4)=(1,\u2026,5,4)=(1,5,4) SP ( v1 , v5)=(1,5) P"
      },
      {
        "index": 164,
        "text": "Dijkstra: Path Matrix 176/182 For i=2,3,..,n: P[i]=index of the vertex right before i on the shortest path from 1 to i: P[i]=k: SP(v1,vi)=(1,\u2026.,k,i) v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5"
      },
      {
        "index": 165,
        "text": "Dijkstra: Implementation 177/182 v1 v4 v3 v2 50 100 10 30 5 20 50 10 v5"
      },
      {
        "index": 166,
        "text": "Dijkstra: Path Matrix 178/182 D[2]=min{D[2],D[5]+W[5][2]}=50 D[3]=min{D[3],D[5]+W[5][3]}=30 D[4]=min{D[4],D[5]+W[5][4]}=20 Old New m=5"
      },
      {
        "index": 167,
        "text": "Dijkstra: Path Matrix 178/182 D[2]=min{D[2],D[5]+W[5][2]}=50 D[3]=min{D[3],D[5]+W[5][3]}=30 D[4]=min{D[4],D[5]+W[5][4]}=20 changed Old New changed m=5"
      },
      {
        "index": 168,
        "text": "Dijkstra: Path Matrix 179/182 D[2]=min{D[2],D[4]+W[4][2]}=40 D[3]=min{D[3],D[4]+W[4][3]}=30 Old New m=4"
      },
      {
        "index": 169,
        "text": "Dijkstra: Path Matrix 179/182 D[2]=min{D[2],D[4]+W[4][2]}=40 D[3]=min{D[3],D[4]+W[4][3]}=30 changed Old New changed m=4"
      },
      {
        "index": 170,
        "text": "Dijkstra: Path Matrix 180/182 Old New D[2]=min{D[2],D[3]+W[3][2]}=35 m=3"
      },
      {
        "index": 171,
        "text": "Dijkstra: Path Matrix 180/182 changed Old New changed D[2]=min{D[2],D[3]+W[3][2]}=35 m=3"
      },
      {
        "index": 172,
        "text": "Dijkstra\u2019s Algorithm 181/182 Dijkstra(W) FOR i=2 TO n DO D[i]=W[1][i] P[i]=1 FOR i=1 TO n-1 DO m=index of minimum in D FOR EACH j in D: IF D[m]+W[m][j]<D[j] THEN D[j]=D[m]+W[m][j] P[j]=m PRINT D[m] D.delete(m)"
      },
      {
        "index": 173,
        "text": "Any Question?? Have a nice day! 182/182"
      }
    ]
  },
  {
    "file": "11-Dynamic Programming 2.pptx",
    "type": "pptx",
    "slides": [
      {
        "index": 1,
        "text": "Dynamic Programming-2 Marzieh Eskandari NJIT"
      },
      {
        "index": 2,
        "text": "W=20 lbs 0,1-Knapsack problem"
      },
      {
        "index": 3,
        "text": "0,1-Knapsack problem"
      },
      {
        "index": 4,
        "text": "0,1-Knapsack problem: Subproblems"
      },
      {
        "index": 5,
        "text": "0,1-Knapsack problem: Table"
      },
      {
        "index": 6,
        "text": "0,1-Knapsack problem: Table"
      },
      {
        "index": 7,
        "text": "0,1-Knapsack problem: small problems Main problem: A[n][W]=?"
      },
      {
        "index": 8,
        "text": "0,1-Knapsack problem: Relation"
      },
      {
        "index": 9,
        "text": "0,1-Knapsack problem: Relation"
      },
      {
        "index": 10,
        "text": "0,1-Knapsack problem: Relation"
      },
      {
        "index": 11,
        "text": "0,1-Knapsack problem"
      },
      {
        "index": 12,
        "text": "Class work"
      },
      {
        "index": 13,
        "text": "Money Change Problem Compute the minimum number of coins needed to change the given value into coins with denominations 1, 3, and 4. Input: An integer money, n. Output: The minimum number of coins that changes n. 1 4 3 6=4+1+1 6=3+3 10=4+4+1+1 10=4+3+3 n=4k+2 k(4)+2(1) (k-1)(4)+2(3) k+2 coins k+1 coins"
      },
      {
        "index": 14,
        "text": "SubProblems"
      },
      {
        "index": 15,
        "text": "Table"
      },
      {
        "index": 16,
        "text": "Relation Choose Choose Choose 1 3 4"
      },
      {
        "index": 17,
        "text": "Relation 1 3 4"
      },
      {
        "index": 18,
        "text": "Relation 1 3 4"
      },
      {
        "index": 19,
        "text": "Relation 1 3 4"
      },
      {
        "index": 20,
        "text": "Inductive Approach create array D[0..n] D[0]=0 for i=1 to n do min_coins=1+D[i-1] if i-3>=0 then min_coins=min(min_coins,D[i-3]+1) if i-4>=0 then min_coins=min(min_coins,D[i-4]+1) D[i]=min_coins return D[n]"
      },
      {
        "index": 22,
        "text": "Subproblems"
      },
      {
        "index": 23,
        "text": "Table"
      },
      {
        "index": 24,
        "text": "Relation"
      },
      {
        "index": 25,
        "text": "Relation"
      },
      {
        "index": 26,
        "text": "Relation"
      },
      {
        "index": 27,
        "text": "Inductive approach min_steps_to_one(n): create array D[1..n] D[1] = 0 for i = 2 to n do min_steps = D[i-1] if i % 2 == 0 then min_steps = min(min_steps, D[i/2]) if i % 3 == 0 then min_steps = min(min_steps, D[i/3]) D[i] = 1 + min_steps return D[n]"
      },
      {
        "index": 28,
        "text": "Any Question?? Have a nice day!"
      }
    ]
  },
  {
    "file": "11-DynamicProgramming.pptx",
    "type": "pptx",
    "slides": [
      {
        "index": 1,
        "text": "Dynamic Programming Marzieh Eskandari NJIT 1/89"
      },
      {
        "index": 2,
        "text": "Dynamic programming Where did the (strange) name Dynamic Programming come from? The inventor of DP-Richard Bellman- says: \u201cI spent the Fall quarter (of 1950) at RAND. My first task was to find a name for multistage decision processes. An interesting question is, \u2018Where did the name, dynamic programming, come from?\u2019 The 1950s were not good years for mathematical research. We had a very interesting gentleman in Washington named Wilson. He was Secretary of Defense, and he actually had a pathological fear and hatred of the word, research. I\u2019m not using the term lightly; I\u2019m using it precisely. His face would suffuse, he would turn red, and he would get violent if people used the term, research, in his presence. You can imagine how he felt, then, about the term, mathematical. The RAND Corporation was employed by the Air Force, and the Air Force had Wilson as its boss, essentially. Hence, I felt I had to do something to shield Wilson and the Air Force from the fact that I was really doing mathematics inside the RAND Corporation. What title, what name, could I choose? In the first place I was interested in planning, in decision making, in thinking. But planning, is not a good word for various reasons. I decided therefore to use the word, \u2018programming.\u2019 I wanted to get across the idea that this was dynamic, this was multistage, this was time-varying\u2014I thought, let\u2019s kill two birds with one stone. Let\u2019s take a word that has an absolutely precise meaning, namely dynamic, in the classical physical sense. It also has a very interesting property as an adjective, and that is it\u2019s impossible to use the word, dynamic, in a pejorative sense. Try thinking of some combination that will possibly give it a pejorative meaning. It\u2019s impossible. Thus, I thought dynamic programming was a good name. It was something not even a Congressman could object to. So I used it as an umbrella for my activities\u201d. 2/89"
      },
      {
        "index": 3,
        "text": "Definition 3/89 Dynamic Programming (DP) is a problem-solving approach helps find the best or most efficient solution to a problem by systematically exploring all possible solutions. It involves breaking a problem into smaller subproblems, solving each once, and storing their results to avoid redundant work. This approach improves efficiency, often reducing exponential time complexity to polynomial."
      },
      {
        "index": 4,
        "text": "Dynamic Programing: Approaches 4/89 Memoization: This involves solving the problem recursively and storing the results of subproblems in a cache (storage) to avoid redundant computations. 1. Start with the original problem and break it down recursively. 2. Use a cache (e.g., a dictionary or array) to store already computed subproblem results. 3. Reuse results from the cache if the same subproblem is encountered again. Tabulation: This involves solving the problem iteratively by building a table (usually an array) from the smallest subproblems to the larger ones. 1. Identify the base cases and initialize a table to store solutions. 2. Iteratively fill in the table, solving subproblems in a specific order. 3. Use previously computed values to build up to the solution of the original problem."
      },
      {
        "index": 5,
        "text": "Dynamic Programing: Tabulation 5/89 Define the \u201crestricted\u201d small subproblems. Define a \u201cTable\u201d to store the solutions to the subproblems. Find a relation between the solution of a larger problem and the solutions of smaller problems. Use an inductive method to construct the solution to the main problem: Starting from the base cases (smallest subproblems), iteratively fill the table using this relation."
      },
      {
        "index": 6,
        "text": "DP vs. DC 6/89 Similarity: Both break a problem into subproblems: They solve the main problem by solving smaller, related subproblems. Both use recursion (either directly or indirectly). Both aim to reduce the problem\u2019s time complexity by reusing solutions or simplifying the problem structure. Difference: 1. In DC, subproblems are mostly independent whereas in DP subproblems are overlapping 2. DC does not reuse solutions; recalculates them as needed whereas DP stores and reuses solutions to subproblems (memoization/tabulation). 3. DC may have exponential time if not optimized while DP is typically more efficient (polynomial time) due to memoization."
      },
      {
        "index": 7,
        "text": "Example 1: Fibonacci\u2019s series 7/89 fib(n): if n==1 or n==2 then return 1 return fib(n-1)+fib(n-2)"
      },
      {
        "index": 8,
        "text": "Fibonacci\u2019s series: DP Approach 10/89 fib(i)=? F"
      },
      {
        "index": 9,
        "text": "Fibonacci\u2019s series: DP-Tabulation 11/89 fib(n): F[0]=F[1]=1 for i=2 to n do: F[i]=F[i-1]+F[i-2] F F F F fib(5)=? F"
      },
      {
        "index": 10,
        "text": "Example 3: Floyd\u2019s Method 26/89 Given a weighted directed graph with positive or negative edge weights (but with no negative cycles), find the shortest path between every pair of nodes. A D C E G B 1 1 5 9 3 2 4 2 3 3"
      },
      {
        "index": 11,
        "text": "Example 3: Floyd\u2019s Method 27/89 Given a weighted directed graph with positive or negative edge weights (but with no negative cycles), find the shortest path between every pair of nodes. A D C E G B 1 5 9 3 2 4 2 -3 2 -4"
      },
      {
        "index": 12,
        "text": "Example 3: Floyd\u2019s Method 28/89 Given a weighted directed graph with positive or negative edge weights (but with no negative cycles), find the shortest path between every pair of nodes. A D C E G B 1 5 9 3 2 4 2 -3 2 -4"
      },
      {
        "index": 13,
        "text": "Example 3: Floyd\u2019s Method 29/89 Given a weighted directed graph with positive or negative edge weights (but with no negative cycles), find the shortest path between every pair of nodes. A D C E G B 1 -4 5 9 3 2 4 2 -3 2"
      },
      {
        "index": 14,
        "text": "Example 3: Floyd\u2019s Method 30/89 Given a weighted directed graph with positive or negative edge weights (but with no negative cycles), find the shortest path between every pair of nodes. A D C E G B 1 1 5 9 3 2 4 2 3 3 A to B A to C A to D A to E B to A B to C B to D B to E C to A C to B C to D C to E D to A D to B D to C D to E E to A E to B E to C E to D"
      },
      {
        "index": 15,
        "text": "Example 3: Floyd\u2019s Method 31/89 A D C E G B 1 1 5 9 3 2 4 2 3 3 A-B A-D-C A-D A-D-E B-D-E-A B-C B-D B-D-E C-D-E-A C-D-E-A-B C-D C-D-E D-E-A D-E-A-B D-C D-E E-A E-A-B E-A-D-C E-A-D Given a weighted directed graph, find the shortest path between every pair of nodes."
      },
      {
        "index": 16,
        "text": "Example 3: Floyd\u2019s Method 32/89 A D C E G B 1 1 5 9 3 2 4 2 3 3 Lengths of all 20 shortest paths Given a weighted directed graph, find the shortest path between every pair of nodes."
      },
      {
        "index": 17,
        "text": "Example 3: Floyd\u2019s Method 33/89 A D C E G B 1 1 5 9 3 2 4 2 3 3 A to B: 1 A to C: 3 A to D: 1 A to E: 4 B to A: 8 B to C: 3 B to D:2 B to E: 5 C to A: 10 C to B: 11 C to D: 4 C to E: 7 D to A: 6 D to B: 7 D to C: 2 D to E: 3 E to A: 3 E to B: 4 E to C: 6 E to D: 4 Given a weighted directed graph, find the lengths of the shortest paths between all pairs of nodes."
      },
      {
        "index": 18,
        "text": "Graph: Representation 34/89 A D C E G B 1 1 5 9 3 2 4 2 3 3 W W[i][j]=weight of edge from vertex i to j"
      },
      {
        "index": 19,
        "text": "Shortest paths: Representation 35/89 A D C E G B 1 1 5 9 3 2 4 2 3 3 D D[i][j]=length of shortest path from vertex i to j"
      },
      {
        "index": 20,
        "text": "Optimal Substructure 36/89 A P1 P2 P3"
      },
      {
        "index": 21,
        "text": "Original Problem 37/89"
      },
      {
        "index": 22,
        "text": "Defining subproblems 37/89 v1 v4 v3 v5 v2 1 1 5 9 3 2 4 2 3 3"
      },
      {
        "index": 23,
        "text": "Defining subproblems 38/89 k=3"
      },
      {
        "index": 24,
        "text": "Subproblems: Example 39/89 d(vi,vj): length of shortest path from vi to vj"
      },
      {
        "index": 25,
        "text": "Subproblems: Example 40/89 d(v1,v2)=1 d(vi,vj): length of shortest path from vi to vj"
      },
      {
        "index": 26,
        "text": "Subproblems: Example 41/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj"
      },
      {
        "index": 27,
        "text": "Subproblems: Example 42/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1"
      },
      {
        "index": 28,
        "text": "Subproblems: Example 43/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5"
      },
      {
        "index": 29,
        "text": "Subproblems: Example 44/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9"
      },
      {
        "index": 30,
        "text": "Subproblems: Example 45/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3"
      },
      {
        "index": 31,
        "text": "Subproblems: Example 46/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2"
      },
      {
        "index": 32,
        "text": "Subproblems: Example 47/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2 d(v2,v5)=14"
      },
      {
        "index": 33,
        "text": "Subproblems: Example 48/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2 d(v2,v5)=14"
      },
      {
        "index": 34,
        "text": "Subproblems: Example 49/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2 d(v2,v5)=14"
      },
      {
        "index": 35,
        "text": "Subproblems: Example 50/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2 d(v2,v5)=14 d(v3,v4)=4"
      },
      {
        "index": 36,
        "text": "Subproblems: Example 51/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2 d(v2,v5)=14 d(v3,v4)=4"
      },
      {
        "index": 37,
        "text": "Subproblems: Example 52/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2 d(v2,v5)=14 d(v3,v4)=4"
      },
      {
        "index": 38,
        "text": "Subproblems: Example 53/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2 d(v2,v5)=14 d(v3,v4)=4"
      },
      {
        "index": 39,
        "text": "Subproblems: Example 54/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2 d(v2,v5)=14 d(v3,v4)=4 d(v4,v3)=2"
      },
      {
        "index": 40,
        "text": "Subproblems: Example 55/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2 d(v2,v5)=14 d(v3,v4)=4 d(v4,v3)=2 d(v4,v5)=3"
      },
      {
        "index": 41,
        "text": "Subproblems: Example 56/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2 d(v2,v5)=14 d(v3,v4)=4 d(v4,v3)=2 d(v4,v5)=3 d(v5,v1)=3"
      },
      {
        "index": 42,
        "text": "Subproblems: Example 57/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2 d(v2,v5)=14 d(v3,v4)=4 d(v4,v3)=2 d(v4,v5)=3 d(v5,v1)=3 d(v5,v2)=4"
      },
      {
        "index": 43,
        "text": "Subproblems: Example 58/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2 d(v2,v5)=14 d(v3,v4)=4 d(v4,v3)=2 d(v4,v5)=3 d(v5,v1)=2 d(v5,v2)=4 d(v5,v3)=7"
      },
      {
        "index": 44,
        "text": "Subproblems: Example 59/89 d(v1,v2)=1 d(v1,v3)=4 d(vi,vj): length of shortest path from vi to vj d(v1,v4)=1 d(v1,v5)=5 d(v2,v1)=9 d(v2,v3)=3 d(v2,v4)=2 d(v2,v5)=14 d(v3,v4)=4 d(v4,v3)=2 d(v4,v5)=3 d(v5,v1)=2 d(v5,v2)=4 d(v5,v3)=7 d(v5,v4)=4"
      },
      {
        "index": 45,
        "text": "Subproblems: Representation 60/89"
      },
      {
        "index": 46,
        "text": "Notations 61/89"
      },
      {
        "index": 47,
        "text": "Notations 62/89"
      },
      {
        "index": 48,
        "text": "Calculating Ds 63/89"
      },
      {
        "index": 49,
        "text": "Calculating Ds 64/89"
      },
      {
        "index": 50,
        "text": "Calculating Ds 65/89"
      },
      {
        "index": 51,
        "text": "Calculating Ds 66/89"
      },
      {
        "index": 52,
        "text": "Calculating Ds 67/89"
      },
      {
        "index": 53,
        "text": "Shortest Path: Example 68/89 v1 v4 v3 G v2 5 15 50 15 5 15 5 W 30"
      },
      {
        "index": 54,
        "text": "Shortest Path: Example 69/89 D D =W (0) (1)"
      },
      {
        "index": 55,
        "text": "Shortest Path: Example 70/89 D D (2) (3)"
      },
      {
        "index": 56,
        "text": "Shortest Path: Example 71/89 D =D (4)"
      },
      {
        "index": 57,
        "text": "Floyd-Warshall Algorithm 72/89 FloydWarshall(W[][],n) D=W //initializing D0 for k=1 to n do //calculating Dk for i=1 to n do for j=1 to n do D[i][j]=min{D[i][j],D[i][k]+D[k][j] return D"
      },
      {
        "index": 58,
        "text": "Floyd-Warshall Algorithm 73/89 FloydWarshall(W[][],n) D=W //initializing D0 for k=1 to n do //calculating Dk for i=1 to n do for j=1 to n do if D[i][k]+D[k][j]<D[i][j] then D[i][j]=D[i][k]+D[k][j] return D"
      },
      {
        "index": 59,
        "text": "Shortest Paths! Path Matrix 74/89 Rows and columns of P: v1 to vn P[i][j]=r: shortest path from vi to vj passes through vr P[i][j]=0: edge vivj is the shortest path from vi to vj"
      },
      {
        "index": 60,
        "text": "Shortest Paths! 75/89 How to calculate path matrix, P? How to use P to find the shortest paths?"
      },
      {
        "index": 61,
        "text": "Shortest Paths! 76/89 P[i][j]=r: shortest path from vi to vj passes through vr P[i][j]=0: edge vivj is the shortest path from vi to vj P"
      },
      {
        "index": 62,
        "text": "Shortest Paths! 77/89 P[i][j]=r: shortest path from vi to vj passes through vr P[i][j]=0: edge vivj is the shortest path from vi to vj P SP(v1,v3)=??"
      },
      {
        "index": 63,
        "text": "Shortest Paths! 78/89 P[i][j]=r: shortest path from vi to vj passes through vr P[i][j]=0: edge vivj is the shortest path from vi to vj P SP(v1,v3)=?? P[v1][v3]=?"
      },
      {
        "index": 64,
        "text": "Shortest Paths! 79/89 P[i][j]=r: shortest path from vi to vj passes through vr P[i][j]=0: edge vivj is the shortest path from vi to vj P SP(v1,v3)=?? P[v1][v3]=4"
      },
      {
        "index": 65,
        "text": "Shortest Paths! 80/89 P[i][j]=r: shortest path from vi to vj passes through vr P[i][j]=0: edge vivj is the shortest path from vi to vj P SP(v1,v3)=?? P[v1][v3]=4 1. SP(v1,v4)=? 2. SP(v4,v3)=?"
      },
      {
        "index": 66,
        "text": "Shortest Paths! 81/89 P[i][j]=r: shortest path from vi to vj passes through vr P[i][j]=0: edge vivj is the shortest path from vi to vj P SP(v1,v3)=?? P[v1][v3]=4 1. P[v1][v4]=? 2. P[v4][v3]=?"
      },
      {
        "index": 67,
        "text": "Shortest Paths! 82/89 P[i][j]=r: shortest path from vi to vj passes through vr P[i][j]=0: edge vivj is the shortest path from vi to vj P SP(v1,v3)=?? P[v1][v3]=4 1. P[v1][v4]=2 2. P[v4][v3]=0"
      },
      {
        "index": 68,
        "text": "Shortest Paths! 83/89 P[i][j]=r: shortest path from vi to vj passes through vr P[i][j]=0: edge vivj is the shortest path from vi to vj P SP(v1,v3)=?? P[v1][v3]=4 1. P[v1][v4]=2 2. P[v4][v3]=0 v3"
      },
      {
        "index": 69,
        "text": "Shortest Paths! 84/89 P[i][j]=r: shortest path from vi to vj passes through vr P[i][j]=0: edge vivj is the shortest path from vi to vj P v3 SP(v1,v3)=?? P[v1][v3]=4 1. P[v1][v4]=2 1.1. P[v1][v2]=? 1.2. P[v2][v4]=? 2. P[v4][v3]=0"
      },
      {
        "index": 70,
        "text": "Shortest Paths! 85/89 P[i][j]=r: shortest path from vi to vj passes through vr P[i][j]=0: edge vivj is the shortest path from vi to vj P v3 SP(v1,v3)=?? P[v1][v3]=4 1. P[v1][v4]=2 1.1. P[v1][v2]=0 1.2. P[v2][v4]=0 2. P[v4][v3]=0"
      },
      {
        "index": 71,
        "text": "Shortest Paths! 86/89 P[i][j]=r: shortest path from vi to vj passes through vr P[i][j]=0: edge vivj is the shortest path from vi to vj P v3 SP(v1,v3)=?? P[v1][v3]=4 1. P[v1][v4]=2 1.1. P[v1][v2]=0 1.2. P[v2][v4]=0 2. P[v4][v3]=0"
      },
      {
        "index": 72,
        "text": "Calculating P 87/89"
      },
      {
        "index": 73,
        "text": "Floyd\u2019s Algorithm 88/89 FloydWarshall(W[][],n) D=W P=0 //initializing matrix P for k=1 to n do for i=1 to n do for j=1 to n do if D[i][k]+D[k][j]<D[i][j] then D[i][j]=D[i][k]+D[k][j] P[i][j]=k return D"
      },
      {
        "index": 74,
        "text": "Any Question?? Have a nice day! 89/89"
      }
    ]
  },
  {
    "file": "6-DictionaryADT.pptx",
    "type": "pptx",
    "slides": [
      {
        "index": 1,
        "text": "Dictionary Abstract Data Structure Hash functions Marzieh Eskandari NJIT 1/66"
      },
      {
        "index": 2,
        "text": "Dictionary We assign keys to elements and then use those keys later to look up or remove elements: (k,e) This functionality defines a data structure known as a dictionary or map. This structure supports methods for the insertion, removal, and searching of values in terms of keys associated with those values. 2/66 Keys are like labels assigned to file folders"
      },
      {
        "index": 3,
        "text": "Definition: map A map stores a collection of key-value pairs, (k, v), which we call items, where k is a key and v is a value that is associated with that key. For example, in a map storing student records (such as the student\u2019s name, address, and course grades), the key might be the student\u2019s ID number. We assume here that keys are unique then the key associated with an object can be viewed as an \u201caddress\u201d for that object in memory. 3/66"
      },
      {
        "index": 4,
        "text": "Definition: Multimap A map that allows for multiple values for the same key is called a multimap. 4/66"
      },
      {
        "index": 5,
        "text": "Methods As map data structure, M, supports the following fundamental methods: get(k): If M contains an item with key equal to k, then return the value of such an item; else return a special element NULL. put(k, v): Insert an item with key k and value v; if there is already an item with key k, then replace its value with v. remove(k): Remove from M an item with key equal to k, and return this item. If M has no such item, then return the special element NULL. 5/66"
      },
      {
        "index": 6,
        "text": "Implementing a map 6/66 A"
      },
      {
        "index": 7,
        "text": "Lookup Tables 7/66 A"
      },
      {
        "index": 8,
        "text": "Example 8/66 B (2,d) (3,v) (0,b) (9,m) (5,e) (6,h) (2,d) (3,v) (0,b) (9,m) (5,e) (6,h)"
      },
      {
        "index": 9,
        "text": "Lookup Tables We perform the map operations as follows: To perform a put(k, v) operation, we assign (k, v) to A[k]. To perform a get(k) operation, we return A[k]. To perform a remove(k) operation, we return A[k] and then we assign the NULL item to A[k]. 9/66 O(1)"
      },
      {
        "index": 10,
        "text": "Generalization 10/66"
      },
      {
        "index": 11,
        "text": "Example 11/66"
      },
      {
        "index": 12,
        "text": "Hash Function 12/66"
      },
      {
        "index": 13,
        "text": "Hash Function: Collision 13/66"
      },
      {
        "index": 14,
        "text": "Hash Functions: Example 14/66"
      },
      {
        "index": 15,
        "text": "Hash functions on integer keys In the case that we can view the key k as a single integer, there are a number of different kinds of hash functions, such as: Modular Division Random Linear Functions Random Polynomial Functions 15/66"
      },
      {
        "index": 16,
        "text": "Modular Division 16/66"
      },
      {
        "index": 17,
        "text": "Random Linear Functions 17/66"
      },
      {
        "index": 18,
        "text": "Example 18/66"
      },
      {
        "index": 19,
        "text": "Random Polynomial Functions 19/66 By Horner\u2019s rule"
      },
      {
        "index": 20,
        "text": "Example 20/66"
      },
      {
        "index": 21,
        "text": "Viewing Keys as Tuples 21/66"
      },
      {
        "index": 22,
        "text": "Viewing Keys as Tuples: Example 22/66"
      },
      {
        "index": 23,
        "text": "Hash functions on tuples 23/66"
      },
      {
        "index": 24,
        "text": "Hash function: Summing Components 24/66"
      },
      {
        "index": 25,
        "text": "Example 25/66"
      },
      {
        "index": 26,
        "text": "XORing Components A slight variation on this theme is to compute an exclusive-or of all the components of a key, which could be written mathematically as: where \u2295 denotes the bitwise exclusive-or (XOR) operation 26/66"
      },
      {
        "index": 27,
        "text": "Example 27/66"
      },
      {
        "index": 28,
        "text": "Summing Components: Collision Unfortunately, such hash functions, which consist of either summing or XORing the components of each key, are actually not that good in most applications. Such a function is fairly poor at avoiding collisions for some cases. For example, consider such a hash function for a character string s that sums the ASCII values of the characters in s. This hash function produces lots of unwanted collisions for some words such as: \"stop\", \"tops\", \"pots\", \"spot\" 28/66"
      },
      {
        "index": 29,
        "text": "Polynomial-Evaluation Functions 29/66 By Horner\u2019s rule"
      },
      {
        "index": 30,
        "text": "Example 30/66"
      },
      {
        "index": 31,
        "text": "Tabulation-based hash functions 31/66"
      },
      {
        "index": 32,
        "text": "Example 32/66 M d"
      },
      {
        "index": 33,
        "text": "Handling Collisions and Rehashing There are some methods for handling collisions: Chaining Method Linear Probing Quadratic Probing Double Hashing Cuckoo Hashing 33/66 Open address"
      },
      {
        "index": 34,
        "text": "Chaining method 34/66"
      },
      {
        "index": 35,
        "text": "Linear Probing 35/66 h(k) = k mod 11 25"
      },
      {
        "index": 36,
        "text": "Linear Probing 36/66 h(k) = k mod 11 25"
      },
      {
        "index": 37,
        "text": "Linear Probing 37/66 h(k) = k mod 11 25"
      },
      {
        "index": 38,
        "text": "Linear Probing 38/66 h(k) = k mod 11 25"
      },
      {
        "index": 39,
        "text": "Quadratic Probing 39/66 h(k) = k mod 11 Add(25)"
      },
      {
        "index": 40,
        "text": "Quadratic Probing 40/66 h(k) = k mod 11 25"
      },
      {
        "index": 41,
        "text": "Quadratic Probing 41/66 h(k) = k mod 11 25"
      },
      {
        "index": 42,
        "text": "Quadratic Probing 42/66 h(k) = k mod 11 25"
      },
      {
        "index": 43,
        "text": "Double Hashing 43/66"
      },
      {
        "index": 44,
        "text": "Example 44/66"
      },
      {
        "index": 45,
        "text": "Example 45/66"
      },
      {
        "index": 46,
        "text": "Example 46/66"
      },
      {
        "index": 47,
        "text": "Example 47/66"
      },
      {
        "index": 48,
        "text": "Example 48/66"
      },
      {
        "index": 49,
        "text": "Example 49/66"
      },
      {
        "index": 50,
        "text": "Example 50/66 X"
      },
      {
        "index": 51,
        "text": "Example 51/66"
      },
      {
        "index": 52,
        "text": "Example 52/66"
      },
      {
        "index": 53,
        "text": "Cuckoo Hashing Cuckoo hashing is a type of hashing algorithm used in hash tables to resolve collisions. The idea behind cuckoo hashing is to use multiple hash functions and two (or more) hash tables. If a collision occurs, the existing element is \"kicked out\" and reinserted using another hash function. This process can repeat until all elements are placed or a maximum number of displacements is reached, at which point the hash table may be resized. 53/66"
      },
      {
        "index": 54,
        "text": "Example 54/66"
      },
      {
        "index": 55,
        "text": "Example 55/66"
      },
      {
        "index": 56,
        "text": "Example 56/66 9"
      },
      {
        "index": 57,
        "text": "Example 57/66 12"
      },
      {
        "index": 58,
        "text": "Example 58/66 5"
      },
      {
        "index": 59,
        "text": "Example 59/66 9"
      },
      {
        "index": 60,
        "text": "Example 60/66 2"
      },
      {
        "index": 61,
        "text": "Example 61/66 5"
      },
      {
        "index": 62,
        "text": "Example 61/66 12"
      },
      {
        "index": 63,
        "text": "Example 61/66 2"
      },
      {
        "index": 64,
        "text": "Example 61/66 9"
      },
      {
        "index": 65,
        "text": "Example 61/66 12 Endless loop: Return to slide 57!!"
      },
      {
        "index": 66,
        "text": "Any Question?? Have a nice day! 66/66"
      }
    ]
  },
  {
    "file": "7-Balanced Binary trees.pptx",
    "type": "pptx",
    "slides": [
      {
        "index": 1,
        "text": "Balanced Binary Search Trees Marzieh Eskandari NJIT 1/154"
      },
      {
        "index": 2,
        "text": "Binary Search Tree Binary Search Tree Property: key of a node is less than the keys of its right subtree and greater than the keys of its left subtree. 2/154 25 15 30 10 28 40 35 50 20 5 18"
      },
      {
        "index": 3,
        "text": "Methods Search(k): O(h) Insert(k) : O(h) Delete(k) : O(h) 3/154 h 25 15 30 10 28 40 35 50 20 5 18"
      },
      {
        "index": 4,
        "text": "Bad Trees for Search 4/154 7"
      },
      {
        "index": 5,
        "text": "Bad Trees for Search 5/154 7"
      },
      {
        "index": 6,
        "text": "Good Trees for Search 6/154 25 15 30 10 28 40 18 In order to avoid the poor performance, we need ways of maintaining the height of a search tree to be logarithmic in the number of nodes it has."
      },
      {
        "index": 7,
        "text": "Generalization 7/154 44 15 nil 17 32 78 88 50 62 48"
      },
      {
        "index": 8,
        "text": "Empty External Nodes 8/154 [ ] [ ] [ ] [ ]"
      },
      {
        "index": 9,
        "text": "Empty External Nodes 9/154 [ ] [ ] [ ] [ ] 49 15 19 30 70 89 59 3 3 19 30 49 59 70 89 99"
      },
      {
        "index": 10,
        "text": "How to make the Tree? 10/154 49 19 30 70 89 59 3 3 19 30 49 59 70 89 99 parent value is max of left\u2019s leaves Sort the intervals Pair them"
      },
      {
        "index": 11,
        "text": "Definition Rank-balanced tree is a binary tree with logarithmic height. AVL trees Red-black trees By performing a certain kind of restructuring actions (rotation), we change a tree to a rank-balanced tree. 11/154"
      },
      {
        "index": 12,
        "text": "Balance Factor 12/154"
      },
      {
        "index": 13,
        "text": "AVL: Example 13/154 heights 1 0 2 2 3 0 4 0 0 0 0 0 1 0 0 1 1"
      },
      {
        "index": 14,
        "text": "AVL: Example 14/154 Balance factor 0 -1 0 0 0 0 1 -1 0 0 0 0 0 0 0 0 0 1 0 2 2 3 0 4 0 0 0 0 0 1 0 0 1 1"
      },
      {
        "index": 15,
        "text": "AVL: Example 15/154 Balance factor 0"
      },
      {
        "index": 16,
        "text": "Rotations An AVL tree may perform the following four kinds of rotations, when it is getting unbalanced: Single rotations Left rotation Right rotation Double rotations Left-Right rotation Right-Left rotation 16/154"
      },
      {
        "index": 17,
        "text": "Rotations? 30/154 Rotation at A"
      },
      {
        "index": 18,
        "text": "Insertion By changing the way a key is inserted to a tree, the tree would be an AVL. Insert new key as usual If tree is not an AVL, Perform a rotation 18/154"
      },
      {
        "index": 19,
        "text": "AVL: Example 19/154 0 1. Insert(54)"
      },
      {
        "index": 20,
        "text": "AVL: Example 20/154 0 1. Insert(54)"
      },
      {
        "index": 21,
        "text": "AVL: Example 21/154 x 0 0 1. Insert(54)"
      },
      {
        "index": 22,
        "text": "Is tree still an AVL? On the path from new node (x) to the root, update the balance factors. 22/154"
      },
      {
        "index": 23,
        "text": "AVL: Example 23/154 1. Insert(54) 2. Update BFs"
      },
      {
        "index": 24,
        "text": "Is tree still an AVL? 24/154"
      },
      {
        "index": 25,
        "text": "AVL: Example 25/154 1. Insert(54) 2. Update BFs 3. Find the first ancestor with BF of 2 A"
      },
      {
        "index": 26,
        "text": "Is tree still an AVL? 26/154"
      },
      {
        "index": 27,
        "text": "AVL: Example 27/154 1. Insert(54) 2. Update BFs 3. Find the first ancestor with BF of 2 4. B and C? A"
      },
      {
        "index": 28,
        "text": "AVL: Example 28/154 1. Insert(54) 2. Update BFs 3. Find the first ancestor with BF of 2 4. B and C: Rotaion? A B C"
      },
      {
        "index": 29,
        "text": "Is tree still an AVL? 29/154"
      },
      {
        "index": 30,
        "text": "Left rotation 30/154 -2 x Left Rotation at A"
      },
      {
        "index": 31,
        "text": "Right rotation 31/154 2 x Right Rotation at A"
      },
      {
        "index": 32,
        "text": "Right-Left rotation 32/154 -2 x"
      },
      {
        "index": 33,
        "text": "Left-Right Rotation 33/154 2 x"
      },
      {
        "index": 34,
        "text": "AVL: Example 34/154 1. Insert(54) 2. Update BFs 3. Find the first ancestor with BF of 2 4. Determine the rotation A B C"
      },
      {
        "index": 35,
        "text": "AVL: Example 35/154 1. Insert(54) 2. Update BFs 3. Find the first ancestor with BF of 2 4. Perform the rotation B C A 2 78 62 50"
      },
      {
        "index": 36,
        "text": "Is tree still an AVL? 36/154"
      },
      {
        "index": 37,
        "text": "AVL: Example 37/154 1. Insert(54) 2. Update BFs 3. Find the first ancestor with BF of 2 4. Perform the rotation 5. Update heights and BFs B C A -1 78 62 50"
      },
      {
        "index": 38,
        "text": "Removal By changing the way a key is deleted from a tree, it would remain an AVL. Delete the key as usual It tree is not an AVL, Perform a rotation 38/154"
      },
      {
        "index": 39,
        "text": "Remove Delete the node as usual (BST deletion). Let x be the physically deleted node. Set current_node = x. parent While current_node \u2260 NULL, do the following: Set p = current_node.parent Update height and balance factor of current_node. If current_node is unbalanced then Let A = current_node (first unbalanced node). Let B = taller child of A. Let C = taller child of B (or same-side child if equal height). Perform rotation based on B and C's positions relative to A. Update heights/Balance factors after the rotation. Move upward: current_node = p 39/154"
      },
      {
        "index": 40,
        "text": "Remove: how to find C? Let C = taller child of B (or same-side child if equal height). 40/154 C"
      },
      {
        "index": 41,
        "text": "Remove: how to rotate? Perform rotation based on B and C's positions relative to A: B is the left child of A and C is the left child of B (LL Case) : Right Rotate(A) B is the left child of A and C is the right child of B (LR Case) : Left Rotate(B) \u2192 Right Rotate(A) B is the right child of A and C is the right child of B (RR Case): Left Rotate(A) B is the right child of A and C is the left child of B (RL Case): Right Rotate(B) \u2192 Left Rotate(A) 41/154"
      },
      {
        "index": 42,
        "text": "AVL: Example 42/154 1. delete(32) -1 78 62 50"
      },
      {
        "index": 43,
        "text": "AVL: Example 43/154 1. delete(32) -1 78 62 50 Current_node Current_node=parent of 32"
      },
      {
        "index": 44,
        "text": "AVL: Example 44/154 delete(32) Update its BF -1 78 62 50 Current_node It is balanced!"
      },
      {
        "index": 45,
        "text": "AVL: Example 45/154 delete(32) Update its BF -1 78 62 50 Current_node"
      },
      {
        "index": 46,
        "text": "AVL: Example 46/154 delete(32) Update its BF -1 78 62 50 Current_node It is not balanced!"
      },
      {
        "index": 47,
        "text": "AVL: Example 47/154 delete(32) Update its BF A= current_node -1 78 62 50 Current_node A 0"
      },
      {
        "index": 48,
        "text": "AVL: Example 48/154 delete(32) Update its BF A= current_node Determin B -1 78 62 50 Current_node A 0 B"
      },
      {
        "index": 49,
        "text": "AVL: Example 49/154 delete(32) Update its BF A= current_node Determin B Determine C -1 78 62 50 Current_node A 0 B C"
      },
      {
        "index": 50,
        "text": "AVL: Example 50/154 delete(32) Update its BF A= current_node Determin B Determine C Determine the rotation -1 78 62 50 Current_node A 0 B C"
      },
      {
        "index": 51,
        "text": "AVL: Example 51/154 delete(32) Update its BF A= current_node Determin B Determine C Perform the rotation -1 78 62 A 0 B C 0"
      },
      {
        "index": 52,
        "text": "AVL: Example 52/154 delete(32) Update its BF A= current_node Determin B Determine C Perform the rotation Update BFs of A,B,C -1 78 62 A 0 B C 1"
      },
      {
        "index": 53,
        "text": "AVL: Example 53/154 delete(32) Update its BF A= current_node Determin B Determine C Perform the rotation Update BFs of A,B,C Repeat from parent of current_node until we reach NULL! -1 78 62 A 0 B C 1 44 was root and its parent was Null, so we are done!"
      },
      {
        "index": 54,
        "text": "AVL: Insert/ DElete 54/154 AVL.Delete 1. Delete node x as usual. 2. Set current_node = x.parent. 3. While current_node \u2260 NULL: a. Update height and balance factor of current_node. b. If current_node is unbalanced: Determine A,B,C and perform rotation Update heights and balance factors after rotation. Set current_node = current_node.parent. AVL.Insert 1. Insert node x as usual. 2. On the path from x to the root, update the balance factors to find the first unbalance node (A). 3. Determine B and C and perform rotation. 4. Update the heights and balance factors of nodes A, B, and C. Continue updating the heights and balance factors on the path from node A up to the root."
      },
      {
        "index": 55,
        "text": "Red-Black Tree Red-black tree is a binary search tree that satisfies the following properties: Every node is either red or black. The root is black Every external node is black. Both children of a red node are black. For each node, all paths from the node to its descendant leaves (nil nodes) contain the same number of black nodes. 55/154"
      },
      {
        "index": 56,
        "text": "Red-Black Tree 56/154 Every node is either red or black. The root is black Every external node is black. Both children of a red node are black. For each node, all paths from the node to its nil nodes contain the same number of black nodes."
      },
      {
        "index": 57,
        "text": "Red-Black Tree 57/154 Every node is either red or black. The root is black Every external node is black. Both children of a red node are black. For each node, all paths from the node to its nil nodes contain the same number of black nodes. Black height of node 10 is 2"
      },
      {
        "index": 58,
        "text": "Red-Black Tree 58/154 Every node is either red or black. The root is black Every external node is black. Both children of a red node are black. For each node, all paths from the node to its nil nodes contain the same number of black nodes. Black height of node 3 is 1"
      },
      {
        "index": 59,
        "text": "59/154 54/89 Black height of RBT Black height of root is 3 12"
      },
      {
        "index": 60,
        "text": "60/154 \u201cBlack height\u201d violation! 54/89 Violations!"
      },
      {
        "index": 61,
        "text": "61/154 \u201cDouble red\u201d violation! 54/89 Violations!"
      },
      {
        "index": 62,
        "text": "Red-Black Tree 62/154"
      },
      {
        "index": 63,
        "text": "Insertion Insert the new key as usual Paint the new node. If tree is not a RBT, perform rotations and/or recolorings! 63/154"
      },
      {
        "index": 64,
        "text": "Insertion Insert the new key as usual If the new node is the root, color it black and we are done! Otherwise color it red. If its parent is black, nothing else needs to be done, we are done! Otherwise, that means a \u201cdouble red\u201d violation of red-black tree rules, which needs to be fixed. 64/154"
      },
      {
        "index": 65,
        "text": "Insertion: Example 65/154 Insert 12"
      },
      {
        "index": 66,
        "text": "Insertion: Example 66/154 Insert 12"
      },
      {
        "index": 67,
        "text": "Insertion: Example 67/154 Insert 12 12 If its parent is black, we are done."
      },
      {
        "index": 68,
        "text": "Insertion: Example 68/154 Insert 50"
      },
      {
        "index": 69,
        "text": "Insertion: Example 69/154 Insert 50"
      },
      {
        "index": 70,
        "text": "Insertion: Example 70/154 Insert 50 50 If its parent is red, rebalance!"
      },
      {
        "index": 71,
        "text": "Rebalancing RBT after insertion 71/154 G Grandparent of x U Uncle of x P X Parent of x"
      },
      {
        "index": 72,
        "text": "Insert 72/154 Uncle Red Black Invert the colors of P,G,U Start over with G Triangle Line X-P-G Change the colors of P, G Perform a rotation at G Perform a rotation at P X=P"
      },
      {
        "index": 73,
        "text": "Rebalancing RBT after insertion 73/154 G U P X What color is the grandparent?"
      },
      {
        "index": 74,
        "text": "Rebalancing RBT after insertion 74/154 G U P X"
      },
      {
        "index": 75,
        "text": "Rebalancing RBT after insertion: two cases 75/154 G U P X G U P X Uncle of x Uncle of x"
      },
      {
        "index": 76,
        "text": "Rebalancing 76/154 1. Uncle of x is red 2. Uncle of x is black"
      },
      {
        "index": 77,
        "text": "uncle is red 77/154 P U G P U G Change the colors of P,G,U: Black height does not change. Step 1 may form double-red if parent of G is red. So, we start over with G as a newly-red node."
      },
      {
        "index": 78,
        "text": "uncle is red 78/154 P U G P U G Change the colors of P,G,U: Black height does not change. Step 1 may form double-red if parent of G is red. So, we start over with G as a newly-red node. New node"
      },
      {
        "index": 79,
        "text": "uncle is black : Triangle 79/154 P U G Transform triangle case to the line case!"
      },
      {
        "index": 80,
        "text": "uncle is black : Triangle 80/154 P U G Perform a rotation on the parent of x: If parent is a left child: Left rotation is needed, otherwise, right rotation Since both x and its parent are red, so rotation won't affect the black height."
      },
      {
        "index": 81,
        "text": "uncle is black : Triangle 81/154 P U G P U G U G x P rotation on the parent to transform to line (here left rotation)"
      },
      {
        "index": 82,
        "text": "uncle is black : Triangle 82/154 P U G P U B U G x P rotation on the parent New node"
      },
      {
        "index": 83,
        "text": "uncle is black : line 83/154 P U G"
      },
      {
        "index": 84,
        "text": "uncle is black : line 84/154 P U G Change the colors of parent and grandparent"
      },
      {
        "index": 85,
        "text": "uncle is black : line 85/154 P U G P U G Change the colors of parent and grandparent perform a rotation at the grandparent to rebalance"
      },
      {
        "index": 86,
        "text": "uncle is black : line 86/154 P U G P U G x G P U perform a rotation at the grandparent to rebalance Change the colors of parent and grandparent"
      },
      {
        "index": 87,
        "text": "Insert 87/154 Uncle Red Black Invert the colors of P,G,U Start over with G Triangle Line X-P-G Change the colors of P, G Perform a rotation at G Perform a rotation at P X=P"
      },
      {
        "index": 88,
        "text": "Insertion: Example 88/154 Insert 20"
      },
      {
        "index": 89,
        "text": "Insertion: Example 89/154 Insert 20"
      },
      {
        "index": 90,
        "text": "Insertion: Example 90/154 Insert 20 8 20 it is not a RB tree because 15 has a red child"
      },
      {
        "index": 91,
        "text": "Insertion: Example 91/154 x Insert 20 8 20"
      },
      {
        "index": 92,
        "text": "Insert 92/154 Uncle Red Black Invert the colors of P,G,U Start over with G Triangle Line X-P-G Change the colors of P, G Perform a rotation at G Perform a rotation at P X=P"
      },
      {
        "index": 93,
        "text": "Insertion: Example 93/154 Insert 20 8 20 x"
      },
      {
        "index": 94,
        "text": "Insertion: Example 94/154 Insert 20 8 20"
      },
      {
        "index": 95,
        "text": "Insertion: Example 95/154 Insert 20 8 20 x"
      },
      {
        "index": 96,
        "text": "Insert 96/154 Uncle Red Black Invert the colors of P,G,U Start over with G Triangle Line X-P-G Change the colors of P, G Perform a rotation at G Perform a rotation at P X=P"
      },
      {
        "index": 97,
        "text": "Insertion: Example 97/154 x Uncle is black Insert 20 8 20 Triangle: Transform to line Left rotation at parent of x Start over with p"
      },
      {
        "index": 98,
        "text": "Insertion: Example 98/154 Uncle is black 33 53 61 41 21 Insert 20 Triangle: Transform to line Left rotation at parent of x Start over with p 11 15 8 20 13 x 31"
      },
      {
        "index": 99,
        "text": "Insertion: Example 99/154 33 53 61 41 21 Insert 20 11 15 8 20 13 x 31 Uncle is black Line"
      },
      {
        "index": 100,
        "text": "Insert 100/154 Uncle Red Black Invert the colors of P,G,U Start over with G Triangle Line X-P-G Change the colors of P, G Perform a rotation at G Perform a rotation at P X=P"
      },
      {
        "index": 101,
        "text": "Insertion: Example 101/154 33 53 61 41 21 Insert 20 11 15 8 20 13 x 31 Uncle is black Line Change the colors of G and P"
      },
      {
        "index": 102,
        "text": "Insertion: Example 102/154 33 53 61 41 21 Insert 20 11 15 8 20 13 x 31 Uncle is black Line Change the colors of G and P Do a right rotation at G: 33"
      },
      {
        "index": 103,
        "text": "Insertion: Example 103/154 21 Insert 20 Uncle is black Line color the parent black and the grandparent red Do a right rotation at the grandparent: 33"
      },
      {
        "index": 104,
        "text": "Pseudocode Perform standard BST insertion and set the color of the newly inserted node (denoted by x) to RED. If x is the root, change the color of x to BLACK. while x.parent.color == Red: a) if x.uncle.color == RED: (i) x.parent.color=BLACK , x.uncle.color=BLACK, x.grandparent.color=RED. (ii) x = x.grandparent. b) elif x.uncle.color==BLACK, there are four possible cases: Line: Swap the colors of x.parent and x.grandparent, perform a right rotation at the grandparent Triangle: Perform a left rotation at x.parent, x=x.parent Line: Swap the colors of x.parent and x.grandparent, perform a left rotation at the grandparent Triangle: Perform a right rotation at x.parent, x=x.parent root.color=BLACK 104/154"
      },
      {
        "index": 105,
        "text": "Removal Note that when we perform standard delete operation in BST, there are three cases for the node that should be deleted : It has no children It has only one child It has two children In each case, we always end up deleting a node that is either a leaf or has only one child. This is clear for cases 1 and 2. In case 3, we copy the data (not the color!) of the smallest successor on the right to the node that should be deleted, and then we delete that successor, which is either a leaf or has only one child (see figure). 105/154"
      },
      {
        "index": 106,
        "text": "1. No children 106/154 Should be deleted Delete(28)"
      },
      {
        "index": 107,
        "text": "2. One child 107/154 Should be deleted Delete(18)"
      },
      {
        "index": 108,
        "text": "3. Two children 108/154 Physically should be deleted 55 20 63 65 70 60 Delete(55) 60 20 63 65 70"
      },
      {
        "index": 109,
        "text": "Removal Let x be the node that is to be physically deleted. If x is red, then nothing else needs to be done. If x is black and has a single red child, then we turn the single child to black and we are done. Otherwise, deletion of a black node causes a shortage in the number of black nodes, which needs to be fixed. 109/154"
      },
      {
        "index": 110,
        "text": "Removal Let x be the node that is to be physically deleted. If x is red, then nothing else needs to be done. If x is black and has a single red child, then we turn the single child to black and we are done. 110/154"
      },
      {
        "index": 111,
        "text": "Removal Let x be the node that is to be physically deleted. If x is red, then nothing else needs to be done. If x is black and has a single red child, then we turn the single child to black and we are done. 111/154"
      },
      {
        "index": 112,
        "text": "Removal Let x be the node that is to be physically deleted. If x is red, then nothing else needs to be done. If x is black and has a single red child, then we turn the single child to black and we are done. Otherwise, deletion of a black node causes a shortage in the number of black nodes, which needs to be fixed. 112/154"
      },
      {
        "index": 113,
        "text": "Deletion: Example 1 113/154 Delete 41 If x is red, then nothing else needs to be done."
      },
      {
        "index": 114,
        "text": "Deletion: Example 1 114/154 Delete 41"
      },
      {
        "index": 115,
        "text": "Deletion: Example 2 115/154 Delete 53 If x is black and has a single red child, then we turn the single child to black and we are done."
      },
      {
        "index": 116,
        "text": "Deletion: Example 2 116/154 Delete 53 If x is black and has a single red child, then we turn the single child to black and we are done."
      },
      {
        "index": 117,
        "text": "Deletion: Example 2 117/154 Delete 53 If x is black and has a single red child, then we turn the single child to black and we are done."
      },
      {
        "index": 118,
        "text": "Deletion: Example 3 118/154 Delete 11 If x is black and does not have a red child: shortage in the number of black nodes, which needs to be fixed."
      },
      {
        "index": 119,
        "text": "Deletion: Example 3 119/154 Delete 11 If x is black and does not have a red child: shortage in the number of black nodes, which needs to be fixed."
      },
      {
        "index": 120,
        "text": "Removal: x is right child 120/154 Suppose \ud835\udc65 is the right-child of its parent. (The case that it is the left child is mirror image.)"
      },
      {
        "index": 121,
        "text": "Removal: Cases 121/154 x Sibling Sibling Red Black rotation recoloring red left both black children red right red black parent rotation recoloring rotation recoloring recoloring recoloring"
      },
      {
        "index": 122,
        "text": "Removal 1: sibling is red 122/154"
      },
      {
        "index": 123,
        "text": "Removal 1: sibling is red 123/154"
      },
      {
        "index": 124,
        "text": "Removal 1: sibling is red 124/154 Right rotation at p"
      },
      {
        "index": 125,
        "text": "Removal 1: sibling is red 125/154 Change the colors of p and s"
      },
      {
        "index": 126,
        "text": "Removal 2: sibling is Black with a red left child 126/154"
      },
      {
        "index": 127,
        "text": "Removal 2: sibling is Black with a Red left child 127/154 1. Right rotation at p"
      },
      {
        "index": 128,
        "text": "Removal 2: sibling is Black with a red left Child 128/154 2. s keeps the original color of p Final result"
      },
      {
        "index": 129,
        "text": "Removal 3: sibling is Black with a red right child 129/154"
      },
      {
        "index": 130,
        "text": "Removal 3: sibling is Black with a red right child 130/154"
      },
      {
        "index": 131,
        "text": "Removal 3: sibling is Black with a red right child 131/154"
      },
      {
        "index": 132,
        "text": "Removal 3: sibling is Black with a red right child 132/154 1. Left Right rotation at p"
      },
      {
        "index": 133,
        "text": "Removal 3: sibling is Black with a red right child 133/154 Final result"
      },
      {
        "index": 134,
        "text": "Removal 4: sibling is Black with two black children 134/154"
      },
      {
        "index": 135,
        "text": "Removal 4: sibling is Black with two black children 135/154 Case A Case B"
      },
      {
        "index": 136,
        "text": "Removal 4: sibling is Black with two black children-A 136/154 Final result"
      },
      {
        "index": 137,
        "text": "Removal 4: sibling is Black with two black children-B 137/154 Continue fixing from p"
      },
      {
        "index": 138,
        "text": "Removal: Cases 138/154 p x l r s Sibling - If x is red, we are done! - If x is black with a red child, recolor the child and we are done."
      },
      {
        "index": 139,
        "text": "Example 139/154 70 13 98 93 90 85 75 88 68 65 63 60 43 50 55 48 20 30 p s x"
      },
      {
        "index": 140,
        "text": "Removal: Cases 140/154"
      },
      {
        "index": 141,
        "text": "Removal: Cases 141/154"
      },
      {
        "index": 142,
        "text": "Example 142/154 70 13 98 93 90 85 75 88 68 65 63 60 43 50 55 48 20 30 p s x"
      },
      {
        "index": 143,
        "text": "Example 143/154 70 13 98 93 90 85 75 88 65 63 60 43 50 55 48 20 30 p s"
      },
      {
        "index": 144,
        "text": "Example 144/154 70 13 98 93 90 85 75 88 65 63 60 43 50 55 48 20 30 p s"
      },
      {
        "index": 145,
        "text": "Example 145/154 70 13 98 93 90 85 75 88 65 63 60 43 50 55 48 20 30 new p new s new x new l"
      },
      {
        "index": 146,
        "text": "Removal: Cases 146/154"
      },
      {
        "index": 147,
        "text": "Removal: Cases 147/154"
      },
      {
        "index": 148,
        "text": "Example 148/154 70 13 98 93 90 85 75 88 65 63 60 43 50 55 48 20 30 new p new s new x new l Right rotation at p"
      },
      {
        "index": 149,
        "text": "Example 149/154 70 13 98 93 90 85 75 88 60 63 43 20 50 55 48 30 new s new l new p 65 new x"
      },
      {
        "index": 150,
        "text": "Example 150/154 70 13 98 93 90 85 75 88 60 63 43 20 50 55 48 30 new s new l new p 65 new x"
      },
      {
        "index": 151,
        "text": "Application: Firewall Rule Matching with Red-Black Trees A firewall has a list of rules like: Allow or block certain IP addresses or IP ranges. Example: Block all IPs from 192.168.0.0 to 192.168.0.255. Challenge: These rules are often stored as ranges, and new rules can be added, removed, or updated. When a packet comes in, the firewall must quickly find if its IP matches any rule. 151/154"
      },
      {
        "index": 152,
        "text": "Application: Firewall Rule Matching with Red-Black Trees 152/154 If the IP address is A.B.C.D, its 32-bit integer value is:"
      },
      {
        "index": 153,
        "text": "Application: Firewall Rule Matching with Red-Black Trees 153/154"
      },
      {
        "index": 154,
        "text": "Any Question?? Have a nice day! 154/154 Thank you for Your attention!"
      }
    ]
  },
  {
    "file": "8-Graphs.pptx",
    "type": "pptx",
    "slides": [
      {
        "index": 1,
        "text": "Graph Traversal Techniques Marzieh Eskandari NJIT 1/110"
      },
      {
        "index": 2,
        "text": "What is a Graph? 2/110 v1 v2 v3 v4 v5 G=(E,V)"
      },
      {
        "index": 3,
        "text": "What is a Graph? 3/110 v1 v2 v3 v4 v5 G=(E,V)"
      },
      {
        "index": 4,
        "text": "What is a Graph? 4/110 v1 v2 v3 v4 v5 G=(E,V)"
      },
      {
        "index": 5,
        "text": "Degree in an undirected graph 5/110 v1 v2 v3 v4 v5 G=(E,V) 2 3 4 2 3"
      },
      {
        "index": 6,
        "text": "Degree in a directed graph 6/110 v1 v2 v3 v4 v5 G=(E,V) Indegree of a node: the number of incoming edges Outdegree of a node: the number of outgoing edges 1 1 4 0 1 1 2 0 2 2"
      },
      {
        "index": 7,
        "text": "Adjacency Matrix Representation 7/110 v1 v2 v3 v4 v5 G W Undirected Unweighted"
      },
      {
        "index": 8,
        "text": "Adjacency Matrix Representation 8/110 v1 v2 v3 v4 v5 3 6 8 10 14 5 11 G W Undirected Weighted"
      },
      {
        "index": 9,
        "text": "Adjacency Matrix 9/110 A B C D F G E G W Directed Unweighted"
      },
      {
        "index": 10,
        "text": "Adjacency Matrix 10/110 A D C E G B 1 1 5 9 3 2 4 2 3 3 W Directed Weighted"
      },
      {
        "index": 11,
        "text": "Adjacency List Structure 11/110 A B C D F G E G B C D E E F G E A F"
      },
      {
        "index": 12,
        "text": "Graph: Traversal 12/110 A B C D F G E G"
      },
      {
        "index": 13,
        "text": "Traversing a Graph? 13/110 A B C D F G E G"
      },
      {
        "index": 14,
        "text": "Traversing a Graph? 14/110 Depth-First Search: DFS search deeper whenever possible Breadth-First Search: BFS search in breadth first manner whenever possible ABCD ADBC A B D C NOT Unique!"
      },
      {
        "index": 15,
        "text": "Traversing a Graph? 15/110 Depth-First Search: DFS search deeper whenever possible Breadth-First Search: BFS search in breadth first manner whenever possible ABCD, ABDC, ADCB, ADBC, ABDC A B D C NOT Unique!"
      },
      {
        "index": 16,
        "text": "Depth-First Search 16/110 A B C D F G E A"
      },
      {
        "index": 17,
        "text": "Depth-First Search 17/110 A B C D F G E A B"
      },
      {
        "index": 18,
        "text": "Depth-First Search 18/110 A B C D F G E A B"
      },
      {
        "index": 19,
        "text": "Depth-First Search 19/110 A B C D F G E A B D"
      },
      {
        "index": 20,
        "text": "Depth-First Search 20/110 A B C D F G E A B D E C F G"
      },
      {
        "index": 21,
        "text": "Depth-First Search 21/110 A B C D F G E S"
      },
      {
        "index": 22,
        "text": "Depth-First Search 22/110 A B C D F G E S"
      },
      {
        "index": 23,
        "text": "Depth-First Search 23/110 A B C D F G E S"
      },
      {
        "index": 24,
        "text": "Depth-First Search 24/110 A B C D F G E S"
      },
      {
        "index": 25,
        "text": "Depth-First Search 25/110 A B C D F G E S"
      },
      {
        "index": 26,
        "text": "Depth-First Search 26/110 A B C D F G E S"
      },
      {
        "index": 27,
        "text": "Depth-First Search 27/110 A B C D F G E S"
      },
      {
        "index": 28,
        "text": "Depth-First Search 28/110 A B C D F G E S"
      },
      {
        "index": 29,
        "text": "Depth-First Search 29/110 A B C D F G E S"
      },
      {
        "index": 30,
        "text": "Depth-First Search 30/110 A B C D F G E S"
      },
      {
        "index": 31,
        "text": "Depth-First Search 31/110 A B C D F G E S"
      },
      {
        "index": 32,
        "text": "Depth-First Search 32/110 A B C D F G E S"
      },
      {
        "index": 33,
        "text": "DFS: Algorithm and Time Complexity 33/110 DFS(START) Stack S Mark all nodes as unchecked S.push(START) Mark START as checked while S is not empty do v \u2190 S.pop() Print v for each neighbor w of v do if w is unchecked then S.push(w) Mark w as checked"
      },
      {
        "index": 34,
        "text": "Breadth-First Search 34/110 A B C D F G E Q"
      },
      {
        "index": 35,
        "text": "Breadth-First Search 35/110 A B C D F G E Q"
      },
      {
        "index": 36,
        "text": "Breadth-First Search 36/110 A B C D F G E Q"
      },
      {
        "index": 37,
        "text": "Breadth-First Search 37/110 A B C D F G E Q"
      },
      {
        "index": 38,
        "text": "Breadth-First Search 38/110 A B C D F G E Q"
      },
      {
        "index": 39,
        "text": "Breadth-First Search 39/110 A B C D F G E Q"
      },
      {
        "index": 40,
        "text": "Breadth-First Search 40/110 A B C D F G E Q"
      },
      {
        "index": 41,
        "text": "Breadth-First Search 41/110 A B C D F G E Q"
      },
      {
        "index": 42,
        "text": "Breadth-First Search 42/110 A B C D F G E Q"
      },
      {
        "index": 43,
        "text": "Breadth-First Search 43/110 A B C D F G E Q"
      },
      {
        "index": 44,
        "text": "Breadth-First Search 44/110 A B C D F G E Q"
      },
      {
        "index": 45,
        "text": "Breadth-First Search 45/110 A B C D F G E Q Q"
      },
      {
        "index": 46,
        "text": "BFS: Algorithm and Time Complexity 46/110 BFS(START) Queue Q Mark all nodes as unchecked Q.add(START) Mark START as checked while Q is not empty do v \u2190 Q.delete() Print v for each neighbor w of v do if w is unchecked then Q.add(w) Mark w as checked"
      },
      {
        "index": 47,
        "text": "Binary Tree 47/110 A B C D F G J K I H E T Root"
      },
      {
        "index": 48,
        "text": "Traversing a Tree? 48/110 Depth-First Search: DFS search deeper whenever possible Breadth-First Search: BFS search in breadth first manner whenever possible A B C ABDC ABCD D"
      },
      {
        "index": 49,
        "text": "Depth-First Search 49/110 A B C D F G J K I H E S"
      },
      {
        "index": 50,
        "text": "Depth-First Search 50/110 A B C D F G J K I H E S"
      },
      {
        "index": 51,
        "text": "Depth-First Search 51/110 A B C D F G J K I H E S"
      },
      {
        "index": 52,
        "text": "Depth-First Search 52/110 A B C D F G J K I H E S"
      },
      {
        "index": 53,
        "text": "Depth-First Search 53/110 A B C D F G J K I H E S"
      },
      {
        "index": 54,
        "text": "Depth-First Search 54/110 A B C D F G J K I H E S"
      },
      {
        "index": 55,
        "text": "Depth-First Search 55/110 A B C D F G J K I H E S"
      },
      {
        "index": 56,
        "text": "Depth-First Search 56/110 A B C D F G J K I H E S"
      },
      {
        "index": 57,
        "text": "Depth-First Search 57/110 A B C D F G J K I H E S"
      },
      {
        "index": 58,
        "text": "Depth-First Search 58/110 A B C D F G J K I H E S"
      },
      {
        "index": 59,
        "text": "Depth-First Search 59/110 A B C D F G J K I H E S"
      },
      {
        "index": 60,
        "text": "Depth-First Search 60/110 A B C D F G J K I H E S"
      },
      {
        "index": 61,
        "text": "Depth-First Search 61/110 A B C D F G J K I H E S"
      },
      {
        "index": 62,
        "text": "Depth-First Search 62/110 A B C D F G J K I H E S"
      },
      {
        "index": 63,
        "text": "Depth-First Search 63/110 A B C D F G J K I H E S"
      },
      {
        "index": 64,
        "text": "Depth-First Search 64/110 A B C D F G J K I H E S"
      },
      {
        "index": 65,
        "text": "Depth-First Search 65/110 A B C D F G J K I H E S"
      },
      {
        "index": 66,
        "text": "Depth-First Search 66/110 A B C D F G J K I H E S"
      },
      {
        "index": 67,
        "text": "Depth-First Search 67/110 A B C D F G J K I H E S K"
      },
      {
        "index": 68,
        "text": "DFS: Algorithm and Time Complexity 68/110 DFS(Root) Stack S S.push(Root) while S is not empty do v \u2190 S.pop() Print v for each child w of v do S.push(w)"
      },
      {
        "index": 69,
        "text": "Breadth-First Search 69/110 A B C D F G J K I H E Q"
      },
      {
        "index": 70,
        "text": "Breadth-First Search 70/110 A B C D F G J K I H E Q"
      },
      {
        "index": 71,
        "text": "Breadth-First Search 71/110 A B C D F G J K I H E Q"
      },
      {
        "index": 72,
        "text": "Breadth-First Search 72/110 A B C D F G J K I H E Q"
      },
      {
        "index": 73,
        "text": "Breadth-First Search 73/110 A B C D F G J K I H E Q"
      },
      {
        "index": 74,
        "text": "Breadth-First Search 74/110 A B C D F G J K I H E Q"
      },
      {
        "index": 75,
        "text": "Breadth-First Search 75/110 A B C D F G J K I H E Q"
      },
      {
        "index": 76,
        "text": "Breadth-First Search 76/110 A B C D F G J K I H E Q"
      },
      {
        "index": 77,
        "text": "Breadth-First Search 77/110 A B C D F G J K I H E Q"
      },
      {
        "index": 78,
        "text": "Breadth-First Search 78/110 A B C D F G J K I H E Q"
      },
      {
        "index": 79,
        "text": "Breadth-First Search 79/110 A B C D F G J K I H E Q"
      },
      {
        "index": 80,
        "text": "Breadth-First Search 80/110 A B C D F G J K I H E Q"
      },
      {
        "index": 81,
        "text": "BFS: Algorithm and Time Complexity 81/110 BFS(Root) Queue Q Q.add(Root) while Q is not empty do v \u2190 Q.delete() Print v for each child w of v do Q.add(w)"
      },
      {
        "index": 82,
        "text": "Class work You are managing a network of n communication towers in a large rural region. There are some control centers, each based at one of the towers. Your goal is to ensure that every tower in the region is connected to at least one control center. Obviously, the tower that has a control center is connected to its own control center. 107/110"
      },
      {
        "index": 83,
        "text": "Class work You are managing a network of n communication towers in a large rural region. There are some control centers, each based at one of the towers. Your goal is to ensure that every tower in the region is connected to at least one control center. Obviously, the tower that has a control center is connected to its own control center. 108/110"
      },
      {
        "index": 84,
        "text": "Class work 109/110 COVER(G, n, C): # G: adjacency list of the graph with n nodes labeled 1..n # C: set of control centers visited \u2190 empty set for each c in C: if c not in visited: DFS(c,visited) if size(visited) = n: return TRUE else: return FALSE DFS(u,visited): visited.add(u) for each v in G[u]: if v not in visited: DFS(v,visited)"
      },
      {
        "index": 85,
        "text": "Any Question?? Have a nice day! 110/110"
      }
    ]
  },
  {
    "file": "9-Divide and Conquer-class work.pptx",
    "type": "pptx",
    "slides": [
      {
        "index": 1,
        "text": "D&C Class Work 1/34"
      },
      {
        "index": 2,
        "text": "White-Black Pair 2/34"
      },
      {
        "index": 3,
        "text": "White-Black Pair 3/34"
      },
      {
        "index": 4,
        "text": "White-Black Pair 4/34 A white cell followed by a black cell in this array is called a white-black pair. You may point to any cell and ask a question \u201cWhat is its color?\u201d Your goal is to find a white-black pair by asking the minimum number of questions."
      },
      {
        "index": 5,
        "text": "White-Black Pair 5/34"
      },
      {
        "index": 6,
        "text": "White-Black Pair 6/34"
      },
      {
        "index": 7,
        "text": "White-Black Pair 7/34"
      },
      {
        "index": 8,
        "text": "White-Black Pair 8/34"
      },
      {
        "index": 9,
        "text": "White-Black Pair 9/34"
      },
      {
        "index": 10,
        "text": "White-Black Pair 10/34"
      },
      {
        "index": 11,
        "text": "White-Black Pair 11/34"
      },
      {
        "index": 12,
        "text": "White-Black Pair 12/34"
      },
      {
        "index": 13,
        "text": "White-Black Pair 13/34"
      },
      {
        "index": 14,
        "text": "Pseudocode 13/34 FUNCTION FindPair(A, left, right): IF right == left + 1: RETURN (left, right) mid = (left + right) // 2 IF A[mid]) == \u2018white\u2019: RETURN FindPair(A, mid, right) ELSE: RETURN FindPair(A, left, mid)"
      },
      {
        "index": 15,
        "text": "Finding a Peak 14/34 An element of a sequence is called a peak if it is greater than all its neighbors."
      },
      {
        "index": 16,
        "text": "Finding a Peak 15/34 Find a peak by revealing the minimum number of elements of this sequence. Note that any sequence contains a peak: the largest element is a peak."
      },
      {
        "index": 17,
        "text": "Finding a Peak 16/34"
      },
      {
        "index": 18,
        "text": "Finding a Peak 17/34 left right left>right: find the peak at the left part left<right: find the peak at the right part"
      },
      {
        "index": 19,
        "text": "Finding a Peak 19/34"
      },
      {
        "index": 20,
        "text": "Finding a Peak 20/34"
      },
      {
        "index": 21,
        "text": "Finding a Peak 21/34"
      },
      {
        "index": 22,
        "text": "Finding a Peak 22/34"
      },
      {
        "index": 23,
        "text": "Finding a Peak 23/34"
      },
      {
        "index": 24,
        "text": "Finding a Peak 24/34"
      },
      {
        "index": 25,
        "text": "Finding a Peak 25/34"
      },
      {
        "index": 26,
        "text": "Finding a Peak 26/34"
      },
      {
        "index": 27,
        "text": "Pseudocode 27 FUNCTION FindPeak(A, left, right): IF left == right: RETURN left mid = (left + right) // 2 // Reveal A[mid] and A[mid+1] IF A[mid] < A[mid + 1]: RETURN FindPeak(A, mid + 1, right) ELSE: RETURN FindPeak(A, left, mid)"
      },
      {
        "index": 28,
        "text": "Number of Inversions 27/34"
      },
      {
        "index": 29,
        "text": "Number of Inversions 28/34"
      },
      {
        "index": 30,
        "text": "Number of Inversions 29/34"
      },
      {
        "index": 31,
        "text": "Number of Inversions 30/34"
      },
      {
        "index": 32,
        "text": "Number of Inversions 31/34 count=0 1 2 6 7 8 9 13 17 i j count+=mid-i+1=2 count+=mid-i+1=3 count+=mid-i+1=4"
      },
      {
        "index": 33,
        "text": "32/34 17 32 12 19 45 16 22 26 17 32 12 19 17 32 12 19 17 32 A L1 L2 R2 L3 R3 45 16 22 26 45 16 22 26 45 16 22 26 R1 19 12 L4 R5"
      },
      {
        "index": 34,
        "text": "33/34 17 12 19 32 32 17 12 19 17 32 A L1 L2 R2 L3 R3 16 45 22 26 45 16 22 26 16 22 26 45 R1 19 12 L4 R5 +1 +2+1 +1 +1+1 +3+1+1 total=12 inversions"
      },
      {
        "index": 35,
        "text": "35 FUNCTION CountInversions(A, left, right): IF left >= right: RETURN 0 mid = (left + right) / 2 inv_left = CountInversions(A, left, mid) inv_right = CountInversions(A, mid + 1, right) inv_cross = MergeAndCount(A, left, mid, right) RETURN inv_left + inv_right + inv_cross"
      },
      {
        "index": 36,
        "text": "36 FUNCTION MergeAndCount(A, left, mid, right): i,j = left, mid + 1 temp = empty array inv_count = 0 WHILE i <= mid AND j <= right: IF A[i] <= A[j]: append A[i] to temp i = i + 1 ELSE: append A[j] to temp inv_count = inv_count + (mid - i + 1) j = j + 1 WHILE i <= mid: append A[i] to temp i = i + 1 WHILE j <= right: append A[j] to temp j = j + 1 copy temp back into A[left ... right] RETURN inv_count"
      },
      {
        "index": 37,
        "text": "37 FUNCTION MergeAndCount(A, left, mid, right): i,j = left, mid + 1 temp = empty array inv_count = 0 WHILE i <= mid AND j <= right: IF A[i] <= A[j]: append A[i] to temp i = i + 1 ELSE: append A[j] to temp inv_count = inv_count + (mid - i + 1) j = j + 1 WHILE i <= mid: append A[i] to temp i = i + 1 WHILE j <= right: append A[j] to temp j = j + 1 copy temp back into A[left ... right] RETURN inv_count"
      },
      {
        "index": 38,
        "text": "Any Question?? Have a nice day! 34/34"
      }
    ]
  },
  {
    "file": "9-Divide and Conquer.pptx",
    "type": "pptx",
    "slides": [
      {
        "index": 1,
        "text": "Divide and Conquer Marzieh Eskandari NJIT 1/92"
      },
      {
        "index": 2,
        "text": "Guess a number! Guess an integer 1 \u2264 x \u2264 8 by asking at most three questions! 2/92 x < 5 1 x < 3 x < 2 x < 4 2 3 4 5 x < 7 x < 6 x < 8 6 7 8 yes No yes No yes No yes No yes No yes No yes No"
      },
      {
        "index": 3,
        "text": "Guess a number! 3/92 x<9?? x<5?? x<7?? x<8??"
      },
      {
        "index": 4,
        "text": "Introduction 4/92 Napoleon"
      },
      {
        "index": 5,
        "text": "Definition 5/92 Divide the problem into a number of subproblems that are smaller instances of the same problem. Conquer the subproblems by solving them recursively. If they are small enough, solve the subproblems as base cases. Combine the solutions to the subproblems into the solution for the original problem."
      },
      {
        "index": 6,
        "text": "Example 1: Quicksort 7/92 Divide the list into two smaller list: less than pivot and greater than pivot. Conquer the subproblems by sorting the sublists recursively. Combine the sorted sublists to obtain the sorted main list."
      },
      {
        "index": 7,
        "text": "Quicksort: Divide 8/92 Divide the list into two smaller list: less than pivot and greater than pivot. < pivot > pivot"
      },
      {
        "index": 8,
        "text": "Example 2: Mergesort 17/92 Divide the list into two equal size sublists. Conquer the subproblems by sorting the lists recursively. Combine(Merge) the sorted lists to obtain the sorted list."
      },
      {
        "index": 9,
        "text": "Mergesort 18/92"
      },
      {
        "index": 10,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 21/92 nxn"
      },
      {
        "index": 11,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 22/92"
      },
      {
        "index": 12,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 23/92 + = 11 2 7 7 10 7 14 16 8 7 11 8 10 11 15 6 5 4 12 10 4 5 9 5 3 9 8 10 10 11 14 6 4 5 9 13 4 1 12 10 15 14 11 6 10 11 15 4 4 12 13 7 8 1 9 13 8 7 0 12 14 11 14 0"
      },
      {
        "index": 13,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 24/92"
      },
      {
        "index": 14,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 25/92"
      },
      {
        "index": 15,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 26/92 x ="
      },
      {
        "index": 16,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 27/92 x ="
      },
      {
        "index": 17,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 28/92 x ="
      },
      {
        "index": 18,
        "text": "Example 3: Matrix Multiplication 29/92 for(i=0;i<n;i++) for(j=0;j<n;j++) { C[i][j]=0; for(k=0;k<n;k++) C[i][j]+=A[i][k]*B[k][j]; }"
      },
      {
        "index": 19,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 30/92 x = ?"
      },
      {
        "index": 20,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 31/92 x ="
      },
      {
        "index": 21,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 32/92 x ="
      },
      {
        "index": 22,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 33/92 x ="
      },
      {
        "index": 23,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 34/92 x ="
      },
      {
        "index": 24,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 35/92"
      },
      {
        "index": 25,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 36/92"
      },
      {
        "index": 26,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 37/92"
      },
      {
        "index": 27,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 38/92"
      },
      {
        "index": 28,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 39/92 x =?"
      },
      {
        "index": 29,
        "text": "Example 3: Strassen\u2019s Matrix Multiplication 40/92 Matrix Strassen(A, B, n): if (n==1) return A*B a, b, c, d = split(A) e, f, g, h = split(B) p1 = Strassen(a, f \u2013 h, n/2) p2 = Strassen(a + b, h, n/2) p3 = Strassen(c + d, e, n/2) p4 = Strassen(d, g - e, n/2) p5 = Strassen(a + d, e + h, n/2) p6 = Strassen(b - d, g + h, n/2) p7 = Strassen(a - c, e + f, n/2) c11 = p5 + p4 - p2 + p6; c12 = p1 + p2 c21 = p3 + p4 c22 = p1 + p5 - p3 - p7 return C"
      },
      {
        "index": 30,
        "text": "41/92 Matrix Strassen(A, B, n) if (n==1) return A*B a, b, c, d = split(A) e, f, g, h = split(B) p1 = Strassen(a, f \u2013 h, n/2) p2 = Strassen(a + b, h, n/2) p3 = Strassen(c + d, e, n/2) p4 = Strassen(d, g - e, n/2) p5 = Strassen(a + d, e + h, n/2) p6 = Strassen(b - d, g + h, n/2) p7 = Strassen(a - c, e + f, n/2) c11 = p5 + p4 - p2 + p6 c12 = p1 + p2 c21 = p3 + p4 c22 = p1 + p5 - p3 - p7 return C"
      },
      {
        "index": 31,
        "text": "Strassen: Time Complexity-Master theorem 42/92"
      },
      {
        "index": 32,
        "text": "Example 4: Large Integer Multiplication 46/92 Andrey Kolmogorov"
      },
      {
        "index": 33,
        "text": "Example 4: Large Integer Multiplication 47/92"
      },
      {
        "index": 34,
        "text": "Example 4: Large Integer Multiplication 48/92 0 carry"
      },
      {
        "index": 35,
        "text": "L.I.M: Summation 49/92 0 0 carry +"
      },
      {
        "index": 36,
        "text": "L.I.M: Summation 50/92 0 0 carry +"
      },
      {
        "index": 37,
        "text": "L.I.M: Summation 51/92 0 0 carry +"
      },
      {
        "index": 38,
        "text": "0 carry L.I.M: Summation 52/92 0 +"
      },
      {
        "index": 39,
        "text": "0 carry 0 carry L.I.M: Summation 53/92 0 +"
      },
      {
        "index": 40,
        "text": "54/92 1 carry + 0"
      },
      {
        "index": 41,
        "text": "0 carry L.I.M: Summation 55/92 + 0"
      },
      {
        "index": 42,
        "text": "0 carry L.I.M: Summation 56/92 + 0"
      },
      {
        "index": 43,
        "text": "L.I.M: Summation 57/92 0 carry + 0"
      },
      {
        "index": 44,
        "text": "L.I.M: Summation 58/92 1 carry + 0"
      },
      {
        "index": 45,
        "text": "L.I.M: Summation 59/92 1 carry + 0"
      },
      {
        "index": 46,
        "text": "L.I.M: Summation 60/92 0 carry + 0"
      },
      {
        "index": 47,
        "text": "L.I.M: Summation 61/92 0 carry + 0"
      },
      {
        "index": 48,
        "text": "L.I.M: Summation 62/92 0 carry + 0"
      },
      {
        "index": 49,
        "text": "Example 4: Large Integer Multiplication 63/92"
      },
      {
        "index": 50,
        "text": "Example 4: Large Integer Multiplication 64/92"
      },
      {
        "index": 51,
        "text": "Example 4: Large Integer Multiplication 65/92"
      },
      {
        "index": 52,
        "text": "Example 4: Large Integer Multiplication 66/92"
      },
      {
        "index": 53,
        "text": "Example 4: Large Integer Multiplication 67/92"
      },
      {
        "index": 54,
        "text": "Example 4: Large Integer Multiplication 68/92"
      },
      {
        "index": 55,
        "text": "Example 4: Large Integer Multiplication 69/92"
      },
      {
        "index": 56,
        "text": "Example 4: Large Integer Multiplication 70/92"
      },
      {
        "index": 57,
        "text": "Example 4: Large Integer Multiplication 71/92 4 Not multiplication"
      },
      {
        "index": 58,
        "text": "Example 4: Large Integer Multiplication 72/92"
      },
      {
        "index": 59,
        "text": "L.I.M: Algorithm 73/92 multiply(u,v) if(u==\u20180\u2019 or v==\u20180\u2019) return \u20180\u2019 n1=u.size() n2=v.size() n=max(n1,n2) if(n<threshold) return str(int(u)*int(v)) m=n/2 x,y=split(u) w,z=split(v) p=multiply(x,w) for(i=0;i<2*m;i++) p=p+\u20190\u2019 t1=multiply(x,z) t2=multiply(y,w) s=sum(t1,t2) for(i=0;i<m;i++) s=s+\u20190\u2019 q=multiply(y,z) return sum(sum(p,s),q)"
      },
      {
        "index": 60,
        "text": "L.I.M: Algorithm 74/92 multiply(u,v) if(u==\u20180\u2019 or v==\u20180\u2019) return \u20180\u2019 n1=u.size() n2=v.size() n=max(n1,n2) if(n<threshold) return str(int(u)*int(v)) m=n/2 x,y=split(u) w,z=split(v) p=multiply(x,w) for(i=0;i<2*m;i++) p=p+\u20190\u2019 t1=multiply(x,z) t2=multiply(y,w) s=sum(t1,t2) for(i=0;i<m;i++) s=s+\u20190\u2019 q=multiply(y,z) return sum(sum(p,s),q)"
      },
      {
        "index": 61,
        "text": "L.I.M: Algorithm 75/92 multiply(u,v) if(u==\u20180\u2019 or v==\u20180\u2019) return \u20180\u2019 n1=u.size() n2=v.size() n=max(n1,n2) if(n<threshold) return str(int(u)*int(v)) m=n/2 x,y=split(u) w,z=split(v) p=multiply(x,w) for(i=0;i<2*m;i++) p=p+\u20190\u2019 t1=multiply(x,z) t2=multiply(y,w) s=sum(t1,t2) for(i=0;i<m;i++) s=s+\u20190\u2019 q=multiply(y,z) return sum(sum(p,s),q)"
      },
      {
        "index": 62,
        "text": "L.I.M: Algorithm 76/92 multiply(u,v) if(u==\u20180\u2019 or v==\u20180\u2019) return \u20180\u2019 n1=u.size() n2=v.size() n=max(n1,n2) if(n<threshold) return str(int(u)*int(v)) m=n/2 x,y=split(u) w,z=split(v) p=multiply(x,w) for(i=0;i<2*m;i++) p=p+\u20190\u2019 t1=multiply(x,z) t2=multiply(y,w) s=sum(t1,t2) for(i=0;i<m;i++) s=s+\u20190\u2019 q=multiply(y,z) return sum(sum(p,s),q)"
      },
      {
        "index": 63,
        "text": "L.I.M: Algorithm 77/92 multiply(u,v) if(u==\u20180\u2019 or v==\u20180\u2019) return \u20180\u2019 n1=u.size() n2=v.size() n=max(n1,n2) if(n<threshold) return str(int(u)*int(v)) m=n/2 x,y=split(u) w,z=split(v) p=multiply(x,w) for(i=0;i<2*m;i++) p=p+\u20190\u2019 t1=multiply(x,z) t2=multiply(y,w) s=sum(t1,t2) for(i=0;i<m;i++) s=s+\u20190\u2019 q=multiply(y,z) return sum(sum(p,s),q)"
      },
      {
        "index": 64,
        "text": "L.I.M: Algorithm 78/92 multiply(u,v) if(u==\u20180\u2019 or v==\u20180\u2019) return \u20180\u2019 n1=u.size() n2=v.size() n=max(n1,n2) if(n<threshold) return str(int(u)*int(v)) m=n/2 x,y=split(u) w,z=split(v) p=multiply(x,w) for(i=0;i<2*m;i++) p=p+\u20190\u2019 t1=multiply(x,z) t2=multiply(y,w) s=sum(t1,t2) for(i=0;i<m;i++) s=s+\u20190\u2019 q=multiply(y,z) return sum(sum(p,s),q)"
      },
      {
        "index": 65,
        "text": "L.I.M: Algorithm 79/92 multiply(u,v) if(u==\u20180\u2019 or v==\u20180\u2019) return \u20180\u2019 n1=u.size() n2=v.size() n=max(n1,n2) if(n<threshold) return str(int(u)*int(v)) m=n/2 x,y=split(u) w,z=split(v) p=multiply(x,w) for(i=0;i<2*m;i++) p=p+\u20190\u2019 t1=multiply(x,z) t2=multiply(y,w) s=sum(t1,t2) for(i=0;i<m;i++) s=s+\u20190\u2019 q=multiply(y,z) return sum(sum(p,s),q)"
      },
      {
        "index": 66,
        "text": "L.I.M: Algorithm 80/92 multiply(u,v) if(u==\u20180\u2019 or v==\u20180\u2019) return \u20180\u2019 n1=u.size() n2=v.size() n=max(n1,n2) if(n<threshold) return str(int(u)*int(v)) m=n/2 x,y=split(u) w,z=split(v) p=multiply(x,w) for(i=0;i<2*m;i++) p=p+\u20190\u2019 t1=multiply(x,z) t2=multiply(y,w) s=sum(t1,t2) for(i=0;i<m;i++) s=s+\u20190\u2019 q=multiply(y,z) return sum(sum(p,s),q)"
      },
      {
        "index": 67,
        "text": "81/92 multiply(array u,v) if(u==\u20180\u2019 or v==\u20180\u2019) return \u20180\u2019 n1=u.size() n2=v.size() n=max(n1,n2) if(n<threshold) return str(int(u)*int(v)) m=n/2 x,y=split(u) w,z=split(v) p=multiply(x,w) for(i=0;i<2*m;i++) p=p+\u20190\u2019 t1=multiply(x,z) t2=multiply(y,w) s=sum(t1,t2) for(i=0;i<m;i++) s=s+\u20190\u2019 q=multiply(y,z) return sum(sum(p,s),q"
      },
      {
        "index": 68,
        "text": "Time Complexity-Master theorem 82/92"
      },
      {
        "index": 69,
        "text": "LIM: Modification 84/92"
      },
      {
        "index": 70,
        "text": "LIM: Modification 85/92"
      },
      {
        "index": 71,
        "text": "LIM: Modification 86/92"
      },
      {
        "index": 72,
        "text": "L.I.M: Algorithm 87/92 multiply(array u,v) if(u==\u20180\u2019 or v==\u20180\u2019) return \u20180\u2019 n1=u.size() n2=v.size() n=max(n1,n2) if(n<threshold) return str(int(u)*int(v)) m=n/2 x,y=split(u) w,z=split(v) p=multiply(x,w) for(i=0;i<2*m;i++) p=p+\u20190\u2019 q=multiply(y,z) s1=sum(x,y) s2=sum(w,z) r=multiply(s1,s2) s=sum(r,-sum(p,q)) for(i=0;i<m;i++) s=s+\u20190\u2019 return sum(sum(p,s),q)"
      },
      {
        "index": 73,
        "text": "88/92 multiply(array u,v) if(u==\u20180\u2019 or v==\u20180\u2019) return \u20180\u2019 n1=u.size() n2=v.size() n=max(n1,n2) if(n<threshold) return str(int(u)*int(v)) m=n/2 x,y=split(u) w,z=split(v) p=multiply(x,w) for(i=0;i<2*m;i++) p=p+\u20190\u2019 q=multiply(y,z) s1=sum(x,y) s2=sum(w,z) r=multiply(s1,s2) s=sum(r,-sum(p,q)) for(i=0;i<m;i++) s=s+\u20190\u2019 return sum(sum(p,s),q"
      },
      {
        "index": 74,
        "text": "Time Complexity-Master theorem 89/92"
      },
      {
        "index": 75,
        "text": "Any Question?? Have a nice day! 92/92"
      }
    ]
  },
  {
    "file": "Graph-practice problems-solution.pdf",
    "type": "pdf",
    "slides": [
      {
        "index": 1,
        "text": "Graph: Practice problems 1. Given an unweighted undirected graph, determine if it is connected. (Return true if there is a path between every pair of nodes. Otherwise, return false.) function isConnected(Graph): // Graph is represented as an adjacency list n = number of vertices in Graph visited = empty set // Start DFS (or BFS) from the first node start = any node in Graph DFS(Graph, start, visited) // After traversal, if all nodes are visited, the graph is connected if size(visited) == n: return true else: return false function DFS(Graph, node, visited): add node to visited for each neighbor in Graph[node]: if neighbor not in visited: DFS(Graph, neighbor, visited) 2. Given a graph, write pseudo code to determine the number of its components. (A component of a graph is a maximal connected subgraph. If the graph is connected, it has only one component) function countComponents(Graph): n = number of vertices in Graph visited = empty set count = 0 for each node in Graph: if node not in visited: // Found a new component count = count + 1 DFS(Graph, node, visited) return count"
      },
      {
        "index": 2,
        "text": "function DFS(Graph, node, visited): add node to visited for each neighbor in Graph[node]: if neighbor not in visited: DFS(Graph, neighbor, visited) 3. You are given an n \u00d7 n grid representing a room. Each cell in the grid can be either open or blocked: \u2022 Room[i][j] = 1 means the cell is open (the robot can move there). \u2022 Room[i][j] = 0 means the cell is blocked (the robot cannot move there). A robot is placed at a random position (s, t) in the grid. The robot can move up, down, left, or right, but only into adjacent cells that are open (i.e., have value 1). There are four exit doors located at the corners of the grid: (0, 0), (0, n\u22121), (n\u22121, 0), and (n\u22121, n\u22121). Your task is to design an algorithm that determines whether the robot can reach at least one of the exit doors from its starting position. Write pseudocode for a function that takes the robot\u2019s starting position (s, t) as input and returns: \u2022 True if the robot can reach any exit door \u2022 False otherwise"
      },
      {
        "index": 3,
        "text": "We need to create a graph G where each node corresponds to a cell (i, j) in the grid. An edge exists between two nodes if the robot can move from one cell to another: the neighbors of (i, j) = {(i+1, j), (i-1, j), (i, j+1), (i, j-1)}. function robot_exit(Room, s, t, n): createGraph(G) // G is an implicit graph based on Room; only cells with Room[i][j] == 1 are nodes start = node(s, t) DFS(G, start) // Check if any of the exit nodes were visited if isVisited(node(0, 0)) or isVisited(node(0, n-1)) or isVisited(node(n-1, 0)) or isVisited(node(n-1, n-1)): return true else: return false Here is the python code: def robot_exit(Room, s, t): n = len(Room) # Step 1: Create the graph G = {} for i in range(n): for j in range(n): if Room[i][j] == 1: # only open cells neighbors = [] for (x, y) in [(i+1,j), (i-1,j), (i,j+1), (i,j-1)]: if 0 <= x < n and 0 <= y < n and Room[x][y] == 1: neighbors.append((x, y)) G[(i, j)] = neighbors # Step 2: DFS to find reachable cells visited = set() def dfs(node): if node in visited: return visited.add(node) for neighbor in G.get(node, []): dfs(neighbor) start = (s, t) if Room[s][t] == 0: return False # start is blocked dfs(start)"
      },
      {
        "index": 4,
        "text": "# Step 3: Check if any exit corner is visited exits = [(0, 0), (0, n-1), (n-1, 0), (n-1, n-1)] for e in exits: if e in visited: return True return False 4.You are given a directed graph where each node is painted either black or white. You are also given a starting node, s, which is white. Your task is to determine whether there exists a path in the graph that starts at s and ends at a different white node (not necessarily adjacent to s). function hasPathToAnotherWhite(Graph, color, s): // Graph: adjacency list representation // color[node] = \"white\" or \"black\" visited = empty set function DFS(node): add node to visited for each neighbor in Graph[node]: if neighbor not in visited: if color[neighbor] == \"white\" and neighbor != s: return true if DFS(neighbor): return true return false return DFS(s)"
      }
    ]
  },
  {
    "file": "karatsuba.pdf",
    "type": "pdf",
    "slides": [
      {
        "index": 1,
        "text": "1. [15 minutes] You have a machine that can only perform multiplication and addition on single-digit numbers. You want to use Karatsuba\u2019s algorithm to multiply two-digit numbers. Karatsuba's formula for multiplying two large integer numbers is: (\ud835\udc65\u00d710(cid:3040) +\ud835\udc66)\u00d7(\ud835\udc67\u00d710(cid:3040) +\ud835\udc61) = \ud835\udc5d\u00d710(cid:2870)(cid:3040) +(\ud835\udc5f\u2212\ud835\udc5d\u2212\ud835\udc5e)\u00d710(cid:3040) +\ud835\udc5e \ud835\udc5d = \ud835\udc65\u00d7\ud835\udc67, \ud835\udc5e = \ud835\udc66\u00d7\ud835\udc61, \ud835\udc5f = (\ud835\udc65+\ud835\udc66)\u00d7(\ud835\udc67+\ud835\udc61) a) How many single-digit multiplications are needed to compute a = 24 \u00d7 35? Explain why. (5 points) b) How many single-digit multiplications are needed to compute b = 56 \u00d7 78? Explain why. (5 points) a) 3 \ud835\udc91 = \ud835\udfd0\u00d7 \ud835\udfd1,\ud835\udc92 = \ud835\udfd2\u00d7\ud835\udfd3,\ud835\udc93 = \ud835\udfd4\u00d7\ud835\udfd6 b) 5 \ud835\udc91 = \ud835\udfd3\u00d7 \ud835\udfd5,\ud835\udc92 = \ud835\udfd4\u00d7\ud835\udfd6,\ud835\udc93 = \ud835\udfcf\ud835\udfcf\u00d7\ud835\udfcf\ud835\udfd3 \u2192 \ud835\udc91 = \ud835\udfcf\u00d7\ud835\udfcf,\ud835\udc92 = \ud835\udfcf\u00d7\ud835\udfd3,\ud835\udc93 = \ud835\udfd0\u00d7\ud835\udfd4: \ud835\udfd1 \ud835\udc8e\ud835\udc96\ud835\udc8d\ud835\udc95\ud835\udc8a\ud835\udc91\ud835\udc8d\ud835\udc84\ud835\udc82\ud835\udc95\ud835\udc8a\ud835\udc8f\ud835\udc94 2+3=5"
      }
    ]
  },
  {
    "file": "practice DC-solution.pptx",
    "type": "pptx",
    "slides": [
      {
        "index": 1,
        "text": "Divide and Conquer: problem set Marzieh Eskandari NJIT 1/17"
      },
      {
        "index": 2,
        "text": "1. You are given an integer array, find its subarray with maximum sum. 2/17 Na\u00efve Approach: Quadratic D&C: O(nlogn) The best approach: linear-time algorithm called Kadane\u2019s Algorithm (Good to know for interviews)."
      },
      {
        "index": 3,
        "text": "Naive Approach: Check all possible subarrays 2/17"
      },
      {
        "index": 4,
        "text": "3/17 D&C Approach: low high Split the array into two halves: For any subarray, the maximum sum is in one of three places: Entirely in the left half Entirely in the right half A crossing subarray (goes through the middle) We compute all three and take the maximum."
      },
      {
        "index": 5,
        "text": "3/17 maxsub(low, mid) maxsub(mid+1, high) maxsub(low,high) middlemaxsub(low, high) [crossing subarray] D&C Approach: low high"
      },
      {
        "index": 6,
        "text": "4/17 maxsub(low, mid) maxsub(mid+1, high) maxsub(low,high) middlemaxsub(low, high) D&C Approach: low high"
      },
      {
        "index": 7,
        "text": "7 maxsub(low, high): if low == high: return low, high, A[low] mid = (low + high) // 2 Lstart, Lend, Lsum = maxsub(low, mid) Rstart, Rend, Rsum = maxsub(mid+1, high) Mstart, Mend, Msum = middlemaxsub(low, high) if Lsum >= Rsum and Lsum >= Msum: return Lstart, Lend, L_sum elif Rsum >= Lsum and Rsum >= Msum: return Rstart, Rend, Rsum else: return Mstart, Mend, Msum middlemaxsub(low, high): mid=(low+high)//2 sum1 = -infinity sum = 0 index1 = -1 for i=mid to low: sum += A[i] if sum > sum1: sum1 = sum index1 = i sum2 = -infinity sum = 0 index2 = -1 for i=mid + 1 to high: sum += A[i] if sum > sum2: sum2 = sum index2 = i return index1, index2, sum1 + sum2"
      },
      {
        "index": 8,
        "text": "2. Given a sorted n\u00d7n integer matrix A, where each row and each column is sorted in increasing order, and an integer q, determine whether q appears in the matrix and output True if it is found and False otherwise. 6/17 q top bottom left right"
      },
      {
        "index": 9,
        "text": "7/17 q=50 Go to middle column: midCol r = find largest row such that A[r][midCol] <= q, use binary search top bottom left right midCol"
      },
      {
        "index": 10,
        "text": "7/17 q=50 Go to middle column: midCol r = find largest row such that A[r][midCol] <= q, use binary search r=1 left right midCol top bottom r"
      },
      {
        "index": 11,
        "text": "7/17 Go to middle column: midCol r = find largest row such that A[r][midCol] <= q, use binary search left right midCol top bottom"
      },
      {
        "index": 12,
        "text": "8/17 q=50 Matrix_search(q, top, r, midCol+1, right) Matrix_search(q, r+1, bottom, left, midCol-1) top bottom left right midCol r"
      },
      {
        "index": 13,
        "text": "10/17 Matrix_search(q, top, bottom, left, right): if top > bottom or left > right: return False midCol = (left + right) // 2 # binary search on midCol r = find largest row in range [top..bottom] such that A[r][midCol] <= q if A[r][midCol] == q: return True result1 = Matrix_search(q, top, r, midCol+1, right) result1 = Matrix_search(q, r+1, bottom, left, midCol-1) return result1 OR result2 find_largest_row(top, bottom, midCol, q): low = top high = bottom r = top - 1 #no valid row found while low <= high: mid = (low + high) // 2 if A[mid][midCol] <= q: r = mid low = mid + 1 else: high = mid - 1 return r"
      },
      {
        "index": 14,
        "text": "11/17 3. Given a sorted integer array and an integer q, write pseudocode to find the first (and last) occurrence of q in the array. Use only the Divide and Conquer approach. q=10 q=11 q=7 Output: first=4, last=7 Output: first=8, last=8 Output: first=0, last=1"
      },
      {
        "index": 15,
        "text": "11/17 q=10 Check middle If match \u2192 go left Otherwise: go left if too big go right if too small Return earliest index found q=7 q=11"
      },
      {
        "index": 16,
        "text": "11/17 FirstOccurrence(A, low, high, q): if low > high: return -1 mid = (low + high) // 2 if A[mid] == q: # continue searching left to find earlier occurrence leftResult = FirstOccurrence(A, low, mid - 1, q) if leftResult != -1: return leftResult else: return mid elif A[mid] > q: return FirstOccurrence(A, low, mid - 1, q) else: return FirstOccurrence(A, mid + 1, high, q)"
      },
      {
        "index": 17,
        "text": "12/17 LastOccurrence(A, low, high, q): if low > high: return -1 mid = (low + high) // 2 if A[mid] == q: # continue searching right to find later occurrence rightResult = LastOccurrence(A, mid + 1, high, q) if rightResult != -1: return rightResult else: return mid elif A[mid] > q: return LastOccurrence(A, low, mid - 1, q) else: return LastOccurrence(A, mid + 1, high, q)"
      },
      {
        "index": 18,
        "text": "13/17 4. Given a sorted array of distinct non-negative integers, find the smallest integer that does not appear in this array."
      },
      {
        "index": 19,
        "text": "13/17 4. Given a sorted array of distinct non-negative integers, find the smallest integer that does not appear in this array. Check middle If greater than its index: go left, Otherwise, go right"
      },
      {
        "index": 20,
        "text": "13/17 4. Given a sorted array of distinct non-negative integers, find the smallest integer that does not appear in this array. Check middle If greater than its index: go left, Otherwise, go right"
      },
      {
        "index": 21,
        "text": "13/17 4. Given a sorted array of distinct non-negative integers, find the smallest integer that does not appear in this array. Check middle If greater than its index: go left, Otherwise, go left"
      },
      {
        "index": 22,
        "text": "13/17 4. Given a sorted array of distinct non-negative integers, find the smallest integer that does not appear in this array. Check middle If greater than its index: go right, Otherwise, go right"
      },
      {
        "index": 23,
        "text": "13/17 4. Given a sorted array of distinct non-negative integers, find the smallest integer that does not appear in this array. Check middle If greater than its index: go left, Otherwise, go right"
      },
      {
        "index": 24,
        "text": "13/17 4. Given a sorted array of distinct non-negative integers, find the smallest integer that does not appear in this array. Missingsmallest(A, low, high): if low == high: return low mid = (high + low) // 2 if A[mid] > mid: return Missingsmallest(A, low, mid - 1) else: return Missingsmallest(A, mid + 1, high)"
      },
      {
        "index": 25,
        "text": "Any Question?? Have a nice day! 17/17"
      }
    ]
  },
  {
    "file": "practice-DP.pptx",
    "type": "pptx",
    "slides": [
      {
        "index": 1,
        "text": "Greedy+DP 1"
      },
      {
        "index": 2,
        "text": "Find the all shortest paths from v1 to the other vertices using Dijkstra Algorithm:"
      },
      {
        "index": 3,
        "text": "Dijkstra(W) FOR i=2 TO n DO D[i]=W[1][i] P[i]=1 FOR i=1 TO n-1 DO m=index of minimum in D FOR EACH j in D: IF D[m]+W[m][j]<D[j] THEN D[j]=D[m]+W[m][j] P[j]=m PRINT D[m] D.delete(m)"
      },
      {
        "index": 4,
        "text": "m=3 D[2]=min{D[2],D[3]+W[3][2]}=min{9,3+inf}=9 D[4]=min{D[4],D[3]+W[3][4]}=min{11,3+4}=7 m=4 D[2]=min{D[2],D[4]+W[4][2]}=min{9,7+1}=8"
      },
      {
        "index": 5,
        "text": "Calculating shortest paths using P matrix: SP(1,2)=(1,\u2026,2)=(1,\u2026,4,2)=(1,3,4,2) SP(1,3)=(1,3) SP(1,4)=(1,\u2026,4)=1,3,4"
      },
      {
        "index": 7,
        "text": "Binomial Coefficients/ Pascal triangle"
      },
      {
        "index": 8,
        "text": "Binomial Coefficients: without DP BC(n,r): if r==0 or n==r then return 1 return BC(n-1,r)+BC(n-1,r-1)"
      },
      {
        "index": 9,
        "text": "Binomial Coefficient 14/176 BC(3,1) BC(2,2) BC(2,1) BC(2,1) BC(2,0) BC(1,1) BC(1,0) BC(1,1) BC(1,0)"
      },
      {
        "index": 10,
        "text": "Binomial Coefficient: using DP 16/176"
      },
      {
        "index": 11,
        "text": "Binomial Coefficient 18/176"
      },
      {
        "index": 12,
        "text": "Binomial Coefficient 19/176 BC(n,r): for i=0 to n do for j=0 to r do if i>=j then if j==0 or i==j then M[i][j]=1 else M[i][j]=M[i-1][j]+M[i-1][j-1] return M[n][r]"
      },
      {
        "index": 13,
        "text": "Floyd-Warshall 59/65"
      },
      {
        "index": 14,
        "text": "Floyd-Warshall 60/65 2 4"
      },
      {
        "index": 15,
        "text": "Floyd-Warshall 61/65 2 4 5"
      },
      {
        "index": 16,
        "text": "Floyd-Warshall 62/65 2 4 5 3 1"
      },
      {
        "index": 17,
        "text": "Floyd-Warshall 63/65 2 4 5 3 1"
      },
      {
        "index": 18,
        "text": "Floyd-Warshall shortest_path(i, j, P): path = \"\" k = P[i][j] if k == 0 then return \"\" path += shortest_path(i, k, P) path += str(k) path += shortest_path(k, j, P) return path for i=1 to n do for j=1 to n do path=\"\" path += str(i) path += shortest_path(i, j, P) path += str(j) print(path)"
      },
      {
        "index": 19,
        "text": "Floyd-Warshall Find all shortest paths between all pairs by using Floyd algorithm."
      },
      {
        "index": 20,
        "text": "Floyd-Warshall algorithm 20 FloydWarshall(W[][],n) D=W P=0 //initializing matrix P for k=1 to n do for i=1 to n do for j=1 to n do if D[i][k]+D[k][j]<D[i][j] then D[i][j]=D[i][k]+D[k][j] P[i][j]=k return D"
      },
      {
        "index": 21,
        "text": "NOTE: In the following calculations: 1) The red highlights indicate where the shortest path is updated. These will be used to construct the path matrix. 2) The purple highlights indicate values that do not need to be computed, as they will not change."
      },
      {
        "index": 22,
        "text": "K=1 D[1][j]=min{D[1][j],D[1][1]+D[1][j]}=D[1][j] for j=2,3,4 D[2][j]=min{D[2][j],D[2][1]+D[1][j]}= min{D[2][j],50+D[1][j]}, for j=1,3,4 D[2][1]=50, D[2][3]=15, D[2][4]= 5 D[3][j]=min{D[3][j],D[3][1]+D[1][j]}= min{D[3][j],30+D[1][j]}, for j=1,2,4 D[3][1]=30, D[3][2]=35, D[3][4]=15 D[4][j]=min{D[4][j],D[4][1]+D[1][j]}= min{D[4][j],15+D[1][j]}, for j=1,2,3 D[4][1]=15, D[4][2]=20, D[4][3]=5"
      },
      {
        "index": 23,
        "text": "K=2 1. D[1][j]=min{D[1][j],D[1][2]+D[2][j]}= min{D[1][j],5+D[2][j]} for j=2,3,4 D[1][2]=5, D[1][3]=20, D[1][4]=10 2. D[2][j]=min{D[2][j],D[2][2]+D[2][j]}=D[2][j] for j=1,3,4 3. D[3][j]=min{D[3][j],D[3][2]+D[2][j]}= min{D[3][j],35+D[2][j]} for j=1,2,4 D[3][1]=30, D[3][2]=35, D[3][4]=15 4. D[4][j]=min{D[4][j],D[4][2]+D[2][j]}= min{D[4][j],20+D[2][j]}, for j=1,2,3 D[4][1]=15, D[4][2]=20, D[4][3]=5"
      },
      {
        "index": 24,
        "text": "K=3 1. D[1][j]=min{D[1][j],D[1][3]+D[3][j]}= min{D[1][j],20+D[3][j]} for j=2,3,4 D[1][2]=5, D[1][3]=20, D[1][4]=10 2. D[2][j]=min{D[2][j],D[2][3]+D[3][j]}= min{D[2][j],15+D[3][j]} for j=1,3,4 D[2][1]=45, D[2][3]=15, D[2][4]=5 3. D[3][j]=min{D[3][j],D[3][3]+D[3][j]}=D[3][j] for j=1,2,4 4. D[4][j]=min{D[4][j],D[4][3]+D[3][j]}= min{D[4][j],5+D[3][j]}, for j=1,2,3 D[4][1]=15, D[4][2]=20, D[4][3]=5"
      },
      {
        "index": 25,
        "text": "K=4 1. D[1][j]=min{D[1][j],D[1][4]+D[4][j]}= min{D[1][j],10+D[4][j]} for j=2,3,4 D[1][2]=5, D[1][3]=15, D[1][4]=10 2. D[2][j]=min{D[2][j],D[2][4]+D[4][j]}= min{D[2][j],5+D[4][j]}, for j=1,3,4 D[2][1]=20, D[2][3]=10, D[2][4]=5 3. D[3][j]=min{D[3][j],D[3][4]+D[4][j]}= min{D[3][j],15+D[4][j]} for j=1,2,4 D[3][1]=30, D[3][2]=35, D[3][4]=15 4. D[4][j]=min{D[4][j],D[4][4]+D[4][j]}=D[4][j] for j=1,2,3"
      },
      {
        "index": 26,
        "text": "26 \u00b7 v1\u200b to v2\u200b: Direct path, v1\u2192 v2\u200b \u00b7 v1to v3\u200b: Passes through v4 :v1\u2192v2\u2192v4\u2192v3\u200b \u00b7 v1\u200b to v4\u200b: Passes through v2 :v1\u2192v2\u2192v4\u200b \u00b7 v2 to v1\u200b: Passes through v4, v2\u2192v4\u2192v1 \u200b \u00b7 v2\u200b to v3\u200b: Passes through v4\u200b, v2\u2192v4\u2192v3\u200b \u00b7 v2\u200b to v4\u200b: Direct path, v2\u2192v4 \u00b7 v3\u200b to v1\u200b: Direct path, v3\u2192v1 \u00b7 v3 to v2\u200b: Passes through v1, v3\u200b\u2192v1\u200b\u2192v2\u200b \u00b7 v3\u200b to v4\u200b: Direct path, v3\u2192v4\u200b \u00b7 v4\u200b to v1\u200b: Direct path, v4\u2192v1\u200b \u00b7 v4\u200b to v2\u200b: Passes through v1, v4\u2192v1\u200b\u2192v2\u200b \u00b7 v4\u200b to v3\u200b: Direct path, v4\u2192v3\u200b Calculating shortest paths using P matrix"
      }
    ]
  },
  {
    "file": "practice-greedy.pptx",
    "type": "pptx",
    "slides": [
      {
        "index": 1,
        "text": "Greedy Practice problems 1"
      },
      {
        "index": 2,
        "text": "Kruskal: Example 109/183 W 1 6 5 1 4 2"
      },
      {
        "index": 3,
        "text": "Kruskal: Example 109/183 Kruskal(E) E.sort F=[] FOR k=1 to n DO S[k]=k WHILE len(F)!=n-1 DO e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min=min(S[i],S[j]) Max=max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min E.del(e) RETURN F W"
      },
      {
        "index": 4,
        "text": "E.sort() F=[] 110/183 W"
      },
      {
        "index": 5,
        "text": "110/183 FOR k=1 to n DO S[k]=k W"
      },
      {
        "index": 6,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 7,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 8,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 9,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 10,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 11,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 12,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 13,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 14,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 15,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W Reject"
      },
      {
        "index": 16,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 17,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W Reject"
      },
      {
        "index": 18,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 19,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 20,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 21,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W"
      },
      {
        "index": 22,
        "text": "110/183 e=(vi,vj)=min_length_edge IF S[i]!=S[j] THEN F.add(e) Min, Max=min(S[i],S[j]), max(S[i],S[j]) FOR k=1 to n DO IF S[k]==Max THEN S[k]=Min W |F|=n-1"
      },
      {
        "index": 23,
        "text": "Prim: Example 109/183 W 6 8 10 5 11 14 3"
      },
      {
        "index": 24,
        "text": "Prim: Example 109/183 W Prim(W) F=\u00d8 FOR i=2 TO n DO nearest[i]=1 distance[i]=W[1][i] FOR j=1 TO n-1 DO b=index of minimum element in distance a=nearest[b] F.add((a,b)) distance.delete(b) nearest.delete(b) FOR EACH i in distance DO IF W[i][b]<distance[i] THEN distance[i]=W[i][b] nearest[i]=b RETURN F"
      },
      {
        "index": 25,
        "text": "Prim: Example 110/183 W"
      },
      {
        "index": 26,
        "text": "111/183 FOR i=2 TO n DO nearest[i]=1 distance[i]=W[1][i]"
      },
      {
        "index": 27,
        "text": "112/183 b=3 a=1 F={(3,1)} b=index of minimum element in distance a=nearest[b] F.add((a,b))"
      },
      {
        "index": 28,
        "text": "113/183 distance.delete(b) nearest.delete(b)"
      },
      {
        "index": 29,
        "text": "114/183 if(W[2][3] < distance[2]): distance[2] = W[2][3] nearest[2] = 3 if(W[4][3] < distance[4]): distance[4] = W[4][3] nearest[4] = 3 if(W[5][3] < distance[5]): distance[5] = W[5][3] nearest[5] = 3"
      },
      {
        "index": 30,
        "text": "115/183 b=5 a=3 F={(3,1),(3,5)} b=index of minimum element in distance a=nearest[b] F.add((a,b))"
      },
      {
        "index": 31,
        "text": "116/183 distance.delete(b) nearest.delete(b)"
      },
      {
        "index": 32,
        "text": "117/183 if(W[2][5] < distance[2]): distance[2] = W[2][5] nearest[2] = 5 if(W[4][5] < distance[4]): distance[4] = W[4][5] nearest[4] = 5"
      },
      {
        "index": 33,
        "text": "118/183 b=2 a=5 F={(3,1),(3,5),(2,5)} b=index of minimum element in distance a=nearest[b] F.add((a,b))"
      },
      {
        "index": 34,
        "text": "119/183 distance.delete(b) nearest.delete(b)"
      },
      {
        "index": 35,
        "text": "120/183 if(W[4][2]<distance[4]) distance[4]=W[4][2] nearest[4]=2"
      },
      {
        "index": 36,
        "text": "121/183 b=4 a=2 F={(3,1),(3,5),(2,5),(2,4)} b=index of minimum element in distance a=nearest[b] F.add((a,b))"
      },
      {
        "index": 37,
        "text": "122/183 F={(3,1),(3,5),(2,5),(2,4)} distance.delete(b) nearest.delete(b)"
      },
      {
        "index": 38,
        "text": "13/65 Input: n=8, Output: return 3 and 1,2,5 8=1+2+5 Input: n=17 Output: return 5 and 1,2,3,4,7 17=1+2+3+4+7 Input: n=27 Output: 6 and 1,2,3,4,5,12 27=1+2+3+4+5+12 Pick the smallest unused positive integer (starting from 1),"
      },
      {
        "index": 39,
        "text": "14/65 n=10 sum=0 Example: n=10"
      },
      {
        "index": 40,
        "text": "15/65 n=10 sum=1 Example: n=10"
      },
      {
        "index": 41,
        "text": "16/65 n=10 sum=3 Example: n=10"
      },
      {
        "index": 42,
        "text": "17/65 n=10 sum=6 Example: n=10"
      },
      {
        "index": 43,
        "text": "18/65 n=10 sum=10 Example: n=10"
      },
      {
        "index": 44,
        "text": "19/65 n=8 sum=0 Example: n=8"
      },
      {
        "index": 45,
        "text": "20/65 n=8 sum=1 Example: n=8"
      },
      {
        "index": 46,
        "text": "21/65 n=8 sum=3 Example: n=8"
      },
      {
        "index": 47,
        "text": "22/65 n=8 sum=6 Example: n=8"
      },
      {
        "index": 48,
        "text": "23/65 n=8 sum=6 Example: n=8"
      },
      {
        "index": 49,
        "text": "24/65 def MaxDistinctSum(n): sum=0 k=1 result=[] while sum + k <= n: result.append(k) sum= sum + k k=k+1 result[-1]+= n - sum return len(result),result"
      },
      {
        "index": 50,
        "text": "4/14"
      },
      {
        "index": 51,
        "text": "5/14 minimum_cover(intervals): sort intervals by right endpoint r_i in increasing order S = empty set #output p = -\u221e for each interval (l_i, r_i): if p < l_i: p = r_i add p to S return S"
      },
      {
        "index": 52,
        "text": "3. Given positions of n friends in the first row of a theater, find the minimal number of moves to sit all friends together. In each move, a friend moves to a seat to the left or a seat to the right. Input: A set of n distinct positive integers in the interval from 1 to N. This set represents positions of n friends that have bought individual (not necessarily adjacent) seats in the first row of a theater. Since all other seats in the first row turned out to be empty, the friends want to start moving to the neighboring seats (to the left or to the right) and continue until they all sit together in n consecutive chairs. Output: Find the minimal number of moves to sit all friends together. 11/14"
      },
      {
        "index": 53,
        "text": "12/14 Solution: To design an optimal greedy algorithm, we sort the positions of friends in increasing order. To minimize the number of moves, we need to move all friends next to the person at the middle position. let P be an array of positions of friends. P[i]= seat number of person i+1. See the following example: They should move next to person at position 9. These are the moves: For the left side: 5 to 8: 3 moves: =9-5-1 2 to 7: 5 moves=9-2-2 For the right side: 11 to 10: 1 move=11-9-1 14 to 11: 3 moves=14-9-2 P"
      },
      {
        "index": 54,
        "text": "13/14 def min_moves(P): P.sort() n = len(P) m = n // 2 # median index moves = 0 # left side gap = 1 for i in range(m - 1, -1, -1): moves += P[m] - P[i] - gap gap += 1 # right side gap = 1 for i in range(m + 1, n): moves += P[i] - P[m] - gap gap += 1 return moves"
      },
      {
        "index": 55,
        "text": "Any Question?? Have a nice day! 65/65"
      }
    ]
  }
];

export default decks;
