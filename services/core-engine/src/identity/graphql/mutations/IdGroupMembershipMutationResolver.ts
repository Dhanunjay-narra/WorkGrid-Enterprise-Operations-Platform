export const IdGroupMembershipMutationTypeDefs = `
  input CreateIdGroupMembershipInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIdGroupMembership(input: CreateIdGroupMembershipInput!): IdGroupMembership!
    deleteIdGroupMembership(id: ID!): Boolean!
  }
`;

export const IdGroupMembershipMutationResolvers = {
  Mutation: {
    createIdGroupMembership: async (_: any, args: { input: any }) => {
      return {
        id: "ide_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIdGroupMembership: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
