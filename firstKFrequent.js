function firstKFrequent(A, k) {
    const frequencyMap = {},
          bucket = [];
    let result = [];

    A.forEach((elem, i) => {
       frequencyMap[elem] = (frequencyMap[elem] || 0) + 1;
       bucket[i + 1] = null; 
    });

    Object.keys(frequencyMap).forEach((key) => {
        const val = frequencyMap[key];
        if(!bucket[val]) bucket[val] = [key];
        else bucket[val].push(key); 
    });

    for(let i = bucket.length; i > 0; i--) {
        if (bucket[i] != null) result = result.concat(bucket[i]);
    }

    return result.map(elem => parseInt(elem)).slice(0, k);
}

firstKFrequent([1,2,6,1,6], 2);