const Joi = require('joi')

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  title: Joi.string().min(3).max(30).required(),
  layout: Joi.string().min(3).max(30).required(),
  caption: Joi.string().min(3).max(30).required(),
  enabled: Joi.boolean().required(),
  subCaption: Joi.string().min(3),
  questions: Joi.array()
    .required()
    .items(
      Joi.object({
        name: Joi.string().required(),
        type: Joi.string().required(),
        label: Joi.string().required().allow(''),
        isFullWidth: Joi.boolean(),
        isBirthDate: Joi.boolean(),
        openToDate: Joi.string(),
        minAge: Joi.number(),
        placeholder: Joi.string().allow(''),
        priorityOptions: Joi.array(),
        icon: Joi.object().keys({
          name: Joi.string(),
          fill: Joi.string()
        }),
        tooltip: Joi.object().keys({
          text: Joi.string(),
          config: Joi.object().keys({
            backgroundColor: Joi.string()
          })
        }),
        errorMessages: Joi.object().keys({
          required: Joi.string(),
          pattern: Joi.string(),
          u18: Joi.string()
        }),
        registerConfig: Joi.object().keys({
          required: Joi.boolean()
        }),
        config: Joi.object().keys({
          options: Joi.array().items(
            Joi.object({
              label: Joi.string(),
              value: Joi.string()
            })
          )
        })
      })
    ),
  question: Joi.array(),
  refrigeratorQuestions: Joi.array(),
  textToShow: Joi.object().required(),
  callForAction: Joi.array().required(),
  id: Joi.string().required()
})

export default schema