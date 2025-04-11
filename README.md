This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.env.local and .env.production were included in purpose in git/github, because it's a test project. In real-life projects they are not included in git/github.

For UI testing (E2E testintg) uses Cypress.
https://docs.cypress.io/app/get-started/open-the-app 

npm install cypress --save-dev
OR
npm install -D cypress

Start server (it needs to cypress works):
npm run dev

inside a project folder (root) call this command (if there is "cy:open": "cypress open" in Package.json)
npm run cy:open
OR
npm run cypress:open

The launchpad will be opened to test.

To test useing Cypress the app should be running (npm run dev).

https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test 

For unit testing - Vitest: npm i -D vitest
in package.json: "test": "vitest"
Unit test is not implemented in the project.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Imformation about Yahoo Finance API (ticker - info)
https://yfinance-python.org/reference/api/yfinance.Ticker.html#yfinance.Ticker

The example of the data recieving from Yahoo Finance API (ticker - info):

data {'
address1': '1600 Amphitheatre Parkway', 
'city': 'Mountain View', 
'state': 'CA', 
'zip': '94043', 
'country': 'United States', 
'phone': '650-253-0000', 
'website': 'https://abc.xyz', 
'industry': 'Internet Content & Information', 
'industryKey': 'internet-content-information', 
'industryDisp': 'Internet Content & Information', 
'sector': 'Communication Services', 
'sectorKey': 'communication-services', 
'sectorDisp': 'Communication Services', 
'longBusinessSummary': 'Alphabet Inc. offers various products and platforms in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America. It operates through Google Services, Google Cloud, and Other Bets segments. The Google Services segment provides products and services, including ads, Android, Chrome, devices, Gmail, Google Drive, Google Maps, Google Photos, Google Play, Search, and YouTube. It is also involved in the sale of apps and in-app purchases and digital content in the Google Play and YouTube; and devices, as well as in the provision of YouTube consumer subscription services. The Google Cloud segment offers AI infrastructure, Vertex AI platform, cybersecurity, data and analytics, and other services; Google Workspace that include cloud-based communication and collaboration tools for enterprises, such as Calendar, Gmail, Docs, Drive, and Meet; and other services for enterprise customers. The Other Bets segment sells healthcare-related and internet services. The company was incorporated in 1998 and is headquartered in Mountain View, California.', 
'fullTimeEmployees': 183323, 
'companyOfficers': [{'maxAge': 1, 'name': 'Mr. Sundar  Pichai', 'age': 51, 'title': 'CEO & Director', 'yearBorn': 1973, 'fiscalYear': 2023, 'totalPay': 8802824, 'exercisedValue': 0, 'unexercisedValue': 0}, {'maxAge': 1, 'name': 'Ms. Ruth M. Porat', 'age': 66, 'title': 'President & Chief Investment Officer', 'yearBorn': 1958, 'fiscalYear': 2023, 'totalPay': 2515700, 'exercisedValue': 0, 'unexercisedValue': 0}, {'maxAge': 1, 'name': 'Dr. Lawrence Edward Page II', 'age': 51, 'title': 'Co-Founder & Director', 'yearBorn': 1973, 'fiscalYear': 2023, 'totalPay': 1, 'exercisedValue': 0, 'unexercisedValue': 0}, {'maxAge': 1, 'name': 'Mr. Sergey  Brin', 'age': 50, 'title': 'Co-Founder & Director', 'yearBorn': 1974, 'fiscalYear': 2023, 'totalPay': 1, 'exercisedValue': 0, 'unexercisedValue': 0}, {'maxAge': 1, 'name': 'Mr. J. Kent Walker', 'age': 63, 'title': 'President of Global Affairs, Chief Legal Officer & Company Secretary', 'yearBorn': 1961, 'fiscalYear': 2023, 'totalPay': 2511737, 'exercisedValue': 0, 'unexercisedValue': 0}, {'maxAge': 1, 'name': 'Dr. Prabhakar  Raghavan', 'age': 63, 'title': 'Senior Vice President of Knowledge and Information - Google', 'yearBorn': 1961, 'fiscalYear': 2023, 'totalPay': 2511737, 'exercisedValue': 0, 'unexercisedValue': 0}, {'maxAge': 1, 'name': 'Mr. Philipp  Schindler', 'age': 53, 'title': 'Senior Vice President & Chief Business Officer of Google', 'yearBorn': 1971, 'fiscalYear': 2023, 'totalPay': 2514032, 'exercisedValue': 0, 'unexercisedValue': 0}, {'maxAge': 1, 'name': 'Ms. Anat  Ashkenazi', 'age': 51, 'title': 'Senior VP & CFO', 'yearBorn': 1973, 'fiscalYear': 2023, 'exercisedValue': 0, 'unexercisedValue': 0}, {'maxAge': 1, 'name': "Ms. Amie Thuener O'Toole", 'age': 48, 'title': 'Corporate Controller, Chief Accounting Officer & VP', 'yearBorn': 1976, 'fiscalYear': 2023, 'exercisedValue': 0, 'unexercisedValue': 0}, {'maxAge': 1, 'name': 'Ms. Ellen  West', 'title': 'Vice President of Investor Relations', 'fiscalYear': 2023, 'exercisedValue': 0, 'unexercisedValue': 0}], 'compensationAsOfEpochDate': 1703980800, 'executiveTeam': [], 'maxAge': 86400, 'priceHint': 2, 'previousClose': 146.58, 'open': 146.345, 'dayLow': 145.82, 'dayHigh': 161.87, 'regularMarketPreviousClose': 146.58, 'regularMarketOpen': 146.345, 'regularMarketDayLow': 145.82, 'regularMarketDayHigh': 161.87, 'dividendRate': 0.8, 'dividendYield': 0.54, 'exDividendDate': 1741564800, 'payoutRatio': 0.0746, 'beta': 1.035, 'trailingPE': 20.032337, 'forwardPE': 17.995531, 
'volume': 46063012, 
'regularMarketVolume': 46063012, 
'averageVolume': 21818324, 
'averageVolume10days': 32504280, 
'averageDailyVolume10Day': 32504280, 
'bid': 151.28, 
'ask': 169.45, 
'bidSize': 1, 
'askSize': 1, 
'marketCap': 1947585871872, 
'fiftyTwoWeekLow': 142.66, 
'fiftyTwoWeekHigh': 208.7, 
'priceToSalesTrailing12Months': 5.5642447, 
'fiftyDayAverage': 174.624, 
'twoHundredDayAverage': 175.56345, 
'trailingAnnualDividendRate': 0.8, 
'trailingAnnualDividendYield': 0.0054577705, 
'currency': 'USD', 
'tradeable': False, 
'enterpriseValue': 1733430607872, 
'profitMargins': 0.28604, 
'floatShares': 10917851600, 
'sharesOutstanding': 5496999936, 'sharesShort': 44488045, 'sharesShortPriorMonth': 43612089, 'sharesShortPreviousMonthDate': 1739491200, 'dateShortInterest': 1741910400, 'sharesPercentSharesOut': 0.0037, 'heldPercentInsiders': 0.00024000001, 'heldPercentInstitutions': 0.61579, 'shortRatio': 2.16, 'impliedSharesOutstanding': 12332499968, 'bookValue': 26.622, 'priceToBook': 6.0498834, 'lastFiscalYearEnd': 1735603200, 'nextFiscalYearEnd': 1767139200, 'mostRecentQuarter': 1735603200, 'earningsQuarterlyGrowth': 0.283, 'netIncomeToCommon': 100118003712, 'trailingEps': 8.04, 'forwardEps': 8.95, 'lastSplitFactor': '20:1', 'lastSplitDate': 1658102400, 'enterpriseToRevenue': 4.952, 'enterpriseToEbitda': 13.386, '52WeekChange': 0.001679182, 'SandP52WeekChange': 0.049593568, 
'lastDividendValue': 0.2, 
'lastDividendDate': 1741564800, 
'quoteType': 'EQUITY', 
'currentPrice': 161.06, 
'targetHighPrice': 237.0, 'targetLowPrice': 180.0, 'targetMeanPrice': 213.375, 'targetMedianPrice': 217.5, 'recommendationMean': 1.56716, 'recommendationKey': 'buy', 'numberOfAnalystOpinions': 16, 'totalCash': 95657000960, 'totalCashPerShare': 7.847, 'ebitda': 129496997888, 'totalDebt': 28137000960, 'quickRatio': 1.661, 'currentRatio': 1.837, 
'totalRevenue': 350018011136, 'debtToEquity': 8.655, 'revenuePerShare': 28.413, 'returnOnAssets': 0.1674, 'returnOnEquity': 0.32908002, 'grossProfits': 203712004096, 'freeCashflow': 56580751360, 'operatingCashflow': 125298999296, 'earningsGrowth': 0.309, 'revenueGrowth': 0.118, 'grossMargins': 0.582, 'ebitdaMargins': 0.36997002, 'operatingMargins': 0.33967, 'financialCurrency': 'USD', 
'symbol': 'GOOG', 
'language': 'en-US', 
'region': 'US', 'typeDisp': 'Equity', 
'quoteSourceName': 'Nasdaq Real Time Price', 'triggerable': True, 'customPriceAlertConfidence': 'HIGH', 
'marketState': 'PREPRE', 
'longName': 'Alphabet Inc.', 
'postMarketTime': 1744243188, 'regularMarketTime': 1744228803, 'exchange': 'NMS', 'messageBoardId': 'finmb_29096', 
'exchangeTimezoneName': 'America/New_York', 'exchangeTimezoneShortName': 'EDT', 'gmtOffSetMilliseconds': -14400000, 'market': 'us_market', 'esgPopulated': False, 'regularMarketChangePercent': 9.878562, 'regularMarketPrice': 161.06, 'corporateActions': [], 'fiftyTwoWeekLowChangePercent': 0.12897794, 'fiftyTwoWeekRange': '142.66 - 208.7', 'fiftyTwoWeekHighChange': -47.64, 'fiftyTwoWeekHighChangePercent': -0.22827025, 'fiftyTwoWeekChangePercent': 0.1679182, 'dividendDate': 1742169600, 'earningsTimestamp': 1738702800, 'earningsTimestampStart': 1745438400, 'earningsTimestampEnd': 1745870400, 'earningsCallTimestampStart': 1738704600, 'earningsCallTimestampEnd': 1738704600, 'isEarningsDateEstimate': True, 'epsTrailingTwelveMonths': 8.04, 'epsForward': 8.95, 'epsCurrentYear': 8.97629, 'priceEpsCurrentYear': 17.942825, 'fiftyDayAverageChange': -13.563995, 'fiftyDayAverageChangePercent': -0.07767544, 'twoHundredDayAverageChange': -14.5034485, 'twoHundredDayAverageChangePercent': -0.08261087, 'sourceInterval': 15, 'exchangeDataDelayedBy': 0, 'averageAnalystRating': '1.6 - Buy', 
'cryptoTradeable': False, 
'shortName': 'Alphabet Inc.', 
'hasPrePostMarketData': True, 
'firstTradeDateMilliseconds': 1092922200000, 'postMarketChangePercent': 0.142801, 'postMarketPrice': 161.29, 'postMarketChange': 0.229996, 'regularMarketChange': 14.479996, 'regularMarketDayRange': '145.82 - 161.87', 
'fullExchangeName': 'NasdaqGS', 
'averageDailyVolume3Month': 21818324, 'fiftyTwoWeekLowChange': 18.399994, 
'displayName': 'Alphabet', 'trailingPegRatio': 1.16}