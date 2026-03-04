import express from 'express'
const router = express.Router()
import { getPostController } from '../controllers/post/getPostController.js'
import { createPostController } from '../controllers/post/createPostController.js'
import { updatePostController } from '../controllers/post/updatePostController.js'
import { deletePostController } from '../controllers/post/deletePostController.js'
import { updateTittlePostController } from '../controllers/post/updateTittlePostController.js'

router.get('/', getPostController)

router.post('/', createPostController)

router.put('/', updatePostController)

router.patch('/', updateTittlePostController)

router.delete('/', deletePostController)

export default router