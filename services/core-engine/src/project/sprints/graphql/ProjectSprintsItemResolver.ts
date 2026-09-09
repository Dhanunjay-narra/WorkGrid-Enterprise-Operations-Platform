export const ProjectSprintsItemGqlTypeDefs = `
  type ProjectSprintsItem {
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
    getProjectSprintsItem(id: ID!): ProjectSprintsItem
    listProjectSprintsItems(tenantId: String!, limit: Int): [ProjectSprintsItem!]!
  }

  extend type Mutation {
    createProjectSprintsItem(tenantId: String!, code: String!, name: String!): ProjectSprintsItem!
    deleteProjectSprintsItem(id: ID!): Boolean!
  }
`;

export const ProjectSprintsItemGqlResolvers = {
  Query: {
    getProjectSprintsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
