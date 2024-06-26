const swaggerDocumentation = {
    "openapi": "3.1.0",
    "info": {
        "title": "IWACU KERA WEBSITE",
        "description": "This is the API Specification for the iwacu kera website backend server.",
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/license/mit"
        },
        "version": "1.0.0"
    },
    "externalDocs": {
        "description": "Get source code",
        "url": "https://github.com/Rosine22/Iwacu-Kera-backend"
    },
    "servers": [
        {
            "url": "http://localhost:5000",
            "description": "Local server"
        },
        {
            "url": "https://iwacu-kera-backend-1.onrender.com/",
            "description": "Culture server"
        }
    ],
    "schemes": ["http", "https"],
    "tags": [
        {
            "name": "Admin",
            "description": "Operations pertaining to past operations"
        }
    ],
    "paths": {
        "/api/v1/admin/register": {
            "post": {
                "tags": ["Admin"],
                "summary": "register admin",
                "description": "Registered successfully",
                "requestBody": {
                  "required": true,
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Admin"
                      }
                    }
                  }
                },
                "responses": {
                    "200": {
                        "description": "Success",
                        "content": {
                            "text/plain": {
                                "schema": {
                                    "type": "string",
                                    "example": "Hello World!"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/v1/admin/login": {
            "post": {
                "tags": ["Admin"],
                "summary": "Login to Admin",
                "description": "Creates a new login with the provided details",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Admin"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Task created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Admin"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request - Validation errors",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/contacts/create": {
            "post": {
              "tags": ["Contacts"],
              "summary": "Create a new contact",
              "requestBody": {
                "required": true,
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Contact"
                    }
                  }
                }
              },
              "responses": {
                "201": {
                  "description": "Contact created successfully",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Contact"
                      }
                    }
                  }
                }
              },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Contact"
                      }
                    }
                  }
                }
              }
            },
      
          "/api/contacts/lists": {
            "get": {
              "tags": ["Contacts"],
              "summary": "Get all contacts",
              "responses": {
                "200": {
                  "description": "OK",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/Contact"
                        }
                      }
                    }
                  }
                }
              },
                "400": {
                  "description": "Internal Server Error",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Contact"
                      }
                    }
                  }
                }
              }
            },
      
          "/api/contacts/{id}": {
            "get": {
              "tags": ["Contacts"],
              "summary": "Get a contact by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Contact"
                      }
                    }
                  }
                }
              },
                "404": {
                  "description": "Not Found"
                }
              }
            },
          "/api/contacts/update/{id}": {
            "put": {
              "tags": ["Contacts"],
              "summary": "Update a contact by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "requestBody": {
                "required": true,
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Contact"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Updated successfully",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Contact"
                      }
                    }
                  }
                }
              },
                "400": {
                  "description": "Bad Request"
                },
                "404": {
                  "description": "Not Found"
                }
              }
            },
          "/api/contacts/delete/{id}": {
            "delete": {
              "tags": ["Contacts"],
              "summary": "Delete a contact by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Deleted successfully",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Contact"
                      }
                    }
                  }
                }
              },
                "404": {
                  "description": "Not Found"
                }
              }
            },
      
          "/api/events/create": {
            "post": {
              "tags": ["Events"],
              "summary": "Create a new event",
              "requestBody": {
                "required": true,
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Event"
                    }
                  }
                }
              },
              "responses": {
                "201": {
                  "description": "Event created successfully",
                  "content": {
                    "multipart/form-data": {
                      "schema": {
                        "$ref": "#/components/schemas/Event"
                      }
                    }
                  }
                }
              },
                "400": {
                  "description": "Bad Request"
                },
                "500": {
                  "description": "Internal Server Error"
                }
              }
            },
            "/api/events/listevents": {
              "get": {
                "tags": ["Events"],
                "summary": "Get all events",
                "responses": {
                  "200": {
                    "description": "OK",
                    "content": {
                      "application/json": {
                        "schema": {
                          "type": "array",
                          "items": {
                            "$ref": "#/components/schemas/Event"
                          }
                        }
                      }
                    }
                  }
                },
                  "400": {
                    "description": "Internal Server Error",
                    "content": {
                      "application/json": {
                        "schema": {
                          "$ref": "#/components/schemas/Event"
                        }
                      }
                    }
                  }
                }
              },
          "/api/events/list/{id}": {
            "get": {
              "tags": ["Events"],
              "summary": "Get an event by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Event"
                      }
                    }
                  }
                }
              },
                "404": {
                  "description": "Not Found"
                }
              }
          },
          "/api/events/update/{id}": {
            "put": {
              "tags": ["Events"],
              "summary": "Update an event by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "requestBody": {
                "required": true,
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Event"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Updated successfully",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Event"
                      }
                    }
                  }
                }
              },
                "400": {
                  "description": "Bad Request"
                },
                "404": {
                  "description": "Not Found"
                }
              }
            },
          "/api/events/delete/{id}": {
            "delete": {
              "tags": ["Events"],
              "summary": "Delete an event by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Deleted successfully",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Event"
                      }
                    }
                  }
                },
      
                "404": {
                  "description": "Not Found"
                }
              }
            }
          },
          "/api/media/create": {
            "post": {
              "tags": [
                "Media"
              ],
              "summary": "Upload a new media",
              "requestBody": {
                "required": true,
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Media"
                    }
                  }
                }
              },
              "responses": {
                "201": {
                  "description": "Upload successful",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Media"
                      }
                    }
                  }
                }
              },
                "400": {
                  "description": "Bad Request - Validation errors",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Media"
                      }
                    }
                  }
                }
              }
            },
          "/api/media/list": {
            "get": {
              "tags": ["Media"],
              "summary": "List all media",
              "responses": {
                "200": {
                  "description": "Successful retrieval of media list",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/Media"
                        }
                      }
                    }
                  }
                }
              },
                "500": {
                  "description": "Internal Server Error"
                }
              }
            },
          "/api/media/{id}": {
            "get": {
              "tags": ["Media"],
              "summary": "Get a media item by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Media"
                      }
                    }
                  }
                }
              },
                "404": {
                  "description": "Not Found"
                }
              }
            },
      
          "/api/media/update/{id}": {
            "put": {
              "tags": ["Media"],
              "summary": "Update a media item by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "requestBody": {
                "required": true,
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Media"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Updated successfully",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Media"
                      }
                    }
                  }
                }
              },
                "400": {
                  "description": "Bad Request"
                },
                "404": {
                  "description": "Not Found"
                }
              }
            },
          "/api/media/delete/{id}": {
            "delete": {
              "tags": ["Media"],
              "summary": "Delete a media item by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Deleted successfully",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Media"
                      }
                    }
                  }
                }
              },
                "404": {
                  "description": "Not Found"
                }
              }
            },
          "/api/pro/list": {
            "get": {
              "tags": ["Proverbs"],
              "summary": "List all proverbs",
              "responses": {
                "200": {
                  "description": "Successful retrieval of proverb list",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/Proverb"
                        }
                      }
                    }
                  }
                }
              },
                "500": {
                  "description": "Internal Server Error"
                }
              }
            },
          "/api/pro/{id}": {
            "get": {
              "tags": ["Proverbs"],
              "summary": "Get a proverb by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Proverb"
                      }
                    }
                  }
                }
              },
                "404": {
                  "description": "Not Found"
                }
              }
            },
          "/api/pro/create": {
            "post": {
              "tags": ["Proverbs"],
              "summary": "Create a new proverb",
              "requestBody": {
                "required": true,
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Proverb"
                    }
                  }
                }
              },
              "responses": {
                "201": {
                  "description": "Proverb created successfully",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Proverb"
                      }
                    }
                  }
                }
              },
                "400": {
                  "description": "Bad Request"
                },
                "500": {
                  "description": "Internal Server Error"
                }
              }
            },
          "/api/pro/update/{id}": {
            "put": {
              "tags": ["Proverbs"],
              "summary": "Update a proverb by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "requestBody": {
                "required": true,
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Proverb"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Updated successfully",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Proverb"
                      }
                    }
                  }
                }
              },
                "400": {
                  "description": "Bad Request"
                },
                "404": {
                  "description": "Not Found"
                }
              }
            },
          "/api/pro/delete/{id}": {
            "delete": {
              "tags": ["Proverbs"],
              "summary": "Delete a proverb by ID",
              "parameters": [
                {
                  "name": "id",
                  "in": "path",
                  "required": true,
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Deleted successfully",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Proverb"
                      }
                    }
                  }
                }
              },
                "404": {
                  "description": "Not Found"
                }
              }
            }
    },
    "components":  {
        "schemas": {
          "Admin": {
            "type": "object",
            "properties": {
              "username": {
                "type": "string"
              },
              "password": {
                "type": "string",
                "format": "password",
                "required": true
              },
              "role": {
                "type": "string",
                "required": true
              }
            }
          },
          "Proverb": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "description": "Title of the proverb",
                "required": true
              },
              "content": {
                "type": "string",
                "description": "Content of the proverb",
                "required": true
              },
              "origin": {
                "type": "string",
                "description": "Origin of the proverb",
                "required": true
              }
            }
          },
          "Contact": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "description": "The name of the contact",
                "required": true
              },
              "subject": {
                "type": "string",
                "description": "The subject of the contact",
                "required": true
              },
              "message": {
                "type": "string",
                "description": "Message of the contact",
                "required": true
              }
            }
          },
          "Event": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "description": "Title of the event",
                "required": true
              },
              "description": {
                "type": "string",
                "description": "Description of the event",
                "required": true
              },
              "date": {
                "type": "string",
                "description": "Date of the event",
                "format": "date",
                "required": true
              },
              "image":{
                "url": {
                  "type": "string",
                  "required": true
                }
              },
              "location": {
                "type":"string",
                "required":true
              }
            }
          },
          "Media": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "description": "Title of the media",
                "required": true
              },
              "link": {
                "type": "string",
                "description": "Link or URL of the media",
                "format": "uri",
                "required": true
              },
              "description": {
                "type": "string",
                "description": "Description of the media",
                "required": true
              },
              "type": {
                "type": "string",
                "description": "Type of the media",
                "required": true
              },
              "Owner": {
                "type": "string",
                "required": true
              }
            }
          }
        }
      }
    }

export default swaggerDocumentation;
