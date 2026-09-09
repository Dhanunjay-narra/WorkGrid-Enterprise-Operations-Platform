export const SupportTicketsStateGqlTypeDefs = `
  type SupportTicketsState {
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
    getSupportTicketsState(id: ID!): SupportTicketsState
    listSupportTicketsStates(tenantId: String!, limit: Int): [SupportTicketsState!]!
  }

  extend type Mutation {
    createSupportTicketsState(tenantId: String!, code: String!, name: String!): SupportTicketsState!
    deleteSupportTicketsState(id: ID!): Boolean!
  }
`;

export const SupportTicketsStateGqlResolvers = {
  Query: {
    getSupportTicketsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
