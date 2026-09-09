export const HrPayrollEntryGqlTypeDefs = `
  type HrPayrollEntry {
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
    getHrPayrollEntry(id: ID!): HrPayrollEntry
    listHrPayrollEntrys(tenantId: String!, limit: Int): [HrPayrollEntry!]!
  }

  extend type Mutation {
    createHrPayrollEntry(tenantId: String!, code: String!, name: String!): HrPayrollEntry!
    deleteHrPayrollEntry(id: ID!): Boolean!
  }
`;

export const HrPayrollEntryGqlResolvers = {
  Query: {
    getHrPayrollEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
