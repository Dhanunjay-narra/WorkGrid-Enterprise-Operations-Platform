export const IotFleetBatchGqlTypeDefs = `
  type IotFleetBatch {
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
    getIotFleetBatch(id: ID!): IotFleetBatch
    listIotFleetBatchs(tenantId: String!, limit: Int): [IotFleetBatch!]!
  }

  extend type Mutation {
    createIotFleetBatch(tenantId: String!, code: String!, name: String!): IotFleetBatch!
    deleteIotFleetBatch(id: ID!): Boolean!
  }
`;

export const IotFleetBatchGqlResolvers = {
  Query: {
    getIotFleetBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
