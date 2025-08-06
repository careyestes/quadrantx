<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const insideBoxElement = document.querySelector('.inside-box');
    const outsideBoxElement = document.querySelector('.outside-box');
    const verticalLinesElement = document.querySelector('.vertical-line');
    const horizontalLinesElement = document.querySelector('.horizontal-line');
    const boxAngleToX = document.querySelector('.box-angle-to-x');

    const boxBottomElement = document.getElementById('Box_Bottom');
    const boxBottomElement_startPoints = '78.6419144 104.7164841 70.374382 96.4630661 70.374382 96.4630661 78.6419144 104.7164841 78.6419144 104.7164841';
    const boxBottomElement_endPoints = '78.6419144 104.7164841 70.374382 96.4630661 21.1330204 96.4630661 12.8795967 104.7164841 78.6419144 104.7164841';
    
    const Left_Angle_DownElement = document.getElementById('Left_Angle_Down');
    const Left_Angle_DownElement_startPoints = '61.227748 62.4304915 64.1838071 59.5506818 64.1836889 59.5508001 58.2727661 65.3127518 58.2734222 65.3120956 61.227748 62.4304915';
    const Left_Angle_DownElement_endPoints = '58.2734213 59.4761674 64.1092898 59.4761674 114.8613987 110.2285083 114.8613987 121.9013788 58.2734213 65.3120989 58.2734213 59.4761674';
    
    const LeftSideBoxAngleElement = document.getElementById('LeftSideBoxAngle');
    const LeftSideBoxAngleElement_startPoints = '12.8795967 104.7164841 21.1330204 96.4630661 21.1330204 96.4630661 21.1330204 96.4630661 12.8795967 104.7164841 12.8795967 104.7164841 12.8795967 104.7164841';
    const LeftSideBoxAngleElement_endPoints = '12.8795967 104.7164841 21.1330204 96.4630661 21.1330204 96.4630661 20.9787159 47.1515846 12.7252932 38.9122658 12.8795967 104.7164841 12.8795967 104.7164841';
    
    const MiddleBottomAngleElement = document.getElementById('MiddleBottomAngle');
    const MiddleBottomAngleElement_startPoints = '114.8613968 110.228508 114.8615875 110.2286987 114.8612061 121.9011917 114.8613968 121.9013824 114.8613968 110.228508';
    const MiddleBottomAngleElement_endPoints = '114.8613968 110.228508 165.7676239 59.3226624 171.6038055 65.1585922 114.8613968 121.9013824 114.8613968 110.228508';
    
    const RightSideBoxAngleElement = document.getElementById('RightSideBoxAngle');
    const RightSideBoxAngleElement_startPoints = '95.2595215 72.7312622 103.5129395 80.9562225 103.5277863 80.9562225 95.2595215 72.7312622 95.2595215 72.7312622';
    const RightSideBoxAngleElement_endPoints = '95.2595215 72.7312622 103.5129395 80.9562225 103.5277863 14.9288387 95.413826 23.1822605 95.2595215 72.7312622';
    
    const TopSideBoxElement = document.getElementById('TopSideBox');
    const TopSideBoxElement_startPoints = '37.3588409 14.957552 45.5834846 23.1822605 45.5834846 23.1822605 37.3588409 14.957552 37.3588409 14.957552';
    const TopSideBoxElement_endPoints = '37.3588409 14.957552 45.5834846 23.1822605 98.0251898 23.1822605 103.5277863 14.9288387 37.3588409 14.957552';
    
    const TopRightXAngleElement = document.getElementById('TopRightXAngle');
    const TopRightXAngle_startPoints = '165.6407913 59.3223969 165.6407913 59.3223969 171.540638 65.0954247 171.540638 65.0954247 165.6407913 59.3223969';
    const TopRightXAngle_endPoints = '165.6407913 59.3223969 210.6170807 13.9288387 222.7067108 13.9288387 171.540638 65.0954247 165.6407913 59.3223969';
    
    const RightXAngleElement = document.getElementById('RightXAngle');
    const RightXAngle_startPoints = '121.2472 14.9288387 132.9190063 14.9288387 132.9190359 14.9288092 121.2472334 14.9288054 121.2472 14.9288387';
    const RightXAngle_endPoints = '121.2472015 14.9288384 132.9190015 14.9288384 223.7067134 105.7164874 212.0349134 105.7164874 121.2472015 14.9288384';

    const letters = document.querySelectorAll('.float-text path, .float-text polygon'); // Select all paths or polygons
    const animationClass = 'animate-letter';
    const reverseClass = 'reverse-letter';
    const delay = 60;
    const pauseBeforeReverse = 2200;

    let progress = 0;
    let speed = 0.055;

    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add(animationClass);
      }, index * delay); // Apply animation class with delay
    });

    const totalSpellOutTime = letters.length * delay;
    setTimeout(() => {
      letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.remove(animationClass); // Optional: Remove the initial animation class
          letter.classList.add(reverseClass);
        }, index * delay);
      });
    }, totalSpellOutTime + pauseBeforeReverse);

    function animateFirstPolygon(p, sp, ep, elem) {
      p += speed;
      if (p > 1) p = 1;

      const start = sp.split(' ').map(Number);
      const end = ep.split(' ').map(Number);

      const interpolatedPoints = start.map((startVal, i) => {
        return startVal + p * (end[i] - startVal);
      });

      if (elem) {
        elem.setAttribute('points', interpolatedPoints.join(' '));
      }

      if (p < 1) {
        requestAnimationFrame(() => animateFirstPolygon(p, sp, ep, elem));
      } else {
        animateSecondPolygon(progress, LeftSideBoxAngleElement_startPoints, LeftSideBoxAngleElement_endPoints, LeftSideBoxAngleElement);
        animateSecondPolygon(progress, MiddleBottomAngleElement_startPoints, MiddleBottomAngleElement_endPoints, MiddleBottomAngleElement);
        animateSecondPolygon(progress, RightSideBoxAngleElement_startPoints, RightSideBoxAngleElement_endPoints, RightSideBoxAngleElement);
      }
    }

    function animateSecondPolygon(p, sp, ep, elem) {
      p += speed;
      if (p > 1) p = 1;

      const start = sp.split(' ').map(Number);
      const end = ep.split(' ').map(Number);

      const interpolatedPoints = start.map((startVal, i) => {
        return startVal + p * (end[i] - startVal);
      });

      if (elem) {
        elem.setAttribute('points', interpolatedPoints.join(' '));
      }

      if (p < 1) {
        requestAnimationFrame(() => animateSecondPolygon(p, sp, ep, elem));
      } else {
        animateThirdPolygon(progress, TopSideBoxElement_startPoints, TopSideBoxElement_endPoints, TopSideBoxElement);
        animateThirdPolygon(progress, TopRightXAngle_startPoints, TopRightXAngle_endPoints, TopRightXAngleElement);
        animateThirdPolygon(progress, RightXAngle_startPoints, RightXAngle_endPoints, RightXAngleElement);
      }
    }

    function animateThirdPolygon(p, sp, ep, elem) {
      p += speed - 0.03;
      if (p > 1) p = 1;

      const start = sp.split(' ').map(Number);
      const end = ep.split(' ').map(Number);

      const interpolatedPoints = start.map((startVal, i) => {
        return startVal + p * (end[i] - startVal);
      });

      if (elem) {
        elem.setAttribute('points', interpolatedPoints.join(' '));
      }

      if (p < 1) {
        requestAnimationFrame(() => animateThirdPolygon(p, sp, ep, elem));
      }
    }
    
    insideBoxElement.addEventListener('animationend', () => {
      verticalLinesElement.classList.add('rotate-lines');
      horizontalLinesElement.classList.add('rotate-lines');
    });

    boxAngleToX.addEventListener('animationend', () => {
      animateFirstPolygon(progress, boxBottomElement_startPoints, boxBottomElement_endPoints, boxBottomElement);
      animateFirstPolygon(progress, Left_Angle_DownElement_startPoints, Left_Angle_DownElement_endPoints, Left_Angle_DownElement);
    });

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.attributeName === 'class') {
          const currentClasses = mutation.target.classList;
          if (currentClasses.contains('rotate-lines')) {
            observer.disconnect();
            outsideBoxElement.classList.add('slide-box');
            insideBoxElement.classList.add('slide-box');
            observer.observe(verticalLinesElement, { attributes: true });
          }
        }
      }
    });

    observer.observe(verticalLinesElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
    
  });

</script>

<div>
  <svg class="logo" id="Animation" viewBox="0 0 225 125">
    <defs>
      <filter id="glow">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
        <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g id="Stage_x5F_1">
      <line id="Vertical_x5F_Line" class="vertical-line lines" x1="114.1927366" y1="14.1768522" x2="114.1927366" y2="104.9645012"/>
      <line id="Horizontal_x5F_Line" class="horizontal-line lines" x1="159.5865611" y1="59.5706767" x2="68.7989122" y2="59.5706767"/>
    </g>
    <g id="Stage_x5F_2">
      <rect id="Inside_x5F_Box" class="boxes inside-box" x="77.0523348" y="22.4302748" width="74.2808037" height="74.2808037" />
      <rect id="Outside_x5F_Box" class="boxes outside-box" x="68.7989122" y="14.1768522" width="90.787649" height="90.787649"/>
    </g>
    <g id="Stage_x5F_4">
      <line class="down-angle down-angle-top" x1="103.1301882" y1="104.9645012" x2="12.3425393" y2="14.1768522"/>
      <line class="down-angle down-angle-bottom" x1="103.1301882" y1="104.9645012" x2="12.3425393" y2="14.1768522"/>
    </g>
    <g id="Stage_x5F_6">
      <rect class="inside-box-fill" x="21.2035497" y="23.0358103" width="73.287979" height="73.227066"/>
    </g>
    <g id="Stage_x5F_7">
      <rect class="angle-box-strikethrough" x="42.4768581" y="-4.3138658" />
    </g>
    <g id="Stage_x5F_8">
      <polyline class="box-angle-to-x" points="216.5799916 13.7916009 114.8227702 115.5488223 58.2734213 59.1854254"/>
    </g>
    <g id="Stage_x5F_9">
      <polygon id="Box_Bottom" class="poly box-bottom" points="78.6419144 104.7164841 70.374382 96.4630661 70.374382 96.4630661 78.6419144 104.7164841 78.6419144 104.7164841" filter="url(#glow)"/>
      <polygon id="Left_Angle_Down" class="poly left-angle-down" points="61.227748 62.4304915 64.1838071 59.5506818 64.1836889 59.5508001 58.2727661 65.3127518 58.2734222 65.3120956 61.227748 62.4304915" filter="url(#glow)"/>
    </g>
    <g id="Stage_x5F_10">
      <polygon id="LeftSideBoxAngle" class="poly" points="12.8795967 104.7164841 21.1330204 96.4630661 21.1330204 96.4630661 21.1330204 96.4630661 12.8795967 104.7164841 12.8795967 104.7164841 12.8795967 104.7164841" filter="url(#glow)"/>
      <polygon id="MiddleBottomAngle" class="poly" points="114.8613968 110.228508 114.8615875 110.2286987 114.8612061 121.9011917 114.8613968 121.9013824 114.8613968 110.228508" filter="url(#glow)"/>
      <polygon id="RightSideBoxAngle" class="poly" points="95.2595215 72.7312622 103.5129395 80.9562225 103.5277863 80.9562225 95.2595215 72.7312622 95.2595215 72.7312622" filter="url(#glow)"/>
    </g>
    <g id="Stage_x5F_11">
      <polygon id="TopRightXAngle" class="poly" points="165.6407913 59.3223969 165.6407913 59.3223969 171.540638 65.0954247 171.540638 65.0954247 165.6407913 59.3223969" filter="url(#glow)"/>
      <polygon id="TopSideBox" class="poly" points="37.3588409 14.957552 45.5834846 23.1822605 45.5834846 23.1822605 37.3588409 14.957552 37.3588409 14.957552" filter="url(#glow)"/>
      <polygon id="RightXAngle" class="poly" points="121.2472 14.9288387 132.9190063 14.9288387 132.9190359 14.9288092 121.2472334 14.9288054 121.2472 14.9288387" filter="url(#glow)"/>
    </g>
  </svg>
  <svg class="float-text" viewBox="0 0 435 80">
    <path class="letter-q" d="M41.9019775,66.4190674c.6890259-.3001709,1.3207397-.6358643,1.8808594-1.0159302,1.7337036-1.1757812,3.0132446-2.9110718,3.8370361-5.2042847.822998-2.2932129,1.352356-5.2923584,1.5880737-8.9967041.2341309-3.7046509.352356-8.3204956.352356-13.8481445,0-5.5269165-.1182251-10.1438599-.352356-13.8482056-.2357178-3.7047119-.7650757-6.7038574-1.5880737-8.9970703-.8237915-2.2932129-2.1033325-4.0269165-3.8370361-5.2038574-1.7344971-1.1757812-4.0876465-1.9694214-7.0562134-2.3817139-2.9702148-.4107056-6.71875-.6174316-11.2456665-.6174316-4.5292969,0-8.277832.2067261-11.24646.6174316-2.9701538.4122925-5.3225098,1.2059326-7.0562134,2.3817139-1.7352905,1.1769409-3.0140381,2.9106445-3.8370361,5.2038574-.824585,2.2932129-1.3531494,5.2923584-1.5880737,8.9970703-.2357178,3.7043457-.352356,8.3212891-.352356,13.8482056,0,5.5276489.1166382,10.1434937.352356,13.8481445.2349243,3.7043457.7634888,6.7034912,1.5880737,8.9967041.822998,2.2932129,2.1017456,4.0285034,3.8370361,5.2042847,1.7337036,1.1769409,4.0860596,1.9705811,7.0562134,2.3812866,2.9686279.4107666,6.7171631.6174927,11.24646.6174927,4.5269165,0,8.2754517-.2067261,11.2456665-.6174927.7236328-.1000977,1.4092407-.2238159,2.0596924-.3694458l7.9518433,10.4248657h3.7923584v-.1762085l-8.62854-11.2445679ZM40.0274048,63.9761963l-11.9004517-15.5084839h-3.7932129l12.5106812,16.4014893c-.5805664.0966797-1.1917114.1726074-1.8374634.2250366-2.5292969.2067261-5.7046509.3088989-9.526001.3088989-3.8237305,0-6.9990845-.1021729-9.5267944-.3088989-2.5285645-.2052002-4.5574951-.7498169-6.0860596-1.6315308-1.5292969-.8821411-2.6765137-2.3226318-3.4400024-4.3221436-.7642822-1.9984131-1.2646484-4.7481689-1.4995728-8.2473145-.2357178-3.4979858-.352356-8.0115967-.352356-13.5392456,0-5.5269165.1166382-10.0405273.352356-13.5396729.2349243-3.4979858.7352905-6.2473145,1.4995728-8.2468872.7634888-1.9983521,1.9107056-3.4400024,3.4400024-4.3221436,1.5285645-.8821411,3.5574951-1.4251709,6.0860596-1.631897,2.52771-.2052002,5.703064-.3085327,9.5267944-.3085327,3.8213501,0,6.9967041.1033325,9.526001.3085327,2.527771.2067261,4.5559082.7497559,6.0860596,1.631897,1.5285034.8821411,2.6749268,2.3237915,3.4400024,4.3221436.7634888,1.9995728,1.263855,4.7489014,1.4995728,8.2468872.2341309,3.4991455.352356,8.0127563.352356,13.5396729,0,5.5276489-.1182251,10.0412598-.352356,13.5392456-.2357178,3.4991455-.736084,6.2489014-1.4995728,8.2473145-.7650757,1.9995117-1.911499,3.4400024-3.4400024,4.3221436-.3284912.18927-.6912231.3552856-1.0656128.5134888Z" style="fill: #fff;"/>
    <path class="letter-u" d="M81.049081,68.4019066c-3.5872383,0-6.4689316-.323799-8.6435138-.9702223-2.1761483-.6464233-3.8370373-1.6456192-4.9834501-2.9987621-1.1471958-1.3519683-1.9122541-3.145196-2.2936086-5.380466-.3829207-2.2340954-.5732064-4.9395982-.5732064-8.1149423v-28.2257161h3.0868573v27.7844568c0,3.2348574.1761905,5.8518734.5293545,7.8502651.353164,1.9999578,1.0281694,3.5285082,2.0289313,4.5868257.9991958,1.0583175,2.4251642,1.7638625,4.277905,2.1170266,1.8519578.3527725,4.2473654.528963,7.1885719.528963,3.8808891,0,6.8800428-.4988148,8.9966778-1.4991853,2.1174181-.9991958,3.6303071-2.3954076,4.5425823-4.1898098.9114921-1.7932276,1.455725-3.8812807,1.6319155-6.262593.1761905-2.3817039.2646773-4.9243284.2646773-7.6298312v-23.2861179h3.0868573v44.9845638h-2.4697991l-.2646773-7.3209105h-.352381c-.4714074,1.41109-1.2348996,2.7203811-2.2936086,3.9251325-1.057926,1.205926-2.6765293,2.1914181-4.8511114,2.9549102-2.1761483.7634921-5.1463284,1.1464128-8.9089741,1.1464128Z" style="fill: #fff;"/>
    <path class="letter-a-1" d="M129.2085974,68.4019066c-3.7046987,0-6.7625825-.323799-9.1728683-.9702223-2.411852-.6464233-4.1902013-1.8962012-5.3366141-3.7485505s-1.7204022-4.5715559-1.7204022-8.1591857c0-3.2924129.3821376-5.8655771,1.1471958-7.7179264.7634921-1.8523493,2.1166351-3.1600743,4.0570796-3.9251325,1.9404446-.7634921,4.6443813-1.1464128,8.1149423-1.1464128.705545,0,1.7932276.0148783,3.2638309.0438519,1.4690371.0305397,3.1596827.0743915,5.0711538.1323386,1.910688.0595132,3.8511325.1033651,5.8221168.1323386,1.9694181.0305397,3.8064976.0743915,5.5128046.1323386v-4.0574712c0-3.2924129-.1918519-5.8945507-.5732064-7.8060217-.3837037-1.9102964-1.1182223-3.3366563-2.2051218-4.277905-1.0892487-.9400741-2.661651-1.5434287-4.7195559-1.8081059-2.058688-.2646773-4.7336511-.3970159-8.0264556-.3970159-1.3531429,0-2.9255452.0591217-4.7187728.1761905-1.7947938.1186349-3.5433865.2509736-5.2481273.3970159-1.706307.1476085-3.1463706.3390688-4.32254.5735979v-2.9110584c1.7642541-.2932593,3.9983495-.5430582,6.7038523-.7497884,2.7039367-.205164,5.6451432-.3085291,8.8204874-.3085291,2.8801272,0,5.3366141.1476085,7.3647624.4408678,2.0289313.295217,3.7046987.7940318,5.028085,1.4995768s2.3374605,1.6910371,3.0430055,2.9549102c.705545,1.2650477,1.2043599,2.8527198,1.4995768,4.7630162.2936508,1.911471.4408678,4.2199579.4408678,6.9242862v29.1074516h-2.4697991l-.2646773-7.3209105h-.352381c-.8245715,2.411852-2.16127,4.1898098-4.0132278,5.3362226-1.8527409,1.1468043-3.9114288,1.882889-6.1744978,2.2051218-2.2646351.3226244-4.4548786.4851111-6.5715137.4851111ZM129.1201106,65.579335c2.0579049,0,4.0719579-.1017989,6.0421591-.3085291,1.9694181-.2055556,3.7187939-.6753969,5.2481273-1.4114816,1.5285504-.7345186,2.6757462-1.9251747,3.4400214-3.57236.8230053-1.7638625,1.3813334-3.5128468,1.6765504-5.2481273.2928677-1.7337144.4408678-3.6894288.4408678-5.8655771v-3.6162119h-18.7881705c-2.9404235,0-5.2191538.2357037-6.8354079.705545-1.6178202.4714074-2.7344764,1.41109-3.3523177,2.8225716-.6170582,1.41109-.9255874,3.5586563-.9255874,6.4387835,0,2.7055028.352381,4.7935559,1.057926,6.262593.7063281,1.4706033,1.9983917,2.4697991,3.8816722,2.9991536,1.8809313.528963,4.5864342.7936403,8.1141593.7936403Z" style="fill: #fff;"/>
    <path class="letter-d" d="M180.454188,68.4019066c-3.7634288,0-6.8064343-.3390688-9.1290165-1.0140741-2.3233652-.6753969-4.1017146-1.8523493-5.3366141-3.5285082-1.2348996-1.6757673-2.0876615-4.0269315-2.5575028-7.0562333-.4714074-3.0281272-.705545-6.8937465-.705545-11.5988156,0-4.7038945.2341376-8.5699053.705545-11.5992071.4698413-3.0277356,1.3226033-5.380466,2.5575028-7.0562333s3.0132489-2.8515452,5.3366141-3.5281166c2.3225822-.6753969,5.3655877-1.0144657,9.1290165-1.0144657,2.8809102,0,5.380466.2357037,7.4978841.705545,2.1166351.4714074,3.8808891,1.2348996,5.2919792,2.2932171,1.41109,1.0587091,2.4697991,2.4697991,3.1753441,4.2340532h.353164V2.1601562h3.0868573v65.5362054h-2.4697991l-.2646773-7.3209105h-.352381c-.8245715,2.3523388-2.0727832,4.101323-3.7485505,5.2481273-1.6765504,1.1468043-3.6028997,1.8962012-5.7774819,2.2493652-2.1761483.3527725-4.4407834.528963-6.7923391.528963ZM181.3367066,65.579335c3.8808891,0,6.99672-.528963,9.3498419-1.5876721,2.3507726-1.0583175,3.9098627-2.7630584,4.6749209-5.1157887.705545-2.1170266,1.1158731-4.3221484,1.2348996-6.6153655.1166773-2.2932171.1761905-5.056667.1761905-8.2911328,0-2.1170266-.0595132-4.17454-.1761905-6.1744978-.1190265-1.9983917-.4416508-3.7927939-.9710054-5.380466-.9412487-2.7634499-2.5880425-4.7187728-4.9388151-5.8655771-2.3531218-1.1468043-5.6161697-1.7200107-9.7907096-1.7200107-3.2348574,0-5.8518734.2357037-7.8502651.705545-1.9999578.4714074-3.5285082,1.3973863-4.5872172,2.7783282-1.057926,1.382508-1.763471,3.4263177-2.1166351,6.1302544-.353164,2.7055028-.5293545,6.2931327-.5293545,10.7613235,0,4.4693654.1902857,8.0569952.5732064,10.7609319.3821376,2.7055028,1.1025609,4.7493125,2.16127,6.1302544,1.0587091,1.3821165,2.6154499,2.3084869,4.6749209,2.7783282,2.0579049.4714074,4.7626247.705545,8.1149423.705545Z" style="fill: #fff;"/>
    <path class="letter-r" d="M215.7361375,67.6963616V22.7117978h2.3813123l.353164,9.6145191h.352381c.705545-2.8225716,1.8081059-4.9838416,3.3076828-6.4830269,1.4995768-1.4995768,3.2928044-2.5140425,5.380466-3.043397,2.0868784-.528963,4.3663918-.7936403,6.8361909-.7936403v3.1753441c-4.2935664,0-7.5566143.7650583-9.7907096,2.2932171-2.2356615,1.5301165-3.7485505,3.7638204-4.5425823,6.7038523-.7940318,2.940815-1.1910477,6.4979052-1.1910477,10.6724451v22.8452502h-3.0868573Z" style="fill: #fff;"/>
    <path class="letter-a-2" d="M256.309283,68.4019066c-3.7046987,0-6.7625825-.323799-9.1728683-.9702223-2.411852-.6464233-4.1902013-1.8962012-5.3366141-3.7485505s-1.7204022-4.5715559-1.7204022-8.1591857c0-3.2924129.3821376-5.8655771,1.1471958-7.7179264.7634921-1.8523493,2.1166351-3.1600743,4.0570796-3.9251325,1.9404446-.7634921,4.6443813-1.1464128,8.1149423-1.1464128.705545,0,1.7932276.0148783,3.2638309.0438519,1.4690371.0305397,3.1596827.0743915,5.0711538.1323386,1.910688.0595132,3.8511325.1033651,5.8221168.1323386,1.9694181.0305397,3.8064976.0743915,5.5128046.1323386v-4.0574712c0-3.2924129-.1918519-5.8945507-.5732064-7.8060217-.3837037-1.9102964-1.1182223-3.3366563-2.2051218-4.277905-1.0892487-.9400741-2.661651-1.5434287-4.7195559-1.8081059-2.058688-.2646773-4.7336511-.3970159-8.0264556-.3970159-1.3531429,0-2.9255452.0591217-4.7187728.1761905-1.7947938.1186349-3.5433865.2509736-5.2481273.3970159-1.706307.1476085-3.1463706.3390688-4.32254.5735979v-2.9110584c1.7642541-.2932593,3.9983495-.5430582,6.7038523-.7497884,2.7039367-.205164,5.6451432-.3085291,8.8204874-.3085291,2.8801272,0,5.3366141.1476085,7.3647624.4408678,2.0289313.295217,3.7046987.7940318,5.028085,1.4995768s2.3374605,1.6910371,3.0430055,2.9549102c.705545,1.2650477,1.2043599,2.8527198,1.4995768,4.7630162.2936508,1.911471.4408678,4.2199579.4408678,6.9242862v29.1074516h-2.4697991l-.2646773-7.3209105h-.352381c-.8245715,2.411852-2.16127,4.1898098-4.0132278,5.3362226-1.8527409,1.1468043-3.9114288,1.882889-6.1744978,2.2051218-2.2646351.3226244-4.4548786.4851111-6.5715137.4851111ZM256.2207962,65.579335c2.0579049,0,4.0719579-.1017989,6.0421591-.3085291,1.9694181-.2055556,3.7187939-.6753969,5.2481273-1.4114816,1.5285504-.7345186,2.6757462-1.9251747,3.4400214-3.57236.8230053-1.7638625,1.3813334-3.5128468,1.6765504-5.2481273.2928677-1.7337144.4408678-3.6894288.4408678-5.8655771v-3.6162119h-18.7881705c-2.9404235,0-5.2191538.2357037-6.8354079.705545-1.6178202.4714074-2.7344764,1.41109-3.3523177,2.8225716-.6170582,1.41109-.9255874,3.5586563-.9255874,6.4387835,0,2.7055028.352381,4.7935559,1.057926,6.262593.7063281,1.4706033,1.9983917,2.4697991,3.8816722,2.9991536,1.8809313.528963,4.5864342.7936403,8.1141593.7936403Z" style="fill: #fff;"/>
    <path class="letter-n" d="M292.0313171,67.6963616V22.7117978h2.4697991l.2646773,7.3209105h.352381c.4698413-1.41109,1.2348996-2.7192065,2.2936086-3.9251325,1.057926-1.2043599,2.6749631-2.189852,4.8511114-2.9545187,2.1745822-.7634921,5.1447622-1.1468043,8.9089741-1.1468043,3.5856722,0,6.4673655.323799,8.6435138.9702223,2.1753652.6475979,3.8370373,1.6467938,4.9842331,2.9991536,1.1464128,1.3531429,1.9099049,3.1463706,2.2928255,5.380466.3821376,2.23527.5732064,4.9392067.5732064,8.1145508v28.2257161h-3.0868573v-27.7844568c0-3.2924129-.1761905-5.9235242-.5293545-7.8945085-.352381-1.9694181-1.0297355-3.4838732-2.0289313-4.5425823-.9999789-1.0583175-2.4251642-1.7638625-4.277905-2.1166351-1.8519578-.353164-4.2489315-.5293545-7.1885719-.5293545-3.8808891,0-6.8800428.500381-8.9966778,1.4995768-2.1166351,1.0003704-3.6318733,2.3965822-4.5425823,4.1894183-.9122752,1.7947938-1.455725,3.8812807-1.6319155,6.262593-.1761905,2.3817039-.2646773,4.9258945-.2646773,7.6298312v23.2861179h-3.0868573Z" style="fill: #fff;"/>
    <polygon class="letter-t" points="346.8939027 67.6963616 346.8939027 25.5343694 337.3678703 25.5343694 337.3678703 22.7117978 346.8939027 22.7117978 346.8939027 9.6576488 349.98076 9.6576488 349.98076 22.7117978 361.094856 22.7117978 361.094856 25.5343694 349.98076 25.5343694 349.98076 67.6963616 346.8939027 67.6963616" style="fill: #fff;"/>
    <polygon class="letter-x" points="378.1179894 67.6963616 399.8160437 37.2655236 378.4711534 7.0112677 390.1138208 7.0112677 405.7258642 28.9743908 406.4314092 28.9743908 421.9557489 7.0112677 433.3345221 7.0112677 411.9888487 37.0012379 433.5991993 67.6963616 421.9557489 67.6963616 405.9905415 45.1157887 405.2849964 45.1157887 389.4082758 67.6963616 378.1179894 67.6963616" style="fill: #fff;"/>
    <line class="text-line-mask text-line-mask-left hidden" x1="1.4008179" x2="1.4008179" y2="80" />
    <line class="text-line-mask text-line-mask-right hidden" x1="433.5991993" x2="433.5991993" y2="80" />
  </svg>
</div>

<style lang="scss">

  $lineColor: var(--grey-200);
  $primary: var(--primary);

  div {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    svg.logo {
      width: 100%;
      @media screen and (min-width: 1200px) {
        width: 20%;
      }
    }
    svg.float-text {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 100%;
      transform: translateY(-50%);
      @media screen and (min-width: 1200px) {
        width: 20%;
      }
    }
  }
  .hidden {
    display: none;
  }
  .boxes {
    fill: none;
    stroke-width: 0.5;
    stroke: $lineColor;
    stroke-miterlimit: 10;
    will-change: transform;
  }
  .poly {
    fill: $primary;
    will-change: transform;
  }
  :global(.inside-box) {
    opacity: 0;
    transform: scale(1.2) translate(0, 0);
    transform-origin: center;
    will-change: transform;
    animation: scale-down-box 0.5s ease 0.5s forwards;
  }
  @keyframes scale-down-box {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  :global(.outside-box) {
    transform: scale(0.01) translate(0, 0);
    transform-origin: center;
    will-change: transform;
    animation: scale-up-box 0.25s ease 0.3s forwards;
  }
  @keyframes scale-up-box {
    to {
      transform: scale(1);
    }
  }
  :global(.lines) {
    fill: none;
    stroke: $lineColor;
    stroke-miterlimit: 10;
    stroke-width: 0.5;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    will-change: transform;
    /* @keyframes duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name */
    animation: draw 0.25s ease 0.1s forwards;
  }
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
  :global(.rotate-lines) {
    stroke-dashoffset: 0;
    transform-origin: center;
    transform: rotate(0deg) translate(0px, 0px) scale(1);
    will-change: transform;
    animation: rotate-lines 0.4s ease 0s forwards;
  }
  @keyframes rotate-lines {
    0% {
      transform: rotate(0deg) translate(0px, 0px) scale(1);
    }
    40% {
      transform: rotate(45deg) translate(-4px, 1px) scale(1.3);
    }
    60% {
      transform: rotate(45deg) translate(-4px, 1px) scale(1.3);
    }
    100% {
      transform: rotate(45deg) translate(38px, -40px) scale(1.4);
    }
  }
  :global(.slide-box) {
    opacity: 1;
    transform: scale(1) translate(0, 0);
    will-change: transform;
    animation: slide-box 0.25s ease 0.2s forwards;
  }
  @keyframes slide-box {
    to {
      transform: scale(0.98) translate(-56.8px, 0);
    }
  }
  .down-angle {
    fill: none;
    stroke: $lineColor;
    stroke-miterlimit: 10;
    will-change: transform;
    transform-origin: center;
  }
  :global(.down-angle-top) {
    stroke-width: 1;
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    transform: translate(0, 0) scale(1);
    will-change: transform;
    animation: down-angle-top 1s ease 1.5s forwards;
  }
  @keyframes down-angle-top {
    0% {
      transform: translate(0, 0) scale(1);
      stroke-dashoffset: 500;
    }
    50% {
      transform: translate(0, 0) scale(1);
      stroke-dashoffset: 0;
    }
    100% {
      transform: translate(-3px, -12.6px) scale(0.73);
      stroke-dashoffset: 0;
    }
  }
  :global(.down-angle-bottom) {
    stroke-width: 1;
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    transform: translate(0, 0) scale(1);
    will-change: transform;
    animation: down-angle-bottom 1s ease 1.5s forwards;
  }
  @keyframes down-angle-bottom {
    0% {
      transform: translate(0, 0) scale(1);
      stroke-dashoffset: 500;
    }
    50% {
      transform: translate(0, 0) scale(1);
      stroke-dashoffset: 0;
    }
    100% {
      transform: translate(-27px, 11px) scale(0.72);
      stroke-dashoffset: 0;
    }
  }
  .inside-box-fill {
    fill: #000323;
    transform: translate(-54px, -1px) scale(0.01);
    transform-origin: center;
    will-change: transform;
    animation: inside-box-fill 0.25s ease 2.25s forwards;
  }
  @keyframes inside-box-fill {
    to {
      transform: translate(-1px, 0px) scale(0.98)
    }
  }
  .angle-box-strikethrough {
    fill: #000323;
    width: 32.7px;
    height: 0;
    transform: translate(-27px, 58px) rotate(-45deg);
    will-change: transform;
    animation: angle-box-strikethrough 0.25s ease 2.7s forwards;
  }
  @keyframes angle-box-strikethrough {
    to {
      width: 32.7px;
      height: 131px;
      transform: translate(-27px, 58px) rotate(-45deg);
    }
  }
  .box-angle-to-x {
    fill: none;
    stroke: $lineColor;
    stroke-miterlimit: 10;
    stroke-width: 1.4px;
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
    transform: translate(0.7px, 1px) scale(1);
    will-change: transform;
    animation: box-angle-to-x 0.45s ease 2.7s forwards;
  }
  @keyframes box-angle-to-x {
    to {
      stroke-dashoffset: 0;
    }
  }
  .box-bottom {
    fill: $primary;
  }

  svg.float-text {
    path, polygon {
      opacity: 0;
    }
    .text-line-mask {
      fill: none; 
      stroke: $lineColor; 
      stroke-miterlimit: 10;
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
      will-change: transform;
      animation: line-mask-out 0.5s ease forwards;
    }
    .text-line-mask-left {
      will-change: transform;
      transform: translate(-1px, 0);
    }
  }

  :global(.animate-letter) {
    will-change: transform;
    animation: type-out 0.1s ease forwards;
  }
  
  :global(.reverse-animate-letter) {
    will-change: transform;
    animation: type-out 0.1s ease reverse;
  }

  @keyframes type-out {
    to {
      opacity: 1;
    }
  }
  @keyframes line-mask-out {
    to {
      stroke-dashoffset: 0;
    }
  }
  
</style>