export const CrmLeadsNodeGqlTypeDefs = `
  type CrmLeadsNode {
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
    getCrmLeadsNode(id: ID!): CrmLeadsNode
    listCrmLeadsNodes(tenantId: String!, limit: Int): [CrmLeadsNode!]!
  }

  extend type Mutation {
    createCrmLeadsNode(tenantId: String!, code: String!, name: String!): CrmLeadsNode!
    deleteCrmLeadsNode(id: ID!): Boolean!
  }
`;

export const CrmLeadsNodeGqlResolvers = {
  Query: {
    getCrmLeadsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
