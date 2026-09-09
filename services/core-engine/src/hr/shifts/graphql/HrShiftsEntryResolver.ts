export const HrShiftsEntryGqlTypeDefs = `
  type HrShiftsEntry {
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
    getHrShiftsEntry(id: ID!): HrShiftsEntry
    listHrShiftsEntrys(tenantId: String!, limit: Int): [HrShiftsEntry!]!
  }

  extend type Mutation {
    createHrShiftsEntry(tenantId: String!, code: String!, name: String!): HrShiftsEntry!
    deleteHrShiftsEntry(id: ID!): Boolean!
  }
`;

export const HrShiftsEntryGqlResolvers = {
  Query: {
    getHrShiftsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
