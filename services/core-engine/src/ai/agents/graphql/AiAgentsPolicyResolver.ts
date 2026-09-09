export const AiAgentsPolicyGqlTypeDefs = `
  type AiAgentsPolicy {
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
    getAiAgentsPolicy(id: ID!): AiAgentsPolicy
    listAiAgentsPolicys(tenantId: String!, limit: Int): [AiAgentsPolicy!]!
  }

  extend type Mutation {
    createAiAgentsPolicy(tenantId: String!, code: String!, name: String!): AiAgentsPolicy!
    deleteAiAgentsPolicy(id: ID!): Boolean!
  }
`;

export const AiAgentsPolicyGqlResolvers = {
  Query: {
    getAiAgentsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
