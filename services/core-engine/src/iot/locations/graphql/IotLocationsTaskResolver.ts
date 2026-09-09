export const IotLocationsTaskGqlTypeDefs = `
  type IotLocationsTask {
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
    getIotLocationsTask(id: ID!): IotLocationsTask
    listIotLocationsTasks(tenantId: String!, limit: Int): [IotLocationsTask!]!
  }

  extend type Mutation {
    createIotLocationsTask(tenantId: String!, code: String!, name: String!): IotLocationsTask!
    deleteIotLocationsTask(id: ID!): Boolean!
  }
`;

export const IotLocationsTaskGqlResolvers = {
  Query: {
    getIotLocationsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
