export const DmsFilesThresholdGqlTypeDefs = `
  type DmsFilesThreshold {
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
    getDmsFilesThreshold(id: ID!): DmsFilesThreshold
    listDmsFilesThresholds(tenantId: String!, limit: Int): [DmsFilesThreshold!]!
  }

  extend type Mutation {
    createDmsFilesThreshold(tenantId: String!, code: String!, name: String!): DmsFilesThreshold!
    deleteDmsFilesThreshold(id: ID!): Boolean!
  }
`;

export const DmsFilesThresholdGqlResolvers = {
  Query: {
    getDmsFilesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
