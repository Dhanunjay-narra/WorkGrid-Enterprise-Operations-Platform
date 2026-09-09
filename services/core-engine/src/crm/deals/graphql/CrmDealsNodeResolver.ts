export const CrmDealsNodeGqlTypeDefs = `
  type CrmDealsNode {
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
    getCrmDealsNode(id: ID!): CrmDealsNode
    listCrmDealsNodes(tenantId: String!, limit: Int): [CrmDealsNode!]!
  }

  extend type Mutation {
    createCrmDealsNode(tenantId: String!, code: String!, name: String!): CrmDealsNode!
    deleteCrmDealsNode(id: ID!): Boolean!
  }
`;

export const CrmDealsNodeGqlResolvers = {
  Query: {
    getCrmDealsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
