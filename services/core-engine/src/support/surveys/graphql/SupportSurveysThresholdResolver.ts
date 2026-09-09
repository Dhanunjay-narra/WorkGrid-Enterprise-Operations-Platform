export const SupportSurveysThresholdGqlTypeDefs = `
  type SupportSurveysThreshold {
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
    getSupportSurveysThreshold(id: ID!): SupportSurveysThreshold
    listSupportSurveysThresholds(tenantId: String!, limit: Int): [SupportSurveysThreshold!]!
  }

  extend type Mutation {
    createSupportSurveysThreshold(tenantId: String!, code: String!, name: String!): SupportSurveysThreshold!
    deleteSupportSurveysThreshold(id: ID!): Boolean!
  }
`;

export const SupportSurveysThresholdGqlResolvers = {
  Query: {
    getSupportSurveysThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
