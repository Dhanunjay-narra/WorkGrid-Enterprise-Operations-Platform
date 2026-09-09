export const SupportKnowledgePolicyGqlTypeDefs = `
  type SupportKnowledgePolicy {
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
    getSupportKnowledgePolicy(id: ID!): SupportKnowledgePolicy
    listSupportKnowledgePolicys(tenantId: String!, limit: Int): [SupportKnowledgePolicy!]!
  }

  extend type Mutation {
    createSupportKnowledgePolicy(tenantId: String!, code: String!, name: String!): SupportKnowledgePolicy!
    deleteSupportKnowledgePolicy(id: ID!): Boolean!
  }
`;

export const SupportKnowledgePolicyGqlResolvers = {
  Query: {
    getSupportKnowledgePolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgePolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
