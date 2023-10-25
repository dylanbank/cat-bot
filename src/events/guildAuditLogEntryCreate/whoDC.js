module.exports = (client, auditLogEntry) => {

    console.log(auditLogEntry);
    if(auditLogEntry.action === 27){
        const channel = client.channels.cache.get('1166460708582604921');
        channel.send(`🔌 - ${auditLogEntry.executor.username} disconnected a user`);
    } else if(auditLogEntry.action === 24){
        const channel = client.channels.cache.get('1166460708582604921');
        channel.send(`♻️ - ${auditLogEntry.executor.username} changed their name to ${auditLogEntry.changes[0].new ? auditLogEntry.changes[0].new : auditLogEntry.executor.username}`);
    }
    
}