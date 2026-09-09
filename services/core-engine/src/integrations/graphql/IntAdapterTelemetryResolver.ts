export const IntAdapterTelemetryTypeDefs = `
  type IntAdapterTelemetry {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIntAdapterTelemetry(id: ID!): IntAdapterTelemetry
    listIntAdapterTelemetrys(tenantId: String!): [IntAdapterTelemetry!]!
  }
`;

export const IntAdapterTelemetryResolvers = {
  Query: {
    getIntAdapterTelemetry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IntAdapterTelemetry", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIntAdapterTelemetrys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IntAdapterTelemetry", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
