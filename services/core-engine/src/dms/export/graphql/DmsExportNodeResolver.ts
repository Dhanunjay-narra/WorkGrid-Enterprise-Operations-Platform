export const DmsExportNodeGqlTypeDefs = `
  type DmsExportNode {
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
    getDmsExportNode(id: ID!): DmsExportNode
    listDmsExportNodes(tenantId: String!, limit: Int): [DmsExportNode!]!
  }

  extend type Mutation {
    createDmsExportNode(tenantId: String!, code: String!, name: String!): DmsExportNode!
    deleteDmsExportNode(id: ID!): Boolean!
  }
`;

export const DmsExportNodeGqlResolvers = {
  Query: {
    getDmsExportNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
