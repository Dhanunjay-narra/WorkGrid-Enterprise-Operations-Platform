export const CrmAccountsConfigGqlTypeDefs = `
  type CrmAccountsConfig {
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
    getCrmAccountsConfig(id: ID!): CrmAccountsConfig
    listCrmAccountsConfigs(tenantId: String!, limit: Int): [CrmAccountsConfig!]!
  }

  extend type Mutation {
    createCrmAccountsConfig(tenantId: String!, code: String!, name: String!): CrmAccountsConfig!
    deleteCrmAccountsConfig(id: ID!): Boolean!
  }
`;

export const CrmAccountsConfigGqlResolvers = {
  Query: {
    getCrmAccountsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
