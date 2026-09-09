export const IdPasskeyCredentialTypeDefs = `
  type IdPasskeyCredential {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdPasskeyCredential(id: ID!): IdPasskeyCredential
    listIdPasskeyCredentials(tenantId: String!): [IdPasskeyCredential!]!
  }
`;

export const IdPasskeyCredentialResolvers = {
  Query: {
    getIdPasskeyCredential: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdPasskeyCredential", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdPasskeyCredentials: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdPasskeyCredential", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
