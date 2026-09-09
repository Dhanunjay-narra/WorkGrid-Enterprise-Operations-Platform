export const SupportAgentsPolicyGqlTypeDefs = `
  type SupportAgentsPolicy {
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
    getSupportAgentsPolicy(id: ID!): SupportAgentsPolicy
    listSupportAgentsPolicys(tenantId: String!, limit: Int): [SupportAgentsPolicy!]!
  }

  extend type Mutation {
    createSupportAgentsPolicy(tenantId: String!, code: String!, name: String!): SupportAgentsPolicy!
    deleteSupportAgentsPolicy(id: ID!): Boolean!
  }
`;

export const SupportAgentsPolicyGqlResolvers = {
  Query: {
    getSupportAgentsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
