export const HrPerformanceEntryGqlTypeDefs = `
  type HrPerformanceEntry {
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
    getHrPerformanceEntry(id: ID!): HrPerformanceEntry
    listHrPerformanceEntrys(tenantId: String!, limit: Int): [HrPerformanceEntry!]!
  }

  extend type Mutation {
    createHrPerformanceEntry(tenantId: String!, code: String!, name: String!): HrPerformanceEntry!
    deleteHrPerformanceEntry(id: ID!): Boolean!
  }
`;

export const HrPerformanceEntryGqlResolvers = {
  Query: {
    getHrPerformanceEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
