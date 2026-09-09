export const SupportQueuesNodeGqlTypeDefs = `
  type SupportQueuesNode {
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
    getSupportQueuesNode(id: ID!): SupportQueuesNode
    listSupportQueuesNodes(tenantId: String!, limit: Int): [SupportQueuesNode!]!
  }

  extend type Mutation {
    createSupportQueuesNode(tenantId: String!, code: String!, name: String!): SupportQueuesNode!
    deleteSupportQueuesNode(id: ID!): Boolean!
  }
`;

export const SupportQueuesNodeGqlResolvers = {
  Query: {
    getSupportQueuesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
