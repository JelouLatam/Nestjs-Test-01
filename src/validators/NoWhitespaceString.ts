import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'Whitespace error', async: false })
export class NoWhitespaceString implements ValidatorConstraintInterface {
  validate(text: string) {
    const trimmedText = text.trim();
    return trimmedText.length !== 0;
  }

  defaultMessage() {
    return 'Passed text ($value) consist of only whitespaces';
  }
}
