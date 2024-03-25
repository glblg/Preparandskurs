
let age = parseInt(prompt("Enter your age:"));

// under 18 år
if (age < 18) {
    // VIP tillgång
    let hasVipAccess = confirm("Do you have VIP access?");

    // Har VIP tillgång
    if (hasVipAccess) {
        //  VIP kod
        let vipCode = prompt("Enter your VIP code:");

        //  VIP koden för att komma in är 12345
        if (vipCode === "12345") 
            // om koden är godkänd, welcome in my best vip customer
            alert("Welcome in my best vip customer");
         else 
            // Ej godkänd kod, neka tillgång
            alert("Invalid VIP code. Access denied.");
        
    } else 
        //har kunden ingen VIP, neka åtkomst
        alert("Access denied.");
    
} else 
    // If the user is 18 years old or older, welcome them to the site
    alert("Welcome in my best VIP customer!");

