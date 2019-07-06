function deleteTicket() {
    let currentData = {
      internal: [{id: 1, isChecked: false}, {id: 2, isChecked: true}, {id: 3}],
      external: [{id: 1}, {id: 2}, {id: 3, isChecked: true}]
    };
    currentData.internal = k
    if (currentData.internal.length > 0) {
      for (let i = 0; i < currentData.internal.length; i++) {
        if (currentData.internal[i].isChecked) {
          currentData.internal.splice(i, 1);
        }
      }
    }
    if (currentData.external.length > 0) {
      for (let j = 0; j < currentData.external.length; j++) {
        if (currentData.external[j].isChecked) {
          currentData.external.splice(j, 1);
        }
      }
    }

    return currentData;
}

deleteTicket();