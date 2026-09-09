export const SupportKnowledgeMappingGqlTypeDefs = `
  type SupportKnowledgeMapping {
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
    getSupportKnowledgeMapping(id: ID!): SupportKnowledgeMapping
    listSupportKnowledgeMappings(tenantId: String!, limit: Int): [SupportKnowledgeMapping!]!
  }

  extend type Mutation {
    createSupportKnowledgeMapping(tenantId: String!, code: String!, name: String!): SupportKnowledgeMapping!
    deleteSupportKnowledgeMapping(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeMappingGqlResolvers = {
  Query: {
    getSupportKnowledgeMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
