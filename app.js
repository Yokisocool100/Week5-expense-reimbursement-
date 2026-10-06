// Week 6 - Expense approval path

const DIRECTOR_APPROVAL_THRESHOLD = 5000;

// Rule: only amounts strictly above the threshold need director approval
function requiresDirectorApproval(amount) {
  return amount > DIRECTOR_APPROVAL_THRESHOLD;
}

const amountInput = document.querySelector("#amount");
const approvalMessage = document.querySelector("#approvalMessage");

amountInput.addEventListener("input", function () {
  // Blank field: clear the message
  if (amountInput.value.trim() === "") {
    approvalMessage.textContent = "";
    approvalMessage.className = "message";
    return;
  }

  const amount = Number(amountInput.value);

  if (requiresDirectorApproval(amount)) {
    approvalMessage.textContent = "Director approval will be required.";
    approvalMessage.className = "message director";
  } else {
    approvalMessage.textContent = "Standard approval path.";
    approvalMessage.className = "message standard";
  }
});
