import { Request, Response} from 'express';
import fetchDefinitions from './model';

function getDefinitions(req: Request, res: Response) {
    fetchDefinitions().then((words)=>{
        res.status(200).send({words: words})

    })
}

export default getDefinitions;