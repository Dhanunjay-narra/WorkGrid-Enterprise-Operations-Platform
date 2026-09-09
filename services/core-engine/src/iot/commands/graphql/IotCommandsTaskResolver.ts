export const IotCommandsTaskGqlTypeDefs = `
  type IotCommandsTask {
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
    getIotCommandsTask(id: ID!): IotCommandsTask
    listIotCommandsTasks(tenantId: String!, limit: Int): [IotCommandsTask!]!
  }

  extend type Mutation {
    createIotCommandsTask(tenantId: String!, code: String!, name: String!): IotCommandsTask!
    deleteIotCommandsTask(id: ID!): Boolean!
  }
`;

export const IotCommandsTaskGqlResolvers = {
  Query: {
    getIotCommandsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
