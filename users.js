var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
{
  export class UserController {
    private readonly repo: UserRepository = new UserRepository()
  
    async readUser(
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<Response | void> {
      try {
        const { userID } = req.params
  
        const user: User | undefined = await this.repo.read({
          where: {
            id: +userID,
          },
        })
  
        return res.json(user)
      } catch (err) {
        return next(err)
      }
    }
  }
}