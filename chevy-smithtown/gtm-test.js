const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080})
  const url = 'https://www.chevroletofsmithtown.com';
  await page.goto(url);
  console.log('landed')
  // await page.screenshot({path: '1landing.png'});

  // * URLs
    const srpNewUrl = 'VehicleSearchResults?search=new'
    const srpUsedUrl = 'VehicleSearchResults?search=used'
    const srpCpoUrl = 'certified-pre-owned-vehicles'
    
    const vdpNewUrl = 'VehicleDetails/new-'
    // const vdpNewUrlDoesNotContain = 'inventory'
    const vdpUsedUrl = 'VehicleDetails/used-'
    const vdpCpoUrl = 'inventory/certified'
    
    const couponsUrl = 'ServiceAndPartsSpecials'
    const financingUrl = 'FinancePreQualForm'
    const serviceUrl = 'ServiceApptForm'
    const partsUrl = 'PartsOrderForm'
    const orderTiresUrl = 'TireFinder'
    const contactUrl = 'ContactUsForm'

  //* Btn Classes
    const SRPePriceVar = 'div.content div.link a.primary'
    
    const closeEprice = 'div.link a'
    const srpNewImg = 'div.media figure a img'

    const VDPePriceVar = 'div.content div.link a.primary'

    const saveCarBtn = '.vehicle-save interceptible'

    const sellCarForm = '#gform_submit_button_18'

    const priceAlerts = '.vehicle-watch'

    const chatBox = '.sms-button'

    const socialLinks = '.gg-social__item'

    const printBtn = 'div.content a.secondary'

    const valueYourTradeVar = '#tradepending-vehicle-typeahead'

    //* Form Submit Classes
    const formClass = 'div.content form .button-wrapper'

    const testDriveVar = '.schedule-testdrive'

    const partsFormVar = '#gform_submit_button_2'

    const contactFormVar = 'button'
    const vdpContactFormVar = 'form.insight div.button-wrapper button'

    const financingFormVar = 'form.insight div.button-wrapper button'

    const serviceFormVar = '#gform_submit_button_6'

    const orderTiresFormVar = 'form.ng-pristine button.rectangleLargeButtonImage'

  // * START OF TEST * 

      // *** NEW-SRP-PAGE-VIEW
      try {
        await page.goto(`${url}/${srpNewUrl}`);
        console.log('SRP-NEW PAGEVIEW:', 'PASSED');
        await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
      } catch (err){
        console.log(err, 'SRP NEW PAGEVIEW:  FAILED');
      }

      // ** ePrice
      try {    
        await Promise.all([
          page.click(SRPePriceVar),
          console.log('SRP NEW ePRICE:', 'PASSED'),
        ])
        await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
      } catch (err) {
        console.log('SRP NEW ePRICE:  FAILED');
      }
  
      // * Close ePrice
      try {
        await Promise.all([
          page.click(closeEprice),
          console.log('Close ePrice:', "PASSED"),
        ])
        await page.screenshot({path: '2-2-SRP-NEW-EPRICE-CLOSE.png'})
      } catch (err) {
        console.log('Close ePrice:', 'FAILED');
      }
  
      // * Go to VDP
      try {
        await Promise.all([
          page.click(srpNewImg),
          console.log('Go to VDP page: ', 'PASSED'),
        ])
        await page.screenshot({path: '2-3-VDP-NEW.png'})
      } catch (err) {
        console.log('Go to VDP Page:', 'FAILED');
      }
  
      // * VDP ePrice
      try {
        await Promise.all([
          page.click(VDPePriceVar),
          console.log('VDP ePrice: ', 'PASSED'),
        ])
        await page.screenshot({path: '2-4-VDP-NEW.png'})
      } catch (err) {
        console.log('VDP ePRICE: ', 'FAILED');
      }
  
      // * Close ePrice
      try {
        await Promise.all([
          page.click(closeEprice),
          console.log('CLOSE ePRICE: ', 'PASSED'),
        ])
        await page.screenshot({path: '2-5-EPRICE-CLOSE.png'})
      } catch (err) {
        console.log('CLOSE ePRICE: ', 'FAILED');
      }


      // *** Used-SRP-PAGE-VIEW
      try {
        await page.goto(`${url}/${srpUsedUrl}`);
        console.log('SRP-USED PAGEVIEW:', 'PASSED');
        await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
      } catch (err){
        console.log(err, 'SRP USED PAGEVIEW:  FAILED');
      }

      // ** ePrice
      try {    
        await Promise.all([
          page.click(SRPePriceVar),
          console.log('SRP USED ePRICE:', 'PASSED'),
        ])
        await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
      } catch (err) {
        console.log('SRP USED ePRICE:  FAILED');
      }
  
      // * Close ePrice
      try {
        await Promise.all([
          page.click(closeEprice),
          console.log('Close ePrice:', "PASSED"),
        ])
        await page.screenshot({path: '2-2-SRP-NEW-EPRICE-CLOSE.png'})
      } catch (err) {
        console.log('Close ePrice:', 'FAILED');
      }
  
      // * Go to VDP
      try {
        await Promise.all([
          page.click(srpNewImg),
          console.log('Go to VDP page: ', 'PASSED'),
        ])
        await page.screenshot({path: '2-3-VDP-NEW.png'})
      } catch (err) {
        console.log('Go to VDP Page:', 'FAILED');
      }
  
      // * VDP ePrice
      try {
        await Promise.all([
          page.click(VDPePriceVar),
          console.log('VDP ePrice: ', 'PASSED'),
        ])
        await page.screenshot({path: '2-4-VDP-NEW.png'})
      } catch (err) {
        console.log('VDP ePRICE: ', 'FAILED');
      }
  
      // * Close ePrice
      try {
        await Promise.all([
          page.click(closeEprice),
          console.log('CLOSE ePRICE: ', 'PASSED'),
        ])
      } catch (err) {
        console.log('CLOSE ePRICE: ', 'FAILED');
      }


  // // * Print Coupon
  //       // *** Used-SRP-PAGE-VIEW
  //       try {
  //         await page.goto(`${url}/${couponsUrl}`);
  //         console.log('SRP-NEW PAGEVIEW:', 'PASSED');
  //         await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
  //       } catch (err){
  //         console.log(err, 'PRINT COUPON PAGE:  FAILED');
  //       }
  
  //       // ** ePrice
  //       try {    
  //         await Promise.all([
  //           page.click(printBtn),
  //           console.log('PRINT COUPON:', 'PASSED'),
  //         ])
  //         await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
  //       } catch (err) {
  //         console.log('PRINT COUPON:  FAILED');
  //       }   
        
        
    // * FINANCING APP 

        // *** FINANCE PAGE-VIEW
        try {
          await page.goto(`${url}/${financingUrl}`);
          console.log('FINANCE PAGEVIEW:', 'PASSED');
          await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
        } catch (err){
          console.log(err, 'FINANCE PAGE:  FAILED');
        }
  
        // ** ePrice
        try {    
          await Promise.all([
            page.click(financingFormVar),
            console.log('FINANCE APP:', 'PASSED'),
          ])
          await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
        } catch (err) {
          console.log('FINANCE APP:  FAILED');
        }  


    // * SCHEDULE SERVICE APP 

        // *** FINANCE PAGE-VIEW
        try {
          await page.goto(`${url}/${serviceUrl}`);
          console.log('SERVICE PAGEVIEW:', 'PASSED');
          await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
        } catch (err){
          console.log(err, 'SERVICE PAGE:  FAILED');
        }

    // * CONTACT 

        // *** CONTACT PAGE-VIEW
        try {
          await page.goto(`${url}/${contactUrl}`);
          console.log('CONTACT PAGEVIEW:', 'PASSED');
          await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
        } catch (err){
          console.log(err, 'CONTACT PAGE:  FAILED');
        }
  
        // ** ePrice
        try {    
          await Promise.all([
            page.click(contactFormVar),
            console.log('CONTACT FORM:', 'PASSED'),
          ])
          await page.screenshot({path: 'contact.png'})
        } catch (err) {
          console.log(err, 'CONTACT FORM:  FAILED');
        }  
  

  

  // *** END
  await browser.close();
})();