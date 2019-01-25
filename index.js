const prettier = require('prettier')
const { text, send } = require('micro')

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return send(
      res,
      200,
      `
<pre>
Please send your query/mutation as text in the body of a POST request

  Example:
    $ curl https://pgql.now.sh -X POST -d 'query { hello }'
</pre>
    `
    )
  }

  let data
  try {
    data = await text(req)
  } catch (e) {
    console.log(e)
    throw new Error('Please send your query/mutation as text in the body of a POST request')
  }

  try {
    send(res, 200, prettier.format(data, { parser: 'graphql' }))
  } catch (e) {
    send(res, 400, e.message)
  }
}
