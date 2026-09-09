export const IotFleetTaskGqlTypeDefs = `
  type IotFleetTask {
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
    getIotFleetTask(id: ID!): IotFleetTask
    listIotFleetTasks(tenantId: String!, limit: Int): [IotFleetTask!]!
  }

  extend type Mutation {
    createIotFleetTask(tenantId: String!, code: String!, name: String!): IotFleetTask!
    deleteIotFleetTask(id: ID!): Boolean!
  }
`;

export const IotFleetTaskGqlResolvers = {
  Query: {
    getIotFleetTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
