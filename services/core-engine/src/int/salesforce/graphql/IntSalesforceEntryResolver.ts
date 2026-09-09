export const IntSalesforceEntryGqlTypeDefs = `
  type IntSalesforceEntry {
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
    getIntSalesforceEntry(id: ID!): IntSalesforceEntry
    listIntSalesforceEntrys(tenantId: String!, limit: Int): [IntSalesforceEntry!]!
  }

  extend type Mutation {
    createIntSalesforceEntry(tenantId: String!, code: String!, name: String!): IntSalesforceEntry!
    deleteIntSalesforceEntry(id: ID!): Boolean!
  }
`;

export const IntSalesforceEntryGqlResolvers = {
  Query: {
    getIntSalesforceEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
