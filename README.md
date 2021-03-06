Node 4Chan Image Downloader
===================


Node 4Chan Image Downloader (N4ID) is a simple, light-weight, application that saves images from a specified 4Chan thread. 

----------
Features
-------------
 - Downloads images to specified folder. By default, the images will be saved in the following directory structure: `images/boardname/threadid/`

 - Uses the official [4Chan API](https://github.com/4chan/4chan-API) to access post data 

----------
Installation
-------------
N4ID is written using [node.js](http://nodejs.org/), if you wish to use this application please ensure you have it installed. If you have it installed, you must first download all the files contained in this repository. 

After you have done so, run the `npm install`command in your terminal. This command will install all the dependencies necessary for the application to be used successfully.

----------
Usage
-------------
You can run the application using the follow command: `node saver.js boardname threadid`. Where `boardname` is the board name and the `threadid` is the thread id. For this thread: `http://boards.4chan.org/wg/thread/6039110/elder-scrolls-wallpapersdesktop`, your command should look like: `node saver.js wg 6039110`

----------
License
-------------
The MIT License (MIT)

Copyright (c) 2015 Denver Fernandes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.