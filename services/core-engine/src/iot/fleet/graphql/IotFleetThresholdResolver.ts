export const IotFleetThresholdGqlTypeDefs = `
  type IotFleetThreshold {
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
    getIotFleetThreshold(id: ID!): IotFleetThreshold
    listIotFleetThresholds(tenantId: String!, limit: Int): [IotFleetThreshold!]!
  }

  extend type Mutation {
    createIotFleetThreshold(tenantId: String!, code: String!, name: String!): IotFleetThreshold!
    deleteIotFleetThreshold(id: ID!): Boolean!
  }
`;

export const IotFleetThresholdGqlResolvers = {
  Query: {
    getIotFleetThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
