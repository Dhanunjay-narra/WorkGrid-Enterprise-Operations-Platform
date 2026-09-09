export const IntWebhooksNodeGqlTypeDefs = `
  type IntWebhooksNode {
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
    getIntWebhooksNode(id: ID!): IntWebhooksNode
    listIntWebhooksNodes(tenantId: String!, limit: Int): [IntWebhooksNode!]!
  }

  extend type Mutation {
    createIntWebhooksNode(tenantId: String!, code: String!, name: String!): IntWebhooksNode!
    deleteIntWebhooksNode(id: ID!): Boolean!
  }
`;

export const IntWebhooksNodeGqlResolvers = {
  Query: {
    getIntWebhooksNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
