    let tokenAutocomplete = new TokenAutocomplete({
        name: 'tag-list',
        selector: '#tag-list',
        noMatchesText: 'No se han encontrado coincidencias...',
        initialTokens: [],
        initialSuggestions: [
            {value: 'react', text: 'React'},
            {value: 'html&css', text: 'Htmal&Css'},
            {value: 'angular', text: 'Angular'},
            {value: 'java', text: 'Java'},
            {value: 'javascript', text: 'JavaScript'},
            {value: 'csharp', text: 'C#'},
            {value: 'php', text: 'Php'},
            {value: 'flutter', text: 'Flutter'}
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
    