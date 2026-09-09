export const SupportSurveysConfigGqlTypeDefs = `
  type SupportSurveysConfig {
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
    getSupportSurveysConfig(id: ID!): SupportSurveysConfig
    listSupportSurveysConfigs(tenantId: String!, limit: Int): [SupportSurveysConfig!]!
  }

  extend type Mutation {
    createSupportSurveysConfig(tenantId: String!, code: String!, name: String!): SupportSurveysConfig!
    deleteSupportSurveysConfig(id: ID!): Boolean!
  }
`;

export const SupportSurveysConfigGqlResolvers = {
  Query: {
    getSupportSurveysConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
