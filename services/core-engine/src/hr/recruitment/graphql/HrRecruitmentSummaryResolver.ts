export const HrRecruitmentSummaryGqlTypeDefs = `
  type HrRecruitmentSummary {
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
    getHrRecruitmentSummary(id: ID!): HrRecruitmentSummary
    listHrRecruitmentSummarys(tenantId: String!, limit: Int): [HrRecruitmentSummary!]!
  }

  extend type Mutation {
    createHrRecruitmentSummary(tenantId: String!, code: String!, name: String!): HrRecruitmentSummary!
    deleteHrRecruitmentSummary(id: ID!): Boolean!
  }
`;

export const HrRecruitmentSummaryGqlResolvers = {
  Query: {
    getHrRecruitmentSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
