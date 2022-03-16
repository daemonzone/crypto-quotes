#!/bin/bash

CURL=$(which curl)
NODE=$(which node)

# CoinMarketCap API Key
APIKEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# USD
$CURL -H "X-CMC_PRO_API_KEY: ${APIKEY}" -H "Accept: application/json" -d "start=1&limit=5000&convert=USD" -G https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest -o data/coins_usd.json

# EUR
$CURL -H "X-CMC_PRO_API_KEY: ${APIKEY}" -H "Accept: application/json" -d "start=1&limit=5000&convert=EUR" -G https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest -o data/coins_eur.json


$NODE update_db.js
