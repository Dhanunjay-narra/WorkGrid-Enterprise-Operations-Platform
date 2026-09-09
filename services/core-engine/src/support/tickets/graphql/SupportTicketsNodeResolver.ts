export const SupportTicketsNodeGqlTypeDefs = `
  type SupportTicketsNode {
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
    getSupportTicketsNode(id: ID!): SupportTicketsNode
    listSupportTicketsNodes(tenantId: String!, limit: Int): [SupportTicketsNode!]!
  }

  extend type Mutation {
    createSupportTicketsNode(tenantId: String!, code: String!, name: String!): SupportTicketsNode!
    deleteSupportTicketsNode(id: ID!): Boolean!
  }
`;

export const SupportTicketsNodeGqlResolvers = {
  Query: {
    getSupportTicketsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
