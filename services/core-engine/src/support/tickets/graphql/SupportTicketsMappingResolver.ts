export const SupportTicketsMappingGqlTypeDefs = `
  type SupportTicketsMapping {
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
    getSupportTicketsMapping(id: ID!): SupportTicketsMapping
    listSupportTicketsMappings(tenantId: String!, limit: Int): [SupportTicketsMapping!]!
  }

  extend type Mutation {
    createSupportTicketsMapping(tenantId: String!, code: String!, name: String!): SupportTicketsMapping!
    deleteSupportTicketsMapping(id: ID!): Boolean!
  }
`;

export const SupportTicketsMappingGqlResolvers = {
  Query: {
    getSupportTicketsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
