export const HrRecruitmentSnapshotGqlTypeDefs = `
  type HrRecruitmentSnapshot {
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
    getHrRecruitmentSnapshot(id: ID!): HrRecruitmentSnapshot
    listHrRecruitmentSnapshots(tenantId: String!, limit: Int): [HrRecruitmentSnapshot!]!
  }

  extend type Mutation {
    createHrRecruitmentSnapshot(tenantId: String!, code: String!, name: String!): HrRecruitmentSnapshot!
    deleteHrRecruitmentSnapshot(id: ID!): Boolean!
  }
`;

export const HrRecruitmentSnapshotGqlResolvers = {
  Query: {
    getHrRecruitmentSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
