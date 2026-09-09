export const CrmPipelineNodeGqlTypeDefs = `
  type CrmPipelineNode {
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
    getCrmPipelineNode(id: ID!): CrmPipelineNode
    listCrmPipelineNodes(tenantId: String!, limit: Int): [CrmPipelineNode!]!
  }

  extend type Mutation {
    createCrmPipelineNode(tenantId: String!, code: String!, name: String!): CrmPipelineNode!
    deleteCrmPipelineNode(id: ID!): Boolean!
  }
`;

export const CrmPipelineNodeGqlResolvers = {
  Query: {
    getCrmPipelineNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
