export const SupportSlaThresholdGqlTypeDefs = `
  type SupportSlaThreshold {
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
    getSupportSlaThreshold(id: ID!): SupportSlaThreshold
    listSupportSlaThresholds(tenantId: String!, limit: Int): [SupportSlaThreshold!]!
  }

  extend type Mutation {
    createSupportSlaThreshold(tenantId: String!, code: String!, name: String!): SupportSlaThreshold!
    deleteSupportSlaThreshold(id: ID!): Boolean!
  }
`;

export const SupportSlaThresholdGqlResolvers = {
  Query: {
    getSupportSlaThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
