const { useEffect } = window.wp.element
const { getSetting } = window.wc.wcSettings
const { decodeEntities } = window.wp.htmlEntities
const { registerPaymentMethod } = window.wc.wcBlocksRegistry

type Subscribe = (callback: () => void) => void

interface ContentProps {
  eventRegistration: {
    onCheckoutValidation: Subscribe
    onCheckoutSuccess: Subscribe
    onCheckoutFail: Subscribe
    onPaymentSetup: Subscribe
    onShippingRateSuccess: Subscribe
    onShippingRateFail: Subscribe
    onShippingRateSelectSuccess: Subscribe
    onShippingRateSelectFai: Subscribe
  }
}

const EcpLabel = (props: { children: any }) => {
  return props.children
}

const EcpContent = (props: { children: any }) => {
  return props.children
}

export const registerPaymentMethodByName = (name: string) => {
  const data = getSetting(`${name}_data`, null)

  if (!data) {
    return
  }

  const label = decodeEntities(data.title) ?? ""
  const description = decodeEntities(data.description) ?? ""

  const paymentMethod = {
    name: name,
    label: <EcpLabel>{label}</EcpLabel>,
    content: <EcpContent>{description}</EcpContent>,
    edit: <EcpContent>{description}</EcpContent>,
    canMakePayment: () => true,
    placeOrderButtonLabel: data.checkout_button_text,
    ariaLabel: label,
    supports: {
      features: data.supports,
    },
  }

  registerPaymentMethod(paymentMethod)
}
