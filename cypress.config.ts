import { defineConfig } from 'cypress';
import { plugin as replayPlugin } from "@replayio/cypress";

export default defineConfig({
  projectId: '9xerqv',
  e2e: {
    setupNodeEvents(on, config) {
      // 🙋‍♂️ Add this line to install the replay plugin
      replayPlugin(on, config, {
        upload: true,
        apiKey: process.env.REPLAY_API_KEY,
      });
      // Make sure that setupNodeEvents returns config
      return config;
    },
  },
});
