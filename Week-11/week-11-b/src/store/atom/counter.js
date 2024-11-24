import { atom, selector } from "recoil";

export const CounterAtom=atom({
  default:0,
  key:"Counter Atom"
})


export const IsEven_Selector=selector({
  key:"even_selector",
  get:({get})=>{
    const count=get(CounterAtom);
    if(count%2==0)
    {
      return true;
    }

    return false;
  }
})