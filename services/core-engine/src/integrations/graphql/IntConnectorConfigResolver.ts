export const IntConnectorConfigTypeDefs = `
  type IntConnectorConfig {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIntConnectorConfig(id: ID!): IntConnectorConfig
    listIntConnectorConfigs(tenantId: String!): [IntConnectorConfig!]!
  }
`;

export const IntConnectorConfigResolvers = {
  Query: {
    getIntConnectorConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IntConnectorConfig", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIntConnectorConfigs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IntConnectorConfig", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
