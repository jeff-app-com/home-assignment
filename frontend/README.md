# Frontend Task

## Description

Goal is to create a simple lead form that collects user contact information and redirects customer to the page where Jeff
partners are available.

We expect that you spare ~3h for this task, putting more efforts in the code quality and less on trying to achieve a pixel perfect design.

[Design is available @figma](<https://www.figma.com/file/u0jUAzi98S6dRsxUE440N4/Offer-Cards-%2B-Subprime-(MAIN)-(Copy)?node-id=690%3A1130>)

## Stack

- React
- TypeScript

## API

In the [fake backend](./_fake-backend/) folder you will find a fake server that can be started locally.

Everything should work properly but feel free to change anything you need.

### Registration

Customer registration is done by sending a `POST` request to `/api/register`, see [registration.ts](./_fake-backend/src/registration.ts) for more details.

Assume that server is not doing any incoming data validation - **you must do the validation on the client side**.

- email: classic email validation
- phone number: prefix is always `+84`, phone number length is `9` digits and it can start with `3`, `6` or `9`.

After a successful registration `customerId` is returned.

### Fetch offers

When visiting `/offers` page if `customer-id` query parameter is visible then all the offers are loaded.

Offers are fetched via GraphQL request, see [schema.graphql](./_fake-backend/src/schema.graphql) for more details.

## User stories

- As a User I can create an account and see offers
- As a User I will see that email I wrote in the field is incorrect and I will not be able to create account
- As a User I will see that phone number I wrote in the field is incorrect and I will not be able to create account
- If I open `/offers` page without `customer-id` query parameter present I am redirected to the lead form

## Evaluation

- We expect clean & well written code
- All the user stories are covered
