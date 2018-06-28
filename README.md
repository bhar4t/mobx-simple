#mobx-examples
A collection of simple mobx examples. All the examples below have been written in ES5 without JSX. No transpiling required. Please feel free to make any suggestions for improvement.

Baseline JSFiddle Includes: React, lodash, mobx, mobxReact, and mobxDevtools.

Baseline JSFiddle with decorators Includes: React, mobx, mobxReact. Thanks @spion!

##MobX stand-alone examples
Please note that I have created a console.log override that prints the console.logs out to the results window on JSFiddle.

Creating Observables

observable

extendObservable

autorun

reaction

when

Computed Values
computed
Note how the computed fullName is cached.
Actions
action
Non-strict action usage. You may still set values outside of the actions.
