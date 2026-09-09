export const DmsOcrMappingGqlTypeDefs = `
  type DmsOcrMapping {
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
    getDmsOcrMapping(id: ID!): DmsOcrMapping
    listDmsOcrMappings(tenantId: String!, limit: Int): [DmsOcrMapping!]!
  }

  extend type Mutation {
    createDmsOcrMapping(tenantId: String!, code: String!, name: String!): DmsOcrMapping!
    deleteDmsOcrMapping(id: ID!): Boolean!
  }
`;

export const DmsOcrMappingGqlResolvers = {
  Query: {
    getDmsOcrMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
