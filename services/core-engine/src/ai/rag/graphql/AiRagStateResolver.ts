export const AiRagStateGqlTypeDefs = `
  type AiRagState {
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
    getAiRagState(id: ID!): AiRagState
    listAiRagStates(tenantId: String!, limit: Int): [AiRagState!]!
  }

  extend type Mutation {
    createAiRagState(tenantId: String!, code: String!, name: String!): AiRagState!
    deleteAiRagState(id: ID!): Boolean!
  }
`;

export const AiRagStateGqlResolvers = {
  Query: {
    getAiRagState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
