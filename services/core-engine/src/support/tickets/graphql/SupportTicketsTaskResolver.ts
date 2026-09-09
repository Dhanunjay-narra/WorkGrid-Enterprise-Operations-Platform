export const SupportTicketsTaskGqlTypeDefs = `
  type SupportTicketsTask {
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
    getSupportTicketsTask(id: ID!): SupportTicketsTask
    listSupportTicketsTasks(tenantId: String!, limit: Int): [SupportTicketsTask!]!
  }

  extend type Mutation {
    createSupportTicketsTask(tenantId: String!, code: String!, name: String!): SupportTicketsTask!
    deleteSupportTicketsTask(id: ID!): Boolean!
  }
`;

export const SupportTicketsTaskGqlResolvers = {
  Query: {
    getSupportTicketsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
