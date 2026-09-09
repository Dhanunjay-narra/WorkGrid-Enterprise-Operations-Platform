export const DmsSignaturesMappingGqlTypeDefs = `
  type DmsSignaturesMapping {
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
    getDmsSignaturesMapping(id: ID!): DmsSignaturesMapping
    listDmsSignaturesMappings(tenantId: String!, limit: Int): [DmsSignaturesMapping!]!
  }

  extend type Mutation {
    createDmsSignaturesMapping(tenantId: String!, code: String!, name: String!): DmsSignaturesMapping!
    deleteDmsSignaturesMapping(id: ID!): Boolean!
  }
`;

export const DmsSignaturesMappingGqlResolvers = {
  Query: {
    getDmsSignaturesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
