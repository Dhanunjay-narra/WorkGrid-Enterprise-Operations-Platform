export const CrmPipelineMappingGqlTypeDefs = `
  type CrmPipelineMapping {
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
    getCrmPipelineMapping(id: ID!): CrmPipelineMapping
    listCrmPipelineMappings(tenantId: String!, limit: Int): [CrmPipelineMapping!]!
  }

  extend type Mutation {
    createCrmPipelineMapping(tenantId: String!, code: String!, name: String!): CrmPipelineMapping!
    deleteCrmPipelineMapping(id: ID!): Boolean!
  }
`;

export const CrmPipelineMappingGqlResolvers = {
  Query: {
    getCrmPipelineMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
