// Attendez que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments nécessaires
    const totalPriceElement = document.querySelector('.total');
    const productCards = document.querySelectorAll('.card-body');
  
    // Fonction pour calculer le prix total
    function updateTotalPrice() {
      let total = 0;
  
      // Parcourir chaque produit pour calculer le total
      productCards.forEach(card => {
        const quantityElement = card.querySelector('.quantity');
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace(' $', ''));
        const quantity = parseInt(quantityElement.textContent);
  
        total += unitPrice * quantity;
      });
  
      // Mettre à jour le prix total dans l'interface
      totalPriceElement.textContent = `${total} $`;
    }
  
    // Fonction pour augmenter la quantité
    function increaseQuantity(card) {
      const quantityElement = card.querySelector('.quantity');
      let quantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = quantity + 1;
      updateTotalPrice();
    }
  
    // Fonction pour diminuer la quantité
    function decreaseQuantity(card) {
      const quantityElement = card.querySelector('.quantity');
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantityElement.textContent = quantity - 1;
        updateTotalPrice();
      }
    }
  
    // Ajouter des écouteurs d'événements pour les boutons + et -
    productCards.forEach(card => {
      const plusButton = card.querySelector('.fa-plus-circle');
      const minusButton = card.querySelector('.fa-minus-circle');
  
      // Événements pour augmenter/diminuer la quantité
      if (plusButton) {
        plusButton.addEventListener('click', function() {
          increaseQuantity(card);
        });
      }
  
      if (minusButton) {
        minusButton.addEventListener('click', function() {
          decreaseQuantity(card);
        });
      }
  
      // Gérer la suppression des produits
      const deleteButton = card.querySelector('.fa-trash-alt');
      if (deleteButton) {
        deleteButton.addEventListener('click', function() {
          card.remove();
          updateTotalPrice();
        });
      }
    });
  
    // Initialiser le prix total au démarrage
    updateTotalPrice();
  });
  