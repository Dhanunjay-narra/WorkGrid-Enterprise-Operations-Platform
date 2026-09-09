export const AiToolsMappingGqlTypeDefs = `
  type AiToolsMapping {
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
    getAiToolsMapping(id: ID!): AiToolsMapping
    listAiToolsMappings(tenantId: String!, limit: Int): [AiToolsMapping!]!
  }

  extend type Mutation {
    createAiToolsMapping(tenantId: String!, code: String!, name: String!): AiToolsMapping!
    deleteAiToolsMapping(id: ID!): Boolean!
  }
`;

export const AiToolsMappingGqlResolvers = {
  Query: {
    getAiToolsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiToolsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
