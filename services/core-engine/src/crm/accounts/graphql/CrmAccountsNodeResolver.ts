export const CrmAccountsNodeGqlTypeDefs = `
  type CrmAccountsNode {
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
    getCrmAccountsNode(id: ID!): CrmAccountsNode
    listCrmAccountsNodes(tenantId: String!, limit: Int): [CrmAccountsNode!]!
  }

  extend type Mutation {
    createCrmAccountsNode(tenantId: String!, code: String!, name: String!): CrmAccountsNode!
    deleteCrmAccountsNode(id: ID!): Boolean!
  }
`;

export const CrmAccountsNodeGqlResolvers = {
  Query: {
    getCrmAccountsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
