export const RbacMappingGqlTypeDefs = `
  type RbacMapping {
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
    getRbacMapping(id: ID!): RbacMapping
    listRbacMappings(tenantId: String!, limit: Int): [RbacMapping!]!
  }

  extend type Mutation {
    createRbacMapping(tenantId: String!, code: String!, name: String!): RbacMapping!
    deleteRbacMapping(id: ID!): Boolean!
  }
`;

export const RbacMappingGqlResolvers = {
  Query: {
    getRbacMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
