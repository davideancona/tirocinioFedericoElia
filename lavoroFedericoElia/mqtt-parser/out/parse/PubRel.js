class PubRel
{
    static parse(packet)
    {
        const myPacket = packet;
        myPacket.packetId = myPacket.buffer.readUInt16BE(0);
        return myPacket;
    }
}

module.exports = PubRel;
