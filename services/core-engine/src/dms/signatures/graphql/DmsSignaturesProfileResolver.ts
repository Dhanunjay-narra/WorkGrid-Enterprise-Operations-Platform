export const DmsSignaturesProfileGqlTypeDefs = `
  type DmsSignaturesProfile {
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
    getDmsSignaturesProfile(id: ID!): DmsSignaturesProfile
    listDmsSignaturesProfiles(tenantId: String!, limit: Int): [DmsSignaturesProfile!]!
  }

  extend type Mutation {
    createDmsSignaturesProfile(tenantId: String!, code: String!, name: String!): DmsSignaturesProfile!
    deleteDmsSignaturesProfile(id: ID!): Boolean!
  }
`;

export const DmsSignaturesProfileGqlResolvers = {
  Query: {
    getDmsSignaturesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
