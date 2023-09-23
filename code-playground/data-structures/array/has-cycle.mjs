export function hasCycle(linkedList) {
  let slowPointer = linkedList.list.get(0);
  let fastPointer = linkedList.list.get(1);

  while (fastPointer?.next != null && slowPointer != null) {
    if (fastPointer === slowPointer) return true;
    slowPointer = linkedList.list.get(slowPointer.next);
    fastPointer = linkedList.list.get(fastPointer.next?.next);
  }

  return false;
}
