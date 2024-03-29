const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { Post, User, Image, Comment, Hashtag } = require('../models');

// GET /hashtag
router.get('/:hashtag', async (req, res, next) => {
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Hashtag,
          where: { name: decodeURIComponent(req.params.hashtag) },
        },
        {
          model: User,
          attributes: ['id', 'nickname', 'image'],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['id', 'nickname', 'image'],
            },
          ],
        },
        {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id'],
        },
        {
          model: Post,
          as: 'Retweet',
          include: [
            {
              model: User,
              attributes: ['id', 'nickname', 'image'],
            },
            {
              model: Image,
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//hashtag get
router.get('/', async (req, res, next) => {
  try {
    console.log('해쉬', req.query.lastId);
    const hashTag = await Hashtag.findAll({
      limit: parseInt(req.query.lastId, 10),
      attributes: ['id', 'name'],
    });
    console.log(hashTag);
    res.status(200).json(hashTag);
  } catch (error) {
    console.error(error);
    next(error);
  }
  console.log(req);
});

module.exports = router;
