class BubbleSort:
    """ Bubble Sort Algorithm Implementation (python3+)

        Input:  Unordered list
        Output: Return list in ascending order
        Time Complexity: O(n2)

        Example:
        >>> sort = BubbleSort()
        >>> sort([4, 2, 6, 5, 9, 8])
        [2, 4, 5, 6, 8, 9]
    """

    def __init__(self) -> None:
        print("Bubble Sort Algorithm is Initialized")

    def __call__(self, arr):
        n = len(arr)
        for i in range(n):
            already_sorted = True
            for j in range(n - i - 1):
                if arr[j] > arr[j + 1]:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]
                    already_sorted = False
            if already_sorted:
                break
        return arr

sort = BubbleSort()
print(sort([10, 9, 5, 11, 2]))
# [2, 5, 9, 10, 11]
