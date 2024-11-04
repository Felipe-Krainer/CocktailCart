const setUpCards = () => {
    const wrapper = $('.wrapper');
    drinks.forEach((drink, index) => {
      let cardMarkup = `
        <div class="card" data-index="${index}">
          <img src="./images/${drink.image}" alt="${drink.name}">
          <div class="info">
            <strong>${drink.name}</strong>
            <p>Main ingredients: ${drink.ingredients}</p>
          </div>
        </div>`;
      wrapper.append(cardMarkup);
    });
  };
  
  const setEventHandlers = () => {
    $('.card').on('mouseover', function() {
      const index = $(this).data('index');
      $(this).find('.info').html(`<p>${drinks[index].recipe}</p>`);
    });
  
    $('.card').on('click', function() {
      const index = $(this).data('index');
      $(this).find('.info').html(`<p>Calories: ${drinks[index].calories}</p>`);
    });
  
    $('.card').on('mouseout', function() {
      const index = $(this).data('index');
      $(this).find('.info').html(`
        <strong>${drinks[index].name}</strong>
        <p>Main ingredients: ${drinks[index].ingredients}</p>
      `);
    });
  };
  
  $(document).ready(() => {
    setUpCards();
    setEventHandlers();
  });
  