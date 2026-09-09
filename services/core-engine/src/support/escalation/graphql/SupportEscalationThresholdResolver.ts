export const SupportEscalationThresholdGqlTypeDefs = `
  type SupportEscalationThreshold {
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
    getSupportEscalationThreshold(id: ID!): SupportEscalationThreshold
    listSupportEscalationThresholds(tenantId: String!, limit: Int): [SupportEscalationThreshold!]!
  }

  extend type Mutation {
    createSupportEscalationThreshold(tenantId: String!, code: String!, name: String!): SupportEscalationThreshold!
    deleteSupportEscalationThreshold(id: ID!): Boolean!
  }
`;

export const SupportEscalationThresholdGqlResolvers = {
  Query: {
    getSupportEscalationThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
