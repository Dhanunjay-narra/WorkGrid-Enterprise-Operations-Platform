export const IotTelemetryStateGqlTypeDefs = `
  type IotTelemetryState {
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
    getIotTelemetryState(id: ID!): IotTelemetryState
    listIotTelemetryStates(tenantId: String!, limit: Int): [IotTelemetryState!]!
  }

  extend type Mutation {
    createIotTelemetryState(tenantId: String!, code: String!, name: String!): IotTelemetryState!
    deleteIotTelemetryState(id: ID!): Boolean!
  }
`;

export const IotTelemetryStateGqlResolvers = {
  Query: {
    getIotTelemetryState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
