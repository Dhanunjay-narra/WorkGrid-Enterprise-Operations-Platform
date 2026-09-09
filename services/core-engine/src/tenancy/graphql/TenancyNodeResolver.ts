export const TenancyNodeGqlTypeDefs = `
  type TenancyNode {
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
    getTenancyNode(id: ID!): TenancyNode
    listTenancyNodes(tenantId: String!, limit: Int): [TenancyNode!]!
  }

  extend type Mutation {
    createTenancyNode(tenantId: String!, code: String!, name: String!): TenancyNode!
    deleteTenancyNode(id: ID!): Boolean!
  }
`;

export const TenancyNodeGqlResolvers = {
  Query: {
    getTenancyNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
