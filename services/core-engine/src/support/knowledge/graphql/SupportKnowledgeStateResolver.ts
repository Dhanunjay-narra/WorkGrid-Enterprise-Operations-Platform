export const SupportKnowledgeStateGqlTypeDefs = `
  type SupportKnowledgeState {
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
    getSupportKnowledgeState(id: ID!): SupportKnowledgeState
    listSupportKnowledgeStates(tenantId: String!, limit: Int): [SupportKnowledgeState!]!
  }

  extend type Mutation {
    createSupportKnowledgeState(tenantId: String!, code: String!, name: String!): SupportKnowledgeState!
    deleteSupportKnowledgeState(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeStateGqlResolvers = {
  Query: {
    getSupportKnowledgeState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
