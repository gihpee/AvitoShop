/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 195.0, "minX": 0.0, "maxY": 8356.0, "series": [{"data": [[0.0, 195.0], [0.1, 195.0], [0.2, 195.0], [0.3, 196.0], [0.4, 196.0], [0.5, 196.0], [0.6, 196.0], [0.7, 196.0], [0.8, 196.0], [0.9, 196.0], [1.0, 196.0], [1.1, 196.0], [1.2, 196.0], [1.3, 196.0], [1.4, 196.0], [1.5, 196.0], [1.6, 196.0], [1.7, 196.0], [1.8, 196.0], [1.9, 196.0], [2.0, 197.0], [2.1, 197.0], [2.2, 197.0], [2.3, 197.0], [2.4, 197.0], [2.5, 197.0], [2.6, 197.0], [2.7, 197.0], [2.8, 197.0], [2.9, 197.0], [3.0, 197.0], [3.1, 197.0], [3.2, 197.0], [3.3, 197.0], [3.4, 197.0], [3.5, 197.0], [3.6, 197.0], [3.7, 197.0], [3.8, 197.0], [3.9, 197.0], [4.0, 197.0], [4.1, 197.0], [4.2, 197.0], [4.3, 197.0], [4.4, 197.0], [4.5, 197.0], [4.6, 197.0], [4.7, 197.0], [4.8, 197.0], [4.9, 197.0], [5.0, 197.0], [5.1, 197.0], [5.2, 197.0], [5.3, 197.0], [5.4, 197.0], [5.5, 197.0], [5.6, 197.0], [5.7, 197.0], [5.8, 197.0], [5.9, 197.0], [6.0, 197.0], [6.1, 197.0], [6.2, 197.0], [6.3, 197.0], [6.4, 197.0], [6.5, 197.0], [6.6, 197.0], [6.7, 198.0], [6.8, 198.0], [6.9, 198.0], [7.0, 198.0], [7.1, 198.0], [7.2, 198.0], [7.3, 198.0], [7.4, 198.0], [7.5, 198.0], [7.6, 198.0], [7.7, 198.0], [7.8, 198.0], [7.9, 198.0], [8.0, 198.0], [8.1, 198.0], [8.2, 198.0], [8.3, 198.0], [8.4, 198.0], [8.5, 198.0], [8.6, 198.0], [8.7, 198.0], [8.8, 198.0], [8.9, 198.0], [9.0, 198.0], [9.1, 198.0], [9.2, 198.0], [9.3, 198.0], [9.4, 198.0], [9.5, 198.0], [9.6, 198.0], [9.7, 198.0], [9.8, 198.0], [9.9, 198.0], [10.0, 198.0], [10.1, 198.0], [10.2, 198.0], [10.3, 198.0], [10.4, 198.0], [10.5, 198.0], [10.6, 198.0], [10.7, 198.0], [10.8, 198.0], [10.9, 198.0], [11.0, 198.0], [11.1, 198.0], [11.2, 198.0], [11.3, 198.0], [11.4, 198.0], [11.5, 198.0], [11.6, 198.0], [11.7, 198.0], [11.8, 198.0], [11.9, 198.0], [12.0, 198.0], [12.1, 198.0], [12.2, 198.0], [12.3, 198.0], [12.4, 198.0], [12.5, 198.0], [12.6, 198.0], [12.7, 199.0], [12.8, 199.0], [12.9, 199.0], [13.0, 199.0], [13.1, 199.0], [13.2, 199.0], [13.3, 199.0], [13.4, 199.0], [13.5, 199.0], [13.6, 199.0], [13.7, 199.0], [13.8, 199.0], [13.9, 199.0], [14.0, 199.0], [14.1, 199.0], [14.2, 199.0], [14.3, 199.0], [14.4, 199.0], [14.5, 199.0], [14.6, 199.0], [14.7, 199.0], [14.8, 199.0], [14.9, 199.0], [15.0, 199.0], [15.1, 199.0], [15.2, 199.0], [15.3, 199.0], [15.4, 199.0], [15.5, 199.0], [15.6, 199.0], [15.7, 199.0], [15.8, 199.0], [15.9, 199.0], [16.0, 199.0], [16.1, 199.0], [16.2, 199.0], [16.3, 199.0], [16.4, 199.0], [16.5, 199.0], [16.6, 199.0], [16.7, 199.0], [16.8, 199.0], [16.9, 199.0], [17.0, 199.0], [17.1, 199.0], [17.2, 199.0], [17.3, 199.0], [17.4, 199.0], [17.5, 199.0], [17.6, 199.0], [17.7, 199.0], [17.8, 199.0], [17.9, 199.0], [18.0, 199.0], [18.1, 199.0], [18.2, 199.0], [18.3, 199.0], [18.4, 199.0], [18.5, 199.0], [18.6, 199.0], [18.7, 199.0], [18.8, 199.0], [18.9, 199.0], [19.0, 199.0], [19.1, 199.0], [19.2, 199.0], [19.3, 199.0], [19.4, 199.0], [19.5, 199.0], [19.6, 200.0], [19.7, 200.0], [19.8, 200.0], [19.9, 200.0], [20.0, 200.0], [20.1, 200.0], [20.2, 200.0], [20.3, 200.0], [20.4, 200.0], [20.5, 200.0], [20.6, 200.0], [20.7, 200.0], [20.8, 200.0], [20.9, 200.0], [21.0, 200.0], [21.1, 200.0], [21.2, 200.0], [21.3, 200.0], [21.4, 200.0], [21.5, 200.0], [21.6, 200.0], [21.7, 200.0], [21.8, 200.0], [21.9, 200.0], [22.0, 200.0], [22.1, 200.0], [22.2, 200.0], [22.3, 200.0], [22.4, 200.0], [22.5, 200.0], [22.6, 200.0], [22.7, 200.0], [22.8, 200.0], [22.9, 200.0], [23.0, 200.0], [23.1, 200.0], [23.2, 200.0], [23.3, 200.0], [23.4, 200.0], [23.5, 200.0], [23.6, 200.0], [23.7, 200.0], [23.8, 200.0], [23.9, 200.0], [24.0, 200.0], [24.1, 200.0], [24.2, 200.0], [24.3, 200.0], [24.4, 200.0], [24.5, 200.0], [24.6, 200.0], [24.7, 200.0], [24.8, 200.0], [24.9, 200.0], [25.0, 200.0], [25.1, 200.0], [25.2, 200.0], [25.3, 200.0], [25.4, 200.0], [25.5, 200.0], [25.6, 200.0], [25.7, 200.0], [25.8, 200.0], [25.9, 200.0], [26.0, 200.0], [26.1, 200.0], [26.2, 200.0], [26.3, 200.0], [26.4, 200.0], [26.5, 200.0], [26.6, 200.0], [26.7, 200.0], [26.8, 200.0], [26.9, 200.0], [27.0, 201.0], [27.1, 201.0], [27.2, 201.0], [27.3, 201.0], [27.4, 201.0], [27.5, 201.0], [27.6, 201.0], [27.7, 201.0], [27.8, 201.0], [27.9, 201.0], [28.0, 201.0], [28.1, 201.0], [28.2, 201.0], [28.3, 201.0], [28.4, 201.0], [28.5, 201.0], [28.6, 201.0], [28.7, 201.0], [28.8, 201.0], [28.9, 201.0], [29.0, 201.0], [29.1, 201.0], [29.2, 201.0], [29.3, 201.0], [29.4, 201.0], [29.5, 201.0], [29.6, 201.0], [29.7, 201.0], [29.8, 201.0], [29.9, 201.0], [30.0, 201.0], [30.1, 201.0], [30.2, 201.0], [30.3, 201.0], [30.4, 201.0], [30.5, 201.0], [30.6, 201.0], [30.7, 201.0], [30.8, 201.0], [30.9, 201.0], [31.0, 201.0], [31.1, 201.0], [31.2, 201.0], [31.3, 201.0], [31.4, 201.0], [31.5, 201.0], [31.6, 201.0], [31.7, 201.0], [31.8, 201.0], [31.9, 201.0], [32.0, 201.0], [32.1, 201.0], [32.2, 201.0], [32.3, 201.0], [32.4, 202.0], [32.5, 202.0], [32.6, 202.0], [32.7, 202.0], [32.8, 202.0], [32.9, 202.0], [33.0, 202.0], [33.1, 202.0], [33.2, 202.0], [33.3, 202.0], [33.4, 202.0], [33.5, 202.0], [33.6, 202.0], [33.7, 202.0], [33.8, 202.0], [33.9, 202.0], [34.0, 202.0], [34.1, 202.0], [34.2, 202.0], [34.3, 202.0], [34.4, 202.0], [34.5, 202.0], [34.6, 202.0], [34.7, 202.0], [34.8, 202.0], [34.9, 202.0], [35.0, 202.0], [35.1, 202.0], [35.2, 202.0], [35.3, 202.0], [35.4, 202.0], [35.5, 202.0], [35.6, 202.0], [35.7, 202.0], [35.8, 202.0], [35.9, 202.0], [36.0, 202.0], [36.1, 202.0], [36.2, 202.0], [36.3, 202.0], [36.4, 202.0], [36.5, 203.0], [36.6, 203.0], [36.7, 203.0], [36.8, 203.0], [36.9, 203.0], [37.0, 203.0], [37.1, 203.0], [37.2, 203.0], [37.3, 203.0], [37.4, 203.0], [37.5, 203.0], [37.6, 203.0], [37.7, 203.0], [37.8, 203.0], [37.9, 203.0], [38.0, 203.0], [38.1, 203.0], [38.2, 203.0], [38.3, 203.0], [38.4, 203.0], [38.5, 203.0], [38.6, 203.0], [38.7, 203.0], [38.8, 203.0], [38.9, 203.0], [39.0, 203.0], [39.1, 203.0], [39.2, 203.0], [39.3, 203.0], [39.4, 203.0], [39.5, 203.0], [39.6, 203.0], [39.7, 203.0], [39.8, 203.0], [39.9, 203.0], [40.0, 203.0], [40.1, 203.0], [40.2, 203.0], [40.3, 203.0], [40.4, 203.0], [40.5, 203.0], [40.6, 203.0], [40.7, 203.0], [40.8, 203.0], [40.9, 203.0], [41.0, 204.0], [41.1, 204.0], [41.2, 204.0], [41.3, 204.0], [41.4, 204.0], [41.5, 204.0], [41.6, 204.0], [41.7, 204.0], [41.8, 204.0], [41.9, 204.0], [42.0, 204.0], [42.1, 204.0], [42.2, 204.0], [42.3, 204.0], [42.4, 204.0], [42.5, 204.0], [42.6, 204.0], [42.7, 204.0], [42.8, 204.0], [42.9, 204.0], [43.0, 204.0], [43.1, 204.0], [43.2, 204.0], [43.3, 204.0], [43.4, 204.0], [43.5, 204.0], [43.6, 204.0], [43.7, 204.0], [43.8, 204.0], [43.9, 204.0], [44.0, 205.0], [44.1, 205.0], [44.2, 205.0], [44.3, 205.0], [44.4, 205.0], [44.5, 205.0], [44.6, 205.0], [44.7, 205.0], [44.8, 205.0], [44.9, 205.0], [45.0, 205.0], [45.1, 205.0], [45.2, 205.0], [45.3, 205.0], [45.4, 205.0], [45.5, 205.0], [45.6, 205.0], [45.7, 205.0], [45.8, 205.0], [45.9, 205.0], [46.0, 205.0], [46.1, 205.0], [46.2, 205.0], [46.3, 205.0], [46.4, 205.0], [46.5, 205.0], [46.6, 205.0], [46.7, 205.0], [46.8, 205.0], [46.9, 205.0], [47.0, 205.0], [47.1, 205.0], [47.2, 205.0], [47.3, 205.0], [47.4, 205.0], [47.5, 205.0], [47.6, 205.0], [47.7, 205.0], [47.8, 205.0], [47.9, 205.0], [48.0, 205.0], [48.1, 205.0], [48.2, 205.0], [48.3, 205.0], [48.4, 205.0], [48.5, 206.0], [48.6, 206.0], [48.7, 206.0], [48.8, 206.0], [48.9, 206.0], [49.0, 206.0], [49.1, 206.0], [49.2, 206.0], [49.3, 206.0], [49.4, 206.0], [49.5, 206.0], [49.6, 206.0], [49.7, 206.0], [49.8, 206.0], [49.9, 206.0], [50.0, 206.0], [50.1, 206.0], [50.2, 206.0], [50.3, 206.0], [50.4, 206.0], [50.5, 206.0], [50.6, 206.0], [50.7, 206.0], [50.8, 206.0], [50.9, 207.0], [51.0, 207.0], [51.1, 207.0], [51.2, 207.0], [51.3, 207.0], [51.4, 207.0], [51.5, 207.0], [51.6, 207.0], [51.7, 207.0], [51.8, 207.0], [51.9, 207.0], [52.0, 207.0], [52.1, 207.0], [52.2, 207.0], [52.3, 207.0], [52.4, 207.0], [52.5, 207.0], [52.6, 207.0], [52.7, 207.0], [52.8, 207.0], [52.9, 207.0], [53.0, 207.0], [53.1, 207.0], [53.2, 207.0], [53.3, 207.0], [53.4, 208.0], [53.5, 208.0], [53.6, 208.0], [53.7, 208.0], [53.8, 208.0], [53.9, 208.0], [54.0, 208.0], [54.1, 208.0], [54.2, 208.0], [54.3, 208.0], [54.4, 208.0], [54.5, 208.0], [54.6, 208.0], [54.7, 208.0], [54.8, 208.0], [54.9, 208.0], [55.0, 208.0], [55.1, 208.0], [55.2, 208.0], [55.3, 208.0], [55.4, 208.0], [55.5, 208.0], [55.6, 208.0], [55.7, 208.0], [55.8, 208.0], [55.9, 208.0], [56.0, 208.0], [56.1, 209.0], [56.2, 209.0], [56.3, 209.0], [56.4, 209.0], [56.5, 209.0], [56.6, 209.0], [56.7, 209.0], [56.8, 209.0], [56.9, 209.0], [57.0, 209.0], [57.1, 209.0], [57.2, 209.0], [57.3, 209.0], [57.4, 209.0], [57.5, 209.0], [57.6, 209.0], [57.7, 209.0], [57.8, 209.0], [57.9, 209.0], [58.0, 209.0], [58.1, 209.0], [58.2, 209.0], [58.3, 210.0], [58.4, 210.0], [58.5, 210.0], [58.6, 210.0], [58.7, 210.0], [58.8, 210.0], [58.9, 210.0], [59.0, 210.0], [59.1, 210.0], [59.2, 210.0], [59.3, 210.0], [59.4, 210.0], [59.5, 210.0], [59.6, 210.0], [59.7, 210.0], [59.8, 210.0], [59.9, 210.0], [60.0, 210.0], [60.1, 210.0], [60.2, 210.0], [60.3, 210.0], [60.4, 211.0], [60.5, 211.0], [60.6, 211.0], [60.7, 211.0], [60.8, 211.0], [60.9, 211.0], [61.0, 211.0], [61.1, 211.0], [61.2, 211.0], [61.3, 211.0], [61.4, 211.0], [61.5, 211.0], [61.6, 212.0], [61.7, 212.0], [61.8, 212.0], [61.9, 212.0], [62.0, 212.0], [62.1, 212.0], [62.2, 212.0], [62.3, 212.0], [62.4, 212.0], [62.5, 212.0], [62.6, 212.0], [62.7, 212.0], [62.8, 212.0], [62.9, 212.0], [63.0, 212.0], [63.1, 212.0], [63.2, 212.0], [63.3, 212.0], [63.4, 212.0], [63.5, 213.0], [63.6, 213.0], [63.7, 213.0], [63.8, 213.0], [63.9, 213.0], [64.0, 213.0], [64.1, 213.0], [64.2, 213.0], [64.3, 213.0], [64.4, 213.0], [64.5, 213.0], [64.6, 213.0], [64.7, 214.0], [64.8, 214.0], [64.9, 214.0], [65.0, 214.0], [65.1, 214.0], [65.2, 214.0], [65.3, 214.0], [65.4, 214.0], [65.5, 214.0], [65.6, 214.0], [65.7, 214.0], [65.8, 214.0], [65.9, 214.0], [66.0, 214.0], [66.1, 214.0], [66.2, 215.0], [66.3, 215.0], [66.4, 215.0], [66.5, 215.0], [66.6, 215.0], [66.7, 215.0], [66.8, 215.0], [66.9, 215.0], [67.0, 215.0], [67.1, 215.0], [67.2, 215.0], [67.3, 215.0], [67.4, 215.0], [67.5, 216.0], [67.6, 216.0], [67.7, 216.0], [67.8, 216.0], [67.9, 216.0], [68.0, 216.0], [68.1, 216.0], [68.2, 217.0], [68.3, 217.0], [68.4, 217.0], [68.5, 217.0], [68.6, 217.0], [68.7, 217.0], [68.8, 217.0], [68.9, 217.0], [69.0, 218.0], [69.1, 218.0], [69.2, 218.0], [69.3, 218.0], [69.4, 219.0], [69.5, 219.0], [69.6, 219.0], [69.7, 219.0], [69.8, 219.0], [69.9, 219.0], [70.0, 219.0], [70.1, 219.0], [70.2, 220.0], [70.3, 220.0], [70.4, 220.0], [70.5, 220.0], [70.6, 220.0], [70.7, 220.0], [70.8, 220.0], [70.9, 220.0], [71.0, 220.0], [71.1, 220.0], [71.2, 220.0], [71.3, 220.0], [71.4, 220.0], [71.5, 221.0], [71.6, 221.0], [71.7, 221.0], [71.8, 221.0], [71.9, 221.0], [72.0, 221.0], [72.1, 221.0], [72.2, 221.0], [72.3, 221.0], [72.4, 222.0], [72.5, 222.0], [72.6, 222.0], [72.7, 222.0], [72.8, 222.0], [72.9, 222.0], [73.0, 222.0], [73.1, 222.0], [73.2, 222.0], [73.3, 222.0], [73.4, 222.0], [73.5, 222.0], [73.6, 222.0], [73.7, 223.0], [73.8, 223.0], [73.9, 223.0], [74.0, 223.0], [74.1, 223.0], [74.2, 224.0], [74.3, 224.0], [74.4, 225.0], [74.5, 225.0], [74.6, 225.0], [74.7, 225.0], [74.8, 225.0], [74.9, 225.0], [75.0, 226.0], [75.1, 226.0], [75.2, 226.0], [75.3, 226.0], [75.4, 226.0], [75.5, 227.0], [75.6, 228.0], [75.7, 228.0], [75.8, 228.0], [75.9, 228.0], [76.0, 229.0], [76.1, 229.0], [76.2, 230.0], [76.3, 230.0], [76.4, 230.0], [76.5, 231.0], [76.6, 231.0], [76.7, 231.0], [76.8, 232.0], [76.9, 234.0], [77.0, 234.0], [77.1, 235.0], [77.2, 235.0], [77.3, 236.0], [77.4, 237.0], [77.5, 239.0], [77.6, 239.0], [77.7, 240.0], [77.8, 241.0], [77.9, 241.0], [78.0, 243.0], [78.1, 244.0], [78.2, 244.0], [78.3, 244.0], [78.4, 246.0], [78.5, 248.0], [78.6, 248.0], [78.7, 249.0], [78.8, 252.0], [78.9, 253.0], [79.0, 253.0], [79.1, 254.0], [79.2, 255.0], [79.3, 257.0], [79.4, 257.0], [79.5, 257.0], [79.6, 259.0], [79.7, 266.0], [79.8, 267.0], [79.9, 269.0], [80.0, 272.0], [80.1, 291.0], [80.2, 298.0], [80.3, 305.0], [80.4, 328.0], [80.5, 347.0], [80.6, 356.0], [80.7, 411.0], [80.8, 416.0], [80.9, 418.0], [81.0, 419.0], [81.1, 427.0], [81.2, 428.0], [81.3, 429.0], [81.4, 438.0], [81.5, 445.0], [81.6, 459.0], [81.7, 461.0], [81.8, 480.0], [81.9, 485.0], [82.0, 488.0], [82.1, 494.0], [82.2, 503.0], [82.3, 545.0], [82.4, 547.0], [82.5, 550.0], [82.6, 563.0], [82.7, 592.0], [82.8, 626.0], [82.9, 639.0], [83.0, 655.0], [83.1, 661.0], [83.2, 669.0], [83.3, 698.0], [83.4, 698.0], [83.5, 705.0], [83.6, 705.0], [83.7, 707.0], [83.8, 708.0], [83.9, 713.0], [84.0, 716.0], [84.1, 721.0], [84.2, 721.0], [84.3, 755.0], [84.4, 775.0], [84.5, 782.0], [84.6, 788.0], [84.7, 827.0], [84.8, 830.0], [84.9, 869.0], [85.0, 871.0], [85.1, 873.0], [85.2, 883.0], [85.3, 888.0], [85.4, 891.0], [85.5, 895.0], [85.6, 895.0], [85.7, 896.0], [85.8, 899.0], [85.9, 904.0], [86.0, 905.0], [86.1, 906.0], [86.2, 906.0], [86.3, 908.0], [86.4, 909.0], [86.5, 913.0], [86.6, 916.0], [86.7, 916.0], [86.8, 918.0], [86.9, 919.0], [87.0, 920.0], [87.1, 921.0], [87.2, 921.0], [87.3, 922.0], [87.4, 924.0], [87.5, 924.0], [87.6, 924.0], [87.7, 925.0], [87.8, 925.0], [87.9, 928.0], [88.0, 931.0], [88.1, 932.0], [88.2, 933.0], [88.3, 935.0], [88.4, 938.0], [88.5, 939.0], [88.6, 939.0], [88.7, 940.0], [88.8, 945.0], [88.9, 945.0], [89.0, 981.0], [89.1, 1053.0], [89.2, 1059.0], [89.3, 1066.0], [89.4, 1067.0], [89.5, 1121.0], [89.6, 1132.0], [89.7, 1167.0], [89.8, 1168.0], [89.9, 1179.0], [90.0, 1180.0], [90.1, 1219.0], [90.2, 1224.0], [90.3, 1238.0], [90.4, 1255.0], [90.5, 1260.0], [90.6, 1276.0], [90.7, 1293.0], [90.8, 1385.0], [90.9, 1394.0], [91.0, 1432.0], [91.1, 1456.0], [91.2, 1539.0], [91.3, 1553.0], [91.4, 1558.0], [91.5, 1568.0], [91.6, 1577.0], [91.7, 1577.0], [91.8, 1609.0], [91.9, 1661.0], [92.0, 1681.0], [92.1, 1689.0], [92.2, 1745.0], [92.3, 1794.0], [92.4, 1810.0], [92.5, 1810.0], [92.6, 1854.0], [92.7, 1914.0], [92.8, 1933.0], [92.9, 1942.0], [93.0, 1966.0], [93.1, 2069.0], [93.2, 2079.0], [93.3, 2101.0], [93.4, 2111.0], [93.5, 2125.0], [93.6, 2125.0], [93.7, 2175.0], [93.8, 2184.0], [93.9, 2188.0], [94.0, 2199.0], [94.1, 2205.0], [94.2, 2277.0], [94.3, 2309.0], [94.4, 2316.0], [94.5, 2401.0], [94.6, 2404.0], [94.7, 2431.0], [94.8, 2467.0], [94.9, 2480.0], [95.0, 2506.0], [95.1, 2511.0], [95.2, 2534.0], [95.3, 2555.0], [95.4, 2620.0], [95.5, 2646.0], [95.6, 2731.0], [95.7, 2758.0], [95.8, 2765.0], [95.9, 2770.0], [96.0, 2794.0], [96.1, 2827.0], [96.2, 2831.0], [96.3, 2833.0], [96.4, 2854.0], [96.5, 2947.0], [96.6, 2952.0], [96.7, 3043.0], [96.8, 3139.0], [96.9, 3183.0], [97.0, 3362.0], [97.1, 3366.0], [97.2, 3430.0], [97.3, 3753.0], [97.4, 3779.0], [97.5, 3854.0], [97.6, 3919.0], [97.7, 4003.0], [97.8, 4022.0], [97.9, 4023.0], [98.0, 4063.0], [98.1, 4173.0], [98.2, 4319.0], [98.3, 4373.0], [98.4, 4480.0], [98.5, 4500.0], [98.6, 4526.0], [98.7, 4656.0], [98.8, 4854.0], [98.9, 6012.0], [99.0, 6025.0], [99.1, 6066.0], [99.2, 6112.0], [99.3, 6191.0], [99.4, 6379.0], [99.5, 6615.0], [99.6, 6802.0], [99.7, 7066.0], [99.8, 7153.0], [99.9, 8356.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 607.0, "series": [{"data": [[600.0, 7.0], [700.0, 12.0], [800.0, 12.0], [900.0, 32.0], [1000.0, 4.0], [1100.0, 6.0], [1200.0, 7.0], [1300.0, 2.0], [1400.0, 2.0], [1500.0, 6.0], [1600.0, 4.0], [1700.0, 2.0], [1800.0, 3.0], [1900.0, 4.0], [2000.0, 2.0], [2100.0, 8.0], [2200.0, 2.0], [2300.0, 2.0], [2400.0, 5.0], [2500.0, 4.0], [2600.0, 2.0], [2700.0, 5.0], [2800.0, 4.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 2.0], [3300.0, 2.0], [3400.0, 1.0], [3700.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 4.0], [4300.0, 2.0], [4100.0, 1.0], [4600.0, 1.0], [4500.0, 2.0], [4400.0, 1.0], [4800.0, 1.0], [6100.0, 2.0], [6000.0, 3.0], [6300.0, 1.0], [6600.0, 1.0], [6800.0, 1.0], [7100.0, 1.0], [7000.0, 1.0], [8300.0, 1.0], [100.0, 196.0], [200.0, 607.0], [300.0, 4.0], [400.0, 15.0], [500.0, 6.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 88.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 822.0, "series": [{"data": [[0.0, 822.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 90.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 88.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.54924242424243, "minX": 1.73969346E12, "maxY": 42.50480769230769, "series": [{"data": [[1.73969346E12, 9.54924242424243], [1.73969352E12, 42.50480769230769]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73969352E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 198.0, "minX": 2.0, "maxY": 7153.0, "series": [{"data": [[2.0, 206.5], [3.0, 1411.1999999999998], [4.0, 366.925925925926], [5.0, 206.48484848484844], [6.0, 219.63204747774466], [7.0, 274.233870967742], [8.0, 220.08888888888885], [9.0, 363.66666666666663], [10.0, 212.38888888888886], [11.0, 938.1875], [12.0, 567.95], [13.0, 929.7777777777778], [14.0, 223.7142857142857], [15.0, 201.0], [17.0, 849.4], [19.0, 1899.0], [20.0, 2698.0], [22.0, 1724.0], [23.0, 3919.0], [24.0, 1964.6666666666667], [26.0, 1786.5], [27.0, 7153.0], [28.0, 198.0], [29.0, 199.5], [30.0, 1741.5], [31.0, 252.0], [32.0, 2487.5], [33.0, 204.0], [35.0, 768.1818181818181], [34.0, 1176.2941176470588], [37.0, 601.4166666666666], [36.0, 331.5], [39.0, 631.111111111111], [38.0, 699.5882352941177], [41.0, 871.2499999999999], [40.0, 2646.2000000000003], [43.0, 663.6666666666667], [42.0, 6108.0], [44.0, 1021.1666666666667], [45.0, 1153.4], [47.0, 2786.0], [46.0, 1176.0], [49.0, 578.0], [48.0, 2526.0], [51.0, 1079.5000000000002], [50.0, 616.1666666666667], [52.0, 805.5], [53.0, 1308.5], [54.0, 750.5714285714286], [55.0, 598.3333333333333], [57.0, 1076.8333333333333], [56.0, 241.5], [59.0, 718.5], [58.0, 762.6], [60.0, 492.1666666666667], [61.0, 1176.0], [63.0, 1077.5], [62.0, 2685.6666666666665], [64.0, 579.5], [65.0, 2534.0], [71.0, 2770.0], [69.0, 1416.5], [68.0, 1604.5], [72.0, 2344.5], [73.0, 2583.0], [75.0, 2511.0], [74.0, 2467.0], [78.0, 2794.5], [79.0, 2731.0], [77.0, 2633.0], [76.0, 3183.0], [80.0, 2827.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[16.403999999999993, 538.4690000000002]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 80.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 884.0, "minX": 1.73969346E12, "maxY": 4052.4, "series": [{"data": [[1.73969346E12, 4052.4], [1.73969352E12, 1064.2666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73969346E12, 3365.9333333333334], [1.73969352E12, 884.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73969352E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 258.4431818181817, "minX": 1.73969346E12, "maxY": 1604.721153846154, "series": [{"data": [[1.73969346E12, 258.4431818181817], [1.73969352E12, 1604.721153846154]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73969352E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 258.40025252525265, "minX": 1.73969346E12, "maxY": 1604.6971153846157, "series": [{"data": [[1.73969346E12, 258.40025252525265], [1.73969352E12, 1604.6971153846157]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73969352E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 108.00757575757581, "minX": 1.73969346E12, "maxY": 1299.2692307692316, "series": [{"data": [[1.73969346E12, 108.00757575757581], [1.73969352E12, 1299.2692307692316]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73969352E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 195.0, "minX": 1.73969346E12, "maxY": 8356.0, "series": [{"data": [[1.73969346E12, 2205.0], [1.73969352E12, 8356.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.73969346E12, 251.80000000000018], [1.73969352E12, 4027.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.73969346E12, 935.2099999999998], [1.73969352E12, 7145.17]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.73969346E12, 871.6999999999998], [1.73969352E12, 6019.15]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.73969346E12, 195.0], [1.73969352E12, 197.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.73969346E12, 205.0], [1.73969352E12, 1094.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73969352E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 200.0, "minX": 2.0, "maxY": 4480.0, "series": [{"data": [[2.0, 218.5], [35.0, 202.0], [34.0, 208.5], [43.0, 1456.0], [45.0, 661.0], [3.0, 2770.0], [12.0, 200.0], [13.0, 4480.0], [15.0, 698.0], [71.0, 1681.0], [80.0, 849.5], [21.0, 201.0], [24.0, 202.0], [25.0, 203.0], [26.0, 203.0], [27.0, 209.0], [28.0, 202.0], [29.0, 204.0], [31.0, 200.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 200.0, "minX": 2.0, "maxY": 4480.0, "series": [{"data": [[2.0, 218.5], [35.0, 202.0], [34.0, 208.5], [43.0, 1456.0], [45.0, 661.0], [3.0, 2770.0], [12.0, 200.0], [13.0, 4480.0], [15.0, 698.0], [71.0, 1681.0], [80.0, 849.5], [21.0, 201.0], [24.0, 202.0], [25.0, 203.0], [26.0, 203.0], [27.0, 209.0], [28.0, 202.0], [29.0, 204.0], [31.0, 200.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.566666666666667, "minX": 1.73969346E12, "maxY": 14.1, "series": [{"data": [[1.73969346E12, 14.1], [1.73969352E12, 2.566666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73969352E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.466666666666667, "minX": 1.73969346E12, "maxY": 13.2, "series": [{"data": [[1.73969346E12, 13.2], [1.73969352E12, 3.466666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73969352E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.466666666666667, "minX": 1.73969346E12, "maxY": 13.2, "series": [{"data": [[1.73969346E12, 13.2], [1.73969352E12, 3.466666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73969352E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.466666666666667, "minX": 1.73969346E12, "maxY": 13.2, "series": [{"data": [[1.73969346E12, 13.2], [1.73969352E12, 3.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73969352E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

