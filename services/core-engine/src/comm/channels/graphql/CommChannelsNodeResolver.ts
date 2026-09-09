export const CommChannelsNodeGqlTypeDefs = `
  type CommChannelsNode {
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
    getCommChannelsNode(id: ID!): CommChannelsNode
    listCommChannelsNodes(tenantId: String!, limit: Int): [CommChannelsNode!]!
  }

  extend type Mutation {
    createCommChannelsNode(tenantId: String!, code: String!, name: String!): CommChannelsNode!
    deleteCommChannelsNode(id: ID!): Boolean!
  }
`;

export const CommChannelsNodeGqlResolvers = {
  Query: {
    getCommChannelsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
