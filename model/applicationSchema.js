// JSON schema representation of application  module

module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "applicationModel",
  "type": "object",
  "properties": {
    "applicationCode": {
      "type": "string",
      "minLength": 1,
      "maxLength": 4
    },
    "applicationName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "enabled": {
      "type": "boolean",
      "default": true
    },
    "logo": {
      "type": "string"
    },
    "favicon": {
      "type": "string"
    },
    "createdBy": {
      "type": "string"
    },
    "updatedBy": {
      "type": ["string", "null"]
    },
    "createdDate": {
      "type": "string",
      "format": "date-time"
    },
    "updatedDate": {
      "type": ["string", "null"],
      "format": "date-time"
    },
    "description": {
      "type": "string",
      "minLength": 0,
      "maxLength": 255
    }
  },
  "required": ["applicationCode", "applicationName", "createdBy", "createdDate"]
};