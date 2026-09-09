export const SupportCsatNodeGqlTypeDefs = `
  type SupportCsatNode {
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
    getSupportCsatNode(id: ID!): SupportCsatNode
    listSupportCsatNodes(tenantId: String!, limit: Int): [SupportCsatNode!]!
  }

  extend type Mutation {
    createSupportCsatNode(tenantId: String!, code: String!, name: String!): SupportCsatNode!
    deleteSupportCsatNode(id: ID!): Boolean!
  }
`;

export const SupportCsatNodeGqlResolvers = {
  Query: {
    getSupportCsatNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
