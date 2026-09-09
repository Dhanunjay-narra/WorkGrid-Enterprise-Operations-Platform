export const CrmLeadsConfigGqlTypeDefs = `
  type CrmLeadsConfig {
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
    getCrmLeadsConfig(id: ID!): CrmLeadsConfig
    listCrmLeadsConfigs(tenantId: String!, limit: Int): [CrmLeadsConfig!]!
  }

  extend type Mutation {
    createCrmLeadsConfig(tenantId: String!, code: String!, name: String!): CrmLeadsConfig!
    deleteCrmLeadsConfig(id: ID!): Boolean!
  }
`;

export const CrmLeadsConfigGqlResolvers = {
  Query: {
    getCrmLeadsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
