swagger: "2.0"
info:
  version: "0.0.1"
  title: Hello World API
host: 127.0.0.1:3000
basePath: /v1
schemes:
  - http
  - https
consumes:
 - application/json
produces:
  - application/json
paths:
  '/hello':
    get:
      description: Returns greetings to the caller
      operationId: hello
      responses:
        "200":
          description: Success
          schema:
            $ref: "#/definitions/HelloWorldResponse"
        default:
          description: Error
          schema:
            $ref: "#/definitions/ErrorResponse"
definitions:
  HelloWorldResponse:
    required:
      - message
    properties:
      message:
        type: string
      age:
        type: number
  ErrorResponse:
    required:
      - message
    properties:
      message:
        type: string