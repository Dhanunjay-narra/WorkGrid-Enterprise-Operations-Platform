export const AiMemoryEventGqlTypeDefs = `
  type AiMemoryEvent {
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
    getAiMemoryEvent(id: ID!): AiMemoryEvent
    listAiMemoryEvents(tenantId: String!, limit: Int): [AiMemoryEvent!]!
  }

  extend type Mutation {
    createAiMemoryEvent(tenantId: String!, code: String!, name: String!): AiMemoryEvent!
    deleteAiMemoryEvent(id: ID!): Boolean!
  }
`;

export const AiMemoryEventGqlResolvers = {
  Query: {
    getAiMemoryEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemoryEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
