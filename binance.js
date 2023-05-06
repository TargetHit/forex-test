class BinanceDatafeed {
    constructor(options) {
      this.binanceHost = "https://api.binance.com";
      this.debug = options.debug || false;

      // Headers required to use the Launchpad product.
      this.edgeHeaders = {
          // X-Polygon-Edge-ID is a required Launchpad header. It identifies the Edge User requesting data.
          "X-Polygon-Edge-ID": "12345678asde3",
          // X-Polygon-Edge-IP-Address is a required Launchpad header. It denotes the originating IP Address of the Edge User requesting data.
         "X-Polygon-Edge-IP-Address": "192.0.2.1",
      };

      this.symbols = [];
      this.polygonLastPrice;

    }

    
  
    async binanceServerTime() {
      try {
        const response = await fetch(`${this.binanceHost}/api/v3/time`);
        const json = await response.json();
        if (this.debug) {
          console.log(json);
        }
        return json.serverTime;
      } catch (error) {
        console.error(error);
        throw new Error("Unable to fetch Binance server time.");
      }
    }
  
    async binanceSymbols() {
      try {
        const response = await fetch(`${this.binanceHost}/api/v3/exchangeInfo`);
        const json = await response.json();
        if (this.debug) {
          console.log(json);
        }
        return json.symbols;
      } catch (error) {
        console.error(error);
        throw new Error("Unable to fetch Binance symbols.");
      }
    }

    async polygonStockSymbols() {
      const url = `https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&limit=1000&apiKey=rgfIWHrh6t65VyG5a_EscqykpLB9EtJL`;
      try {
        const response = await fetch(url, { headers: this.edgeHeaders });
        const json = await response.json();
        return json.results;
      } catch (error) {
        console.error(error);
        throw new Error(`Unable to fetch Stock symbols.`);
      }
    }

    async polygonForexSymbols() {
      const url = `https://api.polygon.io/v3/reference/tickers?market=fx&active=true&limit=1000&apiKey=rgfIWHrh6t65VyG5a_EscqykpLB9EtJL`;
      try {
        const response = await fetch(url, { headers: this.edgeHeaders });
        const json = await response.json();
        return json.results;
      } catch (error) {
        console.error(error);
        throw new Error(`Unable to fetch Forex symbols.`);
      }
    }
  
    async binanceKlines(symbol, interval, startTime, endTime, limit) {
      const url = `${this.binanceHost}/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}&startTime=${startTime}&endTime=${endTime}`;
      try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
      } catch (error) {
        console.error(error);
        throw new Error(`Unable to fetch klines for symbol ${symbol}.`);
      }
    }

    async polygonKlines(
      symbol,
      interval,
      startTime,
      endTime,
      limit
    ) {
      const url = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/${interval.multiplier}/${interval.interval}/${startTime}/${endTime}?sort=asc&limit=500&apiKey=rgfIWHrh6t65VyG5a_EscqykpLB9EtJL`;
      try {
        const response = await fetch(url, { headers: this.edgeHeaders });
        const json = await response.json();
        return json.results;
      } catch (error) {
        console.error(error);
        throw new Error(`Unable to fetch klines for symbol ${symbol}.`);
      }
    }

     startOfMinute(unixTimeMs) {
      const date = new Date(unixTimeMs);
      date.setSeconds(0);
      date.setMilliseconds(0);
      return date.getTime();
    }

    tvTFConverter(tf) {
      switch (tf) {
        case "1S":
          var convertedInterval = {
            multiplier: 1,
            interval: "second",
          };
          return convertedInterval;
        case "5S":
          var convertedInterval = {
            multiplier: 5,
            interval: "second",
          };
          return convertedInterval;
        case "15S":
          var convertedInterval = {
            multiplier: 15,
            interval: "second",
          };
          return convertedInterval;
        case "30S":
          var convertedInterval = {
            multiplier: 30,
            interval: "second",
          };
          return convertedInterval;
        case "1":
          var convertedInterval = {
            multiplier: 1,
            interval: "minute",
          };
          return convertedInterval;
        case "3":
          var convertedInterval = {
            multiplier: 3,
            interval: "minute",
          };
          return convertedInterval;
        case "5":
          var convertedInterval = {
            multiplier: 5,
            interval: "minute",
          };
          return convertedInterval;
        case "15":
          var convertedInterval = {
            multiplier: 15,
            interval: "minute",
          };
          return convertedInterval;
        case "30":
          var convertedInterval = {
            multiplier: 30,
            interval: "minute",
          };
          return convertedInterval;
        case "45":
          var convertedInterval = {
            multiplier: 45,
            interval: "minute",
          };
          return convertedInterval;
        case "60":
          var convertedInterval = {
            multiplier: 1,
            interval: "hour",
          };
          return convertedInterval;
        case "120":
          var convertedInterval = {
            multiplier: 2,
            interval: "hour",
          };
          return convertedInterval;
        case "180":
          var convertedInterval = {
            multiplier: 3,
            interval: "hour",
          };
          return convertedInterval;
        case "240":
          var convertedInterval = {
            multiplier: 4,
            interval: "hour",
          };
          return convertedInterval;
        case "720":
          var convertedInterval = {
            multiplier: 12,
            interval: "hour",
          };
          return convertedInterval;
        case "1D":
          var convertedInterval = {
            multiplier: 1,
            interval: "day",
          };
          return convertedInterval;
        case "1W":
          var convertedInterval = {
            multiplier: 1,
            interval: "week",
          };
          return convertedInterval;
        case "1M":
          var convertedInterval = {
            multiplier: 1,
            interval: "month",
          };
          return convertedInterval;
      }
    }
  
    async onReady(callback) {
      try {
        const symbols = await this.binanceSymbols();
        const stockSymbols = await this.polygonStockSymbols();
        const forexSymbols = await this.polygonForexSymbols();
        this.symbols = this.symbols.concat(symbols);
        this.symbols = this.symbols.concat(stockSymbols);
        this.symbols = this.symbols.concat(forexSymbols);

        console.log("Symbols", this.symbols);
        callback({
          supports_search: true,
          supports_group_request: false,
          supports_marks: true,
          supports_timescale_marks: true,
          supports_time: true,
          exchanges: [
              { value: "", name: "All Exchanges", desc: "" },
              { value: "NYSE", name: "NYSE", desc: "NYSE" },
              { value: "Binance", name: "Binance", desc: "Binance" },
              { value: "IBIS", name: "IBIS", desc: "IBIS" },
              { value: "NASDAQ", name: "NASDAQ", desc: "NASDAQ" },
          ],
          symbols_types: [
              { name: "All types", value: "" },
              { name: "Stocks", value: "stocks" },
              { name: "Crypto", value: "Crypto" },
              { name: "Forex", value: "fx" }
          ],
          supported_resolutions: [
            "1",
            "3",
            "5",
            "15",
            "30",
            "60",
            "120",
            "240",
            "360",
            "480",
            "720",
            "1D",
            "3D",
            "1W",
            "1M",
          ]
        });
      } catch (error) {
        console.error(error);
        throw new Error("Unable to initialize Binance datafeed.");
      }
    }
  
    async searchSymbols(userInput, exchange, symbolType, onResultReadyCallback) {
      userInput = userInput.toUpperCase();
      onResultReadyCallback(
        this.symbols
          .filter((symbol) => {
            if(symbol.symbol != undefined){
              return symbol.symbol.indexOf(userInput) >= 0;
            }else{
              return symbol.ticker.indexOf(userInput) >= 0;
            }
            
          })
          .map((symbol) => {
            if(symbol.symbol != undefined){
              //this signifies a binance symbol
              return {
                symbol: symbol.symbol,
                full_name: symbol.symbol,
                description: symbol.baseAsset + " / " + symbol.quoteAsset,
                ticker: symbol.symbol,
                exchange: "Binance", //symbol.exchange
                type: "Crypto", //symbol.symbolType
              };
            }else{
              //this signifies a polygon symbol
              return {
                symbol: symbol.ticker,
                full_name: symbol.name,
                description: symbol.market + " / " + symbol.locale + " - " + symbol.currency_name,
                ticker: symbol.ticker,
                exchange: symbol.primary_exchange, //symbol.exchange
                type: symbol.market, //symbol.symbolType
              };
            }
          })
      );
    }
  
    async resolveSymbol(
      symbolName,
      onSymbolResolvedCallback,
      onResolveErrorCallback
    ) {
      this.debug && console.log("resolveSymbol:", symbolName);      
      
      function pricescale(symbol) {
        for (let filter of symbol.filters) {
          if (filter.filterType === "PRICE_FILTER") {
            return Math.round(1 / parseFloat(filter.tickSize));
          }
        }
        return 1;
      }
  
      for (let symbol of this.symbols) {
        if(symbol.symbol != undefined){
          if (symbol.symbol === symbolName) {
            setTimeout(() => {
              onSymbolResolvedCallback({
                name: symbol.symbol,
                full_name: symbol.symbol,
                description: symbol.baseAsset + " / " + symbol.quoteAsset,
                ticker: symbol.symbol,
                exchange: "Binance",//symbol.exchange
                listed_exchange: "Binance",//symbol.exchange
                type: "crypto",//symbol.type
                session: "24x7",
                //format: "price",
                minmov: 1,
                pricescale: pricescale(symbol),
                timezone: "Etc/UTC",
                has_intraday: true,
                has_daily: true,
                has_weekly_and_monthly: true,
                currency_code: symbol.quoteAsset,
                data_status: 'streaming',
              });
            }, 0);
            return;
          }
        }else{
          if (symbol.ticker === symbolName) {
            setTimeout(() => {
              onSymbolResolvedCallback({
                name: symbol.ticker,
                full_name: symbol.ticker,
                description: symbol.ticker + " / " + symbol.market,
                ticker: symbol.ticker,
                exchange: symbol.primary_exchange,//symbol.exchange
                listed_exchange: symbol.primary_exchange,//symbol.exchange
                type: symbol.market,//symbol.type
                session: "24x7",
                //format: "price",
                minmov: 1,
                pricescale: 100000,
                timezone: "Etc/UTC",
                has_intraday: true,
                has_daily: true,
                has_weekly_and_monthly: true,
                currency_code: symbol.quoteAsset,
                //data_status: 'streaming',
              });
            }, 0);
            return;
          }
        }
      }
  
      onResolveErrorCallback("not found");
    }
  
    async getBars(symbolInfo, resolution, periodParams, onResult, onError) {
      console.log("Called Get bars");
      console.log("Resolution", resolution);
      console.log("Symbol Info", symbolInfo);

      console.log("from_time =", periodParams.from * 1000);
      console.log("to_time =", periodParams.to * 1000);

      if (symbolInfo.type == 'crypto'){
        var interval = {
          1: "1m",
          3: "3m",
          5: "5m",
          15: "15m",
          30: "30m",
          60: "1h",
          120: "2h",
          240: "4h",
          360: "6h",
          480: "8h",
          720: "12h",
          D: "1d",
          "1D": "1d",
          "3D": "3d",
          W: "1w",
          "1W": "1w",
          M: "1M",
          "1M": "1M",
        }[resolution];

        const getKlines = (from, to) => {
          this.binanceKlines(symbolInfo.name, interval, from, to, 500)
            .then((klines) => {
              totalKlines = totalKlines.concat(klines);
    
              console.log("klines", klines);
    
              if (klines.length === 500) {
                from = klines[klines.length - 1][0] + 1;
                getKlines(from, to);
              } else {
                finishKlines();
              }
            })
            .catch((err) => {
              console.error(err);
              onError("Some problem");
            });
        };

        var from_time = periodParams.from * 1000;
        var to_time = periodParams.to * 1000;
    
        getKlines(from_time, to_time);
      }else{
        interval = this.tvTFConverter(resolution);
        console.log("Converted Interval",interval);
        const getKlines = (from, to) => {
          this.polygonKlines(symbolInfo.name, interval, from, to, 500)
            .then((klines) => {
              totalKlines = totalKlines.concat(klines);
    
              console.log("klines", klines);
              if(klines != undefined){
                if (klines.length === 500) {
                  from = klines[klines.length - 1].t + 1;
                  getKlines(from, to);
                } else {
                  finishKlines();
                }
              }
            })
            .catch((err) => {
              console.error(err);
              onError("Some problem");
            });
        };

        var from_time = periodParams.from * 1000;
        var to_time = periodParams.to * 1000;
  
        getKlines(from_time, to_time);
      }
  
      let totalKlines = [];
  
      const finishKlines = () => {
        if (this.debug) {
          console.log("Total Klines", totalKlines.length);
        }
  
        if (totalKlines.length === 0) {
          onResult([], { noData: true });
        } else {
          onResult(
            totalKlines.map((kline) => {
              //console.log("Kline", kline);
              if(kline.t != undefined){
                return {
                  time: kline.t,
                  open: kline.o,
                  high: kline.h,
                  low: kline.l,
                  close: kline.c,
                  volume: kline.v,
                };
              }else{
                return {
                  time: kline[0],
                  open: parseFloat(kline[1]),
                  high: parseFloat(kline[2]),
                  low: parseFloat(kline[3]),
                  close: parseFloat(kline[4]),
                  volume: parseFloat(kline[5]),
                };
              }
            }),
            {
              noData: false,
            }
          );
        }
      };
  
      
    }
  
    async subscribeBars(
      symbolInfo,
      resolution,
      onRealtimeCallback,
      subscriberUID,
      onResetCacheNeededCallback
    ) {
      
      console.log("Called Subscribe bars");
      
      if(symbolInfo.type == "crypto"){
        const interval = {
          1: "1m",
          3: "3m",
          5: "5m",
          15: "15m",
          30: "30m",
          60: "1h",
          120: "2h",
          240: "4h",
          360: "6h",
          480: "8h",
          720: "12h",
          D: "1d",
          "1D": "1d",
          "3D": "3d",
          W: "1w",
          "1W": "1w",
          M: "1M",
          "1M": "1M",
        }[resolution];
  
        const websocket = new WebSocket("wss://stream.binance.com:9443/ws");
    
        websocket.onopen = () => {
          websocket.send(
            JSON.stringify({
              method: "SUBSCRIBE",
              //params: [`${symbolInfo.name.toLowerCase()}@ticker`],
              params: [`${symbolInfo.name.toLowerCase()}@kline_${interval}`],
              id: 1,
            })
          );
        };
  
        let lastBar = null;
  
        websocket.onmessage = (event) => {
          const message = JSON.parse(event.data);
    
          if (
            message.e === "kline" &&
            message.k.i === interval &&
            message.k.s === symbolInfo.name
          ) {
            const kline = message.k;
            const bar = {
              time: kline.t,
              open: parseFloat(kline.o),
              high: parseFloat(kline.h),
              low: parseFloat(kline.l),
              close: parseFloat(kline.c),
              volume: parseFloat(kline.v),
            };
    
            if (!lastBar || bar.time > lastBar.time) {
              lastBar = bar;
              onRealtimeCallback(bar);
            } else if (bar.time === lastBar.time) {
              lastBar = bar;
              onRealtimeCallback(bar);
            }
          }
        };
  
        websocket.onerror = (event) => {
          console.error(event);
        };
    
        websocket.onclose = () => {
          console.log("WebSocket closed");
        };
      }else{
        //this is a polygon symbol
        setInterval(async () => {
          console.log("Polygon Symbol");
          const interval = this.tvTFConverter(resolution);
          const symbol = symbolInfo.ticker;
          const d = new Date(Date.now() - 200000);
          const d2 = new Date(Date.now());
          const startDate = [
            d.getFullYear(),
            ("0" + (d.getMonth() + 1)).slice(-2),
            ("0" + d.getDate()).slice(-2),
          ].join("-");
          const endDate = [
            d2.getFullYear(),
            ("0" + (d2.getMonth() + 1)).slice(-2),
            ("0" + d2.getDate()).slice(-2),
          ].join("-");

          console.log(startDate);
          console.log(endDate);

          // Define the API requests
          const urlSummaries = `https://api.polygon.io/v1/summaries?ticker.any_of=${symbol}&apiKey=rgfIWHrh6t65VyG5a_EscqykpLB9EtJL`;
          const urlBars = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/minute/2023-05-01/${endDate}?sort=desc&limit=1&apiKey=rgfIWHrh6t65VyG5a_EscqykpLB9EtJL`;

          try {
            // Make both API requests in parallel
            const [responseSummaries, responseBars] = await Promise.all([
              fetch(urlSummaries, { headers: this.edgeHeaders }),
              fetch(urlBars, { headers: this.edgeHeaders }),
            ]);

            const jsonSummaries = await responseSummaries.json();
            const jsonBars = await responseBars.json();

            console.log("Polygon Summaries: ", jsonSummaries);
            console.log("Polygon Bars: ", jsonBars);

            // Extract the latest price from the summaries response data
            const lastBarSummaries =
              jsonSummaries.results[jsonSummaries.results.length - 1];
            // Extract the latest bar data from the bars response data
            const lastBar = jsonBars.results[jsonBars.results.length - 1];
            this.polygonLastPrice = lastBar.c;

            // Create the final bar object with the data from both responses
            const timeMS = this.startOfMinute(Math.floor(
              lastBarSummaries.last_updated / 1000000
            ));

            const bar = {
              time: timeMS,
              low: lastBar.l,
              high: lastBar.h,
              open: lastBar.c,
              close: lastBarSummaries.price,
              volume: lastBar.v,
            };

            // Output the bar
            onRealtimeCallback(bar);
          } catch (error) {
            console.error(error);
            throw new Error(`Unable to fetch klines for symbol ${symbol}.`);
          }
        }, 1000);
      }


    }
  
    unsubscribeBars(subscriberUID) {
      this.debug && console.log("unsubscribeBars:", subscriberUID);
    }
  
    getServerTime(callback) {
      this.binanceServerTime()
        .then((time) => {
          callback(Math.floor(time / 1000));
        })
        .catch((err) => {
          console.error(err);
        });
    }

    async getQuotes(symbols, onDataCallback, onErrorCallback){
      console.log("QUOTE SYMBOLS", symbols);
      var url_params = "%5B";
      for(let i=0; i< symbols.length; i++){
       url_params += "%22"+symbols[i]+"%22"
       if(symbols.length - i > 1){
        url_params += ","
       }
      }
      url_params += "%5D";

      //const url = this.binanceHost+'/api/v3/ticker/24hr?symbols='+url_params;
      const url = "https://api.polygon.io/v1/summaries?ticker.any_of=AAPL&apiKey=rgfIWHrh6t65VyG5a_EscqykpLB9EtJL";
      try {
        const response = await fetch(url,{ headers: this.edgeHeaders });
        const json = await response.json();
        console.log("Quotes JSON ", json);

        var quote_array = [];
        //use a single callback instead of looping and creating multiple callbacks
        for (let j of json.results) {
          //construct the array that gets passed to the onDataCallBack()
          let quoteObj = 
          {
            s: "ok",
            n : j.symbol,
            v : {
              ch :j.session.change,// parseFloat( j.priceChange),
              chp : j.session.change_percent, //parseFloat(j.priceChangePercent),
              lp : j.price//parseFloat(j.lastPrice)
            }
          }

          quote_array.push(quoteObj);

        }

        onDataCallback(quote_array); 
        
        
        //return json;
      } catch (error) {
        console.error(error);
        throw new Error(`Unable to fetch quotes.`);
      }

    }
    
    
    async subscribeQuotes(symbols, fastSymbols, onRealtimeCallback, listenerGUID){

      const websocket = new WebSocket("wss://stream.binance.com:9443/ws");
      
      var binance_params = [];
      var polygon_params = [];

      for(let i=0; i< symbols.length; i++){
        var symbolInput = symbols[i];
        var symbol = this.symbols.find((symbol) => {
          if(symbol.symbol != undefined){
            return symbol.symbol == symbolInput;
          }else{
            return symbol.ticker == symbolInput;
          }
          
        });

        if (symbol.symbol != undefined){
          //this is a crypto
      
          let param = symbols[i].toLowerCase() + "@ticker";
          binance_params.push(param);

        }else{
          //this is a polygon symbol
          let param = symbols[i].toLowerCase();
          polygon_params.push(param);
        }


      }

      websocket.onopen = () => {
        websocket.send(
          JSON.stringify({
            method: "SUBSCRIBE",
            params: binance_params,
            //params: [`ltcbtc@ticker`,`ethbtc@ticker`],
            //params: [`${symbolInfo.name.toLowerCase()}@kline_${interval}`],
            id: 1,
          })
        );
      };

      websocket.onmessage = (event) => {
        const message = JSON.parse(event.data);
  
      
          const quote = {
            s: "ok",
            n: message.s,
            v: {
              ch : parseFloat( message.p),
              chp : parseFloat(message.P),
              lp : parseFloat(message.c)
            }
            
          };
  
          onRealtimeCallback([quote]);
          
      };
  
      websocket.onerror = (event) => {
        console.error(event);
      };
  
      websocket.onclose = () => {
        console.log("WebSocket closed");
      };
      
      var url_params = polygon_params.toString().toUpperCase();
      const quoter = async() => {
        const url = `https://api.polygon.io/v1/summaries?ticker.any_of=${url_params}&apiKey=rgfIWHrh6t65VyG5a_EscqykpLB9EtJL`;
        try {
          const response = await fetch(url,{ headers: this.edgeHeaders });
          const json = await response.json();
          console.log("Quotes JSON ", json);

          var quote_array = [];
          //use a single callback instead of looping and creating multiple callbacks
          for (let j of json.results) {
            //construct the array that gets passed to the onDataCallBack()
            let quoteObj = 
            {
              s: "ok",
              n : j.ticker,
              v : {
                ch :j.session.change,// parseFloat( j.priceChange),
                chp : j.session.change_percent, //parseFloat(j.priceChangePercent),
                lp : j.price//parseFloat(j.lastPrice)
              }
            }

            quote_array.push(quoteObj);

          }

          onRealtimeCallback(quote_array); 
          //return json;
        } catch (error) {
          console.error(error);
          throw new Error(`Unable to fetch quotes.`);
        }
      
      }
      quoter();
      setInterval(quoter,3000);
      

      /**
      const websocket = new WebSocket("wss://stream.binance.com:9443/ws");
      
      var url_params = [];
      
      for(let i=0; i< symbols.length; i++){
       let param = symbols[i].toLowerCase() + "@ticker";
       url_params.push(param);
      }
      
      websocket.onopen = () => {
        websocket.send(
          JSON.stringify({
            method: "SUBSCRIBE",
            params: url_params,
            //params: [`ltcbtc@ticker`,`ethbtc@ticker`],
            //params: [`${symbolInfo.name.toLowerCase()}@kline_${interval}`],
            id: 1,
          })
        );
      };

      websocket.onmessage = (event) => {
        const message = JSON.parse(event.data);
  
      
          const quote = {
            s: "ok",
            n: message.s,
            v: {
              ch : parseFloat( message.p),
              chp : parseFloat(message.P),
              lp : parseFloat(message.c)
            }
            
          };
  
          onRealtimeCallback([quote]);
          
      };
  
      websocket.onerror = (event) => {
        console.error(event);
      };
  
      websocket.onclose = () => {
        console.log("WebSocket closed");
      };

       */

    }

    unsubscribeQuotes(listenerGUID){
      
      console.log("Called Unsub Quotes")
      

    }

  }