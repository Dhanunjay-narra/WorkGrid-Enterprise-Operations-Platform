export const DmsVersionsTaskGqlTypeDefs = `
  type DmsVersionsTask {
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
    getDmsVersionsTask(id: ID!): DmsVersionsTask
    listDmsVersionsTasks(tenantId: String!, limit: Int): [DmsVersionsTask!]!
  }

  extend type Mutation {
    createDmsVersionsTask(tenantId: String!, code: String!, name: String!): DmsVersionsTask!
    deleteDmsVersionsTask(id: ID!): Boolean!
  }
`;

export const DmsVersionsTaskGqlResolvers = {
  Query: {
    getDmsVersionsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
