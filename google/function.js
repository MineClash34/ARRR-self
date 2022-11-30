const spreadsheetId = "id";

module.exports = {
    getRows: async function (googleSheets, auth, range) {
        const getRows = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId,
            range: range,
          });
          return getRows.data;
    }, 
    writeRows: async function (googleSheets, auth, range, value = ["undefined"]) {
        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: range,
            valueInputOption: "USER_ENTERED",
            resource: {
              values: [value],
            },
          });
    },
    updateRows: async function (googleSheets, auth, range, value = ["undefined"]) {
        await googleSheets.spreadsheets.values.update({
            auth,
            spreadsheetId,
            range: range,
            valueInputOption: "USER_ENTERED",
            resource: {
              values: [value],
            },
        })
    }
}