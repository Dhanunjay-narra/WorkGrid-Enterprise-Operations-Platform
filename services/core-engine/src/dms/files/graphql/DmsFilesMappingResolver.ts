export const DmsFilesMappingGqlTypeDefs = `
  type DmsFilesMapping {
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
    getDmsFilesMapping(id: ID!): DmsFilesMapping
    listDmsFilesMappings(tenantId: String!, limit: Int): [DmsFilesMapping!]!
  }

  extend type Mutation {
    createDmsFilesMapping(tenantId: String!, code: String!, name: String!): DmsFilesMapping!
    deleteDmsFilesMapping(id: ID!): Boolean!
  }
`;

export const DmsFilesMappingGqlResolvers = {
  Query: {
    getDmsFilesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
