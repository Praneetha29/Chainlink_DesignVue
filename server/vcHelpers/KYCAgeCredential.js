module.exports = {
  // VC type: KYCAgeCredential
  // https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld
  KYCAgeCredential: () => ({
    circuitId: "credentialAtomicQuerySigV2",
    id: 1702078637,
    query: {
      allowedIssuers: [
        "*"
      ],
      context: "ipfs://QmYRcj7Zk3K9cMDjk6RX8DUymVuTUFkY2Q7Xikz7DcDwcm",
      credentialSubject: {
        certificate: {
          $eq: 1
        }
      },
      type: "architect"
    }
  }),
  // See more off-chain examples
  // https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/#equals-operator-1
};
