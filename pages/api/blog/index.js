export default function handler(req, res) {
    res.status(200).json(new Array(10).fill(0).map((_, i) => ({
        id: i,
        title: `Test ${i}`,
        article: `Article of Test ${i}`,
        author: `Author ${i}`
    })));
}
