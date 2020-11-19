const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080})
  const url = 'https://www.westchesteraudi.com';
  await page.goto(url);
  console.log('landed')
  // await page.screenshot({path: '1landing.png'});

  const passedTest = []
  const passedTestObj = {}
  const failedTest = []

//* URL
const srpNewUrl = 'new-inventory/index.htm'
const srpUsedUrl = 'used-inventory/index.htm'
const srpCpoUrl = 'certified-inventory/index.htm'
const couponsUrl = 'specials/service.htm?&ddcref=nav_SpecialsFinancing'
const financingUrl = 'financing/application.htm?&ddcref=nav_SpecialsFinancing'
const serviceUrl = 'schedule-service.htm'
const partsUrl = 'parts/parts-center.htm#order'
const contactUrl = 'li.nav-last a.nav-with-children'
const ValueYourTradeUrl = 'true-cash-offer'

//* Btn Classes
const SRPePriceVar = '.btn-primary'
const srpNewImg = '.vehicle-card-title'

const VDPePriceVar = '.btn-primary'

const saveCarBtn = '.wsm-mycars-buttons'

const sellCarForm = '#gform_submit_button_18'

const priceAlerts = '.mycars-add-alert-btn'

const chatBox = '#cn-chat-question-form'

const socialLinks = '.gg-social__item'

const printBtn = '.ddc-nav-inline'

//* Form Submit Classes
const formClass = '.ui-button-submit'

const testDriveVar = 'li.flex-col a.btn-no-decoration'

const partsFormVar = '#gform_submit_button_2'

const contactDropDown = 'li.nav-last a.nav-with-children'
const contactFormVar = 'div.contact-form form button.ui-button-submit'

const financingFormVar = '.ui-accordion-next'

const serviceFormVar = '#SpeedBookSubmit'

  // * START OF TEST * 

      // *** NEW-SRP-PAGE-VIEW
      try {
        await page.goto(`${url}/${srpNewUrl}`);
        passedTest.push("SRP-NEW PAGEVIEW: PASSED")
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

        console.log('SRP NEW ePRICE:  FAILED');
      }

      // * go back to new srp
      try {
        await page.goto(`${url}/${srpNewUrl}`);
        console.log('SRP-NEW PAGEVIEW:', 'PASSED');
        await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
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


  // * Print Coupon
        // *** Used-SRP-PAGE-VIEW
        try {
          await page.goto(`${url}/${couponsUrl}`);
          console.log('SRP-NEW PAGEVIEW:', 'PASSED');
          await page.screenshot({path: '2-SRP-NEW-PAGE.png'});
        } catch (err){
          console.log(err, 'PRINT COUPON PAGE:  FAILED');
        }
  
        // ** ePrice
        try {    
          await Promise.all([
            page.click(printBtn),
            console.log('PRINT COUPON:', 'PASSED'),
          ])
          await page.screenshot({path: '2-1-SRP-NEW-EPRICE.png'})
        } catch (err) {
          console.log('PRINT COUPON:  FAILED');
        }   
        
        
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

  
        // ** contact drop down
        try {    
          await Promise.all([
            page.click(contactDropDown),
            console.log('CONTACT FORM:', 'PASSED'),
          ])
          await page.screenshot({path: 'contact.png'})
        } catch (err) {
          console.log(err, 'CONTACT FORM:  FAILED');
        }  
        // ** contact btn
        try {    
          await Promise.all([
            page.click(contactFormVar),
            console.log('CONTACT FORM:', 'PASSED'),
          ])
          await page.screenshot({path: 'contact.png'})
        } catch (err) {
          console.log(err, 'CONTACT FORM:  FAILED');
        }  
  

  
        // console.log(passedTest)
        console.log(passedTestObj)
        // console.log(failedTest)
  // *** END
  await browser.close();
})();