export const CrmPipelineStateGqlTypeDefs = `
  type CrmPipelineState {
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
    getCrmPipelineState(id: ID!): CrmPipelineState
    listCrmPipelineStates(tenantId: String!, limit: Int): [CrmPipelineState!]!
  }

  extend type Mutation {
    createCrmPipelineState(tenantId: String!, code: String!, name: String!): CrmPipelineState!
    deleteCrmPipelineState(id: ID!): Boolean!
  }
`;

export const CrmPipelineStateGqlResolvers = {
  Query: {
    getCrmPipelineState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
