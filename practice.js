const data = {
    person_info_1: {
        profile: {
            fullName: "Javier Hernandez",
            nationality: {
                country: "Mexico",
            },
            tel: 904902394
        },
        current_address: {
            current_city: {
                value: "Bangalore",
                zip: '399993'
            }
        }
    },

    person_info_2: {
        profile: {
            fullName: "Emily Spade",
            nationality: {
                country: "Norway",
            },
            tel: 309320239
        },
        current_address: {
            current_city: {
                value: "Oslo",
                zip: '239292'
            }
        }
    },
    person_info_3: {
        profile: {
            fullName: "John Cigan",
            nationality: {
                country: "Turkey",
            },
            tel: 932483988
        },
        current_address: {
            current_city: {
                value: "Istanbul",
                zip: '932099'
            }
        }
    },
    person_info_4: {
        profile: {
            fullName: "Marsh Hobbs",
            nationality: {
                country: "USA",
            },
            tel: 32043988
        },
        current_address: {
            current_city: {
                value: "Istanbul",
                zip: '932099'
            }
        }
    }
}



    // Q1. Get all persons whose current city  is Istanbul .
    //     A. Get result in objects form 
    //     {
    //         person_info: {
    //             // that person info
    //         }
    //     }
    function getCity(){
        let newData = Object.keys(data).reduce((curr, pre) => {
            if(data[pre]['current_address']['current_city']['value'] === 'Istanbul'){
                curr[pre] = data[pre]
            }
            return curr
        },{})
        console.log(newData)
    }

    // getCity()


    //     B. Get result in array Form
    //     [{// Info of the person }, { // Info of the person}]

    //     use Both filter and reduce.
    function getArrayDataUsingReduce(){
        let dataInArray = Object.keys(data).reduce((curr, pre) => {
            if(data[pre]['current_address']['current_city']['value'] === 'Istanbul'){
                curr.push(data[pre])
            }
            return curr
        },[])
        console.log(dataInArray)
    }
    // getArrayDataUsingReduce()



    function getArrayDataUsingFilter(){
        let obj = Object.values(data).filter(x => {
            if( x['current_address']['current_city']['value']=== 'Istanbul'){
                return x
            }
        })
        console.log(obj)
    }

    // getArrayDataUsingFilter()




    // Q2. Copy data object properly without leaving any reference.
    function copyData() {
        const copyObj = Object.keys(data).reduce((res, cur) => {
            const obj = data[cur]
            res[cur] = { ...obj, profile: {...obj['profile'], nationality: {...obj['profile']['nationality']}},
             current_address: {...obj['current_address'], current_city: {...obj['current_address']['current_city']}}}
            return res
        }, {})
        console.log(copyObj)
    }
    // copyData()



    // Q3. Use map to get me all nationality and current location for each person.
    //     use person's name as key to store the person's nationality and current_address.
function getinfo() {
    let getData = Object.keys(data).map((ele) => {
        return { [data[ele]['profile']['fullName']]: [data[ele]['profile']['nationality'], data[ele]['current_address']] }
    })
    console.log(getData)
}
// getinfo()