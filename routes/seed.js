const Hats = require('../models/hats');
 
async function recreateDB() {
    await Hats.deleteMany();
 
    let instance1 = new Hats({
      costume_type: "Fedora",
      size: 'Free Size',
      cost: 10.9
    });
 
    instance1.save()
      .then(doc => {
        console.log("First object saved");
      })
      .catch(err => {
        console.error(err);
      });
 
      let instance2 = new Hats({
        costume_type: "Baseball Cap",
        size: 'Free Size',
        cost: 13.89
      });
   
      instance2.save()
        .then(doc => {
          console.log("Second object saved");
        })
        .catch(err => {
          console.error(err);
        });
 
        let instance3 = new Hats({
            costume_type: "Top Hat",
            size: 'Free Size',
            cost: 14.9
          });
       
          instance3.save()
            .then(doc => {
            console.log("Third object saved");
            })
            .catch(err => {
              console.error(err);
            });
  }
 
  let reseed = true;
  if (reseed) {
    recreateDB();
  }