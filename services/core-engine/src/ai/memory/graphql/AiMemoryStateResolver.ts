export const AiMemoryStateGqlTypeDefs = `
  type AiMemoryState {
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
    getAiMemoryState(id: ID!): AiMemoryState
    listAiMemoryStates(tenantId: String!, limit: Int): [AiMemoryState!]!
  }

  extend type Mutation {
    createAiMemoryState(tenantId: String!, code: String!, name: String!): AiMemoryState!
    deleteAiMemoryState(id: ID!): Boolean!
  }
`;

export const AiMemoryStateGqlResolvers = {
  Query: {
    getAiMemoryState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemoryState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
