import { Quote } from "../data/quote.interface";

export class QuotesService {
    private favoritesQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favoritesQuotes.push(quote);
        console.log(this.favoritesQuotes);
    }

    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favoritesQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        this.favoritesQuotes.splice(position, 1);
    }

    getFavoritesQuotes() {
        return this.favoritesQuotes.slice();
    }

    isQuoteFavorite(quote: Quote) {
        return this.favoritesQuotes.find((quoteEl) => {
            return quoteEl.id == quote.id;
        });
    }
}