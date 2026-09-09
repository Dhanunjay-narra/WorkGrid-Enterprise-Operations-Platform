export const CrmDealsConfigGqlTypeDefs = `
  type CrmDealsConfig {
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
    getCrmDealsConfig(id: ID!): CrmDealsConfig
    listCrmDealsConfigs(tenantId: String!, limit: Int): [CrmDealsConfig!]!
  }

  extend type Mutation {
    createCrmDealsConfig(tenantId: String!, code: String!, name: String!): CrmDealsConfig!
    deleteCrmDealsConfig(id: ID!): Boolean!
  }
`;

export const CrmDealsConfigGqlResolvers = {
  Query: {
    getCrmDealsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
