#HTTP状态码
HTTP status code
###常见状态码
 - 200：请求成功；
 - 301：资源被永久的转移到其他URL；
 - 404：请求的资源不存在；
 - 500：内部服务器错误。
 
###分类：第一位表示状态码的类型 
 - 1--：信息，服务器收到请求，需请求者继续执行操作；
 - 2--：成功，操作被成功接收并处理；
 - 3--：重定向，需要进一步操作以完成请求；
 - 4--：客户端错误，请求包含语法错误或无法完成请求；
 - 5--：服务器错误，服务器在请求过程中发现错误。
 
### 状态码列表
- 100：continue，继续，客户端应继续请求
- 101：Switching protocols，切换协议，只能切换到高级协议

- 200：OK，请求成功，一般用于GET和POST请求
- 201：Created，已创建，成功请求并创建了新资源
- 202：Accepted，已接受请求，接受请求但未处理完成
- 203：Non-Authoritative Information，非授权信息，请求成功，但返回的mate信息不在原始服务器，而是一个副本。
- 204：No content，无内容，服务器成功处理，但未返回内容，在未更新网页情况下，浏览器保持当前页面。
- 205：Reset content，重置内容，服务器成功处理，用户终端应重置文档视图，可通过此返回码清除浏览器表单域。
- 206：Partial content，部分内容，服务器成功处理了部分get请求。

- 300：Multiple Choices，多种选择，请求资源包含多个位置，返回一个资源特性和地址的列表用于客户端选择。
- 301：Moved Permanently，永久移动，请求的资源已移动到新的URL，返回信息包含一个新的URL，浏览器会自动定性到新的URL，之后任何请求应该使用新的URL。
- 302：Found，临时移动，资源临时移动，用户应使用原URL
- 303：See Other，查看其它地址，用GET、POST请求查看。
- 304：Not Modified，无修改，请求的资源没有发生修改，服务器返回此状态码时不会返回任何资源。
- 305：Use Proxy，使用代理。所有资源请求必须通过代理访问。
- 306：Unused，已被废弃的状态码
- 307：Temporary Redirect，临时重定向，类似302，用GET请求重定向。

- 400：Bad Request，客户端请求语法错误，服务器无法理解。
- 401：Unauthorized，请求用户身份认证。
- 402：Payment Required，保留，以后使用。
- 403：Forbidden，服务器理解客户端请求，但拒绝执行此操作
- 404：Not Found，服务器无法根据客户请求找到资源。
- 405：Method Not Allowed，请求的方法不被允许。
- 406：Not Acceptable，服务器无法根据客户端请求的内容特性完成请求。
- 407：Proxy Authentication Required，请求要求代理身份认证。请求者使用代理授权。
- 408：Request Time-out，超时，服务器等待客户端发送的请求时间过长。
- 409：Conflict，PUT请求时。服务器处理请求发生冲突。
- 410：Gone，请求资源已不再。以前在现在永久被删除，可通过301代码指定资源新位置。
- 411：Length Required，服务器无法处理客户端不带Content-length的请求。
- 412：Precondition Failed，请求的先决条件错误。
- 413：Requedt Entity Too Large，请求实体过大，服务器无法处理。为防止客户继续请求，服务器可能会关闭连接。
- 414：Request-URL Too Large，请求的URL过长，服务器无法处理。
- 415：Unsupported Media Type，服务器无法处理请求附带的媒体格式。
- 416：Requested range not satisfiable，客户端请求范围无效
- 417：Expectation Failed，服务器无法满足Expect请求头信息。


- 500：Internal Server Error，服务器内部错误，无法完成请求。
- 501：Not Implemented，服务器不支持请求的功能，无法完成请求。
- 502：Bad Gateway，充当网关或代理的服务器，从远端服务器接受到了一个无效请求。
- 503：Service Unavailable，由于超载或系统维护，服务器暂时无法处理请求。延时的长度可包含在服务器的Retry-After头信息中。
- 504：Gateway Time-out，充当网关或代理的服务器，未及时接受远端服务器请求。
- 505：HTTP Version not supported，服务器不支持请求的HTTP协议版本，无法完成处理