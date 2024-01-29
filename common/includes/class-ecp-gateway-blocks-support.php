<?php

use Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType;

class Ecp_Gateway_Blocks_Support extends AbstractPaymentMethodType {

	protected $payment_method;
	
  public function __construct($payment_method, $gateway) {
		$this->payment_method = $payment_method;
    $this->name = sprintf('ecommpay-%s', $this->payment_method);
    $this->data = [
			'title' => $gateway->settings['title'],
			'description' => $gateway->settings['show_description'] === 'yes' ? $gateway->settings['description'] : '',
			'checkout_button_text' => $gateway->settings['checkout_button_text'],
			'enabled' => $gateway->settings['enabled'],
			'supports' => $gateway->supports,
		];
  }

	public function initialize() {}

	public function is_active() {
		return $this->data['enabled'] === 'yes';
	}

	public function get_payment_method_data() {
		return $this->data;
	}
}