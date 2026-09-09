export const CommMessagesNodeGqlTypeDefs = `
  type CommMessagesNode {
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
    getCommMessagesNode(id: ID!): CommMessagesNode
    listCommMessagesNodes(tenantId: String!, limit: Int): [CommMessagesNode!]!
  }

  extend type Mutation {
    createCommMessagesNode(tenantId: String!, code: String!, name: String!): CommMessagesNode!
    deleteCommMessagesNode(id: ID!): Boolean!
  }
`;

export const CommMessagesNodeGqlResolvers = {
  Query: {
    getCommMessagesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
