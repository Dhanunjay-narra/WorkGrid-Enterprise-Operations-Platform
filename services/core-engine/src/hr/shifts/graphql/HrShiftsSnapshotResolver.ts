export const HrShiftsSnapshotGqlTypeDefs = `
  type HrShiftsSnapshot {
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
    getHrShiftsSnapshot(id: ID!): HrShiftsSnapshot
    listHrShiftsSnapshots(tenantId: String!, limit: Int): [HrShiftsSnapshot!]!
  }

  extend type Mutation {
    createHrShiftsSnapshot(tenantId: String!, code: String!, name: String!): HrShiftsSnapshot!
    deleteHrShiftsSnapshot(id: ID!): Boolean!
  }
`;

export const HrShiftsSnapshotGqlResolvers = {
  Query: {
    getHrShiftsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
