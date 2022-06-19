import { QueryResult } from 'pg';
import db from './db/connection'

async function fetchDefinitions (): Promise<Record<string, string>> {
    const words: QueryResult<any>= await db.query(`
        SELECT * FROM definitions;`
    )

    const wordsAndDefs: Record<string, string> = {};

    interface Word {
        id: number,
        word: string,
        meaning: string
    }

    words.rows.forEach((word: Word)=>{
        wordsAndDefs[word.word] = word.meaning;
    })

    return wordsAndDefs;
}

export default fetchDefinitions;