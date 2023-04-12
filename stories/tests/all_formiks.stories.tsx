import { Formik } from 'formik'
import { noop } from 'lodash'
import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import {
  Checkbox,
  FormikCheckbox,
  FormikEffect,
  FormikMultiCheckbox,
  FormikMultiRadio,
  FormikMultiSelect,
  FormikSelect,
  FormikTextarea,
  FormikTextInput
} from '../../src'

export default {
  title: 'Tests/All formiks',

  parameters: {
    options: {
      showPanel: false
    }
  }
}

export function Template() {
  const [outputValue, setOutputValue] = useState<any>('∅')
  const [isReadOnly, setIsReadOnly] = useState(false)
  const [undefinedWhenDisabled, setUndefinedWhenDisabled] = useState(false)

  return (
    <>
      <Checkbox checked={isReadOnly} label="Read only ?" name="isReadOnly" onChange={setIsReadOnly} />
      <Checkbox
        checked={undefinedWhenDisabled}
        label="set to undefined when field is disabled"
        name="undefinedWhenDisabled"
        onChange={setUndefinedWhenDisabled}
      />
      <Formik initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <h1>Test Page</h1>

          <div>
            <FormikTextInput
              disabled={isReadOnly}
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Text input"
              name="textInput"
            />
            <hr />
            <FormikTextInput
              disabled={isReadOnly}
              isLabelHidden
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Text input with hidden label"
              name="textInputWithHiddenLabel"
            />

            <hr />
            <FormikTextarea
              disabled={isReadOnly}
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Textarea"
              name="textarea"
            />
            <hr />
            <FormikTextarea
              disabled={isReadOnly}
              isLabelHidden
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Textarea with hidden label"
              name="textareaWithHiddenLabel"
            />

            <hr />
            <FormikCheckbox
              disabled={isReadOnly}
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Checkbox"
              name="checkbox"
            />

            <hr />
            <FormikSelect
              disabled={isReadOnly}
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Select"
              name="select"
              options={[
                { label: 'First select option', value: 'FIRST_SELECT_OPTION' },
                { label: 'Second select option', value: 'SECOND_SELECT_OPTION' },
                { label: 'Third select option', value: 'THIRD_SELECT_OPTION' }
              ]}
            />
            <hr />
            <FormikSelect
              disabled={isReadOnly}
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Select with search input"
              name="selectWithSearchInput"
              options={new Array(50).fill(undefined).map((_, index) => ({
                label: `Select with search input option ${String(index + 1).padStart(2, '0')}`,
                value: `SELECT_WITH_SEARCH_INPUT_OPTION_${String(index + 1).padStart(2, '0')}`
              }))}
              searchable
            />
            <hr />
            <FormikSelect
              disabled={isReadOnly}
              isLabelHidden
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Select with hidden label"
              name="selectWithHiddenLabel"
              options={[
                { label: 'First select with hidden label option', value: 'FIRST_SELECT_WITH_HIDDEN_LABEL_OPTION' },
                { label: 'Second select with hidden label option', value: 'SECOND_SELECT_WITH_HIDDEN_LABEL_OPTION' },
                { label: 'Third select with hidden label option', value: 'THIRD_SELECT_WITH_HIDDEN_LABEL_OPTION' }
              ]}
            />

            <hr />
            <FormikMultiSelect
              disabled={isReadOnly}
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Multi select"
              name="multiSelect"
              options={[
                { label: 'First multi select option', value: 'FIRST_MULTI_SELECT_OPTION' },
                { label: 'Second multi select option', value: 'SECOND_MULTI_SELECT_OPTION' },
                { label: 'Third multi select option', value: 'THIRD_MULTI_SELECT_OPTION' }
              ]}
            />
            <hr />
            <FormikMultiSelect
              disabled={isReadOnly}
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Multi select with search input"
              name="multiSelectWithSearchInput"
              options={new Array(50).fill(undefined).map((_, index) => ({
                label: `Multi select with search input option ${String(index + 1).padStart(2, '0')}`,
                value: `MULTI_SELECT_WITH_SEARCH_INPUT_OPTION_${String(index + 1).padStart(2, '0')}`
              }))}
              searchable
            />
            <hr />
            <FormikMultiSelect
              disabled={isReadOnly}
              isLabelHidden
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Multi select with hidden label"
              name="multiSelectWithHiddenLabel"
              options={[
                {
                  label: 'First multi select with hidden label option',
                  value: 'FIRST_MULTI_SELECT_WITH_HIDDEN_LABEL_OPTION'
                },
                {
                  label: 'Second multi select with hidden label option',
                  value: 'SECOND_MULTI_SELECT_WITH_HIDDEN_LABEL_OPTION'
                },
                {
                  label: 'Third multi select with hidden label option',
                  value: 'THIRD_MULTI_SELECT_WITH_HIDDEN_LABEL_OPTION'
                }
              ]}
            />

            <hr />
            <FormikMultiCheckbox
              disabled={isReadOnly}
              isInline
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Multi checkbox"
              name="multiCheckbox"
              options={[
                { label: 'First multi checkbox option', value: 'FIRST_MULTI_CHECKBOX_OPTION' },
                { label: 'Second multi checkbox option', value: 'SECOND_MULTI_CHECKBOX_OPTION' },
                { label: 'Third multi checkbox option', value: 'THIRD_MULTI_CHECKBOX_OPTION' }
              ]}
            />
            <hr />
            <FormikMultiCheckbox
              disabled={isReadOnly}
              isInline
              isLabelHidden
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Multi checkbox with hidden label"
              name="multiCheckboxWithHiddenLabel"
              options={[
                {
                  label: 'First multi checkbox with hidden label option',
                  value: 'FIRST_MULTI_CHECKBOX_WITH_HIDDEN_LABEL_OPTION'
                },
                {
                  label: 'Second multi checkbox with hidden label option',
                  value: 'SECOND_MULTI_CHECKBOX_WITH_HIDDEN_LABEL_OPTION'
                },
                {
                  label: 'Third multi checkbox with hidden label option',
                  value: 'THIRD_MULTI_CHECKBOX_WITH_HIDDEN_LABEL_OPTION'
                }
              ]}
            />

            <hr />
            <FormikMultiRadio
              disabled={isReadOnly}
              isInline
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Multi radio"
              name="multiRadio"
              options={[
                { label: 'First multi radio option', value: 'FIRST_MULTI_RADIO_OPTION' },
                { label: 'Second multi radio option', value: 'SECOND_MULTI_RADIO_OPTION' },
                { label: 'Third multi radio option', value: 'THIRD_MULTI_RADIO_OPTION' }
              ]}
            />
            <hr />
            <FormikMultiRadio
              disabled={isReadOnly}
              isInline
              isLabelHidden
              isUndefinedWhenDisabled={undefinedWhenDisabled}
              label="Multi radio with hidden label"
              name="multiRadioWithHiddenLabel"
              options={[
                {
                  label: 'First multi radio with hidden label option',
                  value: 'FIRST_MULTI_RADIO_WITH_HIDDEN_LABEL_OPTION'
                },
                {
                  label: 'Second multi radio with hidden label option',
                  value: 'SECOND_MULTI_RADIO_WITH_HIDDEN_LABEL_OPTION'
                },
                {
                  label: 'Third multi radio with hidden label option',
                  value: 'THIRD_MULTI_RADIO_WITH_HIDDEN_LABEL_OPTION'
                }
              ]}
            />
          </div>

          {outputValue !== '∅' && <Output value={outputValue} />}
        </>
      </Formik>
    </>
  )
}
