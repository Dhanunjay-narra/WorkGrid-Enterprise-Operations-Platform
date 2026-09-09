export const HrLeaveEntryGqlTypeDefs = `
  type HrLeaveEntry {
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
    getHrLeaveEntry(id: ID!): HrLeaveEntry
    listHrLeaveEntrys(tenantId: String!, limit: Int): [HrLeaveEntry!]!
  }

  extend type Mutation {
    createHrLeaveEntry(tenantId: String!, code: String!, name: String!): HrLeaveEntry!
    deleteHrLeaveEntry(id: ID!): Boolean!
  }
`;

export const HrLeaveEntryGqlResolvers = {
  Query: {
    getHrLeaveEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
