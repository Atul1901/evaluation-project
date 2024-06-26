export const checkValidation = (field: string, value: any) => {
  let Validation = {
    isValid: false,
    errorMessage: "",
  };
  console.log("field:", field);
  switch (field) {
    case "roleID":
      Validation.isValid = /^[0-9A-Za-z]{0,6}$/.test(value);
      Validation.errorMessage = "enter valid role ID";
      console.log("roleid case");
      break;

    case "roleName":
      Validation.isValid = /^[A-Za-z]*$/.test(value);
      Validation.errorMessage = "enter valid Role Name";
      console.log("roleid case");
      break;

    case "organizationName":
      Validation.isValid = /^[0-9A-Za-z]{0,6}$/.test(value);
      Validation.errorMessage = "enter valid organization name";
      console.log("org case");
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
