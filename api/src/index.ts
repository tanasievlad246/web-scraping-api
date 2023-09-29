import app from './app';
import { swaggerDocs } from './swagger';
import dotenv from 'dotenv';

const startup = async () => {
    dotenv.config();

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        swaggerDocs(app, port);

        app.get('*', (req, res) => {
            res.status(404).send({
                message: 'Resource not found',
            });
        });

        console.log(`Server started on port ${port}`);
    });
}

startup();
