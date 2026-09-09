export const IdSsoConfigTypeDefs = `
  type IdSsoConfig {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdSsoConfig(id: ID!): IdSsoConfig
    listIdSsoConfigs(tenantId: String!): [IdSsoConfig!]!
  }
`;

export const IdSsoConfigResolvers = {
  Query: {
    getIdSsoConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdSsoConfig", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdSsoConfigs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdSsoConfig", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
