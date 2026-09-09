export const ProjectCapacityItemGqlTypeDefs = `
  type ProjectCapacityItem {
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
    getProjectCapacityItem(id: ID!): ProjectCapacityItem
    listProjectCapacityItems(tenantId: String!, limit: Int): [ProjectCapacityItem!]!
  }

  extend type Mutation {
    createProjectCapacityItem(tenantId: String!, code: String!, name: String!): ProjectCapacityItem!
    deleteProjectCapacityItem(id: ID!): Boolean!
  }
`;

export const ProjectCapacityItemGqlResolvers = {
  Query: {
    getProjectCapacityItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
