import { html } from 'lit';
import '../src/george-card.js';

export default {
  title: 'GeorgeCard',
  component: 'george-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <george-card
      style="--george-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </george-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
