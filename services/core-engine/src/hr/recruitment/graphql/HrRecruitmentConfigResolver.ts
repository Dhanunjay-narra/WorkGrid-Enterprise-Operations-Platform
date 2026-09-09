export const HrRecruitmentConfigGqlTypeDefs = `
  type HrRecruitmentConfig {
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
    getHrRecruitmentConfig(id: ID!): HrRecruitmentConfig
    listHrRecruitmentConfigs(tenantId: String!, limit: Int): [HrRecruitmentConfig!]!
  }

  extend type Mutation {
    createHrRecruitmentConfig(tenantId: String!, code: String!, name: String!): HrRecruitmentConfig!
    deleteHrRecruitmentConfig(id: ID!): Boolean!
  }
`;

export const HrRecruitmentConfigGqlResolvers = {
  Query: {
    getHrRecruitmentConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
