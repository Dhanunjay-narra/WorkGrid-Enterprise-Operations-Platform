export const DmsExportSessionGqlTypeDefs = `
  type DmsExportSession {
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
    getDmsExportSession(id: ID!): DmsExportSession
    listDmsExportSessions(tenantId: String!, limit: Int): [DmsExportSession!]!
  }

  extend type Mutation {
    createDmsExportSession(tenantId: String!, code: String!, name: String!): DmsExportSession!
    deleteDmsExportSession(id: ID!): Boolean!
  }
`;

export const DmsExportSessionGqlResolvers = {
  Query: {
    getDmsExportSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
