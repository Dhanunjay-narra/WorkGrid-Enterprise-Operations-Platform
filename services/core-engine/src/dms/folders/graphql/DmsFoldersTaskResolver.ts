export const DmsFoldersTaskGqlTypeDefs = `
  type DmsFoldersTask {
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
    getDmsFoldersTask(id: ID!): DmsFoldersTask
    listDmsFoldersTasks(tenantId: String!, limit: Int): [DmsFoldersTask!]!
  }

  extend type Mutation {
    createDmsFoldersTask(tenantId: String!, code: String!, name: String!): DmsFoldersTask!
    deleteDmsFoldersTask(id: ID!): Boolean!
  }
`;

export const DmsFoldersTaskGqlResolvers = {
  Query: {
    getDmsFoldersTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
