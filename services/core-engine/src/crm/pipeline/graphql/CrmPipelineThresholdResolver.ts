export const CrmPipelineThresholdGqlTypeDefs = `
  type CrmPipelineThreshold {
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
    getCrmPipelineThreshold(id: ID!): CrmPipelineThreshold
    listCrmPipelineThresholds(tenantId: String!, limit: Int): [CrmPipelineThreshold!]!
  }

  extend type Mutation {
    createCrmPipelineThreshold(tenantId: String!, code: String!, name: String!): CrmPipelineThreshold!
    deleteCrmPipelineThreshold(id: ID!): Boolean!
  }
`;

export const CrmPipelineThresholdGqlResolvers = {
  Query: {
    getCrmPipelineThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
