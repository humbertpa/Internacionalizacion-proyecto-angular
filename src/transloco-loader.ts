import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        console.log("Se llego a getTranslation en transloco-loader.ts")
        return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
    }
}
