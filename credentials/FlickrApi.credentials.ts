import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class FlickrApi implements ICredentialType {
        name = 'N8nDevFlickrApi';

        displayName = 'Flickr API';

        icon: Icon = { light: 'file:../nodes/Flickr/flickr.png', dark: 'file:../nodes/Flickr/flickr.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.flickr.com/services',
                        required: true,
                        placeholder: 'https://api.flickr.com/services',
                        description: 'The base URL of your Flickr API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
