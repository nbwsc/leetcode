def invertTree(self, root):
    if root:
        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root

# def invertTree(self, root):
#     stack = [root]
#     while stack:
#         node = stack.pop()
#         if node:
#             node.left, node.right = node.right, node.left
#             stack += node.left, node.right
#     return root