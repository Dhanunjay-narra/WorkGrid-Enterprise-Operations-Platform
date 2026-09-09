export const HrRecruitmentRuleGqlTypeDefs = `
  type HrRecruitmentRule {
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
    getHrRecruitmentRule(id: ID!): HrRecruitmentRule
    listHrRecruitmentRules(tenantId: String!, limit: Int): [HrRecruitmentRule!]!
  }

  extend type Mutation {
    createHrRecruitmentRule(tenantId: String!, code: String!, name: String!): HrRecruitmentRule!
    deleteHrRecruitmentRule(id: ID!): Boolean!
  }
`;

export const HrRecruitmentRuleGqlResolvers = {
  Query: {
    getHrRecruitmentRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
