module.exports = {
    name: 'threadCreate',
    once: false,
    async execute(client, thread) {
      if (thread.isText()) thread.join();
      const logChannel = client.channels.cache.get('833230584850677801');
      logChannel.send(`Nom du thread: ${thread.name} !`);
    }
}