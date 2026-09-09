export const CrmLeadsEntryGqlTypeDefs = `
  type CrmLeadsEntry {
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
    getCrmLeadsEntry(id: ID!): CrmLeadsEntry
    listCrmLeadsEntrys(tenantId: String!, limit: Int): [CrmLeadsEntry!]!
  }

  extend type Mutation {
    createCrmLeadsEntry(tenantId: String!, code: String!, name: String!): CrmLeadsEntry!
    deleteCrmLeadsEntry(id: ID!): Boolean!
  }
`;

export const CrmLeadsEntryGqlResolvers = {
  Query: {
    getCrmLeadsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
