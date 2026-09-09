export const DmsFoldersSessionGqlTypeDefs = `
  type DmsFoldersSession {
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
    getDmsFoldersSession(id: ID!): DmsFoldersSession
    listDmsFoldersSessions(tenantId: String!, limit: Int): [DmsFoldersSession!]!
  }

  extend type Mutation {
    createDmsFoldersSession(tenantId: String!, code: String!, name: String!): DmsFoldersSession!
    deleteDmsFoldersSession(id: ID!): Boolean!
  }
`;

export const DmsFoldersSessionGqlResolvers = {
  Query: {
    getDmsFoldersSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
