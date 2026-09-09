export const IotDevicesStateGqlTypeDefs = `
  type IotDevicesState {
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
    getIotDevicesState(id: ID!): IotDevicesState
    listIotDevicesStates(tenantId: String!, limit: Int): [IotDevicesState!]!
  }

  extend type Mutation {
    createIotDevicesState(tenantId: String!, code: String!, name: String!): IotDevicesState!
    deleteIotDevicesState(id: ID!): Boolean!
  }
`;

export const IotDevicesStateGqlResolvers = {
  Query: {
    getIotDevicesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
