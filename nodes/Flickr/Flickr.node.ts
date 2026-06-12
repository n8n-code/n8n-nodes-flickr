import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { publicDescription } from './resources/public';

export class Flickr implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Flickr',
                name: 'N8nDevFlickr',
                icon: { light: 'file:./flickr.png', dark: 'file:./flickr.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Flickr API subset defined in Swagger format.',
                defaults: { name: 'Flickr' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFlickrApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Public",
					"value": "Public",
					"description": ""
				}
			],
			"default": ""
		},
		...publicDescription
                ],
        };
}
