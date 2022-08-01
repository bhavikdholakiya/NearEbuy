function validate(){

    // Validating Name
    let x=document.getElementById("fname").value;
    if(x==null || x==""){
        alert("Name is required");
    }
    
    // Valindating EmailId
    let y=document.getElementById("email").value;
    if(y==null || y=="" || y.length<=6){
        alert("Enter valid Email Address.");
    }
    else{
        let ct=0,dot=0,dotp=0,atp=0;
        for(let i=0;i<y.length;i++){
            if(y[i]=='.'){
                dot++;
                dotp=i;
            }
            if(y[i]=='@'){
                ct++;
                atp=i;
            }
        }
        if(dotp<atp || atp-0<=0 || dotp-atp<=1 || y.length-dotp<=0){
            alert("Enter valid Email Address.");
        }
    }

    // Validating Address
    let z=document.getElementById("adr").value;
    if(z==null || z==""){
        alert("Address is required");
    }

    // Validating City
    let w=document.getElementById("city").value;
    if(w==null || w==""){
        alert("City is required");
    }

    // Validating State
    let a=document.getElementById("state").value;
    if(a==null || a==""){
        alert("State is required");
    }

    // Validating Pincode
    let b=document.getElementById("zip").value;
    if(b==null || b=="" || (b.length)!=6){
        alert("Enter Valid Pincode.");
    }

    // Validating Credit Card Name
    let c=document.getElementById("cname").value;
    if(c==null || c==""){
        alert("Name is required");
    }

    // Validating Credit Card No.
    let d=document.getElementById("ccnum").value;
    if(d==null || d=="" || (d.length)!=12){
        alert("Enter Valid Credit Card No.");
    }
    else{
        for(let h=0;h<d.length;h++){
            if(d[h]<'0' || d[h]>'9'){
                alert("Enter Valid Credit Card No.");
                break;
            }
        }
    }

    // Validating ExpMonth
    let e=document.getElementById("expdate").value;
    if(e==null || e=="" || (e.length)!=2){
        alert("Enter Valid Month");
    }
    else{
        for(let j=0;j<e.length;j++){
            if(e[0]=='0' || e[0]=='1'){
                if(e[0]=='0'){
                    if(e[1]<'1' || e[1]>'9'){
                        alert("Enter Valid Month");
                        break;
                    }
                }
                else{
                    if(e[1]<'0' || e[1]>'2'){
                        alert("Enter Valid Month");
                        break;
                    }
                }
            }
            else{
                alert("Enter Valid Month");
                break;
            }
        }
    }
    // Validating ExpYear
    let f=document.getElementById("expyear").value;
    if(f==null || f=="" ||  (f.length)!=4){
        alert("Enter Valid Year");
    }
    else{
        for(let l=0;l<f.length;l++){
            if(f[l]<'0' || f[l]>'9'){
                alert("Enter Valid Year.");
                break;
            }
        }
        if(f[0]<'2'){
            alert("Enter Valid Year.");
        }
    }

    // Validating CVV
    let g=document.getElementById("cvv").value;
    if(g==null || g=="" || (g.length)!=3){
        alert("Enter Valid CVV Number.");
    }
    else{
        for(let m=0;m<3;m++){
            if(g[i]<'0' || g[i]>'9'){
                alert("Enter CVV Number.");
                break;
            }
        }
    }
}