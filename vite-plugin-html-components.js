import fs from 'fs';
import path from 'path';

export default function htmlComponentPlugin() {
    return {
        name: 'html-component-plugin',
        transform(src, id) {
            if (id.endsWith('.html')) {
                const componentName = path.basename(id, '.html');
                const htmlContent = fs.readFileSync(id, 'utf-8');

                const code = `export default function ${componentName}() {
                    const template = document.createElement('template');
                    template.innerHTML = \`${htmlContent}\`;
                    return template.content.cloneNode(true);
                }`;

                return {
                    code,
                    map: null
                };
            }
        }
    };
}
