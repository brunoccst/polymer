import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { AppLocalizeBehavior } from '@polymer/app-localize-behavior/app-localize-behavior.js';
import './shared-styles.js';

class ToggleLanguageButton extends mixinBehaviors([AppLocalizeBehavior], PolymerElement) {
    static get properties() {
        return {
            // set the current language—shared across all elements in the app
            // that use AppLocalizeBehavior
            language: {
                value: 'fr',
                notify: true
            },

            // Initialize locale data
            resources: {
                value() {
                    return {
                        'en': { 'resource-language-name': 'English' },
                        'fr': { 'resource-language-name': 'Français' }
                    }
                }
            }
        };
    }

    static get template() {
        return html`
            <button id="btn-toggle-language" on-click="toggleLanguage">{{localize('resource-language-name')}}</button>
        `;
    }

    toggleLanguage() {
        this.language = (this.language == "en")
            ? "fr"
            : "en";
    }
}

window.customElements.define('toggle-language-button', ToggleLanguageButton);
