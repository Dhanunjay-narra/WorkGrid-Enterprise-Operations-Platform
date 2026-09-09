export const DmsRetentionMappingGqlTypeDefs = `
  type DmsRetentionMapping {
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
    getDmsRetentionMapping(id: ID!): DmsRetentionMapping
    listDmsRetentionMappings(tenantId: String!, limit: Int): [DmsRetentionMapping!]!
  }

  extend type Mutation {
    createDmsRetentionMapping(tenantId: String!, code: String!, name: String!): DmsRetentionMapping!
    deleteDmsRetentionMapping(id: ID!): Boolean!
  }
`;

export const DmsRetentionMappingGqlResolvers = {
  Query: {
    getDmsRetentionMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
