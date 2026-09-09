export const CrmPipelineConfigGqlTypeDefs = `
  type CrmPipelineConfig {
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
    getCrmPipelineConfig(id: ID!): CrmPipelineConfig
    listCrmPipelineConfigs(tenantId: String!, limit: Int): [CrmPipelineConfig!]!
  }

  extend type Mutation {
    createCrmPipelineConfig(tenantId: String!, code: String!, name: String!): CrmPipelineConfig!
    deleteCrmPipelineConfig(id: ID!): Boolean!
  }
`;

export const CrmPipelineConfigGqlResolvers = {
  Query: {
    getCrmPipelineConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
