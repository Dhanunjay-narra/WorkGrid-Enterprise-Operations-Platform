export const RbacTaskGqlTypeDefs = `
  type RbacTask {
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
    getRbacTask(id: ID!): RbacTask
    listRbacTasks(tenantId: String!, limit: Int): [RbacTask!]!
  }

  extend type Mutation {
    createRbacTask(tenantId: String!, code: String!, name: String!): RbacTask!
    deleteRbacTask(id: ID!): Boolean!
  }
`;

export const RbacTaskGqlResolvers = {
  Query: {
    getRbacTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
