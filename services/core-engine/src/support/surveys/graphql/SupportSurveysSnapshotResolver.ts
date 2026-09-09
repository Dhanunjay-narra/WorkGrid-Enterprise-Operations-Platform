export const SupportSurveysSnapshotGqlTypeDefs = `
  type SupportSurveysSnapshot {
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
    getSupportSurveysSnapshot(id: ID!): SupportSurveysSnapshot
    listSupportSurveysSnapshots(tenantId: String!, limit: Int): [SupportSurveysSnapshot!]!
  }

  extend type Mutation {
    createSupportSurveysSnapshot(tenantId: String!, code: String!, name: String!): SupportSurveysSnapshot!
    deleteSupportSurveysSnapshot(id: ID!): Boolean!
  }
`;

export const SupportSurveysSnapshotGqlResolvers = {
  Query: {
    getSupportSurveysSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
