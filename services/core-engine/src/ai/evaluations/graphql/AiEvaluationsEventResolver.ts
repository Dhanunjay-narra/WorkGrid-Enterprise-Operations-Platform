export const AiEvaluationsEventGqlTypeDefs = `
  type AiEvaluationsEvent {
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
    getAiEvaluationsEvent(id: ID!): AiEvaluationsEvent
    listAiEvaluationsEvents(tenantId: String!, limit: Int): [AiEvaluationsEvent!]!
  }

  extend type Mutation {
    createAiEvaluationsEvent(tenantId: String!, code: String!, name: String!): AiEvaluationsEvent!
    deleteAiEvaluationsEvent(id: ID!): Boolean!
  }
`;

export const AiEvaluationsEventGqlResolvers = {
  Query: {
    getAiEvaluationsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEvaluationsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
