export const AiToolsStateGqlTypeDefs = `
  type AiToolsState {
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
    getAiToolsState(id: ID!): AiToolsState
    listAiToolsStates(tenantId: String!, limit: Int): [AiToolsState!]!
  }

  extend type Mutation {
    createAiToolsState(tenantId: String!, code: String!, name: String!): AiToolsState!
    deleteAiToolsState(id: ID!): Boolean!
  }
`;

export const AiToolsStateGqlResolvers = {
  Query: {
    getAiToolsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiToolsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
