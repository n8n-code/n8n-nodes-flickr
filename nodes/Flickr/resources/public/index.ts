import type { INodeProperties } from 'n8n-workflow';

export const publicDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					]
				}
			},
			"options": [
				{
					"name": "Get Access Token",
					"value": "Get Access Token",
					"action": "Get Access Token",
					"description": "Returns an access token",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/oauth/access_token"
						}
					}
				},
				{
					"name": "Get Request Token",
					"value": "Get Request Token",
					"action": "Get Request Token",
					"description": "Returns an oauth token and oauth token secret",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/oauth/request_token"
						}
					}
				},
				{
					"name": "Get Favorites Context By ID",
					"value": "Get Favorites Context By ID",
					"action": "Get Favorites Context By ID",
					"description": "Returns next and previous favorites for a photo in a user's favorites",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.favorites.getContext"
						}
					}
				},
				{
					"name": "Get Favorites By Person ID",
					"value": "Get Favorites By Person ID",
					"action": "Get Favorites By Person ID",
					"description": "Returns a list of the user's favorite photos. Only photos which the calling user has permission to see are returned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.favorites.getList"
						}
					}
				},
				{
					"name": "Get Gallery Photos By ID",
					"value": "Get Gallery Photos By ID",
					"action": "Get Gallery Photos By ID",
					"description": "Returns a list of photos in a gallery.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.galleries.getPhotos"
						}
					}
				},
				{
					"name": "Get Group Topic Replies By ID",
					"value": "Get Group Topic Replies By ID",
					"action": "Get Group Topic Replies By ID",
					"description": "Get information on a group topic reply",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.groups.discuss.replies.getInfo"
						}
					}
				},
				{
					"name": "Get Group Topic By ID",
					"value": "Get Group Topic By ID",
					"action": "Get Group Topic By ID",
					"description": "Get information about a group discussion topic",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.groups.discuss.topics.getInfo"
						}
					}
				},
				{
					"name": "Get Group Discussions By ID",
					"value": "Get Group Discussions By ID",
					"action": "Get Group Discussions By ID",
					"description": "Get a list of discussion topics in a group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.groups.discuss.topics.getList"
						}
					}
				},
				{
					"name": "Get Group By ID",
					"value": "Get Group By ID",
					"action": "Get Group By ID",
					"description": "Get information about a group",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.groups.getInfo"
						}
					}
				},
				{
					"name": "GET Rest Method Flickr Groups Pools Get Context",
					"value": "GET Rest Method Flickr Groups Pools Get Context",
					"action": "GET Rest Method Flickr Groups Pools Get Context",
					"description": "Returns next and previous photos for a photo in a group pool",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.groups.pools.getContext"
						}
					}
				},
				{
					"name": "Get Group Photos By ID",
					"value": "Get Group Photos By ID",
					"action": "Get Group Photos By ID",
					"description": "Returns a list of pool photos for a given group",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.groups.pools.getPhotos"
						}
					}
				},
				{
					"name": "Get Person By ID",
					"value": "Get Person By ID",
					"action": "Get Person By ID",
					"description": "Returns a person",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.people.getInfo"
						}
					}
				},
				{
					"name": "Get Media By Person ID",
					"value": "Get Media By Person ID",
					"action": "Get Media By Person ID",
					"description": "Return photos from the given user's photostream",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.people.getPhotos"
						}
					}
				},
				{
					"name": "Get Photolist Context By ID",
					"value": "Get Photolist Context By ID",
					"action": "Get Photolist Context By ID",
					"description": "Returns next and previous photos in a photo list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.photolist.getContext"
						}
					}
				},
				{
					"name": "Get Photostream Context By ID",
					"value": "Get Photostream Context By ID",
					"action": "Get Photostream Context By ID",
					"description": "Returns next and previous photos for a photo in a photostream",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.photos.getContext"
						}
					}
				},
				{
					"name": "Get Photo Exif By ID",
					"value": "Get Photo Exif By ID",
					"action": "Get Photo Exif By ID",
					"description": "Retrieves a list of EXIF/TIFF/GPS tags for a given photo. The calling user must have permission to view the photo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.photos.getExif"
						}
					}
				},
				{
					"name": "Get Photo By ID",
					"value": "Get Photo By ID",
					"action": "Get Photo By ID",
					"description": "Returns a photo",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.photos.getInfo"
						}
					}
				},
				{
					"name": "Get Photo Sizes By ID",
					"value": "Get Photo Sizes By ID",
					"action": "Get Photo Sizes By ID",
					"description": "Returns photo sizes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.photos.getSizes"
						}
					}
				},
				{
					"name": "Get License By ID",
					"value": "Get License By ID",
					"action": "Get License By ID",
					"description": "Fetches a list of available photo licenses for Flickr",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.photos.licenses.getInfo"
						}
					}
				},
				{
					"name": "Get Media By Search",
					"value": "Get Media By Search",
					"action": "Get Media By Search",
					"description": "Return a list of photos matching some criteria.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.photos.search"
						}
					}
				},
				{
					"name": "Get Album Context By ID",
					"value": "Get Album Context By ID",
					"action": "Get Album Context By ID",
					"description": "Returns next and previous photos for a photo in a set",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.photosets.getContext"
						}
					}
				},
				{
					"name": "Get Albums By Person ID",
					"value": "Get Albums By Person ID",
					"action": "Get Albums By Person ID",
					"description": "Returns the albums belonging to the specified user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.photosets.getList"
						}
					}
				},
				{
					"name": "Get Album By ID",
					"value": "Get Album By ID",
					"action": "Get Album By ID",
					"description": "Returns a list of photos in an album.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.photosets.getPhotos"
						}
					}
				},
				{
					"name": "Echo",
					"value": "Echo",
					"action": "Echo",
					"description": "Echos the input parameters back in the response",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest?method=flickr.test.echo"
						}
					}
				},
				{
					"name": "Upload Photo",
					"value": "Upload Photo",
					"action": "Upload Photo",
					"description": "Uploads a new photo to Flickr",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/upload"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /oauth/access_token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Consumer Key",
			"name": "oauth_consumer_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_consumer_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Nonce",
			"name": "oauth_nonce",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_nonce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Timestamp",
			"name": "oauth_timestamp",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_timestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Signature Method",
			"name": "oauth_signature_method",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_signature_method",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Version",
			"name": "oauth_version",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Signature",
			"name": "oauth_signature",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_signature",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Verifier",
			"name": "oauth_verifier",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_verifier",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Token",
			"name": "oauth_token",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "GET /oauth/request_token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Request Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Consumer Key",
			"name": "oauth_consumer_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_consumer_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Request Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Nonce",
			"name": "oauth_nonce",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_nonce",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Request Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Timestamp",
			"name": "oauth_timestamp",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_timestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Request Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Signature Method",
			"name": "oauth_signature_method",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_signature_method",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Request Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Version",
			"name": "oauth_version",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Request Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Signature",
			"name": "oauth_signature",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_signature",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Request Token"
					]
				}
			}
		},
		{
			"displayName": "OAuth Callback",
			"name": "oauth_callback",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "oauth_callback",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Request Token"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.favorites.getContext",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Favorites Context By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Favorites Context By ID"
					]
				}
			}
		},
		{
			"displayName": "Photo ID",
			"name": "photo_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "photo_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Favorites Context By ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Favorites Context By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.favorites.getList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Favorites By Person ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Favorites By Person ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Favorites By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Min Fave Date",
			"name": "min_fave_date",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_fave_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Favorites By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Max Fave Date",
			"name": "max_fave_date",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_fave_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Favorites By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Favorites By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Favorites By Person ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.galleries.getPhotos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Gallery Photos By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Gallery Photos By ID"
					]
				}
			}
		},
		{
			"displayName": "Gallery ID",
			"name": "gallery_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "gallery_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Gallery Photos By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.groups.discuss.replies.getInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Topic Replies By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Topic Replies By ID"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Topic Replies By ID"
					]
				}
			}
		},
		{
			"displayName": "Topic ID",
			"name": "topic_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "topic_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Topic Replies By ID"
					]
				}
			}
		},
		{
			"displayName": "Reply ID",
			"name": "reply_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "reply_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Topic Replies By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.groups.discuss.topics.getInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Topic By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Topic By ID"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Topic By ID"
					]
				}
			}
		},
		{
			"displayName": "Topic ID",
			"name": "topic_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "topic_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Topic By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.groups.discuss.topics.getList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Discussions By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Discussions By ID"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Discussions By ID"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Discussions By ID"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Discussions By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.groups.getInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group By ID"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group By ID"
					]
				}
			}
		},
		{
			"displayName": "Group Path Alias",
			"name": "group_path_alias",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_path_alias",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group By ID"
					]
				}
			}
		},
		{
			"displayName": "Lang",
			"name": "lang",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lang",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.groups.pools.getContext",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"GET Rest Method Flickr Groups Pools Get Context"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"GET Rest Method Flickr Groups Pools Get Context"
					]
				}
			}
		},
		{
			"displayName": "Photo ID",
			"name": "photo_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "photo_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"GET Rest Method Flickr Groups Pools Get Context"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"GET Rest Method Flickr Groups Pools Get Context"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.groups.pools.getPhotos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Photos By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Photos By ID"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Group Photos By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.people.getInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Person By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Person By ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Person By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.people.getPhotos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Person ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Person ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Safe Search",
			"name": "safe_search",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "safe_search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Min Upload Date",
			"name": "min_upload_date",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_upload_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Max Upload Date",
			"name": "max_upload_date",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_upload_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Min Taken Date",
			"name": "min_taken_date",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_taken_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Max Taken Date",
			"name": "max_taken_date",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_taken_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "content_type",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Privacy Filter",
			"name": "privacy_filter",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "privacy_filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Person ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.photolist.getContext",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photolist Context By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photolist Context By ID"
					]
				}
			}
		},
		{
			"displayName": "Photo ID",
			"name": "photo_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "photo_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photolist Context By ID"
					]
				}
			}
		},
		{
			"displayName": "Photolist ID",
			"name": "photolist_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "photolist_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photolist Context By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.photos.getContext",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photostream Context By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photostream Context By ID"
					]
				}
			}
		},
		{
			"displayName": "Photo ID",
			"name": "photo_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "photo_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photostream Context By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.photos.getExif",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photo Exif By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photo Exif By ID"
					]
				}
			}
		},
		{
			"displayName": "Photo ID",
			"name": "photo_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "photo_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photo Exif By ID"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "secret",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photo Exif By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.photos.getInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photo By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photo By ID"
					]
				}
			}
		},
		{
			"displayName": "Photo ID",
			"name": "photo_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "photo_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photo By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.photos.getSizes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photo Sizes By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photo Sizes By ID"
					]
				}
			}
		},
		{
			"displayName": "Photo ID",
			"name": "photo_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "photo_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Photo Sizes By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.photos.licenses.getInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get License By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get License By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.photos.search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"description": "A free text search. Photos who's title, description or tags contain the text will be returned. You can exclude results that match a term by prepending it with a - character.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"description": "A comma-delimited list of tags. Photos with one or more of the tags listed will be returned. You can exclude results that match a term by prepending it with a - character.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"description": "The NSID of the user who's photo to search. If this parameter isn't passed then everybody's public photos will be searched. A value of \"me\" will search against the calling user's photos for authenticated calls.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Min Upload Date",
			"name": "min_upload_date",
			"description": "Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_upload_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Max Upload Date",
			"name": "max_upload_date",
			"description": "Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_upload_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Min Taken Date",
			"name": "min_taken_date",
			"description": "Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_taken_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Max Taken Date",
			"name": "max_taken_date",
			"description": "Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_taken_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "License",
			"name": "license",
			"description": "The license id for photos (for possible values see the flickr.photos.licenses.getInfo method). Multiple licenses may be comma-separated.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "license",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "The order in which to sort returned photos. Deafults to date-posted-desc (unless you are doing a radial geo query, in which case the default sorting is by ascending distance from the point specified). The possible values are:\n  date-posted-asc,\n  date-posted-desc,\n  date-taken-asc,\n  date-taken-desc,\n  interestingness-desc,\n  interestingness-asc, and\n  relevance.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Privacy Filter",
			"name": "privacy_filter",
			"description": "Return photos only matching a certain privacy level. This only applies when making an authenticated call to view photos you own. Valid values are:,\n  1: public photos,\n  2: private photos visible to friends,\n  3: private photos visible to family,\n  4: private photos visible to friends & family,\n  5: completely private photos\n",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "privacy_filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Bbox",
			"name": "bbox",
			"description": "A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "bbox",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Accuracy",
			"name": "accuracy",
			"description": "Recorded accuracy level of the location information. Current range is 1-16:\n  World level is 1\n  Country is ~3\n  Region is ~6\n  City is ~11\n  Street is ~16\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "accuracy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Safe Search",
			"name": "safe_search",
			"description": "Safe search setting:\n  1: for safe,\n  2: for moderate,\n  3: for restricted\n",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "safe_search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "content_type",
			"description": "Content Type setting:\n  1: photos only.\n  2: screenshots only.\n  3: 'other' only.\n  4: photos and screenshots.\n  5: screenshots and 'other'.\n  6: photos and 'other'.\n  7: photos, screenshots, and 'other' (all).\n",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Machine Tags",
			"name": "machine_tags",
			"description": "Aside from passing in a fully formed machine tag, there is a special syntax for searching on specific properties : Find photos using the 'dc' namespace : \"machine_tags\" => \"dc:\" Find photos with a title in the 'dc' namespace : \"machine_tags\" => \"dc:title=\" Find photos titled \"mr. camera\" in the 'dc' namespace : \"machine_tags\" => \"dc:title=\\\"mr. camera\\\" Find photos whose value is \"mr. camera\" : \"machine_tags\" => \"*:*=\\\"mr. camera\\\"\" Find photos that have a title, in any namespace : \"machine_tags\" => \"*:title=\" Find photos that have a title, in any namespace, whose value is \"mr. camera\" : \"machine_tags\" => \"*:title=\\\"mr. camera\\\"\" Find photos, in the 'dc' namespace whose value is \"mr. camera\" : \"machine_tags\" => \"dc:*=\\\"mr. camera\\\"\" Multiple machine tags may be queried by passing a comma-separated list. The number of machine tags you can pass in a single query depends on the tag mode (AND or OR) that you are querying with. \"AND\" queries are limited to (16) machine tags. \"OR\" queries are limited to (8).\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "machine_tags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Machine Tag Mode",
			"name": "machine_tag_mode",
			"description": "Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "machine_tag_mode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"description": "The id of a group who's pool to search. If specified, only matching photos posted to the group's pool will be returned.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Contacts",
			"name": "contacts",
			"description": "Search your contacts. Either 'all' or 'ff' for just friends and family. (Experimental)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contacts",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Woe ID",
			"name": "woe_id",
			"description": "A 32-bit identifier that uniquely represents spatial entities. (not used if bbox argument is present).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "woe_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Place ID",
			"name": "place_id",
			"description": "A Flickr place id. (not used if bbox argument is present). Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "place_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Media",
			"name": "media",
			"description": "Filter results by media type. Possible values are all (default), photos or videos",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "media",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Has Geo",
			"name": "has_geo",
			"description": "Any photo that has been geotagged, or if the value is \"0\" any photo that has not been geotagged. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "has_geo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Geo Context",
			"name": "geo_context",
			"description": "Geo context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to search for photos that were taken \"indoors\" or \"outdoors\". The current list of context IDs is: 0, not defined. 1, indoors. 2, outdoors. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "geo_context",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Lat",
			"name": "lat",
			"description": "A valid latitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lat",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Lon",
			"name": "lon",
			"description": "A valid longitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Radius",
			"name": "radius",
			"description": "A valid radius used for geo queries, greater than zero and less than 20 miles (or 32 kilometers), for use with point-based geo queries. The default value is 5 (km).",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "radius",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Radius Units",
			"name": "radius_units",
			"description": "The unit of measure when doing radial geo queries. Valid options are \"mi\" (miles) and \"km\" (kilometers). The default is \"km\".",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "radius_units",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Is Commons",
			"name": "is_commons",
			"description": "Limit the scope of the search to only photos that are part of the Flickr Commons project. Default is false.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_commons",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "In Gallery",
			"name": "in_gallery",
			"description": "Limit the scope of the search to only photos that are in a gallery? Default is false, search all photos.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "in_gallery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Is Getty",
			"name": "is_getty",
			"description": "Limit the scope of the search to only photos that are for sale on Getty. Default is false.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_getty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of results to return. If this argument is omitted, it defaults to 1.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Media By Search"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.photosets.getContext",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Album Context By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Album Context By ID"
					]
				}
			}
		},
		{
			"displayName": "Photo ID",
			"name": "photo_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "photo_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Album Context By ID"
					]
				}
			}
		},
		{
			"displayName": "Photoset ID",
			"name": "photoset_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "photoset_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Album Context By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.photosets.getList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Albums By Person ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Albums By Person ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Albums By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Albums By Person ID"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Albums By Person ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.photosets.getPhotos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Album By ID"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Album By ID"
					]
				}
			}
		},
		{
			"displayName": "Photoset ID",
			"name": "photoset_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "photoset_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Album By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rest?method=flickr.test.echo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Echo"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Echo"
					]
				}
			}
		},
		{
			"displayName": "Echo",
			"name": "echo",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "echo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Echo"
					]
				}
			}
		},
		{
			"displayName": "POST /upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Upload Photo"
					]
				}
			}
		},
		{
			"displayName": "POST /upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Upload Photo"
					]
				}
			}
		},
];
