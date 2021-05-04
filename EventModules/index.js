/*EventsModule
Node.js has built in module,called 'Events',
where you can create,fire,and listen to your own events
Example 1-Registering for the event to be fired only one time using once.
Example 2-Create an event emitter instance and register a couple of callbacks
Example 3-Regestering for the event with callback parameters */

const EventEmitter=require('events');//class
const event=new EventEmitter()// object

// event.on('Hello',()=>{
//     console.log('event 1 is fired')//on adds a callback function to be executed whwn event is triggered
// })

// event.on('Hello',()=>{
//     console.log('event 2 is fired')
// })


// event.emit('Hello')//emit triggers an event

event.on('checkpage',(sc,msg)=>{
    console.log(`the status code is ${sc} with msg ${msg}`)
})

event.emit('checkpage',200,'ok')

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name
    }
    get name(){
        return this._name
    }
}

let pedro=new Person('pedro');
pedro.on('name',()=>{
    console.log('My name is '+pedro.name)
});
pedro.emit('name')