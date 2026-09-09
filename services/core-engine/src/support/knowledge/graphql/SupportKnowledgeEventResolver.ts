export const SupportKnowledgeEventGqlTypeDefs = `
  type SupportKnowledgeEvent {
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
    getSupportKnowledgeEvent(id: ID!): SupportKnowledgeEvent
    listSupportKnowledgeEvents(tenantId: String!, limit: Int): [SupportKnowledgeEvent!]!
  }

  extend type Mutation {
    createSupportKnowledgeEvent(tenantId: String!, code: String!, name: String!): SupportKnowledgeEvent!
    deleteSupportKnowledgeEvent(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeEventGqlResolvers = {
  Query: {
    getSupportKnowledgeEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
