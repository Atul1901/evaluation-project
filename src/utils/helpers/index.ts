export const checkValidation = (field: string, value: any) => {
  let Validation = {
    isValid: false,
    errorMessage: "",
  };

  switch (field) {
    case "roleID":
      Validation.isValid =
        /^(?=(?:\D*\d){3})(?=(?:[^a-zA-Z]*[a-zA-Z]){3})[0-9a-zA-Z]{6}$/.test(
          value
        );
      Validation.errorMessage = "enter valid role ID";
      break;

    case "roleName":
      Validation.isValid = /^[A-Za-z\s]*$/.test(value);
      Validation.errorMessage = "enter valid Role Name";
      break;
  }
  return Validation;
};

export const checkError = (errorData: any) => {
  if (
    errorData.roleName ||
    errorData.organizationName ||
    errorData.createdDate ||
    errorData.roleState ||
    errorData.roleID
  ) {
    return true;
  } else {
    return false;
  }
};

export const checkEmpty = (fieldData: any) => {
  if (
    !fieldData.roleName ||
    !fieldData.organizationName ||
    !fieldData.createdDate ||
    !fieldData.roleState ||
    !fieldData.roleID
  ) {
    return true;
  } else {
    return false;
  }
};
