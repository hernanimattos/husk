import { User } from '@controllers/user';



test(' teste envrionment', () =>{
    const user = new User();
    user.name = "hernani";

    expect(user.name).toEqual('hernani')

})