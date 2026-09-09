export const IotTelemetryNodeGqlTypeDefs = `
  type IotTelemetryNode {
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
    getIotTelemetryNode(id: ID!): IotTelemetryNode
    listIotTelemetryNodes(tenantId: String!, limit: Int): [IotTelemetryNode!]!
  }

  extend type Mutation {
    createIotTelemetryNode(tenantId: String!, code: String!, name: String!): IotTelemetryNode!
    deleteIotTelemetryNode(id: ID!): Boolean!
  }
`;

export const IotTelemetryNodeGqlResolvers = {
  Query: {
    getIotTelemetryNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
