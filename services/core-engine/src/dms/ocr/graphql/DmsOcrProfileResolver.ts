export const DmsOcrProfileGqlTypeDefs = `
  type DmsOcrProfile {
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
    getDmsOcrProfile(id: ID!): DmsOcrProfile
    listDmsOcrProfiles(tenantId: String!, limit: Int): [DmsOcrProfile!]!
  }

  extend type Mutation {
    createDmsOcrProfile(tenantId: String!, code: String!, name: String!): DmsOcrProfile!
    deleteDmsOcrProfile(id: ID!): Boolean!
  }
`;

export const DmsOcrProfileGqlResolvers = {
  Query: {
    getDmsOcrProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
