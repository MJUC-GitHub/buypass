function buypass() {
  if (!window.PaymentRequest)
    return alert("Payment Request APIに未対応なため使えません");

  const paymentRequest = new PaymentRequest(
    [
      {
        supportedMethods: location.origin + "/payment-manifest.json",
        data: {
          url: document.querySelector("input").value,
        },
      },
    ],
    {
      total: {
        label: "_",
        amount: {
          value: "1",
          currency: "USD",
        },
      },
    }
  ).show();
  paymentRequest.onshow = (event) => {
    const modal = event.openWindow();
    modal.style.width = "500px"; // 適切なサイズに変更
    modal.style.height = "500px";
  };
  paymentRequest.show();
}

document.querySelector("button").onclick = buypass;
