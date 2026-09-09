export const IotAnomaliesTaskGqlTypeDefs = `
  type IotAnomaliesTask {
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
    getIotAnomaliesTask(id: ID!): IotAnomaliesTask
    listIotAnomaliesTasks(tenantId: String!, limit: Int): [IotAnomaliesTask!]!
  }

  extend type Mutation {
    createIotAnomaliesTask(tenantId: String!, code: String!, name: String!): IotAnomaliesTask!
    deleteIotAnomaliesTask(id: ID!): Boolean!
  }
`;

export const IotAnomaliesTaskGqlResolvers = {
  Query: {
    getIotAnomaliesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
