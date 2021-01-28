import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { AppLocalizeBehavior } from '@polymer/app-localize-behavior/app-localize-behavior.js';
import './shared-styles.js';
import './toggle-language-button.js';

class LocalizedView extends mixinBehaviors([AppLocalizeBehavior], PolymerElement) {
    static get properties() {
        return {
            // set the current language—shared across all elements in the app
            // that use AppLocalizeBehavior
            language: {
                value: 'en'
            },

            // Initialize locale data
            resources: {
                value() {
                    return {
                        'en': { 'hello': 'My name is {name}.' },
                        'fr': { 'hello': 'Je m\'apelle {name}.' }
                    }
                }
            }
        };
    }

    static get template() {
        return html`
        <style include="shared-styles">
            :host {
                display: block;
                padding: 10px;
            }
        </style>

        <div class="card">
            <div class="circle">4</div>
            <h1>Localized View</h1>
            <p>This view is an example of a localized web component.</p>
            <p>Click the button below to switch the language and translate the text inside the input.</p>
            <toggle-language-button language="{{language}}"></toggle-language-button>
            <input type="text" readonly value="{{localize('hello', 'name', 'Batman')}}"/>
        </div>
        `;
    }
}

window.customElements.define('localized-view', LocalizedView);
