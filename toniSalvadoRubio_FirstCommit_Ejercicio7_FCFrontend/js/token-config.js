    let tokenAutocomplete = new TokenAutocomplete({
        name: 'tag-list',
        selector: '#tag-list',
        noMatchesText: 'No se han encontrado coincidencias...',
        initialTokens: [],
        initialSuggestions: [
            {value: 'apple', text: 'Apple', description: 'Fruit'},
            {value: 'banana', text: 'Banana', description: 'Fruit'},
            {value: 'donut', text: 'Donut', description: 'Sweet'},
            {value: 'pizza', text: 'Pizza', description: 'Cheesy'},
            {value: 'burger', text: 'Burger', description: 'Meaty'},
            {value: 'pancake', text: 'Pancake', description: 'Sweet'}
        ],
        suggestionRenderer: function (suggestion) {
            var option = document.createElement('li');

            var text = document.createElement('strong');
            text.textContent = suggestion.text;
            option.appendChild(text);

            if (suggestion.description) {
                var description = document.createElement('span');
                description.textContent = ' (' + suggestion.description + ')';
                option.appendChild(description);
            }

            return option;
        }
    });
    tokenAutocomplete.debug(true);
    