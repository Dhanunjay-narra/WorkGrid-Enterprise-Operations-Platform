export const DmsRetentionTaskGqlTypeDefs = `
  type DmsRetentionTask {
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
    getDmsRetentionTask(id: ID!): DmsRetentionTask
    listDmsRetentionTasks(tenantId: String!, limit: Int): [DmsRetentionTask!]!
  }

  extend type Mutation {
    createDmsRetentionTask(tenantId: String!, code: String!, name: String!): DmsRetentionTask!
    deleteDmsRetentionTask(id: ID!): Boolean!
  }
`;

export const DmsRetentionTaskGqlResolvers = {
  Query: {
    getDmsRetentionTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
