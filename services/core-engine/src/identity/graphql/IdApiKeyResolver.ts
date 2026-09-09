export const IdApiKeyTypeDefs = `
  type IdApiKey {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdApiKey(id: ID!): IdApiKey
    listIdApiKeys(tenantId: String!): [IdApiKey!]!
  }
`;

export const IdApiKeyResolvers = {
  Query: {
    getIdApiKey: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdApiKey", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdApiKeys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdApiKey", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
