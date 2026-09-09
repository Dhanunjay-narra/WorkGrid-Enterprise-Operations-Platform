export const IntMappingsBatchGqlTypeDefs = `
  type IntMappingsBatch {
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
    getIntMappingsBatch(id: ID!): IntMappingsBatch
    listIntMappingsBatchs(tenantId: String!, limit: Int): [IntMappingsBatch!]!
  }

  extend type Mutation {
    createIntMappingsBatch(tenantId: String!, code: String!, name: String!): IntMappingsBatch!
    deleteIntMappingsBatch(id: ID!): Boolean!
  }
`;

export const IntMappingsBatchGqlResolvers = {
  Query: {
    getIntMappingsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntMappingsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
