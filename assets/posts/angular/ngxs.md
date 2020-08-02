# Why we need state management?

When we develop Angular application to get the best performance and code modularity, we have to lazy load modules. When that happens most of the time we can't use input and output to communicate with the components. Sometime the components are deeply nested and communicating between them seem not possible with short amount of work. I have seen some projects use service as the sharable components of data but as soon as the application get complicated its hard to manage via service and it does not look good.

To over come these managing application state via common place make more sense and easy to manage.We will see how we can add ngxs to our angular project and then work with it.

If your new to state management, please read this [concepts behind it](https://www.ngxs.io/concepts). We will use the classical way of developing an application and then we can move on on to more advance and new stuff that we can do. NGXS labs provide some extensions that we can use to ease off some boilerplate codes.

## Basic application.

Let's start by creating a simple Angular application with Angular material and simple side nav on it. Checkout this commit to get the starter application.
