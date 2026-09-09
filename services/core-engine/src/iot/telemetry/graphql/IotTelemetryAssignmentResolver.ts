export const IotTelemetryAssignmentGqlTypeDefs = `
  type IotTelemetryAssignment {
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
    getIotTelemetryAssignment(id: ID!): IotTelemetryAssignment
    listIotTelemetryAssignments(tenantId: String!, limit: Int): [IotTelemetryAssignment!]!
  }

  extend type Mutation {
    createIotTelemetryAssignment(tenantId: String!, code: String!, name: String!): IotTelemetryAssignment!
    deleteIotTelemetryAssignment(id: ID!): Boolean!
  }
`;

export const IotTelemetryAssignmentGqlResolvers = {
  Query: {
    getIotTelemetryAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
