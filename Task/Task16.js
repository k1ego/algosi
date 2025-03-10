// 203. Удалить элементы связанного списка

// Дан headсвязный список и целое число val, удалить все узлы связного списка, имеющие Node.val == val, и вернуть новую голову .

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	let dummy = new ListNode(null, head)

	let current = head
	let prev = dummy

	while (current) {
			if (current.val === val) {
					prev.next = current.next
			}
			else {
					prev = current
			}
			current = current.next
	}
	return dummy.next
};