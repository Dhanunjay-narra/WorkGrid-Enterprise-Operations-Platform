export const AiRagMappingGqlTypeDefs = `
  type AiRagMapping {
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
    getAiRagMapping(id: ID!): AiRagMapping
    listAiRagMappings(tenantId: String!, limit: Int): [AiRagMapping!]!
  }

  extend type Mutation {
    createAiRagMapping(tenantId: String!, code: String!, name: String!): AiRagMapping!
    deleteAiRagMapping(id: ID!): Boolean!
  }
`;

export const AiRagMappingGqlResolvers = {
  Query: {
    getAiRagMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
