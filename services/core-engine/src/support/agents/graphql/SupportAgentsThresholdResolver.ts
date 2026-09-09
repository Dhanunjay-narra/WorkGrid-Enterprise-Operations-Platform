export const SupportAgentsThresholdGqlTypeDefs = `
  type SupportAgentsThreshold {
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
    getSupportAgentsThreshold(id: ID!): SupportAgentsThreshold
    listSupportAgentsThresholds(tenantId: String!, limit: Int): [SupportAgentsThreshold!]!
  }

  extend type Mutation {
    createSupportAgentsThreshold(tenantId: String!, code: String!, name: String!): SupportAgentsThreshold!
    deleteSupportAgentsThreshold(id: ID!): Boolean!
  }
`;

export const SupportAgentsThresholdGqlResolvers = {
  Query: {
    getSupportAgentsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
