export const CommChannelsAssignmentGqlTypeDefs = `
  type CommChannelsAssignment {
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
    getCommChannelsAssignment(id: ID!): CommChannelsAssignment
    listCommChannelsAssignments(tenantId: String!, limit: Int): [CommChannelsAssignment!]!
  }

  extend type Mutation {
    createCommChannelsAssignment(tenantId: String!, code: String!, name: String!): CommChannelsAssignment!
    deleteCommChannelsAssignment(id: ID!): Boolean!
  }
`;

export const CommChannelsAssignmentGqlResolvers = {
  Query: {
    getCommChannelsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
