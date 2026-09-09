export const BiForecastsNodeGqlTypeDefs = `
  type BiForecastsNode {
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
    getBiForecastsNode(id: ID!): BiForecastsNode
    listBiForecastsNodes(tenantId: String!, limit: Int): [BiForecastsNode!]!
  }

  extend type Mutation {
    createBiForecastsNode(tenantId: String!, code: String!, name: String!): BiForecastsNode!
    deleteBiForecastsNode(id: ID!): Boolean!
  }
`;

export const BiForecastsNodeGqlResolvers = {
  Query: {
    getBiForecastsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
