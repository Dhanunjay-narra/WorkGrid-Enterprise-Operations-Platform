export const SupportEscalationPolicyGqlTypeDefs = `
  type SupportEscalationPolicy {
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
    getSupportEscalationPolicy(id: ID!): SupportEscalationPolicy
    listSupportEscalationPolicys(tenantId: String!, limit: Int): [SupportEscalationPolicy!]!
  }

  extend type Mutation {
    createSupportEscalationPolicy(tenantId: String!, code: String!, name: String!): SupportEscalationPolicy!
    deleteSupportEscalationPolicy(id: ID!): Boolean!
  }
`;

export const SupportEscalationPolicyGqlResolvers = {
  Query: {
    getSupportEscalationPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
