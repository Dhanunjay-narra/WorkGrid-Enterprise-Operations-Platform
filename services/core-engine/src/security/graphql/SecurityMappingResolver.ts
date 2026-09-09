export const SecurityMappingGqlTypeDefs = `
  type SecurityMapping {
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
    getSecurityMapping(id: ID!): SecurityMapping
    listSecurityMappings(tenantId: String!, limit: Int): [SecurityMapping!]!
  }

  extend type Mutation {
    createSecurityMapping(tenantId: String!, code: String!, name: String!): SecurityMapping!
    deleteSecurityMapping(id: ID!): Boolean!
  }
`;

export const SecurityMappingGqlResolvers = {
  Query: {
    getSecurityMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
