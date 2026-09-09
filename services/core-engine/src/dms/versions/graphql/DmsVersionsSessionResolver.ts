export const DmsVersionsSessionGqlTypeDefs = `
  type DmsVersionsSession {
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
    getDmsVersionsSession(id: ID!): DmsVersionsSession
    listDmsVersionsSessions(tenantId: String!, limit: Int): [DmsVersionsSession!]!
  }

  extend type Mutation {
    createDmsVersionsSession(tenantId: String!, code: String!, name: String!): DmsVersionsSession!
    deleteDmsVersionsSession(id: ID!): Boolean!
  }
`;

export const DmsVersionsSessionGqlResolvers = {
  Query: {
    getDmsVersionsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
