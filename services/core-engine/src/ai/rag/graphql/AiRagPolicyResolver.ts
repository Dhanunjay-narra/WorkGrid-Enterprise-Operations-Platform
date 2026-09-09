export const AiRagPolicyGqlTypeDefs = `
  type AiRagPolicy {
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
    getAiRagPolicy(id: ID!): AiRagPolicy
    listAiRagPolicys(tenantId: String!, limit: Int): [AiRagPolicy!]!
  }

  extend type Mutation {
    createAiRagPolicy(tenantId: String!, code: String!, name: String!): AiRagPolicy!
    deleteAiRagPolicy(id: ID!): Boolean!
  }
`;

export const AiRagPolicyGqlResolvers = {
  Query: {
    getAiRagPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
