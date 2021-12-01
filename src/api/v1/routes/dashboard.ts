import index from './index'

router.get('/', (req, res, next) => {
  res.send('Welcome To Dashboard')
})
// // Getting all
// router.get('/', controller.get_all_branches)

// // Getting One
// router.get('/:id', controller.get_one_branche)

// // Creating one
// router.post('/', controller.create_one_branche)

// // Updating One
// router.patch('/:id', controller.update_one_branche)

// // Deleting One
// router.delete('/:id', controller.delete_one_branche)

module.exports = router
