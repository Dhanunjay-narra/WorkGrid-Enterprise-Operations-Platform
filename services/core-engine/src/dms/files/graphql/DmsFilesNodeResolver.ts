export const DmsFilesNodeGqlTypeDefs = `
  type DmsFilesNode {
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
    getDmsFilesNode(id: ID!): DmsFilesNode
    listDmsFilesNodes(tenantId: String!, limit: Int): [DmsFilesNode!]!
  }

  extend type Mutation {
    createDmsFilesNode(tenantId: String!, code: String!, name: String!): DmsFilesNode!
    deleteDmsFilesNode(id: ID!): Boolean!
  }
`;

export const DmsFilesNodeGqlResolvers = {
  Query: {
    getDmsFilesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
