function buypass() {
  if (!window.PaymentRequest)
    return alert(
      "Cannot be used because the browser does not support the Payment Request API"
    );

  new PaymentRequest(
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
}

document.querySelector("button").onclick = buypass;
