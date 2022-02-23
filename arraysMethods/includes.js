    const guns = ["pistol", "minigun", "machinegun", "shotgun"];
    /*
    const includeElement = false;
    for(let i = 0; i<guns.length; i++){
        const element = guns[i];
        if(element === "pistol"){
            includeElement = true;
            break;    
        }

    }*/

    const inventaryGuns = (array ) =>{
       const include =  array.includes("pistol")
        console.log(include);
    } 

    inventaryGuns(guns)