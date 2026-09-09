export const SupportSlaTaskGqlTypeDefs = `
  type SupportSlaTask {
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
    getSupportSlaTask(id: ID!): SupportSlaTask
    listSupportSlaTasks(tenantId: String!, limit: Int): [SupportSlaTask!]!
  }

  extend type Mutation {
    createSupportSlaTask(tenantId: String!, code: String!, name: String!): SupportSlaTask!
    deleteSupportSlaTask(id: ID!): Boolean!
  }
`;

export const SupportSlaTaskGqlResolvers = {
  Query: {
    getSupportSlaTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
