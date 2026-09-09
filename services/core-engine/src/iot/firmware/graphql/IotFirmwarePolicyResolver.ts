export const IotFirmwarePolicyGqlTypeDefs = `
  type IotFirmwarePolicy {
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
    getIotFirmwarePolicy(id: ID!): IotFirmwarePolicy
    listIotFirmwarePolicys(tenantId: String!, limit: Int): [IotFirmwarePolicy!]!
  }

  extend type Mutation {
    createIotFirmwarePolicy(tenantId: String!, code: String!, name: String!): IotFirmwarePolicy!
    deleteIotFirmwarePolicy(id: ID!): Boolean!
  }
`;

export const IotFirmwarePolicyGqlResolvers = {
  Query: {
    getIotFirmwarePolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwarePolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
