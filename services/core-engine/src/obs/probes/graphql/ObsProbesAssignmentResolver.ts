export const ObsProbesAssignmentGqlTypeDefs = `
  type ObsProbesAssignment {
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
    getObsProbesAssignment(id: ID!): ObsProbesAssignment
    listObsProbesAssignments(tenantId: String!, limit: Int): [ObsProbesAssignment!]!
  }

  extend type Mutation {
    createObsProbesAssignment(tenantId: String!, code: String!, name: String!): ObsProbesAssignment!
    deleteObsProbesAssignment(id: ID!): Boolean!
  }
`;

export const ObsProbesAssignmentGqlResolvers = {
  Query: {
    getObsProbesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
