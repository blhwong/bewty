import React from 'react';
import EntryTextDisplay from '../entry-text-display/EntryTextDisplay';

export default class CallEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  // <EntryTextDisplay entry={this.props.call.responses[0]}/>
  render() {
    const initialState = {"watson_results":"{\n  \"document_tone\": {\n    \"tone_categories\": [\n      {\n        \"tones\": [\n          {\n            \"score\": 0.077638,\n            \"tone_id\": \"anger\",\n            \"tone_name\": \"Anger\"\n          },\n          {\n            \"score\": 0.05109,\n            \"tone_id\": \"disgust\",\n            \"tone_name\": \"Disgust\"\n          },\n          {\n            \"score\": 0.031875,\n            \"tone_id\": \"fear\",\n            \"tone_name\": \"Fear\"\n          },\n          {\n            \"score\": 0.192884,\n            \"tone_id\": \"joy\",\n            \"tone_name\": \"Joy\"\n          },\n          {\n            \"score\": 0.531356,\n            \"tone_id\": \"sadness\",\n            \"tone_name\": \"Sadness\"\n          }\n        ],\n        \"category_id\": \"emotion_tone\",\n        \"category_name\": \"Emotion Tone\"\n      },\n      {\n        \"tones\": [\n          {\n            \"score\": 0,\n            \"tone_id\": \"analytical\",\n            \"tone_name\": \"Analytical\"\n          },\n          {\n            \"score\": 0,\n            \"tone_id\": \"confident\",\n            \"tone_name\": \"Confident\"\n          },\n          {\n            \"score\": 0,\n            \"tone_id\": \"tentative\",\n            \"tone_name\": \"Tentative\"\n          }\n        ],\n        \"category_id\": \"language_tone\",\n        \"category_name\": \"Language Tone\"\n      },\n      {\n        \"tones\": [\n          {\n            \"score\": 0.290761,\n            \"tone_id\": \"openness_big5\",\n            \"tone_name\": \"Openness\"\n          },\n          {\n            \"score\": 0.273918,\n            \"tone_id\": \"conscientiousness_big5\",\n            \"tone_name\": \"Conscientiousness\"\n          },\n          {\n            \"score\": 0.542256,\n            \"tone_id\": \"extraversion_big5\",\n            \"tone_name\": \"Extraversion\"\n          },\n          {\n            \"score\": 0.598813,\n            \"tone_id\": \"agreeableness_big5\",\n            \"tone_name\": \"Agreeableness\"\n          },\n          {\n            \"score\": 0.239748,\n            \"tone_id\": \"emotional_range_big5\",\n            \"tone_name\": \"Emotional Range\"\n          }\n        ],\n        \"category_id\": \"social_tone\",\n        \"category_name\": \"Social Tone\"\n      }\n    ]\n  }\n}","text":"Tess winter","entry_type":"audio","_id":"58f2b1225ac7aa23a8465a6e","tags":[],"video":{"avg_data":null,"raw_data":null},"created_at":"2017-04-15T23:47:46.351Z"}

    return (
      <div>
        <h2>{this.props.call.question}</h2>
        {this.props.call.responses.map((response) => {
          if (response.text) {
            response.entry_type = 'audio';
            response.created_at = response.time;
            return <EntryTextDisplay entry={response} />;
          }
        })}
      </div>
    );
  }
}
