export const HrLeaveSnapshotGqlTypeDefs = `
  type HrLeaveSnapshot {
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
    getHrLeaveSnapshot(id: ID!): HrLeaveSnapshot
    listHrLeaveSnapshots(tenantId: String!, limit: Int): [HrLeaveSnapshot!]!
  }

  extend type Mutation {
    createHrLeaveSnapshot(tenantId: String!, code: String!, name: String!): HrLeaveSnapshot!
    deleteHrLeaveSnapshot(id: ID!): Boolean!
  }
`;

export const HrLeaveSnapshotGqlResolvers = {
  Query: {
    getHrLeaveSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
