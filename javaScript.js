$(document).ready(function () {
  $(`#project-1`).on("click", function () {
    $("#project-modal-1").modal("show");
  });
  $(`#project-2`).on("click", function () {
    $("#project-modal-2").modal("show");
  });
  $(`#project-3`).on("click", function () {
    $("#project-modal-3").modal("show");
  });
  $(`#project-4`).on("click", function () {
    $("#project-modal-4").modal("show");
  });
  $(`#project-5`).on("click", function () {
    $("#project-modal-1").modal("show");
  });
  $(`#project-6`).on("click", function () {
    $("#project-modal-6").modal("show");
  });
});

function closeModal() {
  $("#project-modal").modal("hide");
}
let mailIdCounter = 1;

function addMail() {
  let mailTitle = $("#mail-title").val();
  let mailText = $("#mail-text").val();
  let mailColor = $("#mail-color").val();

  let mailId = `my-mail-${mailIdCounter}`;
  let appendMail = `
        <div class="col-lg-2 col-md-3 col-sm-6 mb-3" id="${mailId}" data-mail-id="${mailId}">
            <div class="card text-bg-${mailColor}">
              <div class="card-body">
                   <div class="d-flex justify-content-between">
                       <h5 class="card-title" id="cardTitle">${mailTitle}</h5>
                   </div>
                   <p class="card-text" id="cardText">${mailText}</p>
              </div>
        
            </div>
        </div>
    `;

  let mailContainer;
  if ($(window).width() >= 992) {
    mailContainer = $("#large-mail");
  } else if ($(window).width() >= 768) {
    mailContainer = $("#medium-mail");
  } else {
    mailContainer = $("#small-mail");
  }

  mailContainer.append(appendMail);

  var myMail = $(`#${mailId}`);
  myMail.on("click", function () {
    $("#edit-modal").modal("show");
    $("#edit-modal").data("mail-id", mailId);
  });

  $("#mail-title").val("");
  $("#mail-text").val("");
  $("#mail-color").val("default");

  $("#my-modal").modal("hide");

  mailIdCounter++;
}
function editMail() {
  let mailTitle = $("#edit-mail-title").val();
  let mailText = $("#edit-mail-text").val();
  let mailColor = $("#edit-mail-color").val();

  let modal = $("#edit-modal");

  let mailId = modal.data("mail-id");

  let cardBody = $(`#${mailId} .card-body`);

  cardBody.find("#cardTitle").text(mailTitle);
  cardBody.find("#cardText").text(mailText);

  let card = $(`#${mailId} .card`);
  card.removeClass(card.attr("class"));
  card.addClass(`card text-bg-${mailColor}`);

  $("#edit-mail-title").val("");
  $("#edit-mail-text").val("");
  $("#edit-mail-color").val("default");
  modal.modal("hide");
}
