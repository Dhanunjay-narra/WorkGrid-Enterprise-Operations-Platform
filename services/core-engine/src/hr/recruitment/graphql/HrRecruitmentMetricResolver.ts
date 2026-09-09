export const HrRecruitmentMetricGqlTypeDefs = `
  type HrRecruitmentMetric {
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
    getHrRecruitmentMetric(id: ID!): HrRecruitmentMetric
    listHrRecruitmentMetrics(tenantId: String!, limit: Int): [HrRecruitmentMetric!]!
  }

  extend type Mutation {
    createHrRecruitmentMetric(tenantId: String!, code: String!, name: String!): HrRecruitmentMetric!
    deleteHrRecruitmentMetric(id: ID!): Boolean!
  }
`;

export const HrRecruitmentMetricGqlResolvers = {
  Query: {
    getHrRecruitmentMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
