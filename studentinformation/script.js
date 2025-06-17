// var selectedRow = null

// let testArray = [];

// function onFormSubmit() {
//     if (validate()) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//         else
//             updateRecord(formData);
//         resetForm();
//     }
// }

// function readFormData() {
//     var formData = {};
//     formData["studentid"] = document.getElementById("studentid").value;
//     formData["fullName"] = document.getElementById("fullName").value;
//     formData["Email"] = document.getElementById("Email").value;
//     formData["class"] = document.getElementById("class").value;
//   //  formData["section"] = document.getElementById("section").value;
//     formData["mobile"] = document.getElementById("mobile").value;
//     // formData["stuat"] = document.getElementById("stuat").value;
//     return formData;
// }

// function insertNewRecord(data) {
//      if (confirm('Data inserted is successfully ?')) {
//     var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     //  testArray.push(myvaluse1);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.studentid;
//      testArray.push(data.studentid);
// //    console.log("Student ID"+data.studentid);
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.fullName;
//       testArray.push(data.fullName);
//     // console.log("FullName"+data.fullName);

//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.Email;
//       testArray.push(data.Email);
//     // console.log("Email"+data.Email);

//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.class;
//       testArray.push(data.class);
//     // console.log("Class"+data.class);

//     //cell5 = newRow.insertCell(4);
//    /// cell5.innerHTML = data.section;
//     //   testArray.push(data.section);
//     // console.log("Section"+data.section);

//     cell5 = newRow.insertCell(4);
//     cell5.innerHTML = data.mobile;
//       testArray.push(data.mobile);
//     // console.log("Moblie"+data.mobile);
    
//     cell6 = newRow.insertCell(5);
//     cell6.innerHTML = '<button  id="ok" onclick="editData(this)">Edit</button>' +
//                 '<button  onclick="onDelete(this)">Delete</button>';
//                        console.log(testArray);

//     //   cell7 = newRow.insertCell.innerHTML(6);
//     //   cell7.innerText="ok"
//    // if(document.getElementById("stuat").value==""){
//        // cell7 = newRow.insertCell.innerHTML(6);
//        // cell7.innerHTML = data.stuat;
//         // document.getElementById("stuat").innerText="ok"
//    // }
//  }
    
// }


// function resetForm() {
//     document.getElementById("studentid").value = "";
//     document.getElementById("fullName").value = "";
//     document.getElementById("Email").value = "";
//     document.getElementById("class").value = "";
//     // document.getElementById("section").value = "";
//     document.getElementById("mobile").value = "";
//     selectedRow = null;
// }

// function editData(td) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("studentid").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("Email").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("class").value = selectedRow.cells[3].innerHTML;
//     document.getElementById("section").value = selectedRow.cells[4].innerHTML;
//     document.getElementById("mobile").value = selectedRow.calls[5].innerHTML;
// }
// function updateRecord(formData) {
//      if (confirm('Data Update is successfully ?')) {
//     // selectedRow.calls[0].innerHTML = formData.studentid;
//     selectedRow.cells[1].innerHTML = formData.fullName;
//     selectedRow.cells[2].innerHTML = formData.Email;
//     selectedRow.cells[3].innerHTML = formData.class;
//     selectedRow.cells[4].innerHTML = formData.section;
//     // selectedRow.calls[5].innerHTML = formData.mobile;
//      }
// }

   


// // function deleteData(){
// //     document.getElementById("studentList").disables=true;
// // }

// function onDelete(tr) {

//    if (confirm('Are you sure to delete this record ?')) {

//      const edit = document.getElementById('ok');
//      const submitButton = document.getElementById('submitButton');
//             edit.addEventListener('click',function(){

//                  submitButton.textContent = 'Update';

//                  submitButton.type = 'submit';

//                  submitButton.addEventListener('click',function(){
//                     console.log('Update changes...');
//                     submitButton.type = 'button';

//                         document.getElementById('myfrom').submit();
//                  });
//             });
               
       

//         // // console.log("Moblie"+data.mobile);
//         row = tr.parentElement.parentElement;
//         document.getElementById("ok").disabled=true;
//         document.getElementById("id").disabled=true;
//         document.getElementById("name").disabled=true;
//         document.getElementById("Email").disabled=true;
//         document.getElementById("calss").disabled=true;  
//         document.getElementById("mobile").disabled=true;

         
//          document.getElementById("studentList").disables(row)=true;
//         // // document.getElementById("studentList").disabled=false;
//         resetForm();
//     }

//     // const inputElement = document.querySelector('input[name="studentid"]');
//     // inputElement.disabled = true;
// }

// studentList.addEventListener("click", function (e) {
//   const row = e.target.closest("tr");
//   if (!row) return;
 
//   if (e.target.classList.contains("fa-trash") || e.target.classList.contains("fa-rotate-left")) {
//     const isInactive = row.classList.contains("inactive");
 
//     if (isInactive) {
//       row.classList.remove("inactive");
//       e.target.style.color = "red";
//       e.target.classList.remove("fa-rotate-left");
//       e.target.classList.add("fa-trash");
//     } else {
//       if (confirm("Are You Sure To Delete This Record ?")) {
//         row.classList.add("inactive");
//         e.target.style.color = "gray";
//         e.target.classList.remove("fa-trash");
//         e.target.classList.add("fa-rotate-left");
//       }
//     }
//   }
 
//   // Edit logic
//   if (e.target.classList.contains("fa-pen-to-square")) {
//     editRow = row;
//     const cells = editRow.querySelectorAll("td");
 
//     document.getElementById("studentid").value = cells[0].textContent;
//     document.getElementById("fullName").value = cells[1].textContent;
//     document.getElementById("Email").value = cells[2].textContent;
//     document.getElementById("calss").value = cells[3].textContent;
//     document.getElementById("mobile").value = cells[4].textContent;
//   }
// });

// function validate() {
//     isValid = true;
//     if (document.getElementById("fullName").value == "" && document.getElementById("Email").value == "" ) {
//         isValid = false;
//         document.getElementById("fullNameValidationError").classList.remove("hide");
//         document.getElementById("EmailValidationError").classList.remove("hide");
//     } 
//     // else if( document.getElementById("Email").value==""){
//     //             isValid = false;
//     //             document.getElementById("EmailValidationError").classList.remove("hide");

//     //     }
//     else {
//         isValid = true;
//         if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
//             document.getElementById("fullNameValidationError").classList.add("hide");

//         if(!document.getElementById("EmailValidationError").classList.contains("hide"))
//             document.getElementById("EmailValidationError").classList.add("hide");
//     }
//     return isValid;
// }

// const Email = [
//     "user@example.com",
//     "invalid-email.com",
//     "valid@domain.org"
// ];
// Email.forEach(Email => {
//     console.log(`${Email} is ${validator.isEmail(Email) ? 'valid' : 'invalid'}.`);
// });


// student id generate 

  // function generateId() {
  //       const id = Math.floor(1000 + Math.random() * 90000);
  //       document.getElementById("studentid").value = id;
  //     }


// // Soft delete user
// function softDeleteUser(userId) {
//   db.users.updateOne(
//     { _id: userId },
//     { $set: { isDeleted: true, deletedAt: new Date() } }
//   );
// }

// // Fetch all active users (not soft deleted)
// function getActiveUsers() {
//   return db.users.find({ isDeleted: { $ne: true } });
// }

  let user1 = [];
  let editIndex1 = -1;

  const form1 = document.getElementById('userForm1');
  const tableBody1 = document.querySelector('#userTable tbody')




  form1.addEventListener('submit',function(e){
    e.preventDefault();

      const id = document.getElementById('studentid').value.trim();
      const fullName = document.getElementById('fullName').value.trim();
      const Email = document.getElementById('Email').value.trim();
      const classs = document.getElementById('class').value.trim();
      const mpbile = document.getElementById('mobile').value.trim();
      
      if(editIndex1 === -1){
        user1.push({id,fullName,Email,classs,mpbile, delete:false});

      }else{

        user1[editIndex1].fullName = fullName;
        user1[editIndex1].Email = Email;
        user1[editIndex1].classs = classs;
        user1[editIndex1].mpbile = mpbile;

        editIndex1 = -1;
      }

      form1.reset();
      renderTable1();
    });



  function renderTable1() {
    tableBody1.innerHTML = '';

    user1.forEach((user, index) => {
      const row = document.createElement('tr');
      row.className = user.deleted ? 'deleted' : '';

      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.fullName}</td>
        <td>${user.email}</td>
        <td>${user.Email}</td>
        <td>${user.classs}</td>
        <td>${user.mpbile}</td>
        <td>
          ${user.deleted ? '' : `<button onclick="editUser(${index})">Edit</button>`}
          <button onclick="softDeleteUser(${index})">${user.deleted ? 'Restore' : 'Delete'}</button>
        </td>
      `;

      tableBody1.appendChild(row);
    });
  }

    function edit(index){

    document.getElementById('studentid').value = user1[index].id;
    document.getElementById('fullName').value = user1[index].fullName;
    document.getElementById('Email').value = user1[index].Email;
    document.getElementById('class').value = user1[index].classs;
    document.getElementById('mobile').value = user1[index].mpbile;
    editIndex1 = index;
  }

  function softDeleteUser1(){
    user1[index].delete = !user1[index].deleted;
    renderTable1();
  }


  function generateId() {
        const id = Math.floor(1000 + Math.random() * 90000);
        document.getElementById("studentid").value = id;
      }

  // let users = [];
  // let editIndex = -1;

  // const form = document.getElementById('userForm');
  // const tableBody = document.querySelector('#userTable tbody');

  // form.addEventListener('submit', function(e) {
  //   e.preventDefault();
  //   const name = document.getElementById('name').value.trim();
  //   const email = document.getElementById('email').value.trim();

  //   if (editIndex === -1) {
  //     // Add new
  //     users.push({ name, email, deleted: false });
  //   } else {
  //     // Update existing
  //     users[editIndex].name = name;
  //     users[editIndex].email = email;
  //     editIndex = -1;
  //   }

  //   form.reset();
  //   renderTable();
  // });


  // function renderTable1(){
  //    tableBody1.innerHTML = '';

  //    user1.forEach((user,index) =>{
  //     const row = document.createElement('tr');
  //     row.className = user.delete ? 'deleted' : '';

  //        row.innerHTML = `
  //       <td>${user.id}</td>
  //       <td>${user.fullName}</td>
  //       <td>
  //         ${user.deleted ? '' : `<button onclick="editUser(${index})">Edit</button>`}
  //         <button onclick="softDeleteUser(${index})">${user.deleted ? 'Restore' : 'Delete'}</button>
  //       </td>
  //     `;
  //    })
  // }

  // function editUser(index) {
  //   document.getElementById('name').value = users[index].name;
  //   document.getElementById('email').value = users[index].email;
  //   editIndex = index;
  // }

  // function softDeleteUser(index) {
  //   users[index].deleted = !users[index].deleted; // Toggle delete
  //   renderTable();
  // }

 

