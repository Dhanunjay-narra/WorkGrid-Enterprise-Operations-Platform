export const BiTimeSeriesProjectionTypeDefs = `
  type BiTimeSeriesProjection {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiTimeSeriesProjection(id: ID!): BiTimeSeriesProjection
    listBiTimeSeriesProjections(tenantId: String!): [BiTimeSeriesProjection!]!
  }
`;

export const BiTimeSeriesProjectionResolvers = {
  Query: {
    getBiTimeSeriesProjection: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiTimeSeriesProjection", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiTimeSeriesProjections: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiTimeSeriesProjection", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
