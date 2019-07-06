function getDiffDays(date) {
    const date1 = new Date(date);
    const date2 = new Date();
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays; 
}

function sortByStatus(arr) {
    return arr.sort((a, b) => {
        if (a.status === 'Active' && b.status === 'Active') {
            return 0;
        }
        else if (a.status === 'Active' && b.status !== 'Active') {
            return -1;
        }
        else if (a.status !== 'Active' && b.status === 'Active') {
            return 1;
        }
    });
}

const daysDiffs = dates.map(d => getDiffDays(d));

// getDiffDays('7/13/2019');
sortByStatus([
{status: 'Active', id: 1},
{status: 'In Active', id: 2},
{status: 'In Active', id: 3},
{status: 'Active', id: 4}
])