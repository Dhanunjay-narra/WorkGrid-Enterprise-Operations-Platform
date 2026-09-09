export const BiAnomalyThresholdTypeDefs = `
  type BiAnomalyThreshold {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiAnomalyThreshold(id: ID!): BiAnomalyThreshold
    listBiAnomalyThresholds(tenantId: String!): [BiAnomalyThreshold!]!
  }
`;

export const BiAnomalyThresholdResolvers = {
  Query: {
    getBiAnomalyThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiAnomalyThreshold", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiAnomalyThresholds: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiAnomalyThreshold", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
