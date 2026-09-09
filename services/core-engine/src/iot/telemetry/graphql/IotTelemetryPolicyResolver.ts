export const IotTelemetryPolicyGqlTypeDefs = `
  type IotTelemetryPolicy {
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
    getIotTelemetryPolicy(id: ID!): IotTelemetryPolicy
    listIotTelemetryPolicys(tenantId: String!, limit: Int): [IotTelemetryPolicy!]!
  }

  extend type Mutation {
    createIotTelemetryPolicy(tenantId: String!, code: String!, name: String!): IotTelemetryPolicy!
    deleteIotTelemetryPolicy(id: ID!): Boolean!
  }
`;

export const IotTelemetryPolicyGqlResolvers = {
  Query: {
    getIotTelemetryPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
