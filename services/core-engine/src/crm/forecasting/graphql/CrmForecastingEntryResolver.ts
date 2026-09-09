export const CrmForecastingEntryGqlTypeDefs = `
  type CrmForecastingEntry {
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
    getCrmForecastingEntry(id: ID!): CrmForecastingEntry
    listCrmForecastingEntrys(tenantId: String!, limit: Int): [CrmForecastingEntry!]!
  }

  extend type Mutation {
    createCrmForecastingEntry(tenantId: String!, code: String!, name: String!): CrmForecastingEntry!
    deleteCrmForecastingEntry(id: ID!): Boolean!
  }
`;

export const CrmForecastingEntryGqlResolvers = {
  Query: {
    getCrmForecastingEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
