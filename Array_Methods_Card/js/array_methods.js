    let Fruits=["Apple","Mango"];
    //push
    let push=document.getElementById("push");
    Fruits.push("Guvi","Banana");
    push.innerHTML="The Fruits After Push- "+"<strong class='res'>"+Fruits+"</strong>";
    //pop
    let pop=document.getElementById("pop");
    Fruits.pop();
    pop.innerHTML="The Fruits After pop- "+"<strong class='res'>"+Fruits+"</strong>";

    //unshift
    let unshift=document.getElementById("unshift");
    const unshifted=Fruits.unshift("Grapes");
    unshift.innerHTML="The Fruits After unshift- "+"<strong class='res'>"+Fruits+"</strong>";

    //shift
    let shift=document.getElementById("shift");
    Fruits.shift();
    shift.innerHTML="The Fruits After shift- "+"<strong class='res'>"+Fruits+"</strong>";

    //concat
    const vegetables=["Carrot","Beetroot"];
    let concat=document.getElementById("concat");
    let new_arr=Fruits.concat(vegetables);
    concat.innerHTML="The Fruits After Concat- "+"<strong class='res'>"+new_arr+"</strong>";

    //slice
    let marks=[90,95,96,98,99,45,67,89,34];
    let slice=document.getElementById("slice");
    let ranks=marks.slice(1,5);
    slice.innerHTML="The Marks After Slice- "+"<strong class='res'>"+ranks+"</strong>";

    //splice
    let amount=["₹1200","₹1500","₹1900","₹2900","₹11400"];
    let splice=document.getElementById("splice");
    amount.splice(3,1,"₹3400");
    splice.innerHTML="The Amount After Splice- "+"<strong class='res'>"+amount+"</strong>";

    //IndexOf
    let names=["Gokul","Raju","Vijay","Ramana","Keerthi"];
    let IndexOf=document.getElementById("IndexOf");
    IndexOf.innerHTML="The Names After IndexOf-> "+"<strong class='res'>"+names.indexOf("Keerthi")+" is the Index belongs to Keerthi</strong>";

    //Includes
    let Includes=document.getElementById("Includes");
    Includes.innerHTML="The Names with Includes- "+"<strong class='res'>"+names.includes("Gokul")+" State where Gokul is in Array</strong>";

    //For Each
    let forEach=document.getElementById("forEach");
    names.forEach((n)=>n.toUpperCase());
    forEach.innerHTML="The Names with ForEach- "+"<strong class='res'>"+names+"</strong>";

    //Map Method
    let Map=document.getElementById("map");
    let position=names.map((n=>"DR."+n))
    Map.innerHTML="The Names with Map-"+"<strong class='res'>"+position+"</strong>";

    //filter Method
    let filter=document.getElementById("filter");
    let new_names=names.filter((n)=>n==="Keerthi");
    filter.innerHTML="The Names with Filtering-"+"<strong class='res'>"+new_names+"</strong>";

    //reduce Method
    let total=[45,67,78,46,78];
    let reduce=document.getElementById("reduce");
    let cum_total=total.reduce((a,b)=>a+b,0);
    reduce.innerHTML="The Total Marks of Rackesh:"+"<strong class='res'>"+cum_total+"</strong>"

    //Find Method
    let total_find=total.find((m)=>m>60);
    let find=document.getElementById("find");
    find.innerHTML="The Marks of Rackesh Above in his Mark List:"+"<strong class='res'>"+total_find+"</strong>"

    //Find Index Method
    let findIndex=document.getElementById("findIndex");
    let first_find=total.findIndex((s)=>s>50);
    findIndex.innerHTML="The Index of Marks of Rackesh Above in his Mark List:"+"<strong class='res'>"+first_find+"</strong>"

    //Sort Method
    let a=[-1,-57,0,800];
    let sort=document.getElementById("sort");
    let sorted=a.sort((a,b)=>a-b);
    sort.innerHTML="The Sorted Order of Arr"+"<strong class='res'>"+sorted+"</strong>"

    //Reverse Method
    let reverse=document.getElementById("reverse");
    let reverse_arr=a.reverse();
    reverse.innerHTML="The Reverse Order of Arr - "+"<strong class='res'>"+reverse_arr+"</strong>"

    //Join Method
    let numbers=[1,2,3,4];
    let join=document.getElementById("join");
    let joined_ele=a.join(":");
    join.innerHTML="The Join Method of Arr as Ratio- "+"<strong class='res'>"+joined_ele+"</strong>"
    
    //Every Method
    let numbers_eve=[2,4,6];
    let every=document.getElementById("every");
    let every_ele=numbers_eve.every((n)=>(n%2==0));
    every.innerHTML="The Element in Arr is Even ? "+"<strong class='res'>"+every_ele+"</strong>"

    //Some Method
    // let numbers_eve=[2,4,6];
    let some=document.getElementById("some");
    let every_ele_some=numbers_eve.some((n)=>(n%2!=0));
    some.innerHTML="The Element in Arr is Has Any of Non Even Number ? "+"<strong class='res'>"+every_ele_some+"</strong>"
