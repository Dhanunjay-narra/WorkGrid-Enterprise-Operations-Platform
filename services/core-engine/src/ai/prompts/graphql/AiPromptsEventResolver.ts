export const AiPromptsEventGqlTypeDefs = `
  type AiPromptsEvent {
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
    getAiPromptsEvent(id: ID!): AiPromptsEvent
    listAiPromptsEvents(tenantId: String!, limit: Int): [AiPromptsEvent!]!
  }

  extend type Mutation {
    createAiPromptsEvent(tenantId: String!, code: String!, name: String!): AiPromptsEvent!
    deleteAiPromptsEvent(id: ID!): Boolean!
  }
`;

export const AiPromptsEventGqlResolvers = {
  Query: {
    getAiPromptsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
