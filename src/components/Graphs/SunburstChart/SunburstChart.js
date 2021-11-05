import React, { Component } from "react";
//import './SunburstChart.css'
var PersonalitySunburstChart = require('./sunburst-chart/charts/v3-d3v4')

export default class SunburstChart extends Component {
    componentDidMount(){
        const chart = new PersonalitySunburstChart({
            element: this.sunburst,
            version: 'v3'
        });
        const profile = {
            "word_count": 6582,
            "processed_language": "en",
            "personality": [
              {
                "trait_id": "big5_openness",
                "name": "Openness",
                "category": "personality",
                "percentile": 0.9805667785359738,
                "children": [
                    {
                        "trait_id": "facet_adventurousness",
                        "name": "Adventurousness",
                        "category": "personality",
                        "percentile": 0.950428146311326
                      },
                      {
                        "trait_id": "facet_artistic_interests",
                        "name": "Artistic interests",
                        "category": "personality",
                        "percentile": 0.8849147656630096
                      },
                      {
                        "trait_id": "facet_emotionality",
                        "name": "Emotionality",
                        "category": "personality",
                        "percentile": 0.17046533752727244
                      },
                      {
                        "trait_id": "facet_imagination",
                        "name": "Imagination",
                        "category": "personality",
                        "percentile": 0.20111675093062387
                      },
                      {
                        "trait_id": "facet_intellect",
                        "name": "Intellect",
                        "category": "personality",
                        "percentile": 0.9823942785877824
                      },
                      {
                        "trait_id": "facet_liberalism",
                        "name": "Authority-challenging",
                        "category": "personality",
                        "percentile": 0.9648675417313879
                      }
                ]
              },
              {
                "trait_id": "big5_conscientiousness",
                "name": "Conscientiousness",
                "category": "personality",
                "percentile": 0.8936538116484918,
                "children": [
                  {
                    "trait_id": "facet_achievement_striving",
                    "name": "Achievement striving",
                    "category": "personality",
                    "percentile": 0.9216597978352439
                  },
                  {
                    "trait_id": "facet_cautiousness",
                    "name": "Cautiousness",
                    "category": "personality",
                    "percentile": 0.9589003591814163
                  },
                  {
                    "trait_id": "facet_dutifulness",
                    "name": "Dutifulness",
                    "category": "personality",
                    "percentile": 0.7565446465573455
                  },
                  {
                    "trait_id": "facet_orderliness",
                    "name": "Orderliness",
                    "category": "personality",
                    "percentile": 0.48132376796768517
                  },
                  {
                    "trait_id": "facet_self_discipline",
                    "name": "Self-discipline",
                    "category": "personality",
                    "percentile": 0.8215063478296609
                  },
                  {
                    "trait_id": "facet_self_efficacy",
                    "name": "Self-efficacy",
                    "category": "personality",
                    "percentile": 0.908624607288198
                  }
                ]
              },
              {
                "trait_id": "big5_extraversion",
                "name": "Extraversion",
                "category": "personality",
                "percentile": 0.3362575928970771,
                "children": [
                  {
                    "trait_id": "facet_activity_level",
                    "name": "Activity level",
                    "category": "personality",
                    "percentile": 0.9789796271350255
                  },
                  {
                    "trait_id": "facet_assertiveness",
                    "name": "Assertiveness",
                    "category": "personality",
                    "percentile": 0.9825306758805727
                  },
                  {
                    "trait_id": "facet_cheerfulness",
                    "name": "Cheerfulness",
                    "category": "personality",
                    "percentile": 0.19465786707554655
                  },
                  {
                    "trait_id": "facet_excitement_seeking",
                    "name": "Excitement-seeking",
                    "category": "personality",
                    "percentile": 0.21503977702456123
                  },
                  {
                    "trait_id": "facet_friendliness",
                    "name": "Outgoing",
                    "category": "personality",
                    "percentile": 0.6005946078251523
                  },
                  {
                    "trait_id": "facet_gregariousness",
                    "name": "Gregariousness",
                    "category": "personality",
                    "percentile": 0.24206546142537544
                  }
                ]
              },
              {
                "trait_id": "big5_agreeableness",
                "name": "Agreeableness",
                "category": "personality",
                "percentile": 0.0533865832349148,
                "children": [
                  {
                    "trait_id": "facet_altruism",
                    "name": "Altruism",
                    "category": "personality",
                    "percentile": 0.8722252950552395
                  },
                  {
                    "trait_id": "facet_cooperation",
                    "name": "Cooperation",
                    "category": "personality",
                    "percentile": 0.7599846803277625
                  },
                  {
                    "trait_id": "facet_modesty",
                    "name": "Modesty",
                    "category": "personality",
                    "percentile": 0.34947264959955104
                  },
                  {
                    "trait_id": "facet_morality",
                    "name": "Uncompromising",
                    "category": "personality",
                    "percentile": 0.6480217001263691
                  },
                  {
                    "trait_id": "facet_sympathy",
                    "name": "Sympathy",
                    "category": "personality",
                    "percentile": 0.9812271982935261
                  },
                  {
                    "trait_id": "facet_trust",
                    "name": "Trust",
                    "category": "personality",
                    "percentile": 0.9240876717984589
                  }
                ]
              },
              {
                "trait_id": "big5_neuroticism",
                "name": "Emotional range",
                "category": "personality",
                "percentile": 0.9212642329050765,
                "children": [
                  {
                    "trait_id": "facet_anger",
                    "name": "Fiery",
                    "category": "personality",
                    "percentile": 0.016657350192117615
                  },
                  {
                    "trait_id": "facet_anxiety",
                    "name": "Prone to worry",
                    "category": "personality",
                    "percentile": 0.049689060282152586
                  },
                  {
                    "trait_id": "facet_depression",
                    "name": "Melancholy",
                    "category": "personality",
                    "percentile": 0.2725502659709549
                  },
                  {
                    "trait_id": "facet_immoderation",
                    "name": "Immoderation",
                    "category": "personality",
                    "percentile": 0.006015482455870191
                  },
                  {
                    "trait_id": "facet_self_consciousness",
                    "name": "Self-consciousness",
                    "category": "personality",
                    "percentile": 0.1257492389288613
                  },
                  {
                    "trait_id": "facet_vulnerability",
                    "name": "Susceptible to stress",
                    "category": "personality",
                    "percentile": 0.057796181331887075
                  }
                ]
              }
            ],
            "needs": [
              {
                "trait_id": "need_challenge",
                "name": "Challenge",
                "category": "needs",
                "percentile": 0.009295974292889309
              },
              {
                "trait_id": "need_closeness",
                "name": "Closeness",
                "category": "needs",
                "percentile": 0.16009921929894821
              },
              {
                "trait_id": "need_curiosity",
                "name": "Curiosity",
                "category": "needs",
                "percentile": 0.6536846492707111
              },
              {
                "trait_id": "need_excitement",
                "name": "Excitement",
                "category": "needs",
                "percentile": 0.09364803322659232
              },
              {
                "trait_id": "need_harmony",
                "name": "Harmony",
                "category": "needs",
                "percentile": 0.0576922917475059
              },
              {
                "trait_id": "need_ideal",
                "name": "Ideal",
                "category": "needs",
                "percentile": 0.008168529100234745
              },
              {
                "trait_id": "need_liberty",
                "name": "Liberty",
                "category": "needs",
                "percentile": 0.06366682309101934
              },
              {
                "trait_id": "need_love",
                "name": "Love",
                "category": "needs",
                "percentile": 0.028469441069982115
              },
              {
                "trait_id": "need_practicality",
                "name": "Practicality",
                "category": "needs",
                "percentile": 0.050598475805181176
              },
              {
                "trait_id": "need_self_expression",
                "name": "Self-expression",
                "category": "needs",
                "percentile": 0.040949707563547155
              },
              {
                "trait_id": "need_stability",
                "name": "Stability",
                "category": "needs",
                "percentile": 0.3829004285272741
              },
              {
                "trait_id": "need_structure",
                "name": "Structure",
                "category": "needs",
                "percentile": 0.8207207759334644
              }
            ],
            "values": [
              {
                "trait_id": "value_conservation",
                "name": "Conservation",
                "category": "values",
                "percentile": 0.16063478087796923
              },
              {
                "trait_id": "value_openness_to_change",
                "name": "Openness to change",
                "category": "values",
                "percentile": 0.5883913392447956
              },
              {
                "trait_id": "value_hedonism",
                "name": "Hedonism",
                "category": "values",
                "percentile": 0.0029501441024047392
              },
              {
                "trait_id": "value_self_enhancement",
                "name": "Self-enhancement",
                "category": "values",
                "percentile": 0.01213256688793024
              },
              {
                "trait_id": "value_self_transcendence",
                "name": "Self-transcendence",
                "category": "values",
                "percentile": 0.10538088756987435
              }
            ],
            "warnings": []
          }
          
        chart.show(profile)
    }

    render(){
        return(
            <div ref={elem => (this.sunburst = elem)}>
            </div>
        )
    }
}