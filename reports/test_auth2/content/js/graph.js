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
        data: {"result": {"minY": 95.0, "minX": 0.0, "maxY": 3091.0, "series": [{"data": [[0.0, 95.0], [0.1, 108.0], [0.2, 135.0], [0.3, 141.0], [0.4, 144.0], [0.5, 147.0], [0.6, 148.0], [0.7, 149.0], [0.8, 150.0], [0.9, 151.0], [1.0, 153.0], [1.1, 153.0], [1.2, 154.0], [1.3, 154.0], [1.4, 155.0], [1.5, 156.0], [1.6, 156.0], [1.7, 157.0], [1.8, 157.0], [1.9, 158.0], [2.0, 158.0], [2.1, 159.0], [2.2, 159.0], [2.3, 160.0], [2.4, 160.0], [2.5, 160.0], [2.6, 161.0], [2.7, 161.0], [2.8, 161.0], [2.9, 162.0], [3.0, 162.0], [3.1, 162.0], [3.2, 163.0], [3.3, 163.0], [3.4, 163.0], [3.5, 163.0], [3.6, 164.0], [3.7, 164.0], [3.8, 164.0], [3.9, 164.0], [4.0, 165.0], [4.1, 165.0], [4.2, 165.0], [4.3, 166.0], [4.4, 166.0], [4.5, 166.0], [4.6, 167.0], [4.7, 167.0], [4.8, 167.0], [4.9, 167.0], [5.0, 168.0], [5.1, 168.0], [5.2, 168.0], [5.3, 168.0], [5.4, 169.0], [5.5, 169.0], [5.6, 169.0], [5.7, 169.0], [5.8, 169.0], [5.9, 170.0], [6.0, 170.0], [6.1, 170.0], [6.2, 170.0], [6.3, 170.0], [6.4, 170.0], [6.5, 171.0], [6.6, 171.0], [6.7, 171.0], [6.8, 171.0], [6.9, 171.0], [7.0, 172.0], [7.1, 172.0], [7.2, 172.0], [7.3, 172.0], [7.4, 172.0], [7.5, 172.0], [7.6, 173.0], [7.7, 173.0], [7.8, 173.0], [7.9, 173.0], [8.0, 173.0], [8.1, 173.0], [8.2, 174.0], [8.3, 174.0], [8.4, 174.0], [8.5, 174.0], [8.6, 174.0], [8.7, 174.0], [8.8, 175.0], [8.9, 175.0], [9.0, 175.0], [9.1, 175.0], [9.2, 175.0], [9.3, 175.0], [9.4, 176.0], [9.5, 176.0], [9.6, 176.0], [9.7, 176.0], [9.8, 176.0], [9.9, 176.0], [10.0, 177.0], [10.1, 177.0], [10.2, 177.0], [10.3, 177.0], [10.4, 177.0], [10.5, 178.0], [10.6, 178.0], [10.7, 178.0], [10.8, 178.0], [10.9, 178.0], [11.0, 178.0], [11.1, 179.0], [11.2, 179.0], [11.3, 179.0], [11.4, 179.0], [11.5, 179.0], [11.6, 179.0], [11.7, 180.0], [11.8, 180.0], [11.9, 180.0], [12.0, 180.0], [12.1, 180.0], [12.2, 180.0], [12.3, 181.0], [12.4, 181.0], [12.5, 181.0], [12.6, 181.0], [12.7, 181.0], [12.8, 181.0], [12.9, 181.0], [13.0, 182.0], [13.1, 182.0], [13.2, 182.0], [13.3, 182.0], [13.4, 182.0], [13.5, 182.0], [13.6, 182.0], [13.7, 183.0], [13.8, 183.0], [13.9, 183.0], [14.0, 183.0], [14.1, 183.0], [14.2, 183.0], [14.3, 183.0], [14.4, 183.0], [14.5, 184.0], [14.6, 184.0], [14.7, 184.0], [14.8, 184.0], [14.9, 184.0], [15.0, 184.0], [15.1, 184.0], [15.2, 185.0], [15.3, 185.0], [15.4, 185.0], [15.5, 185.0], [15.6, 185.0], [15.7, 185.0], [15.8, 185.0], [15.9, 186.0], [16.0, 186.0], [16.1, 186.0], [16.2, 186.0], [16.3, 186.0], [16.4, 186.0], [16.5, 186.0], [16.6, 186.0], [16.7, 187.0], [16.8, 187.0], [16.9, 187.0], [17.0, 187.0], [17.1, 187.0], [17.2, 187.0], [17.3, 187.0], [17.4, 187.0], [17.5, 188.0], [17.6, 188.0], [17.7, 188.0], [17.8, 188.0], [17.9, 188.0], [18.0, 188.0], [18.1, 188.0], [18.2, 189.0], [18.3, 189.0], [18.4, 189.0], [18.5, 189.0], [18.6, 189.0], [18.7, 189.0], [18.8, 190.0], [18.9, 190.0], [19.0, 190.0], [19.1, 190.0], [19.2, 190.0], [19.3, 190.0], [19.4, 190.0], [19.5, 191.0], [19.6, 191.0], [19.7, 191.0], [19.8, 191.0], [19.9, 191.0], [20.0, 191.0], [20.1, 192.0], [20.2, 192.0], [20.3, 192.0], [20.4, 192.0], [20.5, 192.0], [20.6, 192.0], [20.7, 192.0], [20.8, 192.0], [20.9, 193.0], [21.0, 193.0], [21.1, 193.0], [21.2, 193.0], [21.3, 193.0], [21.4, 193.0], [21.5, 193.0], [21.6, 194.0], [21.7, 194.0], [21.8, 194.0], [21.9, 194.0], [22.0, 194.0], [22.1, 194.0], [22.2, 194.0], [22.3, 195.0], [22.4, 195.0], [22.5, 195.0], [22.6, 195.0], [22.7, 195.0], [22.8, 195.0], [22.9, 195.0], [23.0, 196.0], [23.1, 196.0], [23.2, 196.0], [23.3, 196.0], [23.4, 196.0], [23.5, 196.0], [23.6, 197.0], [23.7, 197.0], [23.8, 197.0], [23.9, 197.0], [24.0, 197.0], [24.1, 197.0], [24.2, 197.0], [24.3, 198.0], [24.4, 198.0], [24.5, 198.0], [24.6, 198.0], [24.7, 198.0], [24.8, 198.0], [24.9, 198.0], [25.0, 198.0], [25.1, 199.0], [25.2, 199.0], [25.3, 199.0], [25.4, 199.0], [25.5, 199.0], [25.6, 199.0], [25.7, 199.0], [25.8, 199.0], [25.9, 199.0], [26.0, 199.0], [26.1, 200.0], [26.2, 200.0], [26.3, 200.0], [26.4, 200.0], [26.5, 200.0], [26.6, 200.0], [26.7, 200.0], [26.8, 200.0], [26.9, 201.0], [27.0, 201.0], [27.1, 201.0], [27.2, 201.0], [27.3, 201.0], [27.4, 201.0], [27.5, 201.0], [27.6, 201.0], [27.7, 202.0], [27.8, 202.0], [27.9, 202.0], [28.0, 202.0], [28.1, 202.0], [28.2, 202.0], [28.3, 202.0], [28.4, 202.0], [28.5, 202.0], [28.6, 203.0], [28.7, 203.0], [28.8, 203.0], [28.9, 203.0], [29.0, 203.0], [29.1, 203.0], [29.2, 203.0], [29.3, 203.0], [29.4, 203.0], [29.5, 204.0], [29.6, 204.0], [29.7, 204.0], [29.8, 204.0], [29.9, 204.0], [30.0, 204.0], [30.1, 204.0], [30.2, 204.0], [30.3, 204.0], [30.4, 205.0], [30.5, 205.0], [30.6, 205.0], [30.7, 205.0], [30.8, 205.0], [30.9, 205.0], [31.0, 205.0], [31.1, 205.0], [31.2, 205.0], [31.3, 206.0], [31.4, 206.0], [31.5, 206.0], [31.6, 206.0], [31.7, 206.0], [31.8, 206.0], [31.9, 206.0], [32.0, 206.0], [32.1, 207.0], [32.2, 207.0], [32.3, 207.0], [32.4, 207.0], [32.5, 207.0], [32.6, 207.0], [32.7, 207.0], [32.8, 207.0], [32.9, 207.0], [33.0, 207.0], [33.1, 208.0], [33.2, 208.0], [33.3, 208.0], [33.4, 208.0], [33.5, 208.0], [33.6, 208.0], [33.7, 208.0], [33.8, 208.0], [33.9, 209.0], [34.0, 209.0], [34.1, 209.0], [34.2, 209.0], [34.3, 209.0], [34.4, 209.0], [34.5, 209.0], [34.6, 209.0], [34.7, 210.0], [34.8, 210.0], [34.9, 210.0], [35.0, 210.0], [35.1, 210.0], [35.2, 210.0], [35.3, 210.0], [35.4, 210.0], [35.5, 210.0], [35.6, 211.0], [35.7, 211.0], [35.8, 211.0], [35.9, 211.0], [36.0, 211.0], [36.1, 211.0], [36.2, 211.0], [36.3, 211.0], [36.4, 212.0], [36.5, 212.0], [36.6, 212.0], [36.7, 212.0], [36.8, 212.0], [36.9, 212.0], [37.0, 212.0], [37.1, 213.0], [37.2, 213.0], [37.3, 213.0], [37.4, 213.0], [37.5, 213.0], [37.6, 213.0], [37.7, 213.0], [37.8, 213.0], [37.9, 214.0], [38.0, 214.0], [38.1, 214.0], [38.2, 214.0], [38.3, 214.0], [38.4, 214.0], [38.5, 214.0], [38.6, 215.0], [38.7, 215.0], [38.8, 215.0], [38.9, 215.0], [39.0, 215.0], [39.1, 215.0], [39.2, 216.0], [39.3, 216.0], [39.4, 216.0], [39.5, 216.0], [39.6, 216.0], [39.7, 216.0], [39.8, 217.0], [39.9, 217.0], [40.0, 217.0], [40.1, 217.0], [40.2, 217.0], [40.3, 217.0], [40.4, 218.0], [40.5, 218.0], [40.6, 218.0], [40.7, 218.0], [40.8, 218.0], [40.9, 219.0], [41.0, 219.0], [41.1, 219.0], [41.2, 219.0], [41.3, 219.0], [41.4, 220.0], [41.5, 220.0], [41.6, 220.0], [41.7, 220.0], [41.8, 220.0], [41.9, 221.0], [42.0, 221.0], [42.1, 221.0], [42.2, 221.0], [42.3, 221.0], [42.4, 222.0], [42.5, 222.0], [42.6, 222.0], [42.7, 222.0], [42.8, 223.0], [42.9, 223.0], [43.0, 223.0], [43.1, 223.0], [43.2, 223.0], [43.3, 224.0], [43.4, 224.0], [43.5, 224.0], [43.6, 224.0], [43.7, 224.0], [43.8, 225.0], [43.9, 225.0], [44.0, 225.0], [44.1, 225.0], [44.2, 225.0], [44.3, 226.0], [44.4, 226.0], [44.5, 226.0], [44.6, 226.0], [44.7, 226.0], [44.8, 227.0], [44.9, 227.0], [45.0, 227.0], [45.1, 227.0], [45.2, 227.0], [45.3, 228.0], [45.4, 228.0], [45.5, 228.0], [45.6, 228.0], [45.7, 228.0], [45.8, 229.0], [45.9, 229.0], [46.0, 229.0], [46.1, 229.0], [46.2, 230.0], [46.3, 230.0], [46.4, 230.0], [46.5, 230.0], [46.6, 230.0], [46.7, 231.0], [46.8, 231.0], [46.9, 231.0], [47.0, 231.0], [47.1, 232.0], [47.2, 232.0], [47.3, 232.0], [47.4, 232.0], [47.5, 232.0], [47.6, 233.0], [47.7, 233.0], [47.8, 233.0], [47.9, 233.0], [48.0, 233.0], [48.1, 234.0], [48.2, 234.0], [48.3, 234.0], [48.4, 234.0], [48.5, 234.0], [48.6, 235.0], [48.7, 235.0], [48.8, 235.0], [48.9, 235.0], [49.0, 236.0], [49.1, 236.0], [49.2, 236.0], [49.3, 236.0], [49.4, 237.0], [49.5, 237.0], [49.6, 237.0], [49.7, 237.0], [49.8, 237.0], [49.9, 238.0], [50.0, 238.0], [50.1, 238.0], [50.2, 238.0], [50.3, 238.0], [50.4, 239.0], [50.5, 239.0], [50.6, 239.0], [50.7, 239.0], [50.8, 240.0], [50.9, 240.0], [51.0, 240.0], [51.1, 240.0], [51.2, 240.0], [51.3, 241.0], [51.4, 241.0], [51.5, 241.0], [51.6, 241.0], [51.7, 242.0], [51.8, 242.0], [51.9, 242.0], [52.0, 242.0], [52.1, 242.0], [52.2, 243.0], [52.3, 243.0], [52.4, 243.0], [52.5, 243.0], [52.6, 244.0], [52.7, 244.0], [52.8, 244.0], [52.9, 244.0], [53.0, 245.0], [53.1, 245.0], [53.2, 245.0], [53.3, 245.0], [53.4, 246.0], [53.5, 246.0], [53.6, 246.0], [53.7, 246.0], [53.8, 247.0], [53.9, 247.0], [54.0, 247.0], [54.1, 247.0], [54.2, 248.0], [54.3, 248.0], [54.4, 248.0], [54.5, 248.0], [54.6, 249.0], [54.7, 249.0], [54.8, 249.0], [54.9, 249.0], [55.0, 250.0], [55.1, 250.0], [55.2, 250.0], [55.3, 250.0], [55.4, 251.0], [55.5, 251.0], [55.6, 251.0], [55.7, 251.0], [55.8, 252.0], [55.9, 252.0], [56.0, 252.0], [56.1, 253.0], [56.2, 253.0], [56.3, 253.0], [56.4, 253.0], [56.5, 254.0], [56.6, 254.0], [56.7, 254.0], [56.8, 254.0], [56.9, 255.0], [57.0, 255.0], [57.1, 255.0], [57.2, 255.0], [57.3, 256.0], [57.4, 256.0], [57.5, 256.0], [57.6, 256.0], [57.7, 256.0], [57.8, 257.0], [57.9, 257.0], [58.0, 257.0], [58.1, 258.0], [58.2, 258.0], [58.3, 258.0], [58.4, 258.0], [58.5, 258.0], [58.6, 259.0], [58.7, 259.0], [58.8, 259.0], [58.9, 260.0], [59.0, 260.0], [59.1, 260.0], [59.2, 260.0], [59.3, 261.0], [59.4, 261.0], [59.5, 261.0], [59.6, 261.0], [59.7, 262.0], [59.8, 262.0], [59.9, 262.0], [60.0, 262.0], [60.1, 263.0], [60.2, 263.0], [60.3, 263.0], [60.4, 264.0], [60.5, 264.0], [60.6, 264.0], [60.7, 264.0], [60.8, 265.0], [60.9, 265.0], [61.0, 265.0], [61.1, 266.0], [61.2, 266.0], [61.3, 266.0], [61.4, 266.0], [61.5, 267.0], [61.6, 267.0], [61.7, 267.0], [61.8, 268.0], [61.9, 268.0], [62.0, 268.0], [62.1, 268.0], [62.2, 269.0], [62.3, 269.0], [62.4, 269.0], [62.5, 269.0], [62.6, 270.0], [62.7, 270.0], [62.8, 270.0], [62.9, 270.0], [63.0, 271.0], [63.1, 271.0], [63.2, 271.0], [63.3, 271.0], [63.4, 272.0], [63.5, 272.0], [63.6, 272.0], [63.7, 273.0], [63.8, 273.0], [63.9, 273.0], [64.0, 273.0], [64.1, 274.0], [64.2, 274.0], [64.3, 274.0], [64.4, 274.0], [64.5, 275.0], [64.6, 275.0], [64.7, 275.0], [64.8, 276.0], [64.9, 276.0], [65.0, 276.0], [65.1, 276.0], [65.2, 277.0], [65.3, 277.0], [65.4, 277.0], [65.5, 278.0], [65.6, 278.0], [65.7, 278.0], [65.8, 278.0], [65.9, 279.0], [66.0, 279.0], [66.1, 279.0], [66.2, 280.0], [66.3, 280.0], [66.4, 280.0], [66.5, 281.0], [66.6, 281.0], [66.7, 282.0], [66.8, 282.0], [66.9, 282.0], [67.0, 283.0], [67.1, 284.0], [67.2, 284.0], [67.3, 285.0], [67.4, 285.0], [67.5, 286.0], [67.6, 286.0], [67.7, 287.0], [67.8, 287.0], [67.9, 287.0], [68.0, 288.0], [68.1, 288.0], [68.2, 289.0], [68.3, 289.0], [68.4, 289.0], [68.5, 290.0], [68.6, 290.0], [68.7, 291.0], [68.8, 291.0], [68.9, 291.0], [69.0, 292.0], [69.1, 292.0], [69.2, 293.0], [69.3, 293.0], [69.4, 294.0], [69.5, 294.0], [69.6, 294.0], [69.7, 295.0], [69.8, 295.0], [69.9, 295.0], [70.0, 296.0], [70.1, 296.0], [70.2, 296.0], [70.3, 297.0], [70.4, 297.0], [70.5, 298.0], [70.6, 298.0], [70.7, 298.0], [70.8, 299.0], [70.9, 299.0], [71.0, 299.0], [71.1, 300.0], [71.2, 301.0], [71.3, 301.0], [71.4, 302.0], [71.5, 302.0], [71.6, 303.0], [71.7, 303.0], [71.8, 304.0], [71.9, 304.0], [72.0, 305.0], [72.1, 305.0], [72.2, 306.0], [72.3, 306.0], [72.4, 307.0], [72.5, 307.0], [72.6, 308.0], [72.7, 309.0], [72.8, 309.0], [72.9, 310.0], [73.0, 310.0], [73.1, 311.0], [73.2, 311.0], [73.3, 312.0], [73.4, 313.0], [73.5, 314.0], [73.6, 314.0], [73.7, 315.0], [73.8, 316.0], [73.9, 316.0], [74.0, 317.0], [74.1, 317.0], [74.2, 318.0], [74.3, 319.0], [74.4, 320.0], [74.5, 321.0], [74.6, 322.0], [74.7, 323.0], [74.8, 324.0], [74.9, 325.0], [75.0, 326.0], [75.1, 327.0], [75.2, 327.0], [75.3, 328.0], [75.4, 329.0], [75.5, 330.0], [75.6, 332.0], [75.7, 333.0], [75.8, 334.0], [75.9, 335.0], [76.0, 336.0], [76.1, 337.0], [76.2, 338.0], [76.3, 339.0], [76.4, 340.0], [76.5, 341.0], [76.6, 343.0], [76.7, 344.0], [76.8, 345.0], [76.9, 346.0], [77.0, 347.0], [77.1, 348.0], [77.2, 349.0], [77.3, 350.0], [77.4, 351.0], [77.5, 351.0], [77.6, 352.0], [77.7, 353.0], [77.8, 354.0], [77.9, 355.0], [78.0, 356.0], [78.1, 357.0], [78.2, 358.0], [78.3, 359.0], [78.4, 360.0], [78.5, 361.0], [78.6, 362.0], [78.7, 363.0], [78.8, 364.0], [78.9, 365.0], [79.0, 366.0], [79.1, 367.0], [79.2, 368.0], [79.3, 370.0], [79.4, 371.0], [79.5, 372.0], [79.6, 372.0], [79.7, 373.0], [79.8, 375.0], [79.9, 376.0], [80.0, 378.0], [80.1, 379.0], [80.2, 381.0], [80.3, 382.0], [80.4, 383.0], [80.5, 384.0], [80.6, 385.0], [80.7, 386.0], [80.8, 386.0], [80.9, 387.0], [81.0, 388.0], [81.1, 389.0], [81.2, 390.0], [81.3, 391.0], [81.4, 392.0], [81.5, 392.0], [81.6, 393.0], [81.7, 394.0], [81.8, 395.0], [81.9, 395.0], [82.0, 396.0], [82.1, 397.0], [82.2, 398.0], [82.3, 399.0], [82.4, 400.0], [82.5, 401.0], [82.6, 402.0], [82.7, 403.0], [82.8, 404.0], [82.9, 405.0], [83.0, 406.0], [83.1, 407.0], [83.2, 408.0], [83.3, 409.0], [83.4, 410.0], [83.5, 411.0], [83.6, 412.0], [83.7, 412.0], [83.8, 413.0], [83.9, 414.0], [84.0, 415.0], [84.1, 416.0], [84.2, 417.0], [84.3, 418.0], [84.4, 419.0], [84.5, 419.0], [84.6, 420.0], [84.7, 421.0], [84.8, 422.0], [84.9, 423.0], [85.0, 424.0], [85.1, 425.0], [85.2, 425.0], [85.3, 426.0], [85.4, 427.0], [85.5, 428.0], [85.6, 428.0], [85.7, 429.0], [85.8, 430.0], [85.9, 431.0], [86.0, 432.0], [86.1, 433.0], [86.2, 434.0], [86.3, 435.0], [86.4, 437.0], [86.5, 438.0], [86.6, 439.0], [86.7, 440.0], [86.8, 441.0], [86.9, 442.0], [87.0, 443.0], [87.1, 444.0], [87.2, 445.0], [87.3, 446.0], [87.4, 447.0], [87.5, 448.0], [87.6, 448.0], [87.7, 449.0], [87.8, 450.0], [87.9, 451.0], [88.0, 452.0], [88.1, 453.0], [88.2, 454.0], [88.3, 455.0], [88.4, 455.0], [88.5, 457.0], [88.6, 457.0], [88.7, 458.0], [88.8, 459.0], [88.9, 460.0], [89.0, 461.0], [89.1, 462.0], [89.2, 463.0], [89.3, 464.0], [89.4, 465.0], [89.5, 466.0], [89.6, 467.0], [89.7, 468.0], [89.8, 468.0], [89.9, 470.0], [90.0, 470.0], [90.1, 472.0], [90.2, 473.0], [90.3, 474.0], [90.4, 475.0], [90.5, 477.0], [90.6, 479.0], [90.7, 480.0], [90.8, 482.0], [90.9, 483.0], [91.0, 485.0], [91.1, 486.0], [91.2, 487.0], [91.3, 489.0], [91.4, 490.0], [91.5, 491.0], [91.6, 492.0], [91.7, 493.0], [91.8, 494.0], [91.9, 496.0], [92.0, 497.0], [92.1, 499.0], [92.2, 500.0], [92.3, 501.0], [92.4, 503.0], [92.5, 504.0], [92.6, 505.0], [92.7, 506.0], [92.8, 507.0], [92.9, 508.0], [93.0, 509.0], [93.1, 510.0], [93.2, 511.0], [93.3, 512.0], [93.4, 514.0], [93.5, 515.0], [93.6, 516.0], [93.7, 517.0], [93.8, 518.0], [93.9, 520.0], [94.0, 521.0], [94.1, 522.0], [94.2, 524.0], [94.3, 525.0], [94.4, 526.0], [94.5, 528.0], [94.6, 529.0], [94.7, 530.0], [94.8, 532.0], [94.9, 533.0], [95.0, 535.0], [95.1, 537.0], [95.2, 539.0], [95.3, 541.0], [95.4, 543.0], [95.5, 545.0], [95.6, 546.0], [95.7, 547.0], [95.8, 549.0], [95.9, 551.0], [96.0, 553.0], [96.1, 555.0], [96.2, 558.0], [96.3, 562.0], [96.4, 566.0], [96.5, 570.0], [96.6, 574.0], [96.7, 579.0], [96.8, 585.0], [96.9, 591.0], [97.0, 597.0], [97.1, 607.0], [97.2, 621.0], [97.3, 629.0], [97.4, 633.0], [97.5, 635.0], [97.6, 637.0], [97.7, 642.0], [97.8, 649.0], [97.9, 659.0], [98.0, 692.0], [98.1, 735.0], [98.2, 762.0], [98.3, 796.0], [98.4, 930.0], [98.5, 1035.0], [98.6, 1106.0], [98.7, 1193.0], [98.8, 1281.0], [98.9, 1352.0], [99.0, 1384.0], [99.1, 1428.0], [99.2, 1444.0], [99.3, 1469.0], [99.4, 1508.0], [99.5, 1586.0], [99.6, 1642.0], [99.7, 1798.0], [99.8, 2073.0], [99.9, 2339.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 22501.0, "series": [{"data": [[0.0, 8.0], [600.0, 497.0], [700.0, 141.0], [800.0, 34.0], [900.0, 41.0], [1000.0, 57.0], [1100.0, 71.0], [1200.0, 54.0], [1300.0, 110.0], [1400.0, 175.0], [1500.0, 83.0], [1600.0, 39.0], [100.0, 12994.0], [1700.0, 32.0], [1800.0, 16.0], [1900.0, 23.0], [2000.0, 13.0], [2100.0, 15.0], [2200.0, 21.0], [2300.0, 28.0], [2400.0, 11.0], [2500.0, 3.0], [2700.0, 2.0], [2800.0, 3.0], [2900.0, 11.0], [3000.0, 3.0], [200.0, 22501.0], [300.0, 5667.0], [400.0, 4915.0], [500.0, 2432.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 303.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 46121.0, "series": [{"data": [[0.0, 46121.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3576.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 303.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 481.816242678555, "minX": 1.73969424E12, "maxY": 500.0, "series": [{"data": [[1.7396943E12, 481.816242678555], [1.73969424E12, 500.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7396943E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 96.0, "minX": 1.0, "maxY": 422.0, "series": [{"data": [[2.0, 103.0], [4.0, 102.0], [5.0, 102.5], [6.0, 102.0], [7.0, 103.25], [8.0, 105.0], [9.0, 103.4], [11.0, 103.5], [12.0, 102.0], [13.0, 101.0], [15.0, 105.83333333333334], [17.0, 107.0], [21.0, 106.4], [22.0, 96.0], [23.0, 97.0], [24.0, 106.25], [26.0, 103.0], [27.0, 102.0], [28.0, 103.0], [29.0, 102.0], [31.0, 103.0], [35.0, 124.0], [34.0, 109.33333333333333], [38.0, 121.66666666666667], [41.0, 128.0], [40.0, 104.0], [44.0, 116.0], [47.0, 150.0], [46.0, 134.2], [49.0, 132.0], [48.0, 139.0], [51.0, 136.0], [53.0, 155.0], [52.0, 150.0], [54.0, 144.0], [57.0, 150.0], [56.0, 148.33333333333334], [58.0, 153.4], [60.0, 155.0], [62.0, 148.66666666666666], [67.0, 150.5], [65.0, 155.0], [70.0, 166.0], [69.0, 164.4], [68.0, 159.5], [74.0, 142.0], [72.0, 143.5], [77.0, 149.5], [76.0, 145.0], [83.0, 150.0], [82.0, 148.6], [86.0, 157.0], [85.0, 149.0], [84.0, 156.5], [89.0, 163.0], [88.0, 164.0], [95.0, 163.0], [94.0, 161.5], [93.0, 173.0], [99.0, 166.0], [97.0, 164.0], [103.0, 175.5], [102.0, 173.33333333333334], [101.0, 172.8], [100.0, 167.0], [106.0, 178.0], [104.0, 183.5], [111.0, 216.0], [110.0, 226.0], [109.0, 204.5], [108.0, 191.0], [115.0, 241.0], [114.0, 232.5], [113.0, 234.0], [112.0, 244.5], [119.0, 244.0], [118.0, 242.33333333333334], [117.0, 248.0], [116.0, 248.0], [122.0, 248.0], [121.0, 257.25], [120.0, 249.0], [127.0, 255.0], [126.0, 253.69230769230768], [125.0, 245.66666666666666], [124.0, 246.33333333333334], [135.0, 263.1666666666667], [134.0, 268.0], [133.0, 261.1666666666667], [132.0, 259.0], [131.0, 254.0], [130.0, 274.0], [129.0, 268.0], [128.0, 261.6666666666667], [143.0, 275.0], [142.0, 275.5], [141.0, 283.5], [140.0, 278.25], [139.0, 276.0], [138.0, 274.00000000000006], [136.0, 264.3333333333333], [151.0, 285.0], [150.0, 279.0], [149.0, 285.0], [148.0, 277.0], [147.0, 276.5], [146.0, 279.0], [145.0, 284.5], [144.0, 422.0], [159.0, 282.75], [157.0, 295.0], [156.0, 277.0], [155.0, 281.5], [153.0, 285.0], [152.0, 278.0], [166.0, 289.0], [165.0, 290.6666666666667], [164.0, 284.0], [163.0, 287.0], [161.0, 285.3333333333333], [175.0, 296.6666666666667], [174.0, 300.0], [173.0, 302.8333333333333], [171.0, 296.0], [170.0, 297.5], [169.0, 288.0], [168.0, 294.0], [183.0, 308.0], [182.0, 310.75], [180.0, 300.0], [179.0, 295.0], [177.0, 305.3333333333333], [176.0, 299.0], [190.0, 311.25], [188.0, 311.0], [187.0, 306.0], [185.0, 313.3333333333333], [184.0, 308.0], [197.0, 317.0], [196.0, 315.6666666666667], [194.0, 317.3333333333333], [193.0, 317.2], [192.0, 309.0], [207.0, 311.0], [204.0, 313.5], [202.0, 313.0], [201.0, 313.5], [215.0, 343.0], [214.0, 305.0], [212.0, 308.0], [211.0, 306.3333333333333], [210.0, 310.0], [209.0, 311.0], [208.0, 309.0], [223.0, 322.2], [222.0, 303.6666666666667], [219.0, 305.0], [216.0, 304.5], [231.0, 313.0], [230.0, 329.0], [228.0, 332.0], [227.0, 326.0], [226.0, 316.0], [225.0, 315.0], [224.0, 319.0], [239.0, 310.0], [238.0, 313.0], [237.0, 314.0], [236.0, 320.5], [234.0, 322.5], [233.0, 324.0], [232.0, 314.0], [247.0, 301.0], [244.0, 303.0], [242.0, 310.0], [240.0, 310.0], [254.0, 302.0], [253.0, 303.0], [251.0, 303.0], [250.0, 304.5], [248.0, 305.0], [270.0, 299.0], [268.0, 297.0], [266.0, 303.0], [264.0, 293.0], [263.0, 304.0], [262.0, 295.0], [261.0, 307.0], [260.0, 306.0], [258.0, 306.5], [256.0, 301.5], [286.0, 308.0], [287.0, 300.0], [285.0, 301.0], [284.0, 297.0], [283.0, 303.0], [282.0, 297.0], [280.0, 298.0], [279.0, 300.0], [273.0, 299.0], [272.0, 300.5], [277.0, 302.7142857142857], [291.0, 298.0], [302.0, 305.5], [303.0, 299.0], [301.0, 381.3333333333333], [299.0, 304.5], [297.0, 305.0], [295.0, 297.0], [294.0, 296.0], [290.0, 299.0], [289.0, 298.0], [318.0, 296.0], [317.0, 300.6666666666667], [314.0, 297.3333333333333], [311.0, 299.0], [310.0, 299.75], [308.0, 300.0], [306.0, 302.6], [333.0, 294.0], [335.0, 295.0], [332.0, 297.6], [323.0, 295.5], [322.0, 296.0], [321.0, 294.0], [320.0, 297.0], [330.0, 293.0], [329.0, 294.3333333333333], [328.0, 293.0], [327.0, 295.0], [326.0, 297.5], [324.0, 295.0], [350.0, 292.0], [351.0, 293.0], [348.0, 291.6666666666667], [338.0, 296.25], [347.0, 289.0], [346.0, 291.0], [345.0, 296.0], [344.0, 302.0], [343.0, 305.0], [342.0, 295.3333333333333], [341.0, 296.0], [367.0, 299.0], [365.0, 301.16666666666663], [364.0, 295.0], [363.0, 294.0], [361.0, 296.4], [359.0, 294.0], [357.0, 293.0], [355.0, 292.0], [380.0, 295.5], [382.0, 299.5], [383.0, 296.8], [381.0, 293.5], [378.0, 301.0], [377.0, 296.5], [375.0, 297.0], [369.0, 293.14285714285717], [373.0, 296.6666666666667], [372.0, 293.6666666666667], [387.0, 300.5], [399.0, 297.0], [398.0, 300.0], [395.0, 297.6666666666667], [393.0, 296.2], [391.0, 296.0], [389.0, 301.5], [386.0, 288.0], [385.0, 298.5], [384.0, 301.0], [402.0, 288.0], [413.0, 287.0], [414.0, 288.5], [412.0, 288.3333333333333], [410.0, 290.0], [409.0, 290.85714285714283], [405.0, 292.25], [404.0, 291.0], [401.0, 291.0], [400.0, 293.5], [431.0, 289.0], [430.0, 292.5], [419.0, 289.0], [418.0, 294.0], [417.0, 301.0], [416.0, 289.25], [427.0, 290.0], [426.0, 290.6666666666667], [425.0, 292.0], [424.0, 290.5], [423.0, 293.0], [422.0, 293.0], [421.0, 290.3333333333333], [420.0, 289.0], [447.0, 286.0], [446.0, 287.99999999999994], [435.0, 292.0], [433.0, 292.75], [443.0, 287.0], [442.0, 287.3333333333333], [441.0, 290.6666666666667], [440.0, 285.5], [439.0, 289.8], [438.0, 292.3333333333333], [437.0, 289.0], [436.0, 290.5], [460.0, 279.0], [462.0, 270.83333333333337], [463.0, 274.0], [461.0, 270.8], [458.0, 277.3333333333333], [456.0, 276.5], [455.0, 276.0], [448.0, 285.3333333333333], [450.0, 281.3333333333333], [449.0, 281.0], [454.0, 278.375], [453.0, 278.0], [452.0, 280.0], [469.0, 264.0], [468.0, 270.5], [465.0, 271.7], [494.0, 228.99999999999997], [495.0, 224.68421052631578], [492.0, 233.11764705882354], [491.0, 227.88888888888886], [490.0, 232.50000000000003], [488.0, 245.5], [487.0, 249.5], [486.0, 241.25], [484.0, 246.5], [483.0, 249.53846153846155], [481.0, 267.68292682926835], [480.0, 273.22222222222223], [500.0, 298.28589337827594], [499.0, 206.63809523809522], [498.0, 211.74358974358972], [497.0, 206.9052631578947], [496.0, 219.12403100775185], [1.0, 104.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[495.8398799999992, 296.8380000000027]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 500.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 45756.0, "minX": 1.73969424E12, "maxY": 197303.78333333333, "series": [{"data": [[1.7396943E12, 58529.55], [1.73969424E12, 197303.78333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7396943E12, 45756.0], [1.73969424E12, 154244.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7396943E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 244.58580295480309, "minX": 1.73969424E12, "maxY": 312.33845076632133, "series": [{"data": [[1.7396943E12, 244.58580295480309], [1.73969424E12, 312.33845076632133]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7396943E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 244.58178162426898, "minX": 1.73969424E12, "maxY": 312.3280516584098, "series": [{"data": [[1.7396943E12, 244.58178162426898], [1.73969424E12, 312.3280516584098]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7396943E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.73969424E12, "maxY": 4.902933015222709, "series": [{"data": [[1.7396943E12, 0.0], [1.73969424E12, 4.902933015222709]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7396943E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 95.0, "minX": 1.73969424E12, "maxY": 3091.0, "series": [{"data": [[1.7396943E12, 603.0], [1.73969424E12, 3091.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7396943E12, 316.0], [1.73969424E12, 386.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7396943E12, 486.0], [1.73969424E12, 615.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7396943E12, 428.0], [1.73969424E12, 490.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7396943E12, 95.0], [1.73969424E12, 120.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7396943E12, 220.0], [1.73969424E12, 215.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7396943E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 102.0, "minX": 8.0, "maxY": 1599.5, "series": [{"data": [[794.0, 1002.5], [916.0, 476.0], [897.0, 568.0], [1039.0, 448.0], [1128.0, 468.0], [1182.0, 392.0], [1164.0, 269.0], [1308.0, 416.0], [1287.0, 385.0], [1300.0, 440.0], [1281.0, 422.0], [1581.0, 271.0], [1698.0, 322.0], [1770.0, 284.5], [1874.0, 253.0], [1937.0, 210.0], [1988.0, 245.0], [2105.0, 269.0], [2135.0, 233.0], [8.0, 102.0], [2184.0, 236.0], [2395.0, 209.0], [2504.0, 181.0], [2487.0, 178.0], [2550.0, 197.0], [2441.0, 207.0], [2465.0, 203.0], [2533.0, 193.0], [160.0, 1208.0], [2627.0, 181.0], [262.0, 1599.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2627.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 102.0, "minX": 8.0, "maxY": 1599.5, "series": [{"data": [[794.0, 1002.5], [916.0, 476.0], [897.0, 568.0], [1039.0, 448.0], [1128.0, 468.0], [1182.0, 392.0], [1164.0, 269.0], [1308.0, 416.0], [1287.0, 385.0], [1300.0, 440.0], [1281.0, 422.0], [1581.0, 271.0], [1698.0, 322.0], [1770.0, 284.5], [1874.0, 253.0], [1937.0, 210.0], [1988.0, 245.0], [2105.0, 269.0], [2135.0, 233.0], [8.0, 102.0], [2184.0, 236.0], [2395.0, 209.0], [2504.0, 181.0], [2487.0, 178.0], [2550.0, 197.0], [2441.0, 207.0], [2465.0, 203.0], [2533.0, 193.0], [160.0, 1208.0], [2627.0, 181.0], [262.0, 1599.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2627.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 182.31666666666666, "minX": 1.73969424E12, "maxY": 651.0166666666667, "series": [{"data": [[1.7396943E12, 182.31666666666666], [1.73969424E12, 651.0166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7396943E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 190.65, "minX": 1.73969424E12, "maxY": 642.6833333333333, "series": [{"data": [[1.7396943E12, 190.65], [1.73969424E12, 642.6833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7396943E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 190.65, "minX": 1.73969424E12, "maxY": 642.6833333333333, "series": [{"data": [[1.7396943E12, 190.65], [1.73969424E12, 642.6833333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7396943E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 190.65, "minX": 1.73969424E12, "maxY": 642.6833333333333, "series": [{"data": [[1.7396943E12, 190.65], [1.73969424E12, 642.6833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7396943E12, "title": "Total Transactions Per Second"}},
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

