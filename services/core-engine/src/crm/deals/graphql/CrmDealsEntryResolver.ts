export const CrmDealsEntryGqlTypeDefs = `
  type CrmDealsEntry {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getCrmDealsEntry(id: ID!): CrmDealsEntry
    listCrmDealsEntrys(tenantId: String!, limit: Int): [CrmDealsEntry!]!
  }

  extend type Mutation {
    createCrmDealsEntry(tenantId: String!, code: String!, name: String!): CrmDealsEntry!
    deleteCrmDealsEntry(id: ID!): Boolean!
  }
`;

export const CrmDealsEntryGqlResolvers = {
  Query: {
    getCrmDealsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
