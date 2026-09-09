export const AiAgentsEventGqlTypeDefs = `
  type AiAgentsEvent {
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
    getAiAgentsEvent(id: ID!): AiAgentsEvent
    listAiAgentsEvents(tenantId: String!, limit: Int): [AiAgentsEvent!]!
  }

  extend type Mutation {
    createAiAgentsEvent(tenantId: String!, code: String!, name: String!): AiAgentsEvent!
    deleteAiAgentsEvent(id: ID!): Boolean!
  }
`;

export const AiAgentsEventGqlResolvers = {
  Query: {
    getAiAgentsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
