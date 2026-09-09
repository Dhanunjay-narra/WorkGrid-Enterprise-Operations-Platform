export const AiPromptsStateGqlTypeDefs = `
  type AiPromptsState {
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
    getAiPromptsState(id: ID!): AiPromptsState
    listAiPromptsStates(tenantId: String!, limit: Int): [AiPromptsState!]!
  }

  extend type Mutation {
    createAiPromptsState(tenantId: String!, code: String!, name: String!): AiPromptsState!
    deleteAiPromptsState(id: ID!): Boolean!
  }
`;

export const AiPromptsStateGqlResolvers = {
  Query: {
    getAiPromptsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
