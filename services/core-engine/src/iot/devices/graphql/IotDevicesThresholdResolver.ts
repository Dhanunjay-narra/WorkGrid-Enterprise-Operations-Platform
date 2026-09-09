export const IotDevicesThresholdGqlTypeDefs = `
  type IotDevicesThreshold {
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
    getIotDevicesThreshold(id: ID!): IotDevicesThreshold
    listIotDevicesThresholds(tenantId: String!, limit: Int): [IotDevicesThreshold!]!
  }

  extend type Mutation {
    createIotDevicesThreshold(tenantId: String!, code: String!, name: String!): IotDevicesThreshold!
    deleteIotDevicesThreshold(id: ID!): Boolean!
  }
`;

export const IotDevicesThresholdGqlResolvers = {
  Query: {
    getIotDevicesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
