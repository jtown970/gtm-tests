const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080})
  const url = 'https://www.porschehuntington.com/';
  await page.goto(url);
  console.log('landed')
  // await page.screenshot({path: '1landing.png'});
  const passedTestObj = {}

// URL
const srpNewUrl = 'new-vehicles'
const srpUsedUrl = 'used-vehicles'
const srpCpoUrl = 'certified-pre-owned-vehicles'

const vdpNewUrl = 'inventory/new'
// const vdpNewUrlDoesNotContain = 'inventory'
const vdpUsedUrl = 'inventory/used'
const vdpCpoUrl = 'inventory/certified'

const couponsUrl = 'service-specials'
const financingUrl = 'apply-for-financing/'
const serviceUrl = 'schedule_service/'
const partsUrl = 'parts/order-parts/'
const contactUrl = 'contact'

// BTN CLASSES 
// const phone = '.sales-phone'
const srpNewImg = 'div.vehicle-image'
//* Btn Classes
const SRPePriceVar = 'div.primary-cta a.cta-button'

const VDPePriceVar = 'a.cta-button'

const saveCarBtn = '.save-things-save'

const sellCarForm = '#gform_submit_button_18'

const priceAlerts = '.mycars-add-alert-btn'

const chatBox = '#cn-chat-question-form'

const socialLinks = '.gg-social__item'

const printBtn = 'a.difo-type-print'

//* Form Submit Classes
const formClass = '.ui-button-submit'

const testDriveVar = '.schedule-test-drive'
const testDriveVar2 = '.specialOfferFormCTA'

const partsFormVar = '#gform_submit_button_2'

const contactFormVar = 'input[type="submit"]'

const financingFormVar = '.next'

const serviceFormVar = '#gform_submit_button_6'





// delay fn
function delay(time) {
  return new Promise(function(resolve) {
      setTimeout(resolve, time)
  });
}

// PHONE
    //   try {
    //     await Promise.all([
    //     await delay(1000),
    //     page.click(phone),
    //     passedTestObj.phone = 'passed',
    //     console.log('phone:', 'PASSED'),
    //     await page.screenshot({path: '2-SRP-NEW-PAGE.png'})
    // ])
    //   } catch (err){
    //     passedTestObj.phone = 'failed'
    //     console.log(err, 'phone:  FAILED');
    //   }

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
          await delay(5000),
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
          await delay(4000),
          page.click(VDPePriceVar),
          passedTestObj.vdpNewePrice = 'passed',
          console.log('VDP ePrice: ', 'PASSED'),
        ])
        await page.screenshot({path: '2-4-VDP-NEW.png'})
      } catch (err) {
        passedTestObj.vdpNewePrice = 'failed',
        console.log('VDP ePRICE: ', 'FAILED', err);
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
          await delay(5000),
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
            await delay(5000),
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
