export const TenancyTaskGqlTypeDefs = `
  type TenancyTask {
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
    getTenancyTask(id: ID!): TenancyTask
    listTenancyTasks(tenantId: String!, limit: Int): [TenancyTask!]!
  }

  extend type Mutation {
    createTenancyTask(tenantId: String!, code: String!, name: String!): TenancyTask!
    deleteTenancyTask(id: ID!): Boolean!
  }
`;

export const TenancyTaskGqlResolvers = {
  Query: {
    getTenancyTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
