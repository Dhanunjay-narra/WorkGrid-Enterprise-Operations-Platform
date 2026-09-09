export const DmsSignaturesSessionGqlTypeDefs = `
  type DmsSignaturesSession {
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
    getDmsSignaturesSession(id: ID!): DmsSignaturesSession
    listDmsSignaturesSessions(tenantId: String!, limit: Int): [DmsSignaturesSession!]!
  }

  extend type Mutation {
    createDmsSignaturesSession(tenantId: String!, code: String!, name: String!): DmsSignaturesSession!
    deleteDmsSignaturesSession(id: ID!): Boolean!
  }
`;

export const DmsSignaturesSessionGqlResolvers = {
  Query: {
    getDmsSignaturesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
