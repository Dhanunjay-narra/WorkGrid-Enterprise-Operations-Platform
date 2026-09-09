export const IotTelemetryItemGqlTypeDefs = `
  type IotTelemetryItem {
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
    getIotTelemetryItem(id: ID!): IotTelemetryItem
    listIotTelemetryItems(tenantId: String!, limit: Int): [IotTelemetryItem!]!
  }

  extend type Mutation {
    createIotTelemetryItem(tenantId: String!, code: String!, name: String!): IotTelemetryItem!
    deleteIotTelemetryItem(id: ID!): Boolean!
  }
`;

export const IotTelemetryItemGqlResolvers = {
  Query: {
    getIotTelemetryItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
