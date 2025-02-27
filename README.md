
# Notes

In custom Angular validation, validators will return `null` if the field value is OK (i.e. passes validation). If the field is invalid or fails, return a 'object' representation with the value true. 

e.g. `{someTextDesc: true}`