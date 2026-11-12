function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low >= high) return;
    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
}

function sortInput() {
    const input = document.getElementById("myInput").value;
    const arr = input.split(",").map(Number);
    console.log("Pre-sort array: " + arr);

    quickSort(arr, 0, arr.length - 1);
    console.log("Sorted array:   " + arr);

    document.getElementById("sortedOutput").textContent =
        "Sorted array: " + arr.join(", ");
}

arr = document.getElementById("myInput").value.split(",").map(Number);
