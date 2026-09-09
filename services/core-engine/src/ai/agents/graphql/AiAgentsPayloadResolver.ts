export const AiAgentsPayloadGqlTypeDefs = `
  type AiAgentsPayload {
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
    getAiAgentsPayload(id: ID!): AiAgentsPayload
    listAiAgentsPayloads(tenantId: String!, limit: Int): [AiAgentsPayload!]!
  }

  extend type Mutation {
    createAiAgentsPayload(tenantId: String!, code: String!, name: String!): AiAgentsPayload!
    deleteAiAgentsPayload(id: ID!): Boolean!
  }
`;

export const AiAgentsPayloadGqlResolvers = {
  Query: {
    getAiAgentsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
