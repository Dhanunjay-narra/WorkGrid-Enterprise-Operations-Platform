export const AbacMappingGqlTypeDefs = `
  type AbacMapping {
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
    getAbacMapping(id: ID!): AbacMapping
    listAbacMappings(tenantId: String!, limit: Int): [AbacMapping!]!
  }

  extend type Mutation {
    createAbacMapping(tenantId: String!, code: String!, name: String!): AbacMapping!
    deleteAbacMapping(id: ID!): Boolean!
  }
`;

export const AbacMappingGqlResolvers = {
  Query: {
    getAbacMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
