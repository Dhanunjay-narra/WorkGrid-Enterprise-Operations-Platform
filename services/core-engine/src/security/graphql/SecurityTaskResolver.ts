export const SecurityTaskGqlTypeDefs = `
  type SecurityTask {
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
    getSecurityTask(id: ID!): SecurityTask
    listSecurityTasks(tenantId: String!, limit: Int): [SecurityTask!]!
  }

  extend type Mutation {
    createSecurityTask(tenantId: String!, code: String!, name: String!): SecurityTask!
    deleteSecurityTask(id: ID!): Boolean!
  }
`;

export const SecurityTaskGqlResolvers = {
  Query: {
    getSecurityTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
