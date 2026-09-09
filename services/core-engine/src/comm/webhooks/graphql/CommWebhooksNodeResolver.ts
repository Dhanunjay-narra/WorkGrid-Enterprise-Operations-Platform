export const CommWebhooksNodeGqlTypeDefs = `
  type CommWebhooksNode {
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
    getCommWebhooksNode(id: ID!): CommWebhooksNode
    listCommWebhooksNodes(tenantId: String!, limit: Int): [CommWebhooksNode!]!
  }

  extend type Mutation {
    createCommWebhooksNode(tenantId: String!, code: String!, name: String!): CommWebhooksNode!
    deleteCommWebhooksNode(id: ID!): Boolean!
  }
`;

export const CommWebhooksNodeGqlResolvers = {
  Query: {
    getCommWebhooksNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
