export const IotFirmwareThresholdGqlTypeDefs = `
  type IotFirmwareThreshold {
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
    getIotFirmwareThreshold(id: ID!): IotFirmwareThreshold
    listIotFirmwareThresholds(tenantId: String!, limit: Int): [IotFirmwareThreshold!]!
  }

  extend type Mutation {
    createIotFirmwareThreshold(tenantId: String!, code: String!, name: String!): IotFirmwareThreshold!
    deleteIotFirmwareThreshold(id: ID!): Boolean!
  }
`;

export const IotFirmwareThresholdGqlResolvers = {
  Query: {
    getIotFirmwareThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
