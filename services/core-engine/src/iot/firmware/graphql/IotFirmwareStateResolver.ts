export const IotFirmwareStateGqlTypeDefs = `
  type IotFirmwareState {
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
    getIotFirmwareState(id: ID!): IotFirmwareState
    listIotFirmwareStates(tenantId: String!, limit: Int): [IotFirmwareState!]!
  }

  extend type Mutation {
    createIotFirmwareState(tenantId: String!, code: String!, name: String!): IotFirmwareState!
    deleteIotFirmwareState(id: ID!): Boolean!
  }
`;

export const IotFirmwareStateGqlResolvers = {
  Query: {
    getIotFirmwareState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
