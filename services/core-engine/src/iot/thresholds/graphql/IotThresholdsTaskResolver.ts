export const IotThresholdsTaskGqlTypeDefs = `
  type IotThresholdsTask {
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
    getIotThresholdsTask(id: ID!): IotThresholdsTask
    listIotThresholdsTasks(tenantId: String!, limit: Int): [IotThresholdsTask!]!
  }

  extend type Mutation {
    createIotThresholdsTask(tenantId: String!, code: String!, name: String!): IotThresholdsTask!
    deleteIotThresholdsTask(id: ID!): Boolean!
  }
`;

export const IotThresholdsTaskGqlResolvers = {
  Query: {
    getIotThresholdsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
