export const AiAgentsMappingGqlTypeDefs = `
  type AiAgentsMapping {
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
    getAiAgentsMapping(id: ID!): AiAgentsMapping
    listAiAgentsMappings(tenantId: String!, limit: Int): [AiAgentsMapping!]!
  }

  extend type Mutation {
    createAiAgentsMapping(tenantId: String!, code: String!, name: String!): AiAgentsMapping!
    deleteAiAgentsMapping(id: ID!): Boolean!
  }
`;

export const AiAgentsMappingGqlResolvers = {
  Query: {
    getAiAgentsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
