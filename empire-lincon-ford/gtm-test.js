const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080})
  const url = 'https://www.empirefordofhuntington.com';
  await page.goto(url);
  console.log('landed')
  // await page.screenshot({path: '1landing.png'});
  const passedTestObj = {}

//* URL
const srpNewUrl = 'searchnew.aspx'
const srpUsedUrl = 'searchused.aspx'
const couponsUrl = 'service-parts-specials.html'
const financingUrl = 'finance-application.html'
const serviceUrl = 'schedule-service.html'
const partsUrl = 'orderparts.aspx'
const contactUrl = 'contactus.aspx'
const ValueYourTradeUrl = 'true-cash-offer'

//* Btn Classes

const SRPePriceVar = '#primaryButtonPageModalButton'

const srpNewImg = '.vehicle-card-title'

const VDPePriceVar = '#getSalePriceEntryFormButton'

const saveCarBtn = '.save-vehicle'

const sellCarForm = '#gform_submit_button_18'

const priceAlerts = '.mycars-add-alert-btn'

const chatBox = '.cn-b13-label'

const socialLinks = '.gg-social__item'

const printBtn = '.print-button'

//* Form Submit Classes
const formClass = '.ui-button-submit'

const testDriveVar = '#submit'

const partsFormVar = '#submit'

const contactFormVar = '#submit'

const financingFormVar = '.next-button'

const serviceFormVar = '#gform_submit_button_6'

// delay fn 
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

  // * START OF TEST * 

      // *** NEW-SRP-PAGE-VIEW
      try {
        await page.goto(`${url}/${srpNewUrl}`);
        passedTestObj.srpNewPageview = 'passed'
        console.log('SRP-NEW PAGEVIEW:', 'PASSED');
        await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
      } catch (err){
        failedTest.push('SRP NEW PAGEVIEW: FAILED')
        console.log(err, 'SRP NEW PAGEVIEW:  FAILED');
      }

      
      // ** Save Car
      try {    
        await Promise.all([
          page.click(saveCarBtn),
          passedTestObj.srpNewSaveCar = 'passed',
          console.log('SRP NEW SAVE CAR:', 'PASSED'),
        ])
      } catch (err) {
        passedTestObj.srpNewSaveCar = 'failed',
        console.log('SRP NEW SAVE CAR:  FAILED');
      }

      // ** ePrice
      try {    
        await Promise.all([
          page.click(SRPePriceVar),
          passedTestObj.srpNewePrice = 'passed',
          console.log('SRP NEW ePRICE:', 'PASSED'),
        ])
        await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
      } catch (err) {
        passedTestObj.srpNewePrice = 'failed',
        console.log('SRP NEW ePRICE:  FAILED');
      }

      // * go back to new srp
      try {
        await page.goto(`${url}/${srpNewUrl}`);
        console.log('SRP-NEW PAGEVIEW:', 'PASSED');
      } catch (err){
        console.log(err, 'SRP NEW PAGEVIEW:  FAILED');
      }

  
      // * Go to VDP
      try {
        await Promise.all([
          page.click(srpNewImg),
          passedTestObj.vdpNewPageview = 'passed',
          console.log('Go to VDP page: ', 'PASSED'),
        ])
        await page.screenshot({path: '2-3-VDP-NEW.png'})
      } catch (err) {
        passedTestObj.vdpNewPageview = 'failed',
        console.log('Go to VDP Page:', 'FAILED');
      }


  
      // * VDP ePrice
      try {
        
        await Promise.all([
          await delay(9000),
          page.click(VDPePriceVar),
          passedTestObj.vdpNewePrice = 'passed',
          console.log('VDP ePrice: ', 'PASSED'),
        ])
        await page.screenshot({path: '2-4-VDP-NEW.png'})
      } catch (err) {
        passedTestObj.vdpNewePrice = 'failed',
        console.log('VDP ePRICE: ', 'FAILED');
      }



      // *** Used-SRP-PAGE-VIEW
      try {
        await page.goto(`${url}/${srpUsedUrl}`);
        passedTestObj.srpUsedPageview = 'passed',
        console.log('SRP-USED PAGEVIEW:', 'PASSED');
        await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
      } catch (err){
        passedTestObj.srpUsedPageview = 'failed',
        console.log(err, 'SRP USED PAGEVIEW:  FAILED');
      }

      // ** ePrice
      try {    
        await Promise.all([
          page.click(SRPePriceVar),
          passedTestObj.srpUsedePrice = 'passed',
          console.log('SRP USED ePRICE:', 'PASSED'),
        ])
        await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
      } catch (err) {
        passedTestObj.srpUsedePrice = 'failed',
        console.log('SRP USED ePRICE:  FAILED');
      }

      // * go back to used srp
      try {
        await page.goto(`${url}/${srpUsedUrl}`);
        console.log('SRP-USED PAGEVIEW:', 'PASSED');
        await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
      } catch (err){
        console.log(err, 'SRP USED PAGEVIEW:  FAILED');
      }

  
      // * Go to VDP
      try {
        await Promise.all([
          page.click(srpNewImg),
          passedTestObj.vdpUsedPageview = 'passed',
          console.log('Go to VDP page: ', 'PASSED'),
        ])
        await page.screenshot({path: '2-3-VDP-NEW.png'})
      } catch (err) {
        passedTestObj.vdpUsedPageview = 'failed',
        console.log('Go to VDP Page:', 'FAILED');
      }
  
      // * VDP ePrice
      try {
        await Promise.all([
          await delay(9000),
          page.click(VDPePriceVar),
          passedTestObj.vdpUsedePrice = 'passed',
          console.log('VDP ePrice: ', 'PASSED'),
        ])
        await page.screenshot({path: '2-4-VDP-NEW.png'})
      } catch (err) {
        passedTestObj.vdpUsedePrice = 'failed',
        console.log('VDP ePRICE: ', 'FAILED');
      }


  // *** Cpo-SRP-PAGE-VIEW
        try {
          await page.goto(`${url}/${srpCpoUrl}`);
          passedTestObj.srpCpoPageview = 'passed',
          console.log('SRP-USED PAGEVIEW:', 'PASSED');
          await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
        } catch (err){
          passedTestObj.srpCpoPageview = 'failed',
          console.log(err, 'SRP USED PAGEVIEW:  FAILED');
        }
  
        // ** ePrice
        try {    
          await Promise.all([
            page.click(SRPePriceVar),
            passedTestObj.srpCpoePrice = 'passed',
            console.log('SRP USED ePRICE:', 'PASSED'),
          ])
          await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
        } catch (err) {
          passedTestObj.srpCpoePrice = 'failed',
          console.log('SRP USED ePRICE:  FAILED');
        }
  
        // * go back to used srp
        try {
          await page.goto(`${url}/${srpCpoUrl}`);
          console.log('SRP-USED PAGEVIEW:', 'PASSED');
          await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
        } catch (err){
          console.log(err, 'SRP USED PAGEVIEW:  FAILED');
        }
  
    
        // * Go to VDP
        try {
          await Promise.all([
            page.click(srpNewImg),
            passedTestObj.vdpCpoPageview = 'passed',
            console.log('Go to VDP page: ', 'PASSED'),
          ])
          await page.screenshot({path: '2-3-VDP-NEW.png'})
        } catch (err) {
          passedTestObj.vdpCpoPageview = 'failed',
          console.log('Go to VDP Page:', 'FAILED');
        }
    
        // * VDP ePrice
        try {
          await Promise.all([
            await delay(9000),
            page.click(VDPePriceVar),
            passedTestObj.vdpCpoePrice = 'passed',
            console.log('VDP ePrice: ', 'PASSED'),
          ])
          await page.screenshot({path: '2-4-VDP-NEW.png'})
        } catch (err) {
          passedTestObj.vdpCpoePrice = 'failed',
          console.log('VDP ePRICE: ', 'FAILED');
        }


  // * Print Coupon
        // *** Used-SRP-PAGE-VIEW
        try {
          await page.goto(`${url}/${couponsUrl}`);
          passedTestObj.couponPageview = 'passed',
          console.log('SRP-NEW PAGEVIEW:', 'PASSED');
          await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
        } catch (err){
          passedTestObj.couponPageview = 'failed',
          console.log(err, 'PRINT COUPON PAGE:  FAILED');
        }
  
        // ** Print Coupon
        try {    
          await Promise.all([
            page.click(printBtn),
            passedTestObj.couponPrint = 'passed',
            console.log('PRINT COUPON:', 'PASSED'),
          ])
          await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
        } catch (err) {
          passedTestObj.couponPrint = 'failed',
          console.log('PRINT COUPON:  FAILED');
        }   
  
        
  // * PARTS APP 

        // *** PARTS PAGE
        try {
          await page.goto(`${url}/${partsUrl}`);
          passedTestObj.partsPageview = 'passed',
          console.log('PARTS PAGEVIEW:', 'PASSED');
          await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
        } catch (err){
          passedTestObj.partsPageview = 'failed',
          console.log(err, 'PARTS PAGE:  FAILED');
        }
  
        // ** Parts Form
        try {    
          await Promise.all([
            page.click(partsFormVar),
            passedTestObj.partsForm = 'passed', 
            console.log('PARTS APP:', 'PASSED'),
          ])
          await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
        } catch (err) {
          passedTestObj.partsForm = 'failed',
          console.log('PARTS APP:  FAILED');
        }  

        
    // * FINANCING APP 

        // *** FINANCE PAGE-VIEW
        try {
          await page.goto(`${url}/${financingUrl}`);
          passedTestObj.financePageview = 'passed',
          console.log('FINANCE PAGEVIEW:', 'PASSED');
          await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
        } catch (err){
          passedTestObj.financePageview = 'failed',
          console.log(err, 'FINANCE PAGE:  FAILED');
        }
  
        // ** Finance Form
        try {    
          await Promise.all([
            page.click(financingFormVar),
            passedTestObj.financeForm = 'passed', 
            console.log('FINANCE APP:', 'PASSED'),
          ])
          await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
        } catch (err) {
          passedTestObj.financeForm = 'failed',
          console.log('FINANCE APP:  FAILED');
        }  


    // * SCHEDULE SERVICE APP 

        // *** FINANCE PAGE-VIEW
        try {
          await page.goto(`${url}/${serviceUrl}`);
          passedTestObj.servicePageview = 'passed',
          console.log('SERVICE PAGEVIEW:', 'PASSED');
          await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
        } catch (err){
          passedTestObj.servicePageview = 'failed',
          console.log(err, 'SERVICE PAGE:  FAILED');
        }

    // * CONTACT 

  
        // ** contact drop down
        try {    
          await Promise.all([
            page.click(contactDropDown),
            passedTestObj.contactPageview = 'passed',
            console.log('CONTACT FORM:', 'PASSED'),
          ])
          await page.screenshot({path: 'contact.png'})
        } catch (err) {
          passedTestObj.contactPageview = 'failed',
          console.log(err, 'CONTACT FORM:  FAILED');
        }  
        // ** contact btn
        try {    
          await Promise.all([
            page.click(contactFormVar),
            passedTestObj.contactForm = 'passed',
            console.log('CONTACT FORM:', 'PASSED'),
          ])
          await page.screenshot({path: 'contact.png'})
        } catch (err) {
          passedTestObj.contactForm = 'failed',
          console.log(err, 'CONTACT FORM:  FAILED');
        }  
  


        
    console.log(passedTestObj)
  // *** END
  await browser.close();
})();