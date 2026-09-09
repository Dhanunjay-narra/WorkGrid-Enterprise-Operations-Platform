export const IntMappingsThresholdGqlTypeDefs = `
  type IntMappingsThreshold {
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
    getIntMappingsThreshold(id: ID!): IntMappingsThreshold
    listIntMappingsThresholds(tenantId: String!, limit: Int): [IntMappingsThreshold!]!
  }

  extend type Mutation {
    createIntMappingsThreshold(tenantId: String!, code: String!, name: String!): IntMappingsThreshold!
    deleteIntMappingsThreshold(id: ID!): Boolean!
  }
`;

export const IntMappingsThresholdGqlResolvers = {
  Query: {
    getIntMappingsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntMappingsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
