export const HrRecruitmentThresholdGqlTypeDefs = `
  type HrRecruitmentThreshold {
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
    getHrRecruitmentThreshold(id: ID!): HrRecruitmentThreshold
    listHrRecruitmentThresholds(tenantId: String!, limit: Int): [HrRecruitmentThreshold!]!
  }

  extend type Mutation {
    createHrRecruitmentThreshold(tenantId: String!, code: String!, name: String!): HrRecruitmentThreshold!
    deleteHrRecruitmentThreshold(id: ID!): Boolean!
  }
`;

export const HrRecruitmentThresholdGqlResolvers = {
  Query: {
    getHrRecruitmentThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
