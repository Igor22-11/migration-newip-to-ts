import './sources.css';
import { Source } from '../../types/index.js';

class Sources {
    draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!sourceItemTemp) {
            console.error('Template element "#sourceItemTemp" not found');
            return;
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const sourceItem = sourceClone.querySelector('.source__item');
            const sourceName = sourceClone.querySelector('.source__item-name');

            if (sourceItem && sourceName) {
                sourceItem.textContent = item.name;
                sourceItem.setAttribute('data-source-id', item.id);
            } else {
                console.error('Required elements not found in the template');
            }

            fragment.append(sourceClone);
        });

        const sourcesElement = document.querySelector<HTMLElement>('.sources');
        if (sourcesElement) {
            sourcesElement.append(fragment);
        } else {
            console.error('Element with class "sources" not found');
        }
    }
}

export default Sources;
