// VULN: insecure deserialization (do NOT run)
public Object loadObject(byte[] data) throws Exception {
    // BAD: trusting arbitrary serialized bytes
    ObjectInputStream in = new ObjectInputStream(new ByteArrayInputStream(data));
    return in.readObject();
}
