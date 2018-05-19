const prettier = require('prettier')
const { text, createError } = require('micro');

module.exports = async req => {
  if (req.method !== 'POST') return `
<pre>
Please send your query/mutation as text in the body of a POST request

  Example:
    $ curl https://pgql.now.sh -X POST -d 'query { hello }'
</pre>
`

  let data
  try {
    data = await text(req);
  } catch (e) {
    console.log(e);
    throw new Error ('Please send your query/mutation as text in the body of a POST request')
  }

  try {
    return prettier.format(data, { parser: 'graphql' })
  } catch (e) {
    throw createError(400, e)
  }
};
