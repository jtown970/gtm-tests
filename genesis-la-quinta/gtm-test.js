const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080})
  const url = 'https://www.genesisoflaquinta.com';
  await page.goto(url);
  console.log('landed')
  // await page.screenshot({path: '1landing.png'});
  const passedTestObj = {}

//* URL
const srpNewUrl = 'VehicleSearchResults?search=new'
const srpUsedUrl = 'VehicleSearchResults?search=preowned'
const couponsUrl = 'ServiceAndPartsSpecials_D'
const financingUrl = 'FinancePreQualForm'
const serviceUrl = 'ServiceApptForm'
const partsUrl = 'PartsOrderForm'
const contactUrl = 'ContactUsForm'

//* Btn Classes

const SRPePriceVar = '.primary'

const srpNewImg = 'div.media figure a img'


const VDPePriceVar = 'div.link a.primary'

const saveCarBtn = '.vehicle-save'

const sellCarForm = '#gform_submit_button_18'

const priceAlerts = '.priceDropAlert'

const chatBox = '#caoEngagementNewBg'

const socialLinks = '.gg-social__item'

const printBtn = '.secondary'
const cancelBtn = '.cancel-button'

//* Form Submit Classes
const formClass = '#submit'

const testDriveVar = 'li.flex-col a.btn-no-decoration'

const partsFormVar = '.button-wrapper'

const contactFormVar = 'div.button-wrapper button'

const financingFormVar = '.button-wrapper'

const serviceFormVar = '.widget-container'

const popUpVar = '.bx-button'


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
        console.log(err, 'SRP NEW ePRICE:  FAILED');
      }

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
        console.log(err,'Go to VDP Page:', 'FAILED');
      }


  
      // * VDP ePrice
      try {
        
        await Promise.all([
          await delay(3000),
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
          await delay(3000),
          page.click(VDPePriceVar),
          passedTestObj.vdpUsedePrice = 'passed',
          console.log('VDP ePrice: ', 'PASSED'),
        ])
        await page.screenshot({path: '2-4-VDP-NEW.png'})
      } catch (err) {
        passedTestObj.vdpUsedePrice = 'failed',
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
        // ** Cancel Coupon
        try {    
          await Promise.all([
            page.click(cancelBtn),
            console.log('CANCEL COUPON:', 'PASSED'),
          ])
          await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
        } catch (err) {
          console.log('CANCEL COUPON:  FAILED');
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
            await page.goto(`${url}/${contactUrl}`),
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