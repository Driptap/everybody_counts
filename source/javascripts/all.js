//= require_tree .

/* Everybody Counts
What you see below is a big old config variable. All this script does is check a csv for regular expressions then add some data based on it.

So in your bank statment you might see 'TESCO PCS 103042' because you brought some dinner.
So add a rule to the config file like this:

{
  "descriptor": ["TESCO"],
  "toAccount": "Food",
  "fromAccount": "Bank",
  "reference": "I NEED TO EAT" 
}


If you shop at more than just tesco..

{
  "descriptor": ["TESCO", "WAITROSE", "SAINSBURYS"],
  "toAccount": "Food",
  "fromAccount": "Bank",
  "reference": "I NEED TO EAT" 
}

If all you need is a reference added..

{
  "descriptor": ["TESCO", "WAITROSE", "SAINSBURYS"],
  "reference": "I NEED TO EAT" 
}

It has defaults and will add 'NEEDS CHECK' as a reference to any records that it doesn't recognise. There are a load of descriptors already that are catered towards 
a sole trader. 


Scroll down to configure the fields of the CSV your bank provides.
*/
var config = {
  "descriptors" : [
    {
      "descriptor": ["B AND Q"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "B&Q"
    },
    {
      "descriptor": ["COVERS"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Covers"
    },
    {
      "descriptor": ["PAYPAL"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Ebay"
    },
    {
      "descriptor": ["ELECTRICL CENTER"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Electric Center"
    },
    {
      "descriptor": ["ENTERPRISE SEC"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Enterprice SEC Security"
    },
    {
      "descriptor": ["EUROSAT"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Euro Sat"
    },
    {
      "descriptor": ["EYRE AND ELLISON"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Eyre and Elliston"
    },
    {
      "descriptor": ["FOCUS"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "FOCUS"
    },
    {
      "descriptor": ["HOMEBASE"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Homebase"
    },
    {
      "descriptor": ["JBM", "EDMUNDSON"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "JBM Edmunsons"
    },
    {
      "descriptor": ["KEITH GRAHAM"],
      "toAccount": "Legal and Profressional Costs Account",
      "fromAccount": "Bank Account",
      "supplier": "Keith Graham Accountants"
    },
    {
      "descriptor": ["NETWORK"],
      "toAccount": "Motor Expense Account",
      "fromAccount": "Bank Account",
      "supplier": "Network Hire",
      "reference": "Van lease"
    },
    {
      "descriptor": ["A.H.C."],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "A.H.C."
    },
    {
      "descriptor": ["AA MEMBERSHIP"],
      "toAccount": "Motor Expense Account",
      "fromAccount": "Bank Account",
    },
    {
      "descriptor": ["QVS"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "QVS Electrical"
    },
    {
      "descriptor": ["SCREWFIX"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Screwfix"
    },
    {
      "descriptor": ["W F ELECTRICAL", "WF"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "W F Electrical"
    },
    {
      "descriptor": ["WICKES"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Wickes"
    },
    {
      "descriptor": ["WILLIAMS"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Williams Trade Supplies"
    },
    {
      "descriptor": ["WILSON"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Wilson Electrical"
    },
    {
      "descriptor": ["CITY PLUMBING SUPP"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "City Plumbing Supplies"
    },
    {
      "descriptor": ["CITY ELECTRICAL"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "City Electrical Factors"
    },
    {
      "descriptor": ["JEWSON"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Jewson"
    },
    {
      "descriptor": ["VAT"],
      "toAccount": "VAT Control Account",
      "fromAccount": "Bank Account"
    },
    {
      "descriptor": ["TLC"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "TLC"
    },
    {
      "descriptor": ["TOOLSTATION"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Tool Station LTD."
    },
    {
      "descriptor": ["COSTA", "LIDL", "APPLE", "GOOGLE", "WAITROSE", "THOMAS COOK", "SELFSERVE", "VIRGIN PURE", "COSTCO", "BEST MANGAL", "GRADUATION SERVICE", "DVLAPERSONALISEDRE", "LAHORI", "TESCO STORES", "SAINSBURYS S/MKTS", "B289BDA", "LOD628W", "ALDI", "AHMET GUCLU"],
      "toAccount": "Wages",
      "fromAccount": "Bank Account"
    },
    {
      "descriptor": ["MAPLIN"],
      "toAccount": "Equipment",
      "fromAccount": "Bank Account",
      "supplier": "Maplin"
    },
    {
      "descriptor": ["NICEIC", "CERTSURE"],
      "toAccount": "Legal and Profressional Costs Account",
      "fromAccount": "Bank Account",
      "reference": "NicEic Costs"
    },
    {
      "descriptor": ["A/C", "O/DRAFT"],
      "toAccount": "Bank Charges Account",
      "fromAccount": "Bank Account"
    },
    {
      "descriptor": ["VIRGIN MOBILE", "LYCA"],
      "toAccount": "Telephone",
      "fromAccount": "Bank Account"
    },
    {
      "descriptor": ["FARLINGTON 133", "LIPHOOK NORTH", "FLEET MWS", "TESCO PFS", "BP", "ESSO", "SHELL", "SAINSBURYS PETROL", "TCS", "KINGSMEAD", "SERV", "COOP", "CO-OP", "EASTERN ROAD"],
      "toAccount": "Travel and Subsistence Account",
      "fromAccount": "Bank Account",
      "reference": "Diesel"
    },
    {
      "descriptor": ["CHURCHILL", "SWINTON"],
      "toAccount": "Motor Expense Account",
      "fromAccount": "Bank Account",
      "reference": "Van Insurance"
    },
    {
      "descriptor": ["HMRC - NI"],
      "toAccount": "National Insurance Contribution",
      "fromAccount": "Bank Account",
      "reference": "National Insurance"
    },
    {
      "descriptor": ["HALIFAX", "BARCLAYCARD"],
      "toAccount": "Credit Card",
      "fromAccount": "Bank Account"
    },
    {
      "descriptor": ["HP INSTANT INK"],
      "toAccount": "Stationery",
      "fromAccount": "Bank Account",
      "reference": "Printing Supplies"
    },
    {
      "descriptor": ["MARK MEECH", "SINAN GUCLU"],
      "toAccount": "Contruction Industry - Subcontractors Paymentss",
      "fromAccount": "Bank Account",
      "reference": "Subcontractor payment"
    }
  ]
};
// Map your banks CSV
// Set the column number of each column of the csv you get from your account
// ie.
// Column Number   0      |       1      |       2       |
//                Date    |     Type     |  Description  |

var columns = {
  'Date' : 0,
  'Type' : 1,
  'Description' : 2,
  'Value' : 3,
  'Balance' : 4,
  'AccountName' : 5,
  'AccountNumber' : 6
}
// Gets input from file dialog
var fileInput = $('input#statement');
// Sets validation digit
var totalInputRecords = 0;
// Empty array for new csv's
var outputAccounts = [];
// Listens for selected csv
fileInput.on('change', function(){
  // Calls parse on the uploaded file
  Papa.parse(fileInput[0].files[0], {
    // On parse complete
    complete: function(results) {
      var accounts = results.data;
      // Checks the length of the input account
      totalInputRecords = accounts.length;
      // Loops through each account
      for(var x = 0; x < accounts.length; x++){
        // Sets an account variable
        var account = accounts[x];
        // Creates a new account vairable
        var newAccount = {
          // Moves accross existing data
          'date': account[columns.Date],
          'type': account[columns.Type],
          'value': account[columns.Value],
          'balance': account[columns.Balance],
          'description': account[columns.Description],
          // Sets default fields
          'reference': '',
          'fromAccount': 'Bank Account',
          'toAccount': 'Bank Account',
          'supplier': '',
          'customer': ''          
        };
        // Loops through account descriptors
        var describedRecord = false;
        var accountDescriptors = config.descriptors;
        for(var y=0; y<accountDescriptors.length; y++) {
          var descriptor = accountDescriptors[y];
          // Checks regex against defined descriptors
          if (new RegExp(descriptor.descriptor.join("|")).test(newAccount.description) && !describedRecord){ 
            // Populates new descriptor data into new account object
            newAccount.fromAccount = descriptor.fromAccount;
            newAccount.toAccount = descriptor.toAccount;
            newAccount.supplier = descriptor.supplier;
            newAccount.customer = descriptor.customer;
            newAccount.reference = descriptor.reference;
            outputAccounts.push(newAccount);
            describedRecord = true;
          }
        }
        // Adds the needs check reference to unknown accounts
        if(!describedRecord) {
          newAccount.reference = 'NEEDS CHECK';
          outputAccounts.push(newAccount);
        }
      }      
      // Checks if the number of outputted accoutns matches the inputted, logs to the console if not
      if(totalInputRecords - outputAccounts.length > 0) {console.log(totalInputRecords - outputAccounts.length + " unprocessed records..")}
      // Convert back to csv and export
      var newCsv = Papa.unparse(outputAccounts); 
      // Creates a download of the new CSV
      download(newCsv, "accounts.csv", "text/csv");
    }
  });
});
