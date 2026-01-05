function sendPatientAnswers() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Patient Questions");

  if (!sheet) {
    Logger.log("ERROR: Patient Questions sheet not found");
    return;
  }

  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {

    var phone = data[i][2];
    var approval = data[i][6];
    var answer = data[i][7];
    var status = data[i][9];

    if (approval === "Pending" &&
        (status === "" || status === "Pending") &&
        answer !== "") {

      Logger.log("Sending WhatsApp to " + phone + ": " + answer);

      sheet.getRange(i + 1, 9).setValue(new Date());
      sheet.getRange(i + 1, 10).setValue("Sent");
    }
  }
}
