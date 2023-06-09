<?php
/*
Plugin Name: Add Woolong Coin to MetaMask
Plugin URI: https://woolongs.com/support/
Description: This is a WordPress plugin that adds a button which, when clicked, adds Woolong Coin to the user's MetaMask if they're connected to the Binance Smart Chain.
Version: 1.0
Author: Woolong Corporation
Author URI: https://woolongs.com/
License: GPLv2 or later
Text Domain: add-woolong-coin
*/

function add_woolong_button() {    
    // Load the CSS and JS files
    wp_enqueue_style('add-woolong-css', plugins_url('add-woolong/add-woolong.css', __FILE__));
    wp_enqueue_script('add-woolong-js', plugins_url('add-woolong/add-woolong.js', __FILE__));

    // Output the button HTML
    return '<button id="add-woolong" onclick="addTokenFunction();">Add Woolong Coin to MetaMask</button>';
}

add_shortcode('add_woolong_button', 'add_woolong_button');