export const AiAgentsStateGqlTypeDefs = `
  type AiAgentsState {
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
    getAiAgentsState(id: ID!): AiAgentsState
    listAiAgentsStates(tenantId: String!, limit: Int): [AiAgentsState!]!
  }

  extend type Mutation {
    createAiAgentsState(tenantId: String!, code: String!, name: String!): AiAgentsState!
    deleteAiAgentsState(id: ID!): Boolean!
  }
`;

export const AiAgentsStateGqlResolvers = {
  Query: {
    getAiAgentsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
