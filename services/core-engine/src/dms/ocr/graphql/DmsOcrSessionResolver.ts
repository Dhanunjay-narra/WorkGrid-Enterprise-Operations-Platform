export const DmsOcrSessionGqlTypeDefs = `
  type DmsOcrSession {
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
    getDmsOcrSession(id: ID!): DmsOcrSession
    listDmsOcrSessions(tenantId: String!, limit: Int): [DmsOcrSession!]!
  }

  extend type Mutation {
    createDmsOcrSession(tenantId: String!, code: String!, name: String!): DmsOcrSession!
    deleteDmsOcrSession(id: ID!): Boolean!
  }
`;

export const DmsOcrSessionGqlResolvers = {
  Query: {
    getDmsOcrSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
