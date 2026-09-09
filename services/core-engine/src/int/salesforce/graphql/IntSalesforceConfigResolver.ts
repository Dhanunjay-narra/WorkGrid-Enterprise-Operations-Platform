export const IntSalesforceConfigGqlTypeDefs = `
  type IntSalesforceConfig {
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
    getIntSalesforceConfig(id: ID!): IntSalesforceConfig
    listIntSalesforceConfigs(tenantId: String!, limit: Int): [IntSalesforceConfig!]!
  }

  extend type Mutation {
    createIntSalesforceConfig(tenantId: String!, code: String!, name: String!): IntSalesforceConfig!
    deleteIntSalesforceConfig(id: ID!): Boolean!
  }
`;

export const IntSalesforceConfigGqlResolvers = {
  Query: {
    getIntSalesforceConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
