cookie:

- auto included on all requests
- unique to each domain 
- can't be sent to diff domains
- headers: cookie: {}
- body: { color: 'red' }

token:

- have to manually wire up
- can be sent to any domain
- headers: authorization: abc456...
- body: { color: 'red' }