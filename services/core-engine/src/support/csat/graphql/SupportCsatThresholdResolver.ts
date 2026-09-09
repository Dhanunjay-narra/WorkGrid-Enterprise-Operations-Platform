export const SupportCsatThresholdGqlTypeDefs = `
  type SupportCsatThreshold {
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
    getSupportCsatThreshold(id: ID!): SupportCsatThreshold
    listSupportCsatThresholds(tenantId: String!, limit: Int): [SupportCsatThreshold!]!
  }

  extend type Mutation {
    createSupportCsatThreshold(tenantId: String!, code: String!, name: String!): SupportCsatThreshold!
    deleteSupportCsatThreshold(id: ID!): Boolean!
  }
`;

export const SupportCsatThresholdGqlResolvers = {
  Query: {
    getSupportCsatThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
