export const HrRecruitmentPolicyGqlTypeDefs = `
  type HrRecruitmentPolicy {
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
    getHrRecruitmentPolicy(id: ID!): HrRecruitmentPolicy
    listHrRecruitmentPolicys(tenantId: String!, limit: Int): [HrRecruitmentPolicy!]!
  }

  extend type Mutation {
    createHrRecruitmentPolicy(tenantId: String!, code: String!, name: String!): HrRecruitmentPolicy!
    deleteHrRecruitmentPolicy(id: ID!): Boolean!
  }
`;

export const HrRecruitmentPolicyGqlResolvers = {
  Query: {
    getHrRecruitmentPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
