const pdf = require('html-pdf'),
fs = require('fs');
jsonfile = require ('../data');

function convertBodyToPDF(req, res) {

      let head = `
    <style>
    .document_title{
      text-align:center;
    }
    h4{
      text-align:left;
    }
    .skillset{
      text-align:center;
      font-size:11px;
      font-weight:normal;
    }
    .title{
      text-align:left;
      font-weight:bold;
      font-size:12px;
      border-bottom:1px solid #CCC;
      width:100%;
      float:left;
      margin-top:10px;
      padding-bottom:3px;
    }
    
    .property{
      font-size:10px;
      font-weight:bold;
      padding-bottom:20px;
    }
    .props_value{
      font-weight:normal;
      font-size:8px;
    }
    ul.a {list-style-type: circle;}
    .props_value_li{
      font-weight:normal;
      font-size:8px;
    }

    </style>
    `

    let skillset = [];
    let clean_skill_set = [];
   for(var i in jsonfile.skills){
    clean_skill_set.push(jsonfile.skills[i].replace("#",''));
   }

    let heading = head+ `<h3 class="document_title">Curriculum Vitae</h3>`;

    let skills = `<div class="title">Skills</div><span class="skillset">`+clean_skill_set+`</span>`;

 
    let educationI = `
    <div class="title">Education</div>
    <div class="property">
    School Name:<span class="props_value">`+jsonfile.education[0].school_name+`</span>
    <br>Logo:<span class="props_value">`+jsonfile.education[0].logo+`</span>
    <br>Level:<span class="props_value">`+jsonfile.education[0].level+`</span>
    <br>Title:<span class="props_value">`+jsonfile.education[0].title+`</span>
    <br>Year:<span class="props_value">`+jsonfile.education[0].year+`</span>
    </div>
 
   
    `

     let educationII = `
    <div class="property">
    School Name:<span class="props_value">`+jsonfile.education[1].school_name+`</span>
    <br>Logo:<span class="props_value">`+jsonfile.education[1].logo+`</span>
    <br>Level:<span class="props_value">`+jsonfile.education[1].level+`</span>
    <br>Title:<span class="props_value">`+jsonfile.education[1].title+`</span>
    <br>Year:<span class="props_value">`+jsonfile.education[1].year+`</span>
    </div>
   
   
    `

     let experiencesI = `
    <div class="title">Experiences</div>
    <div class="property">
    Company Name:<span class="props_value">`+jsonfile.experiences[0].company+`</span>
    <br>Company Logo:<span class="props_value">`+jsonfile.experiences[0].company_logo+`</span>
    <br>Position:<span class="props_value">`+jsonfile.experiences[0].postion+`</span>
    <br>Duties:<ul>
      <li  class="props_value_li">`+jsonfile.experiences[0].duties[0]+`</li>
       <li class="props_value_li">`+jsonfile.experiences[0].duties[1]+`</li>
    </ul>
    </div>
   
    `

      let experiencesII = `
    
    <div class="property">
    Company Name:<span class="props_value">`+jsonfile.experiences[1].company+`</span>
    <br>Company Logo:<span class="props_value">`+jsonfile.experiences[1].company_logo+`</span>
    <br>Position:<span class="props_value">`+jsonfile.experiences[1].postion+`</span>
    <br>Work Year:<span class="props_value">`+jsonfile.experiences[1].work_year+`</span>
    <br>Duties:<ul>
      <li  class="props_value_li">`+jsonfile.experiences[1].duties[0]+`</li>
       <li class="props_value_li">`+jsonfile.experiences[1].duties[1]+`</li>
       <li class="props_value_li">`+jsonfile.experiences[1].duties[2]+`</li>
    </ul>
    </div>
   
    `

    let html= heading+skills+educationI+educationII+experiencesI+experiencesII;


      let options = {
        format: 'Letter',
        border: '1cm'
      };

      let _ruta = __dirname;
      let ruta = _ruta.split('controller')

      pdf.create(html, options).toFile( ruta[0] + '/download/resume.pdf', function (err, ok) {
        if (err) {
          res.json({
            data: 'error'
          })
          
        } else {
          res.json({
            data: 'success'
          });
          
        }
      });


}




module.exports = {
  convertBodyToPDF
}