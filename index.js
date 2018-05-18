const g = require('graphql')
const { text } = require('micro');

module.exports = async req => {
  if (req.method !== 'POST') return `
<pre>
Please send your query/mutation as text in the body of a POST request

  Example:
    $ curl https://pgql.now.sh -X POST -d 'query { hello }'
</pre>
`

  const data = await text(req);
	return g.print(g.parse(data))
};
