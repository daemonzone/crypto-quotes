# crypto-quotes
A quick Bash/Node script to retrieve update Crypto Quotes from coinmarketcap.com 

## Requirements

- node v14.15.5
- expressjs
- mysql



## Components

**update_coins.sh**

​	A bash script that downloads a bunch of Json files from the CoinmarketCap Api (you need to configure your own API Key inside this script)

**update_db.js**

​	a Node script that parses the Json files retrieved by update_coins.sh and put them into a mysql database (you need to put your own mysql configuration into this script)

**server.js**

​	a quick server sharing the Json data on a socket, to test querying application without having to rely on CoinmarketCap official APIs (as soon as they have a daily usage limit)



_**db/coins_table.sql**_

​	a mysql dump of the "coins" table structure used by this project

## Example Usage

Gets the updated quotes from CoinmarketCap APIs

`$ ./update_coins.sh` 
  `% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current`
                                 `Dload  Upload   Total   Spent    Left  Speed`
`100 4493k    0 4493k    0     0  1477k      0 --:--:--  0:00:03 --:--:-- 1477k`
  `% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current`
                                 `Dload  Upload   Total   Spent    Left  Speed`
  `100 4541k    0 4541k    0     0   980k      0 --:--:--  0:00:04 --:--:-- 1019k`
  `Connected to MySQL`
  `Flushed`
  `Data Imported`
  `Data Imported`



Update local database with the last downloaded quotes (see previous script)

`$ node update_db.js` 
  `  Connected to MySQL`
  `  Flushed`
  `  Data Imported`
  `  Data Imported`