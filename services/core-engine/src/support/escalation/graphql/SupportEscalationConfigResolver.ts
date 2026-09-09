export const SupportEscalationConfigGqlTypeDefs = `
  type SupportEscalationConfig {
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
    getSupportEscalationConfig(id: ID!): SupportEscalationConfig
    listSupportEscalationConfigs(tenantId: String!, limit: Int): [SupportEscalationConfig!]!
  }

  extend type Mutation {
    createSupportEscalationConfig(tenantId: String!, code: String!, name: String!): SupportEscalationConfig!
    deleteSupportEscalationConfig(id: ID!): Boolean!
  }
`;

export const SupportEscalationConfigGqlResolvers = {
  Query: {
    getSupportEscalationConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
