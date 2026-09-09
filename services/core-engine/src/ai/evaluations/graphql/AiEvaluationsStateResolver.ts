export const AiEvaluationsStateGqlTypeDefs = `
  type AiEvaluationsState {
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
    getAiEvaluationsState(id: ID!): AiEvaluationsState
    listAiEvaluationsStates(tenantId: String!, limit: Int): [AiEvaluationsState!]!
  }

  extend type Mutation {
    createAiEvaluationsState(tenantId: String!, code: String!, name: String!): AiEvaluationsState!
    deleteAiEvaluationsState(id: ID!): Boolean!
  }
`;

export const AiEvaluationsStateGqlResolvers = {
  Query: {
    getAiEvaluationsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEvaluationsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
