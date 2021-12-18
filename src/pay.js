const axios = require('axios');
// const express = require('express');
// const { Router } = require('express');

//const router = Router();

// router.post('/paystack', async (req, res) => {
//
// });

axios
  .post(
    'https://api.paystack.co/charge',
    {
      email: 'some@sego.com',
      amount: 10000,
      card: {
        cvv: '408',
        number: '4084084084084081',
        expiry_month: '01',
        expiry_year: '99',
      },
      pin: '0000',
    },
    {
      headers: {
        Authorization:
          'Bearer sk_test_881cdda220b59994f5530d2299994112fc867c25',
      },
    },
  )
  .then((res) => {
    console.log(res.data);
  });

//OR using this in an async function
/**
 * const response = axios
 *   .post(
 *     'https://api.paystack.co/charge',
 *     {
 *       email: 'some@sego.com',
 *       amount: 10000,
 *       card: {
 *         cvv: '408',
 *         number: '4084084084084081',
 *         expiry_month: '01',
 *         expiry_year: '99',
 *       },
 *       pin: '0000',
 *     },
 *     {
 *       headers: {
 *         Authorization:
 *           'Bearer sk_test_881cdda220b59994f5530d2299994112fc867c25',
 *       },
 *     },
 *   )
 *
 *   console.log(response.data)
 *
 *
 */
