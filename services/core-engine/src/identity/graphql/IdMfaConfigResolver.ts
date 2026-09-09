export const IdMfaConfigTypeDefs = `
  type IdMfaConfig {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdMfaConfig(id: ID!): IdMfaConfig
    listIdMfaConfigs(tenantId: String!): [IdMfaConfig!]!
  }
`;

export const IdMfaConfigResolvers = {
  Query: {
    getIdMfaConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdMfaConfig", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdMfaConfigs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdMfaConfig", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
