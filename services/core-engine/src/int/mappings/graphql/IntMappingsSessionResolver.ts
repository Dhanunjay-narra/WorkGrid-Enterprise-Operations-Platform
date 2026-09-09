export const IntMappingsSessionGqlTypeDefs = `
  type IntMappingsSession {
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
    getIntMappingsSession(id: ID!): IntMappingsSession
    listIntMappingsSessions(tenantId: String!, limit: Int): [IntMappingsSession!]!
  }

  extend type Mutation {
    createIntMappingsSession(tenantId: String!, code: String!, name: String!): IntMappingsSession!
    deleteIntMappingsSession(id: ID!): Boolean!
  }
`;

export const IntMappingsSessionGqlResolvers = {
  Query: {
    getIntMappingsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntMappingsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
