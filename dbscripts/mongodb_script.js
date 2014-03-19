db = connect("localhost:27017/vesuvius");
var form = {
		form_name :'report_a_person',
		text_fields : ['First Name','Last Name', 'Age'],
		text_areas : ['Comment','Address'],
		radio_buttons : [
				   { 
					label : 'Gender',
					options : ['Male','Female']
				   }
				],
		drop_downs : [
				   {
					label : 'hospital',
					options : ['Durdans','Appollo']
				   }
				]
		 };
db.forms.insert(form);
