export const IntMappingsPolicyGqlTypeDefs = `
  type IntMappingsPolicy {
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
    getIntMappingsPolicy(id: ID!): IntMappingsPolicy
    listIntMappingsPolicys(tenantId: String!, limit: Int): [IntMappingsPolicy!]!
  }

  extend type Mutation {
    createIntMappingsPolicy(tenantId: String!, code: String!, name: String!): IntMappingsPolicy!
    deleteIntMappingsPolicy(id: ID!): Boolean!
  }
`;

export const IntMappingsPolicyGqlResolvers = {
  Query: {
    getIntMappingsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntMappingsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
