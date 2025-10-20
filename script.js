document.addEventListener('DOMContentLoaded', () => {
    // محاكاة لزر "أضف للمفضلة" في صفحة الوصفة
    const favButton = document.getElementById('add-to-fav');
    
    if (favButton) {
        const recipeId = 'molokhia-recipe-id'; // لتحديد الوصفة
        const favorites = JSON.parse(localStorage.getItem('syrian_meals_favorites')) || [];
        
        // التحقق مما إذا كانت الوصفة مفضلة مسبقاً
        const isFavorite = favorites.includes(recipeId);
        if (isFavorite) {
            favButton.innerHTML = '<i class="fas fa-heart"></i> تمت الإضافة';
            favButton.classList.add('active');
        } else {
            favButton.innerHTML = '<i class="far fa-heart"></i> أضف للمفضلة';
        }

        favButton.addEventListener('click', () => {
            let currentFavorites = JSON.parse(localStorage.getItem('syrian_meals_favorites')) || [];
            
            if (currentFavorites.includes(recipeId)) {
                // إزالة من المفضلة
                currentFavorites = currentFavorites.filter(id => id !== recipeId);
                favButton.innerHTML = '<i class="far fa-heart"></i> أضف للمفضلة';
                favButton.classList.remove('active');
                alert('تمت إزالة الملوخية من المفضلة.');
            } else {
                // إضافة للمفضلة
                currentFavorites.push(recipeId);
                favButton.innerHTML = '<i class="fas fa-heart"></i> تمت الإضافة';
                favButton.classList.add('active');
                alert('تمت إضافة الملوخية إلى المفضلة!');
            }
            
            localStorage.setItem('syrian_meals_favorites', JSON.stringify(currentFavorites));
        });
    }

    // يمكنك إضافة المزيد من وظائف JS هنا (مثل البحث، قائمة المشتريات...)
});
