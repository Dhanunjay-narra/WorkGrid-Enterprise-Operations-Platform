export const IotTelemetrySessionGqlTypeDefs = `
  type IotTelemetrySession {
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
    getIotTelemetrySession(id: ID!): IotTelemetrySession
    listIotTelemetrySessions(tenantId: String!, limit: Int): [IotTelemetrySession!]!
  }

  extend type Mutation {
    createIotTelemetrySession(tenantId: String!, code: String!, name: String!): IotTelemetrySession!
    deleteIotTelemetrySession(id: ID!): Boolean!
  }
`;

export const IotTelemetrySessionGqlResolvers = {
  Query: {
    getIotTelemetrySession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetrySession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
