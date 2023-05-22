
export function Contact(){
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwGew-17VP8g1WBELCPtFI1iWLNtQ6axTLkY-l6bCcTr2_OfaGSCVBdznIwjv0kKJpYqA/exec';
  const data = document.querySelector('form[name="google-sheet"]');

  function sendInformation(e) {
    e.preventDefault();
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(function() {
        data.reset();
        console.log('succesfull')
      })
      .catch(error => {
        console.log(error);
      });
  }
  return(
    <div className="md:grid grid-cols-5">

<div className="m-1 mt-6  p-3 flex justify-center flex-col rounded-xl col-span-2 border-2">

   
<button
            className="rounded-md bg-indigo-600 px-3 py-2 m-1 text-sm font-semibold text-white shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={() =>
              (window.location =
                "mailto:Vishalking758@gmail.com?subject=")
            }
         
          >
           Send Mail
          </button>
<button
            className="rounded-md bg-indigo-600 px-3 py-2 m-1 text-sm font-semibold text-white shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={() =>
              (window.location =
                "https://www.instagram.com/iam_vishal_king/")
            }
         
          >
          Instagram
          </button>
<button
            className="rounded-md bg-indigo-600 px-3 py-2 m-1 text-sm font-semibold text-white shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={() =>
              (window.location =
                "https://wa.me/+918285781780?text=")
            }
         
          >
          Whatsapp
          </button>
<button
             className="rounded-md bg-indigo-600 px-3 py-2 m-1 text-sm font-semibold text-white shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={() =>
              (window.location =
                "tel:+918285781780")
            }
      
          >
          Call
          </button>
          <button
 className="rounded-md bg-indigo-600 px-3 py-2 m-1 text-sm font-semibold text-white shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
onClick={() => window.open('sms:+918285781780')}
>


          Send SMS
          </button>
<a
             className="text-center rounded-md bg-indigo-600 px-3 py-2 m-1 text-sm font-semibold text-white shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
           href="https://github.com/Vishalking758"
      
          >
          Github
          </a>

</div>



<form className=" mt-6 p-3 m-1 col-span-3 border-2 rounded-xl" method="post" name="google-sheet">
 
   

    <div className="border-b border-gray-900/10">
      <h2 className="text-base text-center font-semibold leading-7">Use a right information.</h2>
      {/* <p className="mt-1 text-sm text-center leading-6">Use a right information.</p> */}

      <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">

        <label for="full-name" className="block text-sm font-medium leading-6">Full Name:</label>
<input type="text" name="Name" id="full-name" autocomplete="given-name" className="block w-full rounded-md bg-transparent border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>

        </div>

      

        <div className="sm:col-span-4">
        <label for="email" class="block text-sm font-medium leading-6">Email:</label>
<input id="email" name="Email" type="email" autocomplete="email" className="block w-full rounded-md bg-transparent border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>

          
        </div>
        <div className="sm:col-span-4">
        <label htmlFor="Phone" className="block text-sm font-medium leading-6">
  Phone
</label>

<input
  id="Phone"
  name="Phone"
  type="text"
  autoComplete="phone"
  className="block w-full rounded-md bg-transparent border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>
          
        </div>

        <div className="sm:col-span-3">
        <label htmlFor="country" className="block text-sm font-medium leading-6">
  Country
</label>

<select
  id="country"
  name="country"
  autoComplete="country-name"
  className="block w-full rounded-md bg-transparent border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
>
             <option className="dark:bg-gray-900/[.9] text-xs">Select country</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AF">Afghanistan</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AX">Aland Islands</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AL">Albania</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="DZ">Algeria</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AS">American Samoa</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AD">Andorra</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AO">Angola</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AI">Anguilla</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AQ">Antarctica</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AG">Antigua and Barbuda</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AR">Argentina</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AM">Armenia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AW">Aruba</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AU">Australia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AT">Austria</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AZ">Azerbaijan</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BS">Bahamas</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BH">Bahrain</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BD">Bangladesh</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BB">Barbados</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BY">Belarus</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BE">Belgium</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BZ">Belize</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BJ">Benin</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BM">Bermuda</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BT">Bhutan</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BO">Bolivia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BQ">Bonaire, Sint Eustatius and Saba</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BA">Bosnia and Herzegovina</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BW">Botswana</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BV">Bouvet Island</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BR">Brazil</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="IO">British Indian Ocean Territory</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BN">Brunei Darussalam</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BG">Bulgaria</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BF">Burkina Faso</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BI">Burundi</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="KH">Cambodia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CM">Cameroon</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CA">Canada</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CV">Cape Verde</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="KY">Cayman Islands</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CF">Central African Republic</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TD">Chad</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CL">Chile</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CN">China</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CX">Christmas Island</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CC">Cocos (Keeling) Islands</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CO">Colombia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="KM">Comoros</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CG">Congo</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CD">Congo, Democratic Republic of the Congo</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CK">Cook Islands</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CR">Costa Rica</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CI">Cote D'Ivoire</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="HR">Croatia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CU">Cuba</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CW">Curacao</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CY">Cyprus</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CZ">Czech Republic</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="DK">Denmark</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="DJ">Djibouti</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="DM">Dominica</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="DO">Dominican Republic</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="EC">Ecuador</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="EG">Egypt</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SV">El Salvador</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GQ">Equatorial Guinea</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="ER">Eritrea</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="EE">Estonia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="ET">Ethiopia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="FK">Falkland Islands (Malvinas)</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="FO">Faroe Islands</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="FJ">Fiji</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="FI">Finland</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="FR">France</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GF">French Guiana</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PF">French Polynesia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TF">French Southern Territories</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GA">Gabon</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GM">Gambia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GE">Georgia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="DE">Germany</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GH">Ghana</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GI">Gibraltar</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GR">Greece</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GL">Greenland</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GD">Grenada</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GP">Guadeloupe</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GU">Guam</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GT">Guatemala</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GG">Guernsey</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GN">Guinea</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GW">Guinea-Bissau</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GY">Guyana</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="HT">Haiti</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="HM">Heard Island and Mcdonald Islands</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="VA">Holy See (Vatican City State)</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="HN">Honduras</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="HK">Hong Kong</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="HU">Hungary</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="IS">Iceland</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="IN">India</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="ID">Indonesia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="IR">Iran, Islamic Republic of</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="IQ">Iraq</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="IE">Ireland</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="IM">Isle of Man</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="IL">Israel</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="IT">Italy</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="JM">Jamaica</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="JP">Japan</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="JE">Jersey</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="JO">Jordan</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="KZ">Kazakhstan</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="KE">Kenya</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="KI">Kiribati</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="KP">Korea, Democratic People's Republic of</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="KR">Korea, Republic of</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="XK">Kosovo</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="KW">Kuwait</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="KG">Kyrgyzstan</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="LA">Lao People's Democratic Republic</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="LV">Latvia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="LB">Lebanon</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="LS">Lesotho</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="LR">Liberia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="LY">Libyan Arab Jamahiriya</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="LI">Liechtenstein</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="LT">Lithuania</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="LU">Luxembourg</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MO">Macao</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MK">Macedonia, the Former Yugoslav Republic of</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MG">Madagascar</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MW">Malawi</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MY">Malaysia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MV">Maldives</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="ML">Mali</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MT">Malta</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MH">Marshall Islands</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MQ">Martinique</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MR">Mauritania</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MU">Mauritius</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="YT">Mayotte</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MX">Mexico</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="FM">Micronesia, Federated States of</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MD">Moldova, Republic of</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MC">Monaco</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MN">Mongolia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="ME">Montenegro</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MS">Montserrat</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MA">Morocco</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MZ">Mozambique</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MM">Myanmar</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="NA">Namibia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="NR">Nauru</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="NP">Nepal</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="NL">Netherlands</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AN">Netherlands Antilles</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="NC">New Caledonia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="NZ">New Zealand</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="NI">Nicaragua</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="NE">Niger</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="NG">Nigeria</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="NU">Niue</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="NF">Norfolk Island</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MP">Northern Mariana Islands</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="NO">Norway</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="OM">Oman</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PK">Pakistan</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PW">Palau</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PS">Palestinian Territory, Occupied</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PA">Panama</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PG">Papua New Guinea</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PY">Paraguay</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PE">Peru</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PH">Philippines</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PN">Pitcairn</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PL">Poland</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PT">Portugal</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PR">Puerto Rico</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="QA">Qatar</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="RE">Reunion</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="RO">Romania</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="RU">Russian Federation</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="RW">Rwanda</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="BL">Saint Barthelemy</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SH">Saint Helena</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="KN">Saint Kitts and Nevis</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="LC">Saint Lucia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="MF">Saint Martin</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="PM">Saint Pierre and Miquelon</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="VC">Saint Vincent and the Grenadines</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="WS">Samoa</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SM">San Marino</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="ST">Sao Tome and Principe</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SA">Saudi Arabia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SN">Senegal</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="RS">Serbia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CS">Serbia and Montenegro</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SC">Seychelles</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SL">Sierra Leone</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SG">Singapore</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SX">Sint Maarten</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SK">Slovakia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SI">Slovenia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SB">Solomon Islands</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SO">Somalia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="ZA">South Africa</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GS">South Georgia and the South Sandwich Islands</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SS">South Sudan</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="ES">Spain</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="LK">Sri Lanka</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SD">Sudan</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SR">Suriname</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SJ">Svalbard and Jan Mayen</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SZ">Swaziland</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SE">Sweden</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="CH">Switzerland</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="SY">Syrian Arab Republic</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TW">Taiwan, Province of China</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TJ">Tajikistan</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TZ">Tanzania, United Republic of</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TH">Thailand</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TL">Timor-Leste</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TG">Togo</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TK">Tokelau</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TO">Tonga</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TT">Trinidad and Tobago</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TN">Tunisia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TR">Turkey</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TM">Turkmenistan</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TC">Turks and Caicos Islands</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="TV">Tuvalu</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="UG">Uganda</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="UA">Ukraine</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="AE">United Arab Emirates</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="GB">United Kingdom</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="US">United States</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="UM">United States Minor Outlying Islands</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="UY">Uruguay</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="UZ">Uzbekistan</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="VU">Vanuatu</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="VE">Venezuela</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="VN">Viet Nam</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="VG">Virgin Islands, British</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="VI">Virgin Islands, U.s.</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="WF">Wallis and Futuna</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="EH">Western Sahara</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="YE">Yemen</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="ZM">Zambia</option>
<option className="dark:bg-gray-900/[.9] text-xs" value="ZW">Zimbabwe</option>
            </select>
        
        </div>

      

        <div className="sm:col-span-2 sm:col-start-1">
        <label htmlFor="city" className="block text-sm font-medium leading-6">
  City
</label>

<input
  type="text"
  name="city"
  id="city"
  autoComplete="address-level2"
  className="block w-full rounded-md bg-transparent border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>

       
        </div>

        <div className="sm:col-span-2">
        <label htmlFor="region" className="block text-sm font-medium leading-6">
  State / Province
</label>

<input
  type="text"
  name="region"
  id="region"
  autoComplete="address-level1"
  className="block w-full rounded-md bg-transparent border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>

        
        </div>

        <div className="sm:col-span-2">
        <label htmlFor="postal-code" className="block text-sm font-medium leading-6">
  ZIP / Postal code
</label>

<input
  type="text"
  name="postal-code"
  id="postal-code"
  autoComplete="postal-code"
  className="block w-full rounded-md bg-transparent border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>

          
        </div>
      </div>
    </div>


  <div className="mt-6 flex items-center justify-center gap-x-6">
  
    <button
    onClick={sendInformation}
      type="button"
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
    Send
    </button>
  </div>
</form>



    
    </div>
)}