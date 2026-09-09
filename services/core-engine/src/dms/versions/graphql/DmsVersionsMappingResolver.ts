export const DmsVersionsMappingGqlTypeDefs = `
  type DmsVersionsMapping {
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
    getDmsVersionsMapping(id: ID!): DmsVersionsMapping
    listDmsVersionsMappings(tenantId: String!, limit: Int): [DmsVersionsMapping!]!
  }

  extend type Mutation {
    createDmsVersionsMapping(tenantId: String!, code: String!, name: String!): DmsVersionsMapping!
    deleteDmsVersionsMapping(id: ID!): Boolean!
  }
`;

export const DmsVersionsMappingGqlResolvers = {
  Query: {
    getDmsVersionsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
