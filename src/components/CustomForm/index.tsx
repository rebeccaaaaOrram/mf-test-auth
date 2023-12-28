import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'

interface CustomFormProps {
  // Box Wrapper element
  boxH?: string
  boxW?: string
  boxMt?: string
  boxMr?: string
  boxMb?: string
  boxMl?: string

  // FormControl
  // isInvalid={isError}
  formControlIsInvalid?: boolean
  formControlIsRequired?: boolean
  formControlOnChanged?: any
  formControlOnInput?: any

  // Form Label
  labelName?: string
  labelFontSize?: string
  labelFontFamily?: string
  labelFontWeight?: string
  labelTextAlign?: any

  // Input Group
  inputGroupMt?: string
  inputGroupMr?: string
  inputGroupMb?: string
  inputGroupMl?: string

  // Input
  inputPattern?: string
  inputOnKeyPress?: React.KeyboardEventHandler
  inputId?: string
  inputBg?: string
  inputH?: string
  inputW?: string
  inputType?: string
  inputPlaceholder?: string
  inputOnKeyUp?: React.KeyboardEventHandler
  inputOnKeyDown?: React.KeyboardEventHandler
  inputOnChange?: React.ChangeEventHandler<HTMLInputElement>
  inputAutoFocus?: boolean
  inputMaxLength?: number
  inputReadOnly?: boolean
  inputDisabled?: boolean
  inputValue?: string
  inputPlaceholderColor?: string

  // Input Right Element
  nameRightElement?: any
  mrInputRightElement?: string

  // FormHelperText
  formHelperText?: string

  // FormErrorMessage
  formErrorMessage?: string
}

export default function CustomForm(props: CustomFormProps) {
  // const [input, setInput] = useState('')

  // const isError = input === ''

  return (
    <Box
      h={props.boxH}
      w={props.boxW}
      mt={props.boxMt}
      mr={props.boxMr}
      mb={props.boxMb}
      ml={props.boxMl}
    >
      <FormControl
        isInvalid={props.formControlIsInvalid}
        isRequired={props.formControlIsRequired}
        onChange={props.formControlOnChanged}
        onInput={props.formControlOnInput}
      >
        <FormLabel
          mb="7px"
          textAlign={props.labelTextAlign || 'left'}
          fontSize={props.labelFontSize || '15px'}
          fontWeight={props.labelFontWeight || 'semibold'}
          fontFamily={props.labelFontFamily || 'Roboto'}
          color="#333333"
          // display={}
        >
          {props.labelName}
        </FormLabel>
        <InputGroup
          mt={props.inputGroupMt}
          mr={props.inputGroupMr}
          mb={props.inputGroupMb}
          ml={props.inputGroupMl}
        >
          <Input
            id={props.inputId}
            onKeyPress={props.inputOnKeyPress}
            onKeyDown={props.inputOnKeyDown}
            pattern={props.inputPattern}
            bg={props.inputBg || 'inherit'}
            h={props.inputH || '40px'}
            w={props.inputW}
            type={props.inputType || 'text'}
            borderRadius="10px"
            onKeyUp={props.inputOnKeyUp}
            onChange={props.inputOnChange}
            autoFocus={props.inputAutoFocus}
            maxLength={props.inputMaxLength}
            readOnly={props.inputReadOnly}
            disabled={props.inputDisabled}
            value={props.inputValue}
            placeholder={props.inputPlaceholder}
            _placeholder={
              {
                // fontSize: "12px",
                // color: props.inputPlaceholderColor || "#979797",
              }
            }
          />
          <InputRightElement
            mr={props.mrInputRightElement}
            children={props.nameRightElement}
          />
        </InputGroup>

        {/* {!isError ? ( */}
        {!props.formControlIsInvalid ? (
          <FormHelperText>{props.formHelperText}</FormHelperText>
        ) : (
          <FormErrorMessage>{props.formErrorMessage}</FormErrorMessage>
        )}
      </FormControl>
    </Box>
  )
}
