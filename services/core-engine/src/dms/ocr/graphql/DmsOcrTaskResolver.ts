export const DmsOcrTaskGqlTypeDefs = `
  type DmsOcrTask {
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
    getDmsOcrTask(id: ID!): DmsOcrTask
    listDmsOcrTasks(tenantId: String!, limit: Int): [DmsOcrTask!]!
  }

  extend type Mutation {
    createDmsOcrTask(tenantId: String!, code: String!, name: String!): DmsOcrTask!
    deleteDmsOcrTask(id: ID!): Boolean!
  }
`;

export const DmsOcrTaskGqlResolvers = {
  Query: {
    getDmsOcrTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
