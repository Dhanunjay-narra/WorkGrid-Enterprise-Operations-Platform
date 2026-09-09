export const DmsFilesSessionGqlTypeDefs = `
  type DmsFilesSession {
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
    getDmsFilesSession(id: ID!): DmsFilesSession
    listDmsFilesSessions(tenantId: String!, limit: Int): [DmsFilesSession!]!
  }

  extend type Mutation {
    createDmsFilesSession(tenantId: String!, code: String!, name: String!): DmsFilesSession!
    deleteDmsFilesSession(id: ID!): Boolean!
  }
`;

export const DmsFilesSessionGqlResolvers = {
  Query: {
    getDmsFilesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
