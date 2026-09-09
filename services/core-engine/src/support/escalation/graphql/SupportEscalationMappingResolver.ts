export const SupportEscalationMappingGqlTypeDefs = `
  type SupportEscalationMapping {
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
    getSupportEscalationMapping(id: ID!): SupportEscalationMapping
    listSupportEscalationMappings(tenantId: String!, limit: Int): [SupportEscalationMapping!]!
  }

  extend type Mutation {
    createSupportEscalationMapping(tenantId: String!, code: String!, name: String!): SupportEscalationMapping!
    deleteSupportEscalationMapping(id: ID!): Boolean!
  }
`;

export const SupportEscalationMappingGqlResolvers = {
  Query: {
    getSupportEscalationMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
