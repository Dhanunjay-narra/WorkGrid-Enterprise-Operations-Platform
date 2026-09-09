export const IotCommandsBatchGqlTypeDefs = `
  type IotCommandsBatch {
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
    getIotCommandsBatch(id: ID!): IotCommandsBatch
    listIotCommandsBatchs(tenantId: String!, limit: Int): [IotCommandsBatch!]!
  }

  extend type Mutation {
    createIotCommandsBatch(tenantId: String!, code: String!, name: String!): IotCommandsBatch!
    deleteIotCommandsBatch(id: ID!): Boolean!
  }
`;

export const IotCommandsBatchGqlResolvers = {
  Query: {
    getIotCommandsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
