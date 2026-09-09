export const AiMemoryPolicyGqlTypeDefs = `
  type AiMemoryPolicy {
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
    getAiMemoryPolicy(id: ID!): AiMemoryPolicy
    listAiMemoryPolicys(tenantId: String!, limit: Int): [AiMemoryPolicy!]!
  }

  extend type Mutation {
    createAiMemoryPolicy(tenantId: String!, code: String!, name: String!): AiMemoryPolicy!
    deleteAiMemoryPolicy(id: ID!): Boolean!
  }
`;

export const AiMemoryPolicyGqlResolvers = {
  Query: {
    getAiMemoryPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemoryPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
