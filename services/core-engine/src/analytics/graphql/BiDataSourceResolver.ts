export const BiDataSourceTypeDefs = `
  type BiDataSource {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiDataSource(id: ID!): BiDataSource
    listBiDataSources(tenantId: String!): [BiDataSource!]!
  }
`;

export const BiDataSourceResolvers = {
  Query: {
    getBiDataSource: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiDataSource", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiDataSources: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiDataSource", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
