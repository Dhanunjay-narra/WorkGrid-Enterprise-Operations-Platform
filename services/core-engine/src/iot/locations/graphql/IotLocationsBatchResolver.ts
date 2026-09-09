export const IotLocationsBatchGqlTypeDefs = `
  type IotLocationsBatch {
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
    getIotLocationsBatch(id: ID!): IotLocationsBatch
    listIotLocationsBatchs(tenantId: String!, limit: Int): [IotLocationsBatch!]!
  }

  extend type Mutation {
    createIotLocationsBatch(tenantId: String!, code: String!, name: String!): IotLocationsBatch!
    deleteIotLocationsBatch(id: ID!): Boolean!
  }
`;

export const IotLocationsBatchGqlResolvers = {
  Query: {
    getIotLocationsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
