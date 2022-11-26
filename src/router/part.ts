import express, { Router, Request, Response } from 'express';
import SqlString from 'tsqlstring';

const router: Router = express.Router();

router.post('/api1', async (req: Request, res: Response) => {
    const param: any = (req.body?.data || undefined);
    const resultData: ResultData = { result: undefined };
    let subquery: string = "";
    for (let prop in param) {
        if (!param[prop]) continue;
        subquery += (` enter your subquery`);
    }
    const query: string = `enter your query ${subquery}`;
    console.log(query)
    resultData.result = await req.app.get('db')?.query(query)
    console.log("[OK] /api1");
    res.send(resultData);
});


export { router as partRouter };