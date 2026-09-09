export const DocWatermarkConfigTypeDefs = `
  type DocWatermarkConfig {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getDocWatermarkConfig(id: ID!): DocWatermarkConfig
    listDocWatermarkConfigs(tenantId: String!): [DocWatermarkConfig!]!
  }
`;

export const DocWatermarkConfigResolvers = {
  Query: {
    getDocWatermarkConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "DocWatermarkConfig", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listDocWatermarkConfigs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "DocWatermarkConfig", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
