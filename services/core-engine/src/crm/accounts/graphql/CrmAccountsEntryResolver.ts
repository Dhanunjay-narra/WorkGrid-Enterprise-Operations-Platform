export const CrmAccountsEntryGqlTypeDefs = `
  type CrmAccountsEntry {
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
    getCrmAccountsEntry(id: ID!): CrmAccountsEntry
    listCrmAccountsEntrys(tenantId: String!, limit: Int): [CrmAccountsEntry!]!
  }

  extend type Mutation {
    createCrmAccountsEntry(tenantId: String!, code: String!, name: String!): CrmAccountsEntry!
    deleteCrmAccountsEntry(id: ID!): Boolean!
  }
`;

export const CrmAccountsEntryGqlResolvers = {
  Query: {
    getCrmAccountsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
