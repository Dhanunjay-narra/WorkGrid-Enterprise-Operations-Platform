export const IotThresholdsAssignmentGqlTypeDefs = `
  type IotThresholdsAssignment {
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
    getIotThresholdsAssignment(id: ID!): IotThresholdsAssignment
    listIotThresholdsAssignments(tenantId: String!, limit: Int): [IotThresholdsAssignment!]!
  }

  extend type Mutation {
    createIotThresholdsAssignment(tenantId: String!, code: String!, name: String!): IotThresholdsAssignment!
    deleteIotThresholdsAssignment(id: ID!): Boolean!
  }
`;

export const IotThresholdsAssignmentGqlResolvers = {
  Query: {
    getIotThresholdsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
