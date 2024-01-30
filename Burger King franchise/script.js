document.getElementById('orderButton').addEventListener('click', async function(){
    const selectedItems = [...document.getElementsByName('foodItem')].filter(c => c.checked).map(c => c.value);
  
    if(selectedItems.length === 0){
      alert("Please select at least one item");
      return;
    }
    const orderButton = document.getElementById('orderButton');
    orderButton.disabled = true;
    
    const [foodImage, orderIdElement, orderIdValueElement] = ['foodImage', 'orderId', 'orderIdValue'].map(id => document.getElementById(id));
    orderIdElement.style.display = 'none';
    foodImage.style.display = 'none';
  
    await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 1000) + 1000));
  
    const orderId = Math.floor(Math.random() * 1000) + 100;
    orderIdValueElement.textContent = orderId;
    orderIdElement.style.display = 'block';
  
    const foodToShow = selectedItems[Math.floor(Math.random() * selectedItems.length)];
  
    const foodImages = {
      'Burger': 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D',
      'Fries': 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      'Drink': 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      'Default': 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
    };
  
    foodImage.src = foodImages[foodToShow] || foodImages['Default'];
    foodImage.style.display = 'block';
    orderButton.disabled = false;


    
  });
  