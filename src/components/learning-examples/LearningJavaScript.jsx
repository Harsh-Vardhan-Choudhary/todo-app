//in java to create an object we need to create a class then create object
//but in javascript we don't need any of that

const person = {
    name : 'Harsh Vardhan Choudhary',
    address : {
        line1 : 'Baker Street',
        city : 'London',
        country : 'UK'
    },
    profiles : ['twitter', 'Instagram', 'Linkedin'],     //array in JS

    printProfiles : () => {                 //arrow function (similar to lambda in java)

        person.profiles.map (
            (profiles) => {
                console.log(profiles)
            }
        )

        //console.log(person.profiles[0])     //this will print profiles in log
    }
}

export default function LearningJavaScript() {
    return(
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.address.city}</div>
            <div>{person.printProfiles()}</div>
        </>
    )
}