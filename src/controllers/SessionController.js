import User from '../models/User';

class SessionController {

    async store(req, res) {
        const { name, email, password_hash } = req.body;


        //verficando se ja existe esta sessão,no caso o email do usuario.
        let user = await User.findOne({ name, email, password_hash });

        if (!user) {
            user = await User.create({ name, email, password_hash });
        }

        return res.json(user);
    }
}
export default new SessionController();