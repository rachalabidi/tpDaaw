window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    const email = params.get('email');
    
    
    
    document.getElementById('r-email').innerHTML = email;
  

})