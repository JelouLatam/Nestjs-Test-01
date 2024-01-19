import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'Previous Date Error', async: false })
export class NoPreviousDates implements ValidatorConstraintInterface {
  validate(dueDate: string) {
    const currentDate = new Date(new Date().toDateString());
    const passedDate = new Date(dueDate);
    return passedDate > currentDate;
  }

  defaultMessage() {
    return 'Passed date ($value) should be later than current date';
  }
}
