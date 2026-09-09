export const SecSecretMetadataTypeDefs = `
  type SecSecretMetadata {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSecSecretMetadata(id: ID!): SecSecretMetadata
    listSecSecretMetadatas(tenantId: String!): [SecSecretMetadata!]!
  }
`;

export const SecSecretMetadataResolvers = {
  Query: {
    getSecSecretMetadata: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SecSecretMetadata", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSecSecretMetadatas: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SecSecretMetadata", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
