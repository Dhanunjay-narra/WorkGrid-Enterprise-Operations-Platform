export const IotLocationsThresholdGqlTypeDefs = `
  type IotLocationsThreshold {
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
    getIotLocationsThreshold(id: ID!): IotLocationsThreshold
    listIotLocationsThresholds(tenantId: String!, limit: Int): [IotLocationsThreshold!]!
  }

  extend type Mutation {
    createIotLocationsThreshold(tenantId: String!, code: String!, name: String!): IotLocationsThreshold!
    deleteIotLocationsThreshold(id: ID!): Boolean!
  }
`;

export const IotLocationsThresholdGqlResolvers = {
  Query: {
    getIotLocationsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
