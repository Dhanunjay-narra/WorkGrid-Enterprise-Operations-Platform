export const SupportAgentsMappingGqlTypeDefs = `
  type SupportAgentsMapping {
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
    getSupportAgentsMapping(id: ID!): SupportAgentsMapping
    listSupportAgentsMappings(tenantId: String!, limit: Int): [SupportAgentsMapping!]!
  }

  extend type Mutation {
    createSupportAgentsMapping(tenantId: String!, code: String!, name: String!): SupportAgentsMapping!
    deleteSupportAgentsMapping(id: ID!): Boolean!
  }
`;

export const SupportAgentsMappingGqlResolvers = {
  Query: {
    getSupportAgentsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
