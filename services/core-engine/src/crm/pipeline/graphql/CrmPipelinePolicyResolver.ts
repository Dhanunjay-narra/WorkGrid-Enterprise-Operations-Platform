export const CrmPipelinePolicyGqlTypeDefs = `
  type CrmPipelinePolicy {
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
    getCrmPipelinePolicy(id: ID!): CrmPipelinePolicy
    listCrmPipelinePolicys(tenantId: String!, limit: Int): [CrmPipelinePolicy!]!
  }

  extend type Mutation {
    createCrmPipelinePolicy(tenantId: String!, code: String!, name: String!): CrmPipelinePolicy!
    deleteCrmPipelinePolicy(id: ID!): Boolean!
  }
`;

export const CrmPipelinePolicyGqlResolvers = {
  Query: {
    getCrmPipelinePolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelinePolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
