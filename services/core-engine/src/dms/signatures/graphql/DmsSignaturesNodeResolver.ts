export const DmsSignaturesNodeGqlTypeDefs = `
  type DmsSignaturesNode {
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
    getDmsSignaturesNode(id: ID!): DmsSignaturesNode
    listDmsSignaturesNodes(tenantId: String!, limit: Int): [DmsSignaturesNode!]!
  }

  extend type Mutation {
    createDmsSignaturesNode(tenantId: String!, code: String!, name: String!): DmsSignaturesNode!
    deleteDmsSignaturesNode(id: ID!): Boolean!
  }
`;

export const DmsSignaturesNodeGqlResolvers = {
  Query: {
    getDmsSignaturesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
