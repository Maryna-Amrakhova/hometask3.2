let productPrice = 101.50; 
                let productQuantity = 50;
        
                let productOne = prompt(`Вкажіть кількість товару, вартість ${productPrice}`, 0);
                let totalPrice = productPrice * productOne;

                
                alert (`Загальна вартість вашого товару ${totalPrice} грн.`);

                let quantityOne = productQuantity - productOne;

                alert (`Кількість продукту, що лишився на складі ${quantityOne} шт.`);